#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <math.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_RESET -1  
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

// --- Background System Variables ---
// 1. Tunnel
#define NUM_CIRCLES 7
float circleRadii[NUM_CIRCLES];

// 2. Audio Visualizer EQ
#define NUM_BARS 16
int barHeights[NUM_BARS];
int targetHeights[NUM_BARS];

// 3. Shockwave
struct Shockwave {
  float radius;
  bool active;
} wave;

int lastLyricIdx = -1; // To detect when a NEW lyric appears

// --- Lyric Effects Enum ---
enum Effect {
  EFFECT_NONE = 0,
  EFFECT_POP,         // Briefly enlarges word
  EFFECT_SHAKE,       // Earth-quake shake effect
  EFFECT_INVERT,      // Inverts the whole screen for impact
  EFFECT_GLITCH,      // Adds random lines and jitters
  EFFECT_ZOOM_IN,     // Starts small and zooms to large
  EFFECT_TYPEWRITER,  // Typewriter reveal
  EFFECT_DECODE,      // Matrix decode
  EFFECT_WAVE,        // Sine wave bounce
  EFFECT_SLIDE,       // Slide in from left
  EFFECT_PULSE        // Continuous heartbeat pulse
};

// --- Lyric Data Structure ---
struct Lyric {
  unsigned long delayBeforeMs;        
  unsigned long durationMs;           
  const char* word;                   
  Effect effect;                      
  uint8_t size;                       
  unsigned long calculatedStartTime;  
};

// =========================================================================
// THE LYRICS TIMELINE
// =========================================================================
Lyric lyrics[] = {
  // --- INTRO: Website muncul dulu sebelum lirik mulai ---
  { 0, 2000, "berylnathaniel.my.id", EFFECT_SLIDE, 1, 0 },

  // "I miss that kind of misery"
  { 0, 250, "I", EFFECT_NONE, 2, 0 },
  { 0, 250, "miss", EFFECT_NONE, 2, 0 },
  { 0, 250, "that", EFFECT_NONE, 2, 0 },
  { 0, 260, "kind", EFFECT_POP, 2, 0 },
  { 0, 260, "of", EFFECT_NONE, 2, 0 },
  { 0, 300, "misery", EFFECT_GLITCH, 2, 0 },

  // "The kind where you are nice to me"
  { 200, 250, "The", EFFECT_NONE, 2, 0 },
  { 0, 250, "kind", EFFECT_NONE, 2, 0 },
  { 0, 250, "where", EFFECT_NONE, 2, 0 },
  { 0, 250, "you", EFFECT_NONE, 2, 0 },
  { 0, 250, "are", EFFECT_NONE, 2, 0 },
  { 0, 260, "nice", EFFECT_POP, 2, 0 },
  { 0, 260, "to", EFFECT_NONE, 2, 0 },
  { 0, 300, "me", EFFECT_WAVE, 2, 0 },

  // "But only in the evening"
  { 200, 250, "But", EFFECT_NONE, 2, 0 },
  { 0, 250, "only", EFFECT_NONE, 2, 0 },
  { 0, 250, "in", EFFECT_NONE, 2, 0 },
  { 0, 260, "the", EFFECT_NONE, 2, 0 },
  { 0, 300, "evening", EFFECT_PULSE, 2, 0 },

  // "So I ask, am I just dreaming?"
  { 200, 250, "So", EFFECT_NONE, 2, 0 },
  { 0, 250, "I", EFFECT_NONE, 2, 0 },
  { 0, 250, "ask", EFFECT_POP, 2, 0 },
  { 0, 250, "am", EFFECT_NONE, 2, 0 },
  { 0, 260, "I", EFFECT_NONE, 2, 0 },
  { 0, 260, "just", EFFECT_NONE, 2, 0 },
  { 0, 400, "dreaming?", EFFECT_ZOOM_IN, 2, 0 },

  // "I love you so much that it's dripping"
  { 300, 260, "I", EFFECT_NONE, 2, 0 },
  { 0, 260, "love", EFFECT_POP, 2, 0 },
  { 0, 260, "you", EFFECT_NONE, 2, 0 },
  { 0, 260, "so", EFFECT_NONE, 2, 0 },
  { 0, 260, "much", EFFECT_NONE, 2, 0 },
  { 0, 260, "that", EFFECT_NONE, 2, 0 },
  { 0, 260, "its", EFFECT_NONE, 2, 0 },
  { 0, 300, "dripping", EFFECT_SHAKE, 2, 0 },

  // "Dripping from my arms and such"
  { 200, 260, "Dripping", EFFECT_NONE, 2, 0 },
  { 0, 260, "from", EFFECT_NONE, 2, 0 },
  { 0, 260, "my", EFFECT_NONE, 2, 0 },
  { 0, 260, "arms", EFFECT_POP, 2, 0 },
  { 0, 260, "and", EFFECT_NONE, 2, 0 },
  { 0, 300, "such", EFFECT_NONE, 2, 0 },

  // "I'm sorry, I know I'm too much"
  { 200, 260, "Im", EFFECT_NONE, 2, 0 },
  { 0, 260, "sorry", EFFECT_WAVE, 2, 0 },
  { 0, 260, "I", EFFECT_NONE, 2, 0 },
  { 0, 260, "know", EFFECT_NONE, 2, 0 },
  { 0, 260, "Im", EFFECT_NONE, 2, 0 },
  { 0, 260, "too", EFFECT_NONE, 2, 0 },
  { 0, 300, "much", EFFECT_INVERT, 2, 0 },

  // "To love, to trust, I'm nothing, but-"
  { 200, 250, "To", EFFECT_NONE, 2, 0 },
  { 0, 250, "love", EFFECT_POP, 2, 0 },
  { 0, 250, "to", EFFECT_NONE, 2, 0 },
  { 0, 250, "trust", EFFECT_POP, 2, 0 },
  { 0, 250, "Im", EFFECT_NONE, 2, 0 },
  { 0, 250, "nothing", EFFECT_TYPEWRITER, 2, 0 },
  { 0, 300, "but", EFFECT_GLITCH, 2, 0 }
};
const int numLyrics = sizeof(lyrics) / sizeof(Lyric);

unsigned long startTime = 0;
bool isPlaying = true;
unsigned long TOTAL_LOOP_TIME = 0;  

void setup() {
  Serial.begin(115200);
  if (!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    for (;;);
  }

  display.clearDisplay();
  display.setTextColor(WHITE);
  display.setTextWrap(false);

  // Init Tunnel
  for(int i=0; i<NUM_CIRCLES; i++) {
    circleRadii[i] = i * (100.0 / NUM_CIRCLES);
  }

  // Init EQ
  for(int i=0; i<NUM_BARS; i++) {
    barHeights[i] = 0;
    targetHeights[i] = 0;
  }
  wave.active = false;

  unsigned long runningTime = 0;
  for (int i = 0; i < numLyrics; i++) {
    runningTime += lyrics[i].delayBeforeMs;
    lyrics[i].calculatedStartTime = runningTime;
    runningTime += lyrics[i].durationMs;
  }
  TOTAL_LOOP_TIME = runningTime + 3000;

  startTime = millis();
}

void loop() {
  if (!isPlaying) return;

  unsigned long now = millis() - startTime;
  if (now > TOTAL_LOOP_TIME) {
    startTime = millis();
    now = 0;
    lastLyricIdx = -1;
  }

  display.clearDisplay();

  int currentLyricIdx = -1;
  for (int i = 0; i < numLyrics; i++) {
    if (now >= lyrics[i].calculatedStartTime && now <= (lyrics[i].calculatedStartTime + lyrics[i].durationMs)) {
      currentLyricIdx = i;
      break;
    }
  }

  Effect currentEffect = EFFECT_NONE;
  bool lyricActive = false;
  float progress = 0.0;
  bool invertScreen = false;

  // Track state
  if (currentLyricIdx != -1) {
    lyricActive = true;
    const Lyric& l = lyrics[currentLyricIdx];
    currentEffect = l.effect;
    float elapsedLyric = now - l.calculatedStartTime;
    progress = elapsedLyric / (float)l.durationMs;

    // Check for NEW word to trigger shockwave
    if (currentLyricIdx != lastLyricIdx) {
      if (l.effect == EFFECT_POP || l.effect == EFFECT_INVERT || l.effect == EFFECT_ZOOM_IN || l.effect == EFFECT_SHAKE || l.effect == EFFECT_PULSE || l.effect == EFFECT_SLIDE) {
        wave.active = true;
        wave.radius = 5.0;
      }
      lastLyricIdx = currentLyricIdx;
    }
  } else {
    lastLyricIdx = -1; // reset when empty space
  }

  // 1. DRAW BACKGROUND TUNNEL & EQ FIRST
  drawTunnel(currentEffect, lyricActive);
  drawShockwave();
  drawEQ(currentEffect, lyricActive);

  // 2. DRAW LYRICS ON TOP
  if (currentLyricIdx != -1) {
    const Lyric& l = lyrics[currentLyricIdx];
    
    int textSize = l.size;
    int offsetX = 0;
    int offsetY = 0;
    
    String displayWord = l.word; // Copy word to allow manipulation
    bool customDraw = false;     // Flag if we bypass the standard draw routine

    // Apply Effects
    if (l.effect == EFFECT_POP) {
      if (progress < 0.15) textSize = l.size + 1;
    } else if (l.effect == EFFECT_SHAKE) {
      offsetX = random(-3, 4);
      offsetY = random(-3, 4);
    } else if (l.effect == EFFECT_INVERT) {
      invertScreen = true;
      if (random(10) > 5) { offsetX = random(-2, 3); offsetY = random(-2, 3); }
    } else if (l.effect == EFFECT_GLITCH) {
      if (random(10) > 6) {
        offsetX = random(-6, 6);
        display.fillRect(0, random(SCREEN_HEIGHT), SCREEN_WIDTH, random(2, 8), WHITE);
      }
      if (random(10) > 8) invertScreen = true;
    } else if (l.effect == EFFECT_ZOOM_IN) {
      if (progress < 0.05) textSize = l.size > 1 ? l.size - 1 : 1;
      else if (progress < 0.1) textSize = l.size;
      else textSize = l.size + 1;

      if (progress > 0.4) {
        offsetX = random(-4, 5);
        offsetY = random(-4, 5);
      }
      if (progress > 0.3 && random(10) > 7) invertScreen = true;
    } else if (l.effect == EFFECT_PULSE) {
      // Toggle size every 200ms
      if ((millis() % 400) > 200) textSize = l.size + 1;
    } else if (l.effect == EFFECT_TYPEWRITER) {
      int len = displayWord.length();
      int charsToShow = min(len, (int)(progress * len * 1.5)); // 1.5x speed so it finishes before word disappears
      displayWord = displayWord.substring(0, charsToShow);
    } else if (l.effect == EFFECT_DECODE) {
      if (progress < 0.5) {
        // Random gibberish
        for(int i = 0; i < displayWord.length(); i++) {
          displayWord[i] = (char)random(33, 126); 
        }
      }
    } else if (l.effect == EFFECT_SLIDE) {
      // Slide in from left
      if (progress < 0.3) {
        offsetX = -SCREEN_WIDTH + (int)((progress / 0.3) * SCREEN_WIDTH);
      }
    } else if (l.effect == EFFECT_WAVE) {
        customDraw = true;
    }

    display.setTextSize(textSize);
    int16_t x1, y1;
    uint16_t w, h;
    display.getTextBounds(displayWord.c_str(), 0, 0, &x1, &y1, &w, &h);
    
    if (w > SCREEN_WIDTH) {
        textSize = 2;
        display.setTextSize(textSize);
        display.getTextBounds(displayWord.c_str(), 0, 0, &x1, &y1, &w, &h);
    }

    int drawX = (SCREEN_WIDTH - w) / 2 + offsetX;
    int drawY = (SCREEN_HEIGHT - h) / 2 + offsetY - 5; 

    // Draw background text box
    display.fillRoundRect(drawX - 6, drawY - 5, w + 12, h + 10, 3, BLACK);
    display.drawRoundRect(drawX - 6, drawY - 5, w + 12, h + 10, 3, WHITE);

    if (l.effect == EFFECT_GLITCH && random(10) > 8) {
      display.setTextColor(BLACK, WHITE);
      display.fillRoundRect(drawX - 4, drawY - 3, w + 8, h + 6, 2, WHITE); 
    } else {
      display.setTextColor(WHITE);
    }

    if (!customDraw) {
      display.setCursor(drawX, drawY);
      display.print(displayWord);
    } else {
      // Custom draw for EFFECT_WAVE
      int charX = drawX;
      for (int i = 0; i < displayWord.length(); i++) {
        // Sine wave offset
        int waveYOffset = (int)(sin((millis() / 150.0) + i) * 4);
        display.setCursor(charX, drawY + waveYOffset);
        display.print(displayWord[i]);
        
        // Calculate width of character to advance cursor
        String singleChar = String(displayWord[i]);
        display.getTextBounds(singleChar.c_str(), 0, 0, &x1, &y1, &w, &h);
        charX += w + (textSize == 2 ? 2 : 1); // rough kerning
      }
    }
  }

  display.invertDisplay(invertScreen);
  display.display();
}

// ----------------------------------------------------
// Abstract Theme Functions
// ----------------------------------------------------

void drawTunnel(Effect currentEffect, bool lyricActive) {
  float speed = 1.0;
  if (currentEffect == EFFECT_ZOOM_IN || currentEffect == EFFECT_SLIDE) speed = 8.0; 
  else if (currentEffect == EFFECT_SHAKE || currentEffect == EFFECT_GLITCH || currentEffect == EFFECT_PULSE) speed = 4.0;
  else if (!lyricActive) speed = 0.5; 
  
  int centerX = SCREEN_WIDTH/2;
  int centerY = SCREEN_HEIGHT/2;
  
  if (currentEffect == EFFECT_SHAKE || currentEffect == EFFECT_ZOOM_IN) {
    centerX += random(-3, 4);
    centerY += random(-3, 4);
  }

  for (float angle = 0; angle < 2 * PI; angle += PI / 4) {
    int x1 = centerX + cos(angle) * 5; 
    int y1 = centerY + sin(angle) * 5;
    int x2 = centerX + cos(angle) * 120;
    int y2 = centerY + sin(angle) * 120;
    display.drawLine(x1, y1, x2, y2, WHITE);
  }

  for(int i=0; i<NUM_CIRCLES; i++) {
    circleRadii[i] += speed;
    if (circleRadii[i] > 120) circleRadii[i] = 1; 
    
    if (circleRadii[i] > 2) {
      display.drawCircle(centerX, centerY, circleRadii[i], WHITE);
    }
  }
}

void drawEQ(Effect currentEffect, bool lyricActive) {
  int barWidth = SCREEN_WIDTH / NUM_BARS;
  
  for (int i = 0; i < NUM_BARS; i++) {
    if (random(10) > 4) { 
      if (lyricActive) {
        if (currentEffect == EFFECT_ZOOM_IN || currentEffect == EFFECT_PULSE) {
          targetHeights[i] = random(15, 35); 
        } else if (currentEffect == EFFECT_SHAKE || currentEffect == EFFECT_SLIDE) {
          targetHeights[i] = random(10, 25);
        } else {
          targetHeights[i] = random(5, 15);
        }
      } else {
        targetHeights[i] = random(1, 6); 
      }
    }
    
    if (barHeights[i] < targetHeights[i]) barHeights[i] += 4;
    else if (barHeights[i] > targetHeights[i]) barHeights[i] -= 3;
    
    if (barHeights[i] < 1) barHeights[i] = 1;
    
    display.fillRect(i * barWidth + 1, SCREEN_HEIGHT - barHeights[i], barWidth - 1, barHeights[i], WHITE);
  }
}

void drawShockwave() {
  if (wave.active) {
    display.drawCircle(SCREEN_WIDTH/2, SCREEN_HEIGHT/2, wave.radius, WHITE);
    display.drawCircle(SCREEN_WIDTH/2, SCREEN_HEIGHT/2, wave.radius - 1, WHITE);
    
    wave.radius += 8.0; 
    if (wave.radius > 140) wave.active = false;
  }
}

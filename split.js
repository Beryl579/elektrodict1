const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

// 1. Extract CSS
const styleMatch = content.match(/<style>\s*\n([\s\S]*?)\n\s*<\/style>/);
if(styleMatch) {
  fs.writeFileSync('css/style.css', styleMatch[1].trim());
} else {
  console.log("Could not find <style> block");
}

// 2. Extract Main JS
// Find the last <script> tag which contains our huge app logic
const scripts = content.split('<script>');
const lastScriptChunk = scripts[scripts.length - 1]; // " ... \n</script>\n</body>..."
const scriptBodyMatch = lastScriptChunk.match(/([\s\S]*?)<\/script>/);

if(scriptBodyMatch) {
  let jsContent = scriptBodyMatch[1];
  
  const kamusMatch = jsContent.match(/(const KAMUS = \[[\s\S]*?\n\];)/);
  const quizMatch = jsContent.match(/(const QUIZ_CATS = \{[\s\S]*?\n\};)/);
  const katMatch = jsContent.match(/(const KAT = \[.*?\];)/);
  const timelineMatch = jsContent.match(/(const TIMELINE = \[[\s\S]*?\n\];)/);
  
  let dataJs = [];
  if(kamusMatch) {
    dataJs.push(kamusMatch[1]);
    jsContent = jsContent.replace(kamusMatch[1], '');
  } else console.log("Missing KAMUS");
  
  if(quizMatch) {
    dataJs.push(quizMatch[1]);
    jsContent = jsContent.replace(quizMatch[1], '');
  } else console.log("Missing QUIZ_CATS");
  
  if(katMatch) {
    dataJs.push(katMatch[1]);
    jsContent = jsContent.replace(katMatch[1], '');
  } else console.log("Missing KAT");
  
  if(timelineMatch) {
    dataJs.push(timelineMatch[1]);
    jsContent = jsContent.replace(timelineMatch[1], '');
  } else console.log("Missing TIMELINE");
  
  fs.writeFileSync('js/data.js', dataJs.join('\n\n'));
  fs.writeFileSync('js/app.js', jsContent.trim());
} else {
  console.log("Could not find main <script> block");
}

// 3. Rewrite index.html
let newHtml = content.replace(/<style>[\s\S]*?<\/style>/, '<link rel="stylesheet" href="css/style.css">');
// Replace the exact script body we just parsed
newHtml = newHtml.replace(/<script>\s*\n\/\/\s*?═══════════════════════════════════════════════════════════\s*\n\/\/ CONFIG[\s\S]*?<\/script>/, 
  '<script src="js/data.js"></script>\n<script src="js/app.js"></script>');

fs.writeFileSync('index.html', newHtml);
console.log('Split complete!');

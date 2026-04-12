const KAMUS = [
  // ── DASAR ──
  {en:"Voltage",id:"Tegangan",kat:"dasar",desc:"Beda potensial listrik antara dua titik.",detail:"Tegangan adalah energi per satuan muatan untuk memindahkan muatan antar dua titik. Simbol V, satuan Volt.",formula:"V = IR",tags:["volt","potensial","EMF"]},
  {en:"Current",id:"Arus Listrik",kat:"dasar",desc:"Aliran muatan listrik per satuan waktu.",detail:"Laju aliran muatan melalui konduktor. DC mengalir satu arah, AC berubah arah periodik.",formula:"I = \\frac{Q}{t}",tags:["ampere","DC","AC","muatan"]},
  {en:"Resistance",id:"Hambatan",kat:"dasar",desc:"Kemampuan bahan menghambat arus listrik.",detail:"Bergantung pada jenis material, panjang, luas penampang, dan suhu konduktor.",formula:"R = \\rho \\cdot \\frac{L}{A}",tags:["resistor","ohm","konduktivitas"]},
  {en:"Ohm's Law",id:"Hukum Ohm",kat:"dasar",desc:"Hubungan tegangan, arus, dan hambatan.",detail:"Arus berbanding lurus dengan tegangan dan berbanding terbalik dengan hambatan (suhu konstan).",formula:"V = IR \\;\\; I = \\frac{V}{R} \\;\\; R = \\frac{V}{I}",tags:["hukum dasar","rangkaian"]},
  {en:"Power",id:"Daya Listrik",kat:"daya",desc:"Energi listrik yang digunakan per satuan waktu.",detail:"Dalam AC: daya aktif (W), reaktif (VAR), dan semu (VA). Diukur dalam Watt.",formula:"P = VI = I^2R = \\frac{V^2}{R}",tags:["watt","energi","efisiensi"]},
  {en:"Frequency",id:"Frekuensi",kat:"dasar",desc:"Jumlah siklus gelombang per detik.",detail:"PLN Indonesia menggunakan frekuensi 50 Hz. Frekuensi berkaitan dengan periode melalui f = 1/T.",formula:"f = \\frac{1}{T} \\;\\; \\omega = 2\\pi f",tags:["Hz","periode","PLN 50Hz"]},
  {en:"Ground",id:"Ground / Arde",kat:"dasar",desc:"Titik referensi potensial nol.",detail:"Ground sinyal = referensi 0V rangkaian. Ground proteksi = terhubung ke tanah untuk keselamatan.",formula:"V_{GND} = 0\\text{ V}",tags:["arde","GND","referensi","keselamatan"]},
  {en:"Short Circuit",id:"Hubung Singkat",kat:"dasar",desc:"Koneksi langsung antar titik bertegangan berbeda.",detail:"Menyebabkan arus sangat besar karena hambatan mendekati nol. Dapat merusak komponen dan menyebabkan kebakaran.",formula:"R \\to 0 \\Rightarrow I \\to \\infty",tags:["korsleting","MCB","sekering","proteksi"]},
  {en:"Open Circuit",id:"Rangkaian Terbuka",kat:"dasar",desc:"Jalur arus yang terputus — arus tidak mengalir.",detail:"Terjadi ketika konduktor putus atau sakelar terbuka. Tegangan sumber tetap ada tapi arus = 0.",formula:"I = 0 \\;\\; V_{oc} = V_s",tags:["putus","sakelar","tegangan terbuka"]},
  {en:"Conductance",id:"Konduktansi",kat:"dasar",desc:"Kebalikan dari hambatan — kemampuan menghantarkan arus.",detail:"Semakin besar konduktansi, semakin mudah arus mengalir. Simbol G, satuan Siemens (S).",formula:"G = \\frac{1}{R} \\;\\; (\\text{Siemens})",tags:["siemens","konduktor","G"]},
  {en:"Electromotive Force",id:"Gaya Gerak Listrik",kat:"dasar",desc:"Tegangan yang dihasilkan oleh sumber energi.",detail:"GGL adalah energi per satuan muatan yang diberikan sumber kepada rangkaian. Berbeda dengan tegangan terminal karena ada resistansi internal.",formula:"V_{terminal} = \\varepsilon - I \\cdot r",tags:["GGL","EMF","baterai","sumber"]},
  {en:"Electric Field",id:"Medan Listrik",kat:"dasar",desc:"Wilayah di sekitar muatan listrik yang memiliki gaya.",detail:"Medan listrik menunjukkan arah dan besar gaya pada muatan uji positif. Makin dekat ke sumber, makin kuat medan.",formula:"E = \\frac{F}{q} = \\frac{V}{d} \\;\\; (V/m)",tags:["medan","gaya","elektrostatik"]},
  // ── KOMPONEN ──
  {en:"Resistor",id:"Resistor",kat:"komponen",desc:"Komponen penghambat arus listrik.",detail:"Membatasi arus, membagi tegangan, mengatur sinyal. Nilai dibaca dari kode warna atau angka.",formula:"R_{seri}=\\sum R_i \\;\\; \\frac{1}{R_{par}}=\\sum\\frac{1}{R_i}",tags:["kode warna","pembagi tegangan"]},
  {en:"Capacitor",id:"Kapasitor",kat:"komponen",desc:"Komponen penyimpan muatan listrik.",detail:"Dua pelat konduktor dipisahkan dielektrik. Digunakan untuk filter, decoupling, dan menyimpan energi.",formula:"Q = CV \\;\\; C = \\varepsilon\\frac{A}{d} \\;\\; (\\text{Farad})",tags:["farad","dielektrik","filter","coupling"]},
  {en:"Inductor",id:"Induktor",kat:"komponen",desc:"Komponen penyimpan energi dalam medan magnet.",detail:"Kumparan yang menentang perubahan arus. Digunakan dalam filter, transformator, dan osilator.",formula:"V_L = L\\frac{dI}{dt} \\;\\; (\\text{Henry})",tags:["henry","kumparan","induktansi","koil"]},
  {en:"Transformer",id:"Transformator",kat:"komponen",desc:"Perangkat pengubah level tegangan AC.",detail:"Bekerja berdasarkan induksi elektromagnetik — kopling dua kumparan melalui inti besi.",formula:"\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}",tags:["step-up","step-down","lilitan","PLN"]},
  {en:"Diode",id:"Dioda",kat:"komponen",desc:"Komponen semikonduktor satu arah aliran arus.",detail:"Memungkinkan arus dari anoda ke katoda (forward bias). Digunakan dalam penyearah dan proteksi.",formula:"V_f \\approx 0.7\\text{V (Si)},\\; 0.3\\text{V (Ge)}",tags:["penyearah","PN junction","LED","zener"]},
  {en:"Transistor BJT",id:"Transistor BJT",kat:"komponen",desc:"Komponen penguat dan sakelar berbasis arus.",detail:"Tiga terminal: Base (B), Collector (C), Emitter (E). Arus kecil di B mengontrol arus besar di C.",formula:"I_C = \\beta I_B \\;\\; (\\beta = hFE)",tags:["NPN","PNP","amplifier","switch"]},
  {en:"MOSFET",id:"MOSFET",kat:"komponen",desc:"Transistor efek medan yang dikontrol tegangan.",detail:"Tiga terminal: Gate (G), Drain (D), Source (S). Dikontrol oleh tegangan VGS, bukan arus. Efisiensi tinggi untuk switching.",formula:"I_D = k(V_{GS}-V_{th})^2 \\;\\; (\\text{saturasi})",tags:["FET","switching","power electronics","gate"]},
  {en:"Relay",id:"Relai",kat:"komponen",desc:"Sakelar elektromagnetik dikendalikan sinyal kecil.",detail:"Elektromagnet membuka/menutup kontak. Sinyal 5V dapat mengendalikan beban 220V AC secara terisolasi.",formula:"\\text{Coil energized} \\Rightarrow \\text{kontak NO/NC switch}",tags:["NO","NC","coil","isolasi","kontaktor"]},
  {en:"Zener Diode",id:"Dioda Zener",kat:"komponen",desc:"Dioda regulasi tegangan di reverse bias.",detail:"Mempertahankan tegangan output konstan saat reverse bias mencapai tegangan Zener (Vz). Digunakan sebagai referensi tegangan.",formula:"V_{out} = V_Z \\;\\; (\\text{konstan})",tags:["regulasi","referensi","breakdown","stabilizer"]},
  {en:"LED",id:"LED",kat:"komponen",desc:"Dioda pemancar cahaya.",detail:"Memancarkan cahaya saat arus forward mengalir. Butuh resistor seri untuk membatasi arus agar tidak rusak.",formula:"R = \\frac{V_{cc} - V_f}{I_f}",tags:["cahaya","indikator","display","photonik"]},
  {en:"Thyristor / SCR",id:"Tiristor / SCR",kat:"komponen",desc:"Sakelar semikonduktor 4-lapis untuk daya tinggi.",detail:"Empat terminal (Anode, Kathode, Gate). Sekali dipicu oleh gate, tetap ON sampai arus turun di bawah holding current.",formula:"I_A > I_h \\Rightarrow \\text{tetap ON}",tags:["SCR","PNPN","power control","firing angle"]},
  {en:"Optocoupler",id:"Optocoupler",kat:"komponen",desc:"Komponen isolasi sinyal menggunakan cahaya.",detail:"Terdiri dari LED dan fototransistor dalam satu kemasan. Memisahkan galvanis antara rangkaian input dan output.",formula:"CTR = \\frac{I_C}{I_F} \\times 100\\%",tags:["isolasi","optoisolator","galvanik","fototransistor"]},
  {en:"Crystal Oscillator",id:"Osilator Kristal",kat:"komponen",desc:"Komponen pembangkit frekuensi sangat presisi.",detail:"Memanfaatkan efek piezoelektrik kristal kuarsa untuk menghasilkan frekuensi yang stabil. Digunakan di mikrokontroler dan jam.",formula:"f_{osc} = \\frac{1}{2\\pi\\sqrt{LC}}",tags:["kuarsa","clock","frekuensi","presisi"]},
  {en:"Fuse",id:"Sekering",kat:"komponen",desc:"Komponen proteksi arus lebih.",detail:"Kawat tipis yang meleleh dan memutus rangkaian jika arus melebihi nilai nominal. Sekali putus harus diganti.",formula:"I_{trip} > I_{rated} \\Rightarrow \\text{putus}",tags:["proteksi","arus lebih","MCB","circuit breaker"]},
  // ── RANGKAIAN ──
  {en:"Kirchhoff's Current Law",id:"KCL — Hukum Kirchhoff Arus",kat:"rangkaian",desc:"Jumlah arus masuk = jumlah arus keluar di node.",detail:"Berdasarkan hukum kekekalan muatan listrik. Total arus yang masuk ke suatu simpul sama dengan total arus yang keluar.",formula:"\\sum I_{masuk} = \\sum I_{keluar}",tags:["KCL","node","simpul","analisis rangkaian"]},
  {en:"Kirchhoff's Voltage Law",id:"KVL — Hukum Kirchhoff Tegangan",kat:"rangkaian",desc:"Jumlah tegangan dalam satu loop tertutup = 0.",detail:"Berdasarkan hukum kekekalan energi. Tegangan naik (sumber) sama dengan tegangan jatuh (beban) dalam satu mesh.",formula:"\\sum V = 0 \\;\\; (\\text{satu loop})",tags:["KVL","loop","mesh","analisis rangkaian"]},
  {en:"Impedance",id:"Impedansi",kat:"rangkaian",desc:"Hambatan total dalam rangkaian AC (resistif + reaktif).",detail:"Generalisasi resistansi untuk AC. Mencakup resistansi R, reaktansi induktif XL, dan reaktansi kapasitif XC.",formula:"Z = R + j(X_L-X_C) \\;\\; |Z|=\\sqrt{R^2+(X_L-X_C)^2}",tags:["reaktansi","AC","fasor","kompleks"]},
  {en:"Reactance",id:"Reaktansi",kat:"rangkaian",desc:"Oposisi terhadap arus AC dari induktor atau kapasitor.",detail:"Reaktansi induktif XL bertambah dengan frekuensi, reaktansi kapasitif XC berkurang dengan frekuensi.",formula:"X_L = \\omega L \\;\\; X_C = \\frac{1}{\\omega C}",tags:["induktif","kapasitif","frekuensi","AC"]},
  {en:"Resonance",id:"Resonansi",kat:"rangkaian",desc:"Kondisi saat XL = XC dalam rangkaian RLC.",detail:"Pada resonansi, impedansi minimal (seri) atau maksimal (paralel). Arus maksimum mengalir. Frekuensi resonansi tergantung L dan C.",formula:"f_r = \\frac{1}{2\\pi\\sqrt{LC}}",tags:["RLC","frekuensi resonansi","bandpass","filter"]},
  {en:"Voltage Divider",id:"Pembagi Tegangan",kat:"rangkaian",desc:"Rangkaian resistor untuk mendapatkan tegangan yang lebih kecil.",detail:"Dua resistor seri membagi tegangan input proporsional. Digunakan untuk bias transistor dan referensi tegangan.",formula:"V_{out} = V_{in} \\cdot \\frac{R_2}{R_1+R_2}",tags:["pembagi","bias","resistor","referensi"]},
  {en:"Current Divider",id:"Pembagi Arus",kat:"rangkaian",desc:"Rangkaian resistor paralel untuk membagi arus.",detail:"Arus terbagi proporsional terbalik dengan hambatan. Resistansi lebih kecil mendapat arus lebih besar.",formula:"I_1 = I_{total} \\cdot \\frac{R_2}{R_1+R_2}",tags:["paralel","pembagi arus","rangkaian"]},
  {en:"Superposition Theorem",id:"Teorema Superposisi",kat:"rangkaian",desc:"Respons total = jumlah respons dari tiap sumber secara independen.",detail:"Berlaku untuk rangkaian linear. Matikan sumber lain (tegangan → short, arus → open) saat menganalisis satu sumber.",formula:"V_{total} = V_1 + V_2 + \\cdots + V_n",tags:["analisis","linear","superposisi","teorema"]},
  {en:"Thevenin's Theorem",id:"Teorema Thevenin",kat:"rangkaian",desc:"Rangkaian dua terminal disederhanakan menjadi Vth dan Rth.",detail:"Memudahkan analisis beban yang berubah. Vth = tegangan open-circuit, Rth = hambatan ekuivalen dari terminal.",formula:"V_{th} = V_{oc} \\;\\; R_{th} = R_{ekivalen}",tags:["ekivalen","penyederhanaan","teorema","dua terminal"]},
  {en:"Norton's Theorem",id:"Teorema Norton",kat:"rangkaian",desc:"Rangkaian dua terminal sebagai sumber arus Norton dengan Rn paralel.",detail:"Dual dari Teorema Thevenin. In = arus short-circuit, Rn = Rth. Bisa saling dikonversi.",formula:"I_N = I_{sc} \\;\\; R_N = R_{th}",tags:["sumber arus","ekivalen","norton","teorema"]},
  {en:"Maximum Power Transfer",id:"Transfer Daya Maksimum",kat:"rangkaian",desc:"Daya ke beban maksimum saat Rbeban = Rth.",detail:"Teorema penting untuk menentukan nilai beban optimal agar daya yang diterima beban paling besar.",formula:"P_{max} \\text{ saat } R_L = R_{th}",tags:["daya maksimum","matching","impedansi","efisiensi"]},
  {en:"RC Time Constant",id:"Konstanta Waktu RC",kat:"rangkaian",desc:"Waktu yang dibutuhkan kapasitor mengisi/dikosongkan 63.2%.",detail:"Setelah 5τ, kapasitor dianggap penuh terisi/kosong. Digunakan dalam filter, timer, dan integrator.",formula:"\\tau = RC \\;\\; V(t) = V_s(1-e^{-t/\\tau})",tags:["tau","charging","filter","timer","RC"]},
  {en:"RL Time Constant",id:"Konstanta Waktu RL",kat:"rangkaian",desc:"Waktu respons induktor terhadap perubahan arus.",detail:"Induktor menentang perubahan arus mendadak. Setelah 5τ, arus dianggap stabil.",formula:"\\tau = \\frac{L}{R} \\;\\; I(t) = \\frac{V}{R}(1-e^{-t/\\tau})",tags:["tau","induktor","RL","transien"]},
  // ── DAYA ──
  {en:"Active Power",id:"Daya Aktif",kat:"daya",desc:"Daya nyata yang digunakan oleh beban resistif.",detail:"Daya yang benar-benar dikonsumsi dan diubah menjadi panas, cahaya, atau kerja mekanik.",formula:"P = VI\\cos\\varphi \\;\\; (\\text{Watt})",tags:["watt","daya nyata","cos phi","efisiensi"]},
  {en:"Reactive Power",id:"Daya Reaktif",kat:"daya",desc:"Daya yang disimpan dan dikembalikan oleh elemen reaktif.",detail:"Tidak menghasilkan kerja nyata, tapi membebani sistem distribusi. Disebabkan oleh induktor dan kapasitor.",formula:"Q = VI\\sin\\varphi \\;\\; (\\text{VAR})",tags:["VAR","induktif","kapasitif","kompensasi"]},
  {en:"Apparent Power",id:"Daya Semu",kat:"daya",desc:"Daya total yang di-supply oleh sumber dalam sistem AC.",detail:"Kombinasi daya aktif dan reaktif. Merupakan kapasitas yang harus disediakan generator dan kabel distribusi.",formula:"S = VI = \\sqrt{P^2+Q^2} \\;\\; (\\text{VA})",tags:["VA","generator","kapasitas","rating"]},
  {en:"Power Factor",id:"Faktor Daya",kat:"daya",desc:"Rasio daya aktif terhadap daya semu.",detail:"Nilai 1 = ideal. Beban induktif → lagging, beban kapasitif → leading. Perbaikan PF dengan bank kapasitor.",formula:"PF = \\cos\\varphi = \\frac{P}{S}",tags:["cos phi","efisiensi","lagging","leading","koreksi"]},
  {en:"Energy",id:"Energi Listrik",kat:"daya",desc:"Total daya yang dikonsumsi selama selang waktu tertentu.",detail:"Diukur dalam kWh oleh PLN untuk tagihan listrik. 1 kWh = 1000 Watt × 1 jam = 3,6 MJ.",formula:"W = P \\cdot t \\;\\; (\\text{kWh atau Joule})",tags:["kWh","tagihan","konsumsi","joule"]},
  {en:"Efficiency",id:"Efisiensi",kat:"daya",desc:"Perbandingan daya output dengan daya input.",detail:"Selisih daya input dan output adalah rugi-rugi (panas, gesekan). Transformator ideal η mendekati 99%.",formula:"\\eta = \\frac{P_{out}}{P_{in}} \\times 100\\%",tags:["rugi-rugi","transformator","motor","efisiensi"]},
  {en:"Three-Phase Power",id:"Daya Tiga Fasa",kat:"daya",desc:"Sistem distribusi AC tiga fasa bergeser 120°.",detail:"Lebih efisien dari single-phase untuk transmisi daya. Digunakan di industri dan PLN distribusi.",formula:"P_{3\\phi} = \\sqrt{3}\\cdot V_L \\cdot I_L \\cdot \\cos\\varphi",tags:["tiga fasa","industri","PLN","transmisi","star","delta"]},
  {en:"RMS Voltage",id:"Tegangan RMS",kat:"daya",desc:"Nilai efektif tegangan AC yang setara dengan daya DC.",detail:"220V AC PLN adalah nilai RMS. Nilai puncak lebih besar: Vpeak = 220√2 ≈ 311V.",formula:"V_{rms} = \\frac{V_m}{\\sqrt{2}} \\approx 0.707 V_m",tags:["efektif","peak","AC","220V","RMS"]},
  // ── ELEKTRONIKA ──
  {en:"Op-Amp",id:"Op-Amp (Penguat Operasional)",kat:"elektronika",desc:"IC penguat diferensial tegangan tinggi.",detail:"Dua input (inverting −, non-inverting +) dan satu output. Penguatan open-loop sangat tinggi (~100.000). Dikontrol dengan feedback.",formula:"V_{out} = A_{OL}(V_+ - V_-)",tags:["IC","penguat","feedback","741","LM358"]},
  {en:"Inverting Amplifier",id:"Penguat Pembalik",kat:"elektronika",desc:"Konfigurasi op-amp dengan output berlawanan fasa input.",detail:"Input terhubung ke terminal inverting (−) melalui Ri. Feedback dari output ke − melalui Rf.",formula:"A_v = -\\frac{R_f}{R_i}",tags:["op-amp","feedback","penguatan","inverting"]},
  {en:"Non-Inverting Amplifier",id:"Penguat Non-Pembalik",kat:"elektronika",desc:"Konfigurasi op-amp output sefasa dengan input.",detail:"Input ke terminal non-inverting (+). Penguatan selalu ≥ 1. Impedansi input sangat tinggi.",formula:"A_v = 1 + \\frac{R_f}{R_1}",tags:["op-amp","non-inverting","penguatan","buffer"]},
  {en:"Comparator",id:"Komparator",kat:"elektronika",desc:"Rangkaian pembanding dua tegangan.",detail:"Output HIGH jika V+ > V−, LOW jika sebaliknya. Digunakan dalam ADC, level detector, dan osilator Schmitt.",formula:"V_{out} = \\begin{cases}+V_{sat} & V_+>V_- \\\\ -V_{sat} & V_+<V_-\\end{cases}",tags:["op-amp","level detector","ADC","schmitt trigger"]},
  {en:"Half-Wave Rectifier",id:"Penyearah Setengah Gelombang",kat:"elektronika",desc:"Mengubah AC ke DC menggunakan satu dioda.",detail:"Hanya melewatkan setengah siklus positif AC. Efisiensi rendah (40.6%), ripple besar. Digunakan untuk daya kecil.",formula:"V_{dc} = \\frac{V_m}{\\pi} \\approx 0.318 V_m",tags:["rectifier","dioda","AC ke DC","ripple"]},
  {en:"Full-Wave Rectifier",id:"Penyearah Gelombang Penuh",kat:"elektronika",desc:"Mengubah AC ke DC memanfaatkan kedua siklus.",detail:"Menggunakan 4 dioda (bridge) atau transformator CT + 2 dioda. Ripple lebih kecil, efisiensi lebih tinggi.",formula:"V_{dc} = \\frac{2V_m}{\\pi} \\approx 0.636 V_m",tags:["bridge","dioda","full-wave","power supply"]},
  {en:"Voltage Regulator",id:"Regulator Tegangan",kat:"elektronika",desc:"IC menjaga tegangan output tetap konstan.",detail:"IC 78xx untuk tegangan positif (7805 = 5V, 7812 = 12V), 79xx untuk negatif. Linear regulator membuang kelebihan sebagai panas.",formula:"V_{out} = V_{xx} \\;\\; \\text{(tetap konstan)}",tags:["78xx","7805","LDO","stabilizer","IC"]},
  {en:"PWM",id:"Modulasi Lebar Pulsa (PWM)",kat:"elektronika",desc:"Teknik mengontrol daya dengan mengubah duty cycle.",detail:"Frekuensi tetap, lebar pulsa bervariasi 0–100%. Digunakan untuk motor DC, LED dimmer, dan power supply switching.",formula:"\\text{Duty Cycle} = \\frac{t_{on}}{T} \\times 100\\%",tags:["duty cycle","motor","dimmer","switching","Arduino"]},
  {en:"555 Timer",id:"Timer 555",kat:"elektronika",desc:"IC timer serbaguna untuk pembangkit pulsa.",detail:"Mode astable: osilator frekuensi tetap. Mode monostable: pulsa sekali dengan lebar tertentu. Mudah digunakan.",formula:"f = \\frac{1.44}{(R_A+2R_B)C}",tags:["timer","osilator","monostable","astable","IC"]},
  // ── DIGITAL ──
  {en:"Logic Gates",id:"Gerbang Logika",kat:"digital",desc:"Komponen digital dasar yang mengolah sinyal biner.",detail:"Gerbang dasar: AND, OR, NOT. Gerbang turunan: NAND, NOR, XOR, XNOR. Semua fungsi digital dapat dibangun dari NAND/NOR.",formula:"AND: Y=AB \\;\\; OR: Y=A+B \\;\\; NOT: Y=\\bar{A}",tags:["AND","OR","NOT","NAND","NOR","XOR","digital"]},
  {en:"Boolean Algebra",id:"Aljabar Boolean",kat:"digital",desc:"Matematika untuk analisis dan penyederhanaan rangkaian logika.",detail:"Hukum De Morgan: komplemen OR = AND dari komplemen. Digunakan untuk menyederhanakan ekspresi logika.",formula:"\\overline{A+B}=\\bar{A}\\cdot\\bar{B} \\;\\; \\overline{A\\cdot B}=\\bar{A}+\\bar{B}",tags:["De Morgan","penyederhanaan","logika","digital"]},
  {en:"Flip-Flop",id:"Flip-Flop",kat:"digital",desc:"Elemen memori 1-bit yang menyimpan keadaan biner.",detail:"Jenis: SR, D, JK, T. Flip-flop D paling umum di register dan memori. Keadaan berubah saat clock edge.",formula:"Q_{n+1} = D \\;\\; (\\text{D flip-flop})",tags:["SR","D","JK","T","memori","register","clock"]},
  {en:"ADC",id:"ADC (Analog to Digital Converter)",kat:"digital",desc:"Mengubah sinyal analog menjadi nilai digital.",detail:"Resolusi n-bit menghasilkan 2^n level. 10-bit ADC (Arduino) punya 1024 level. Frekuensi sampling ≥ 2x frekuensi sinyal (Nyquist).",formula:"V_{ref} / 2^n = \\text{resolusi per langkah}",tags:["konversi","resolusi","sampling","Nyquist","Arduino"]},
  {en:"DAC",id:"DAC (Digital to Analog Converter)",kat:"digital",desc:"Mengubah nilai digital menjadi sinyal analog.",detail:"Kebalikan ADC. Digunakan untuk output audio, kontrol motor, dan waveform generator.",formula:"V_{out} = V_{ref} \\cdot \\frac{D}{2^n}",tags:["konversi","audio","waveform","D/A"]},
  {en:"Multiplexer",id:"Multiplekser (MUX)",kat:"digital",desc:"Memilih satu dari beberapa input ke satu output.",detail:"MUX 4:1 memilih salah satu dari 4 input menggunakan 2 bit select. Digunakan untuk menghemat jalur data.",formula:"2^s = N_{inputs} \\;\\; (s=\\text{bit select})",tags:["MUX","selector","data","digital","komunikasi"]},
  {en:"Microcontroller",id:"Mikrokontroler",kat:"digital",desc:"Komputer mini dalam satu chip dengan CPU, memori, dan I/O.",detail:"Contoh: Arduino (AVR), STM32, ESP32. Dilengkapi ADC, PWM, UART, SPI, I2C dalam satu IC.",formula:"f_{clk} \\text{ menentukan kecepatan eksekusi}",tags:["Arduino","ESP32","STM32","embedded","IoT"]},
  // ── PENGUKURAN ──
  {en:"Multimeter",id:"Multimeter",kat:"pengukuran",desc:"Alat ukur tegangan, arus, dan hambatan.",detail:"Mengukur tegangan DC/AC, arus DC, resistansi, kontinuitas, kadang kapasitansi dan frekuensi. Selalu cek range sebelum mengukur.",formula:"\\text{Ukur: } V,\\; I,\\; R,\\; \\text{Continuity}",tags:["AVO","voltmeter","amperemeter","ohmmeter"]},
  {en:"Oscilloscope",id:"Osiloskop",kat:"pengukuran",desc:"Alat visualisasi bentuk gelombang listrik.",detail:"Menampilkan grafik tegangan vs waktu. Digunakan untuk analisis amplitudo, frekuensi, fase, dan noise sinyal.",formula:"V = \\text{Div} \\times \\frac{V}{\\text{Div}} \\;\\; T = \\text{Div} \\times \\frac{t}{\\text{Div}}",tags:["waveform","sinyal","probe","bandwidth"]},
  {en:"Clamp Meter",id:"Tang Ampere",kat:"pengukuran",desc:"Mengukur arus tanpa memutus rangkaian.",detail:"Menggunakan prinsip induksi elektromagnetik. Ujung tang dikaitkan pada kabel yang dialiri arus.",formula:"I = \\frac{\\Phi}{N \\cdot \\mu_0 A}",tags:["tang ampere","arus","non-contact","induksi"]},
  {en:"LCR Meter",id:"LCR Meter",kat:"pengukuran",desc:"Mengukur induktansi, kapasitansi, dan resistansi.",detail:"Menerapkan sinyal AC dengan frekuensi tertentu dan menganalisis respons impedansi komponen.",formula:"Z = R + jX \\Rightarrow L,C,R",tags:["induktansi","kapasitansi","impedansi","komponen"]},
  {en:"Power Analyzer",id:"Analisator Daya",kat:"pengukuran",desc:"Mengukur daya aktif, reaktif, semu, dan faktor daya.",detail:"Digunakan untuk audit energi, analisis kualitas daya, dan pengujian peralatan listrik.",formula:"\\text{Baca: } P,\\; Q,\\; S,\\; PF,\\; THD",tags:["audit energi","kualitas daya","THD","harmonik"]},
  {en:"Function Generator",id:"Generator Fungsi",kat:"pengukuran",desc:"Alat pembangkit sinyal uji (sinus, kotak, segitiga).",detail:"Digunakan bersama osiloskop untuk menguji respons frekuensi rangkaian dan karakteristik komponen.",formula:"f_{out} \\text{ bisa diatur dari Hz hingga MHz}",tags:["sinyal uji","sinus","square","sawtooth","frekuensi"]},
  // ── SINYAL ──
  {en:"Fourier Transform",id:"Transformasi Fourier",kat:"sinyal",desc:"Menguraikan sinyal menjadi komponen frekuensi.",detail:"Setiap sinyal periodik dapat direpresentasikan sebagai jumlahan sinusoid. Dasar dari analisis spektrum.",formula:"F(\\omega) = \\int_{-\\infty}^{\\infty} f(t)e^{-j\\omega t}dt",tags:["spektrum","frekuensi","FFT","analisis sinyal"]},
  {en:"Sampling Theorem",id:"Teorema Sampling (Nyquist)",kat:"sinyal",desc:"Syarat minimum frekuensi sampling untuk rekonstruksi sinyal.",detail:"Frekuensi sampling harus minimal 2x frekuensi tertinggi sinyal agar tidak terjadi aliasing.",formula:"f_s \\geq 2f_{max} \\;\\; (\\text{Nyquist})",tags:["Nyquist","aliasing","ADC","sampling","digital audio"]},
  {en:"Modulation",id:"Modulasi",kat:"sinyal",desc:"Proses menumpangkan informasi pada gelombang pembawa.",detail:"AM: memodulasi amplitudo. FM: memodulasi frekuensi. PM: memodulasi fase. Digunakan dalam radio, komunikasi.",formula:"AM: s(t)=[1+m\\cdot x(t)]\\cos(2\\pi f_c t)",tags:["AM","FM","PM","radio","komunikasi","carrier"]},
  {en:"Filter",id:"Filter Sinyal",kat:"sinyal",desc:"Rangkaian yang meloloskan atau memblokir frekuensi tertentu.",detail:"LPF: loloskan bawah. HPF: loloskan atas. BPF: loloskan band tertentu. BRF: notch filter.",formula:"f_c = \\frac{1}{2\\pi RC} \\;\\; (\\text{filter RC})",tags:["LPF","HPF","BPF","cutoff","frekuensi"]},
  {en:"Decibel",id:"Desibel (dB)",kat:"sinyal",desc:"Satuan logaritmik untuk perbandingan daya atau tegangan.",detail:"Digunakan dalam audio, RF, dan penguatan. 3dB = penguatan/redaman setengah daya. 20dB = 10x tegangan.",formula:"\\text{dB} = 20\\log_{10}\\frac{V_2}{V_1} = 10\\log_{10}\\frac{P_2}{P_1}",tags:["logaritmik","penguatan","audio","RF","atenuasi"]},
  {en:"Signal-to-Noise Ratio",id:"Rasio Sinyal-Noise (SNR)",kat:"sinyal",desc:"Perbandingan kekuatan sinyal terhadap noise.",detail:"SNR tinggi = sinyal lebih bersih. Dinyatakan dalam dB. Penting untuk komunikasi dan audio.",formula:"SNR = 10\\log_{10}\\frac{P_{signal}}{P_{noise}}",tags:["SNR","noise","kualitas","komunikasi","audio"]},
  {en:"Bode Plot",id:"Plot Bode",kat:"sinyal",desc:"Grafik respons frekuensi sistem (magnitude dan fase).",detail:"Digunakan untuk analisis stabilitas sistem dan desain filter. Menampilkan Gain (dB) dan Fase (°) vs frekuensi (log).",formula:"|H(j\\omega)|_{dB} = 20\\log_{10}|H(j\\omega)|",tags:["respons frekuensi","stabilitas","sistem kontrol","gain"]},
  {en:"Transmission Line",id:"Saluran Transmisi",kat:"sinyal",desc:"Konduktor untuk mentransmisi sinyal frekuensi tinggi.",detail:"Pada frekuensi tinggi, panjang kabel menjadi signifikan. Impedansi karakteristik Z0 harus dicocokkan untuk mencegah refleksi.",formula:"Z_0 = \\sqrt{\\frac{L'}{C'}} \\;\\; (\\Omega)",tags:["impedansi karakteristik","RF","matching","koaksial","PCB"]},
  {en:"Phase",id:"Fasa",kat:"sinyal",desc:"Posisi relatif suatu gelombang dalam satu siklus.",detail:"Dinyatakan dalam derajat (°) atau radian (rad). Dua sinyal sefasa (0°) atau berlawanan fasa (180°).",formula:"v(t) = V_m\\sin(\\omega t + \\varphi)",tags:["sudut fasa","sinus","AC","lagging","leading"]},
  // ── LEBIH BANYAK ISTILAH ──
  {en:"Wheatstone Bridge",id:"Jembatan Wheatstone",kat:"rangkaian",desc:"Rangkaian untuk mengukur hambatan tak diketahui.",detail:"Empat resistor membentuk jembatan. Saat seimbang, galvanometer menunjukkan nol dan hambatan tak diketahui bisa dihitung.",formula:"\\frac{R_1}{R_2} = \\frac{R_3}{R_x} \\Rightarrow R_x = \\frac{R_2 R_3}{R_1}",tags:["pengukuran","hambatan","galvanometer","sensor"]},
  {en:"Lenz's Law",id:"Hukum Lenz",kat:"dasar",desc:"Arus induksi selalu menentang perubahan fluks yang menyebabkannya.",detail:"Akibat hukum kekekalan energi. Menjadi dasar kerja motor, generator, dan transformator.",formula:"\\varepsilon = -N\\frac{d\\Phi}{dt}",tags:["induksi","EMF","fluks","Faraday","motor generator"]},
  {en:"Faraday's Law",id:"Hukum Faraday",kat:"dasar",desc:"EMF terinduksi sebanding dengan laju perubahan fluks magnetik.",detail:"Dasar elektromagnetisme. Semakin cepat fluks berubah atau semakin banyak lilitan, EMF makin besar.",formula:"\\varepsilon = -N\\frac{d\\Phi_B}{dt}",tags:["elektromagnetisme","induksi","EMF","fluks","transformator"]},
  {en:"Magnetic Flux",id:"Fluks Magnetik",kat:"dasar",desc:"Total garis gaya magnet yang menembus suatu permukaan.",detail:"Simbol Φ, satuan Weber (Wb). Bergantung pada kekuatan medan B, luas permukaan A, dan sudut.",formula:"\\Phi = B \\cdot A \\cdot \\cos\\theta \\;\\; (\\text{Weber})",tags:["weber","medan magnet","fluks","induksi"]},
  {en:"Mutual Inductance",id:"Induktansi Mutual",kat:"komponen",desc:"Kopling induktif antara dua kumparan berdekatan.",detail:"Fluks dari kumparan 1 sebagian menembus kumparan 2 dan menginduksi EMF. Dasar kerja transformator.",formula:"V_2 = M\\frac{dI_1}{dt} \\;\\; M=k\\sqrt{L_1 L_2}",tags:["kopling","transformator","EMF","induktansi"]},
  {en:"Skin Effect",id:"Efek Kulit",kat:"sinyal",desc:"Arus AC cenderung mengalir di permukaan konduktor pada frekuensi tinggi.",detail:"Menyebabkan hambatan efektif meningkat pada frekuensi tinggi. Solusi: kabel litz (banyak konduktor kecil).",formula:"\\delta = \\sqrt{\\frac{2\\rho}{\\omega\\mu}}",tags:["frekuensi tinggi","RF","resistansi","konduktor","litz wire"]},
  {en:"Hysteresis",id:"Histeresis",kat:"komponen",desc:"Sifat material magnetik yang menyimpan sejarah magnetisasi.",detail:"Kurva BH menunjukkan hysteresis loop. Luas area = rugi-rugi hysteresis. Material inti transformator dipilih yang loopnya sempit.",formula:"W_h = k_h \\cdot f \\cdot B_{max}^n",tags:["inti besi","transformator","rugi-rugi","magnetik","BH curve"]},
  {en:"Earthing / Grounding System",id:"Sistem Pembumian",kat:"dasar",desc:"Sistem yang menghubungkan instalasi listrik ke tanah untuk keselamatan.",detail:"Mencegah tegangan sentuh berbahaya saat terjadi gangguan. Jenis: TN-S, TN-C, TT, IT. Resistansi pentanahan harus rendah.",formula:"V_{touch} = I_f \\times R_{earth}",tags:["keselamatan","pentanahan","PUIL","ground","instalasi"]},
  {en:"Circuit Breaker",id:"Pemutus Tenaga (CB)",kat:"komponen",desc:"Sakelar proteksi otomatis yang bisa di-reset.",detail:"Membuka rangkaian saat arus berlebih atau hubung singkat. Berbeda dari sekering: bisa di-reset tanpa ganti komponen.",formula:"I_{trip} > I_{rated} \\Rightarrow \\text{trip otomatis}",tags:["MCB","MCCB","proteksi","overload","reset"]},
  {en:"Power Supply",id:"Catu Daya",kat:"elektronika",desc:"Rangkaian mengubah tegangan AC menjadi DC yang stabil.",detail:"Terdiri dari: transformator → penyearah → filter kapasitor → regulator. Output stabil meski input atau beban berubah.",formula:"V_{dc} = V_{rms}\\sqrt{2} - V_f",tags:["DC supply","regulasi","transformator","filter","regulator"]},
  {en:"Harmonic Distortion",id:"Distorsi Harmonik",kat:"sinyal",desc:"Komponen frekuensi kelipatan dari frekuensi fundamental.",detail:"THD (Total Harmonic Distortion) mengukur kualitas sinyal. Beban nonlinier seperti inverter menghasilkan harmonik.",formula:"THD = \\frac{\\sqrt{V_2^2+V_3^2+\\cdots}}{V_1}\\times 100\\%",tags:["THD","kualitas daya","nonlinier","inverter","harmonik"]},
  {en:"Electromagnetic Interference",id:"Interferensi Elektromagnetik (EMI)",kat:"sinyal",desc:"Gangguan sinyal dari sumber elektromagnetik.",detail:"Sumber: motor, switching PSU, RF. Diatasi dengan shielding, filtering, grounding, dan tata letak PCB yang baik.",formula:"\\text{EMI} \\propto \\frac{dI}{dt} \\cdot L",tags:["EMI","EMC","shielding","noise","PCB"]},
  {en:"Galvanometer",id:"Galvanometer",kat:"pengukuran",desc:"Alat ukur arus sangat kecil (mikroampere).",detail:"Menggunakan kumparan dalam medan magnet permanen. Dasar dari amperemeter, voltmeter, dan ohmmeter analog.",formula:"F = nBIA \\;\\; (\\text{gaya pada kumparan})",tags:["analog","amperemeter","arus kecil","kumparan","defleksi"]},
  {en:"Joule Heating",id:"Pemanasan Joule",kat:"dasar",desc:"Panas yang dihasilkan ketika arus mengalir melalui hambatan.",detail:"Rugi-rugi panas pada kabel, resistor, dan konduktor. Dimanfaatkan pada elemen pemanas.",formula:"Q = I^2 R t \\;\\; (\\text{Joule})",tags:["panas","rugi-rugi","elemen pemanas","konduktor","energi"]},
  {en:"Coulomb's Law",id:"Hukum Coulomb",kat:"dasar",desc:"Gaya antara dua muatan listrik titik.",detail:"Gaya tarik-menarik (beda jenis) atau tolak-menolak (sejenis). Berbanding terbalik dengan kuadrat jarak.",formula:"F = k\\frac{q_1 q_2}{r^2} \\;\\; k=9\\times10^9",tags:["muatan","gaya elektrostatis","permitivitas","medan"]},
  {en:"Magnetic Field",id:"Medan Magnet",kat:"dasar",desc:"Wilayah di sekitar magnet atau arus listrik yang menimbulkan gaya magnet.",detail:"Simbol B (Tesla) atau H (A/m). Arus listrik selalu dikelilingi medan magnet — kaidah tangan kanan.",formula:"B = \\mu_0 \\frac{I}{2\\pi r} \\;\\; (\\text{kawat lurus})",tags:["tesla","induksi","elektromagnet","kaidah tangan kanan"]},
  {en:"Semiconductor",id:"Semikonduktor",kat:"elektronika",desc:"Material dengan konduktivitas antara konduktor dan isolator.",detail:"Silikon (Si) dan Germanium (Ge) adalah semikonduktor paling umum. Dapat di-doping tipe N (donor elektron) atau P (akseptor).",formula:"n_i = \\sqrt{n \\cdot p} \\;\\; (\\text{intrinsik})",tags:["silikon","germanium","doping","N-type","P-type","PN junction"]},
  {en:"PN Junction",id:"Sambungan PN",kat:"elektronika",desc:"Interface antara semikonduktor tipe P dan N.",detail:"Membentuk depletion region yang mencegah arus mengalir tanpa bias. Forward bias mempersempit depletion region, memungkinkan arus.",formula:"I = I_0(e^{V/V_T}-1) \\;\\; V_T=26mV",tags:["dioda","depletion","bias","dioda ideal","Shockley"]},
  {en:"Bandwidth",id:"Bandwidth",kat:"sinyal",desc:"Rentang frekuensi yang dapat dilewatkan sistem.",detail:"Bandwidth -3dB = rentang frekuensi di mana gain tidak turun lebih dari 3dB (setengah daya). Semakin lebar, semakin banyak data.",formula:"BW = f_{H} - f_{L} \\;\\; (\\text{Hz})",tags:["frekuensi","filter","komunikasi","gain","-3dB"]},
  {en:"Gain Bandwidth Product",id:"Gain-Bandwidth Product",kat:"elektronika",desc:"Konstanta tetap op-amp: gain × bandwidth = konstan.",detail:"Semakin besar gain yang diinginkan, semakin sempit bandwidth yang tersedia. Penting saat memilih op-amp.",formula:"GBP = A_v \\times BW = \\text{konstan}",tags:["op-amp","bandwidth","penguatan","frekuensi","unity gain"]},
  {en:"Common Emitter",id:"Common Emitter",kat:"elektronika",desc:"Konfigurasi transistor paling umum — penguatan tegangan tinggi.",detail:"Emitter di-ground, input ke Base, output dari Collector. Penguatan tegangan besar tapi ada pergeseran fasa 180°.",formula:"A_v = -\\frac{R_C}{r_e} \\;\\; r_e=\\frac{26mV}{I_C}",tags:["transistor","BJT","penguatan","amplifier","CE"]},
  {en:"Feedback",id:"Umpan Balik (Feedback)",kat:"elektronika",desc:"Sebagian output dikembalikan ke input untuk kontrol.",detail:"Feedback negatif: menstabilkan, mengurangi gain, memperlebar bandwidth, mengurangi distorsi. Feedback positif: osilator.",formula:"A_f = \\frac{A}{1+A\\beta}",tags:["negative feedback","positif","stabilitas","op-amp","kontrol"]},
  {en:"Charge",id:"Muatan Listrik",kat:"dasar",desc:"Sifat fundamental materi yang menimbulkan gaya elektromagnetik.",detail:"Muatan elektron: -1.6×10⁻¹⁹ C. Muatan proton: +1.6×10⁻¹⁹ C. Satuan: Coulomb.",formula:"Q = n \\cdot e \\;\\; e = 1.6 \\times 10^{-19} C",tags:["coulomb","elektron","proton","muatan dasar"]},
  {en:"Permeability",id:"Permeabilitas",kat:"dasar",desc:"Kemampuan material untuk mendukung medan magnet.",detail:"Permeabilitas relatif μr menunjukkan seberapa mudah material dimagnetisasi. Besi: μr >> 1, udara: μr = 1.",formula:"B = \\mu H = \\mu_0 \\mu_r H",tags:["μr","inti besi","magnetisasi","induktansi","transformator"]},
  {en:"Permittivity",id:"Permitivitas",kat:"dasar",desc:"Kemampuan material menyimpan energi medan listrik.",detail:"Permitivitas relatif εr (konstanta dielektrik) menentukan kapasitansi. Air: εr ≈ 80, vakum: εr = 1.",formula:"C = \\varepsilon_r \\varepsilon_0 \\frac{A}{d}",tags:["dielektrik","kapasitor","konstanta","εr","kapasitansi"]},
  {en:"Thevenin Equivalent",id:"Ekuivalen Thevenin",kat:"rangkaian",desc:"Penyederhanaan rangkaian dua terminal menjadi sumber tegangan seri hambatan.",detail:"Berguna untuk analisis beban yang berubah-ubah. Vth = tegangan open-circuit, Rth = hambatan dari terminal saat semua sumber dimatikan.",formula:"V_{load} = V_{th} \\cdot \\frac{R_L}{R_{th}+R_L}",tags:["penyederhanaan","analisis","Vth","Rth","dua terminal"]},
  {en:"AC Generator",id:"Generator AC",kat:"daya",desc:"Mesin yang mengubah energi mekanik menjadi energi listrik AC.",detail:"Kumparan berputar dalam medan magnet menghasilkan EMF sinusoidal. Prinsip Hukum Faraday.",formula:"e(t) = NBA\\omega\\sin(\\omega t)",tags:["alternator","EMF","fluks","putaran","turbin"]},
  {en:"DC Motor",id:"Motor DC",kat:"daya",desc:"Mengubah energi listrik DC menjadi energi mekanik rotasi.",detail:"Kumparan dalam medan magnet — arus menyebabkan torsi (Hukum Lorentz). Dikontrol dengan PWM.",formula:"\\tau = BINA \\;\\; V = E_b + IR",tags:["torsi","putaran","PWM","armature","back-EMF"]},
  {en:"Induction Motor",id:"Motor Induksi",kat:"daya",desc:"Motor AC yang paling umum digunakan di industri.",detail:"Medan putar stator menginduksi arus di rotor. Rotor selalu 'tertinggal' dari medan putar (slip). Tidak butuh sikat.",formula:"s = \\frac{n_s - n_r}{n_s} \\times 100\\%",tags:["motor AC","slip","stator","rotor","industri","3 fasa"]},
  {en:"Solar Cell",id:"Sel Surya",kat:"terbarukan",desc:"Komponen pengubah cahaya matahari menjadi listrik.",detail:"Efek fotovoltaik di sambungan PN. Tegangan tiap sel ≈ 0.5-0.6V. Panel surya = banyak sel seri/paralel.",formula:"I = I_L - I_0(e^{V/nV_T}-1)",tags:["fotovoltaik","PLTS","panel surya","renewable","inverter"]},
  {en:"Battery",id:"Baterai",kat:"terbarukan",desc:"Penyimpan energi kimia yang dapat dikonversi ke energi listrik.",detail:"Kapasitas dalam mAh atau Ah. Tegangan tergantung kimia: Li-ion 3.7V, Pb-acid 2V/sel, NiMH 1.2V.",formula:"E = V \\cdot Q \\;\\; (\\text{Watt-hour})",tags:["li-ion","lead acid","kapasitas","mAh","discharge"]},
  {en:"Inverter",id:"Inverter",kat:"terbarukan",desc:"Mengubah DC menjadi AC.",detail:"Digunakan pada UPS, solar sistem, dan drive motor. Menggunakan switching transistor (IGBT/MOSFET) dengan kontrol PWM.",formula:"V_{ac,rms} = \\frac{V_{dc}}{\\sqrt{2}} \\;\\; (\\text{ideal})",tags:["DC ke AC","UPS","solar","PWM","IGBT","MOSFET"]},
  {en:"UPS",id:"UPS (Uninterruptible Power Supply)",kat:"daya",desc:"Sumber daya cadangan saat listrik PLN padam.",detail:"Berisi baterai, charger, dan inverter. Online UPS selalu lewat inverter, Offline UPS switch saat padam.",formula:"t_{backup} = \\frac{C_{batt} \\times V_{batt}}{P_{load}}",tags:["backup","baterai","inverter","cadangan","server"]},
  // ── ENERGI TERBARUKAN (EBT) ──
  {en:"Wind Turbine",id:"Turbin Angin",kat:"terbarukan",desc:"Mengubah energi mekanik angin menjadi listrik.",detail:"Generator sinkron atau induksi diputar oleh bilah turbin. Digunakan pada PLTB (Pembangkit Listrik Tenaga Bayu).",formula:"P = \\frac{1}{2}\\rho A v^3 C_p",tags:["PLTB","angin","generator","renewable","kinetik"]},
  {en:"MPPT",id:"MPPT",kat:"terbarukan",desc:"Maximum Power Point Tracking untuk panel surya.",detail:"Algoritma kontroler DC-DC mengubah tegangan/arus agar panel surya selalu beroperasi di titik daya maksimumnya.",formula:"\\frac{dP}{dV} = 0 \\;\\; (\\text{Daya Maksimum})",tags:["solar charge","efisiensi","buck-boost","PLTS"]},
  {en:"Charge Controller",id:"SCC (Solar Charge Controller)",kat:"terbarukan",desc:"Pengatur pengisian daya baterai dari panel surya.",detail:"Mencegah baterai overcharge (kelebihan isi) dan overdischarge (terkuras). Sangat vital untuk keawetan baterai PLTS.",formula:"V_{batt} \\le V_{float} \\Rightarrow \\text{Aman}",tags:["baterai","regulator","PLTS","PWM","MPPT"]},
  {en:"SCADA",id:"SCADA",kat:"digital",desc:"Sistem monitor dan kontrol jarak jauh instalasi listrik.",detail:"Supervisory Control and Data Acquisition. Digunakan di pembangkit, distribusi PLN, dan industri proses.",formula:"\\text{RTU} \\leftrightarrow \\text{Master Station}",tags:["kontrol","monitoring","PLN","industri","RTU","HMI"]},
  {en:"PLC",id:"PLC (Programmable Logic Controller)",kat:"digital",desc:"Komputer industri untuk otomasi proses.",detail:"Menggantikan relay ladder konvensional. Diprogram dengan ladder diagram, FBD, atau ST. Tahan lingkungan industri.",formula:"\\text{Scan cycle: Input} \\to \\text{Program} \\to \\text{Output}",tags:["otomasi","industri","ladder","relay","SCADA"]},
  {en:"Capacitor Bank",id:"Bank Kapasitor",kat:"daya",desc:"Kumpulan kapasitor untuk koreksi faktor daya.",detail:"Dipasang di panel distribusi untuk mengkompensasi daya reaktif induktif. Meningkatkan PF mendekati 1 dan menghemat energi.",formula:"Q_C = \\frac{V^2}{X_C} = V^2 \\omega C",tags:["koreksi","faktor daya","LVMDP","APFC","reactive power"]},
  {en:"Surge Arrester",id:"Arester Surja",kat:"komponen",desc:"Komponen pelindung terhadap tegangan surja (petir/switching).",detail:"Memotong tegangan surja ke ground sebelum merusak peralatan. Wajib dipasang pada panel dan peralatan sensitif.",formula:"V_{clamping} < V_{protection} < V_{withstand}",tags:["proteksi","petir","surge","MOV","lightning"]},
  // ── INSTALASI ──
  {en:"PUIL",id:"PUIL",kat:"instalasi",desc:"Persyaratan Umum Instalasi Listrik.",detail:"Buku standar wajib di Indonesia untuk perancangan, pemasangan, dan pemakaian instalasi listrik guna menjamin keselamatan keselamatan kerja dan keamanan bangunan.",formula:"\\text{SNI 0225:2011 (Versi Puil Terkini)}",tags:["regulasi","standar","keamanan","instalasi","SNI"]},
  {en:"MCB",id:"Miniature Circuit Breaker (MCB)",kat:"instalasi",desc:"Pengaman otomatis dari hubung singkat dan beban berlebih.",detail:"Memutus arus seketika saat batas nominal terlampaui. Memiliki dua pengaman mekanis: bimetal (overload) dan elektromagnetik (hubung singkat/short circuit).",formula:"I_{\\text{trip}} > I_{\\text{nominal}}",tags:["pemutus","proteksi","korsleting","panel","sekering"]},
  {en:"ELCB",id:"ELCB / RCBO",kat:"instalasi",desc:"Pemutus arus spesialis kebocoran tanah / tegangan sentuh.",detail:"Proteksi tingkat tinggi untuk nyawa manusia dari resiko tersetrum (kesetrum). Langsung jeglek (trip) jika mendeteksi kebocoran selisih arus sekecil 30mA menuju tanah (body/badan manusia).",formula:"|I_{\\text{Fasa}} - I_{\\text{Netral}}| > 30mA",tags:["anti kontak","kebocoran arus","keselamatan","ground fault","anti kesetrum"]},
  {en:"NYA / NYM / NYY Cable",id:"Kabel NYA / NYM / NYY",kat:"instalasi",desc:"Tata nama/standar penamaan kabel listrik PLN Indonesia.",detail:"NYA: Kabel inti tembaga kawat tunggal tanpa pelindung ekstra. NYM: Kabel banyak inti berpelindung ganda PVC biasanya untuk indoor (putih). NYY: Tahan cuaca & robekan, dirancang khusus instalasi tanam tanah outdoor (hitam).",formula:"I_{\\text{Kapasitas}} = \\text{Tabel KHA (Kuat Hantar Arus)}",tags:["kabel","konduktor","Tembaga","PVC","SPLN"]},
  {en:"PHB",id:"Panel Hubung Bagi (PHB)",kat:"instalasi",desc:"Kotak pusat pembagian energi (Distribution Board).",detail:"Lemari/boks baja tempat perangkat proteksi (MCB utama) dan rel tembaga (busbar) memecah tegangan distribusi arus tinggi menjadi cabang-cabang sirkuit kecil untuk setiap ruangan.",formula:"I_{\\text{Utama}} = \\sum_{n=1} I_{\\text{Sirkuit Cabang}}",tags:["distribusi","panel","busbar","kontrol distribusi","MDP"]},
  // ── MESIN ──
  {en:"Stator & Rotor",id:"Stator dan Rotor",kat:"mesin",desc:"Bagian diam dan berputar pada sebuah mesin generator/motor.",detail:"Stator (Statis) terpasang di kerangka luar dan menciptakan medan putar AC. Sedangkan Rotor (Rotasi) ditengah-tengah yang terusir dan merespon induksi magnet lalu berputar menghasilkan gerak mekanik.",formula:"\\text{Stator} = \\text{Diam}, \\; \\text{Rotor} = \\text{Berputar}",tags:["anatomi mesin","motor lisrik","generator","kumparan"]},
  {en:"Synchronous Generator",id:"Generator Sinkron",kat:"mesin",desc:"Penghasil mayoritas suplai daya AC skala pembangkit / industri.",detail:"Dinamo/Alternator raksasa yang frekuensi listrik keluarannya mutlak bersinkronasi persis/sama rata sebanding dengan perputaran poros turbin di waduk, uap, atau PLTU.",formula:"f = \\frac{p \\cdot N_s}{120} \\;\\; (\\text{Hz})",tags:["alternator","pembangkit","PLN","sinkron","kecepatan sikron"]},
  {en:"Commutator",id:"Komutator & Sikat (Brush)",kat:"mesin",desc:"Sakelar pembalik arah otomatis pada poros motor arus searah (DC).",detail:"Cincin tembaga yang dibelah dan tersentuh oleh sikat karbon/arang. Gunanya memastikan bahwa arah gaya tolak elektro-magnet akan terus konstan tak peduli meski belitan kawat dalam poros telah berbalik 180 drajat.",formula:"\\tau = k \\cdot \\Phi \\cdot I_a",tags:["motor DC","sikat arang","brush","slip ring","rotasi"]},
  {en:"Stepper Motor",id:"Motor Stepper",kat:"mesin",desc:"Motor DC pergerakan presisi patah-patah / langkah murni.",detail:"Tidak berputar mulus melainkan bergerak berdasarkan komando 'pulsa digital' setiap sekian derajat (steps). Sangat mematikan dari segi keakuratan letak untuk Lengan Robot industri, Printer 3D, dan mesin pahat otomatis CNC.",formula:"\\text{Resolusi} = \\frac{360^\\circ}{\\text{Step Angle}} = 200 \\text{ steps/rev}",tags:["presisi","robotika","CNC","pulsa PWM","diskrit"]}
];

const QUIZ_CATS = {
  dasar:      { label:'Dasar',       emoji:'⚡', desc:'Tegangan, arus, hambatan, hukum dasar' },
  komponen:   { label:'Komponen',    emoji:'🔧', desc:'Resistor, kapasitor, induktor, dioda, transistor' },
  rangkaian:  { label:'Rangkaian',   emoji:'🔁', desc:'Seri, paralel, Kirchhoff, Thevenin, Norton' },
  daya:       { label:'Daya',        emoji:'💡', desc:'Daya aktif, reaktif, faktor daya, efisiensi' },
  elektronika:{ label:'Elektronika', emoji:'🖥️', desc:'Op-amp, transistor, penyearah, PWM' },
  digital:    { label:'Digital',     emoji:'💾', desc:'Gerbang logika, ADC, DAC, flip-flop, mikrokontroler' },
  sinyal:     { label:'Sinyal',      emoji:'📡', desc:'Filter, modulasi, FFT, bandwidth, dB' },
  pengukuran: { label:'Pengukuran',  emoji:'📏', desc:'Multimeter, osiloskop, LCR meter' },
  terbarukan: { label:'EBT',         emoji:'☀️', desc:'Panel surya, turbin angin, inverter, MPPT, baterai' },
  instalasi:  { label:'Instalasi',   emoji:'🧤', desc:'PUIL, grounding, kabel, MCB, safety K3' },
  mesin:      { label:'Mesin',       emoji:'⚙️', desc:'Motor DC/AC, generator, trafo, mesin industri' },
  kontrol:    { label:'Kontrol',     emoji:'🕹️', desc:'PLC, PID, feedback loop, robotik, otomasi' },
  komunikasi: { label:'Komunikasi',  emoji:'📶', desc:'I2C, SPI, UART, RS485, protokol IoT' },
  distribusi: { label:'Distribusi',  emoji:'🗼', desc:'Gardu induk, transmisi SUTET, isolator, jaringan' },
};

const KAT = ['Semua','dasar','komponen','rangkaian','daya','elektronika','pengukuran','digital','sinyal','terbarukan','instalasi','mesin','kontrol','komunikasi','distribusi'];

const TIMELINE = [
  // ERA KUNO
  {year:1600,title:"De Magnete — Dasar Elektrostatik",person:"William Gilbert",era:"kuno",
   desc:"Gilbert menerbitkan karya monumental 'De Magnete', memperkenalkan istilah 'electricus' dari bahasa Latin 'electrum' (amber). Ia membedakan magnet dari listrik statik, menjadi orang pertama yang mempelajari listrik secara sistematis.",
   impact:"Fondasi ilmu kelistrikan modern"},
  {year:1745,title:"Penemuan Kondensator — Leyden Jar",person:"Pieter van Musschenbroek",era:"kuno",
   desc:"Fisikawan Belanda menemukan Leyden Jar, kapasitor pertama dalam sejarah. Dapat menyimpan muatan listrik statik dalam jumlah besar — menjadi awal mula teori kapasitor.",
   impact:"Cikal bakal komponen kapasitor"},
  {year:1752,title:"Eksperimen Layang-layang & Petir",person:"Benjamin Franklin",era:"kuno",
   desc:"Franklin membuktikan petir adalah fenomena listrik melalui eksperimen layang-layang terkenalnya. Ia menemukan bahwa petir dapat dialirkan ke tanah melalui konduktor, menciptakan penangkal petir pertama.",
   impact:"Dasar teori grounding & proteksi petir"},
  {year:1785,title:"Hukum Coulomb",person:"Charles-Augustin de Coulomb",era:"kuno",
   desc:"Coulomb memformulasikan hukum gaya elektrostatik antara dua muatan titik. Gaya berbanding lurus dengan hasil kali muatan dan berbanding terbalik dengan kuadrat jaraknya.",
   impact:"Hukum dasar elektrostatika"},
  // ERA MODERN
  {year:1800,title:"Baterai Pertama — Voltaic Pile",person:"Alessandro Volta",era:"modern",
   desc:"Volta menciptakan sumber arus listrik kontinu pertama menggunakan tumpukan piringan tembaga dan seng yang dipisahkan kain basah. Satuan tegangan Volt dinamai dari namanya.",
   impact:"Sumber energi listrik pertama di dunia"},
  {year:1820,title:"Hukum Oersted — Elektromagnetisme",person:"Hans Christian Oersted",era:"modern",
   desc:"Oersted menemukan secara tidak sengaja bahwa arus listrik dapat membelokkan jarum kompas, membuktikan hubungan antara listrik dan magnetisme untuk pertama kalinya.",
   impact:"Dasar elektromagnetisme & motor listrik"},
  {year:1827,title:"Hukum Ohm",person:"Georg Simon Ohm",era:"modern",
   desc:"Ohm memformulasikan hubungan matematis antara tegangan, arus, dan hambatan: V = IR. Meskipun awalnya ditolak komunitas ilmiah, hukum ini kini menjadi fondasi terpenting teknik elektro.",
   impact:"Hukum paling fundamental teknik elektro"},
  {year:1831,title:"Induksi Elektromagnetik",person:"Michael Faraday",era:"modern",
   desc:"Faraday menemukan bahwa perubahan medan magnet dapat membangkitkan arus listrik (EMF terinduksi). Prinsip ini menjadi dasar kerja generator, transformator, dan motor induksi.",
   impact:"Dasar generator & transformator"},
  {year:1864,title:"Persamaan Maxwell",person:"James Clerk Maxwell",era:"modern",
   desc:"Maxwell menyusun empat persamaan yang menggambarkan teori elektromagnetisme secara lengkap. Ia juga memprediksi eksistensi gelombang elektromagnetik yang merambat dengan kecepatan cahaya.",
   impact:"Dasar teori gelombang radio & cahaya"},
  {year:1879,title:"Lampu Pijar Komersial",person:"Thomas Alva Edison",era:"modern",
   desc:"Edison menyempurnakan lampu pijar dengan filamen karbon yang tahan lama dan membangun sistem distribusi listrik DC pertama di New York. Ia mendirikan perusahaan listrik pertama di dunia.",
   impact:"Elektrifikasi kota pertama di dunia"},
  {year:1888,title:"Motor & Generator AC",person:"Nikola Tesla",era:"modern",
   desc:"Tesla mengembangkan sistem arus bolak-balik (AC) lengkap dengan motor induksi, generator, dan transformator. Sistem AC Tesla terbukti jauh lebih efisien untuk transmisi daya jarak jauh dibanding DC Edison.",
   impact:"Sistem distribusi listrik AC global"},
  {year:1895,title:"Gelombang Radio Pertama",person:"Guglielmo Marconi",era:"modern",
   desc:"Marconi berhasil mengirimkan sinyal radio pertama sejauh 2,4 km. Pada 1901, ia berhasil transmisi transatlantik pertama. Penemuan ini membuka era komunikasi nirkabel.",
   impact:"Cikal bakal komunikasi nirkabel"},
  // ERA DIGITAL
  {year:1947,title:"Transistor Pertama",person:"Shockley, Bardeen & Brattain",era:"digital",
   desc:"Tim Bell Labs menemukan transistor point-contact — komponen semikonduktor yang bisa menguatkan sinyal dan berfungsi sebagai saklar. Transistor menggantikan tabung vakum yang besar dan boros daya.",
   impact:"Revolusi elektronika modern"},
  {year:1958,title:"Integrated Circuit (IC) Pertama",person:"Jack Kilby & Robert Noyce",era:"digital",
   desc:"Kilby (Texas Instruments) dan Noyce (Fairchild) secara independen menciptakan IC pertama — menempatkan banyak transistor dalam satu chip silikon. Ini memulai era miniaturisasi elektronika.",
   impact:"Dasar semua chip komputer modern"},
  {year:1965,title:"Hukum Moore",person:"Gordon Moore",era:"digital",
   desc:"Moore memprediksi jumlah transistor dalam IC akan berlipat ganda setiap ~2 tahun dengan biaya tetap. Prediksi ini terbukti akurat selama 50+ tahun dan menjadi panduan industri semikonduktor.",
   impact:"Roadmap industri semikonduktor global"},
  {year:1971,title:"Mikroprosesor Pertama — Intel 4004",person:"Federico Faggin / Intel",era:"digital",
   desc:"Intel meluncurkan 4004, mikroprosesor komersial pertama di dunia dengan 2.300 transistor dalam satu chip. Ini adalah komputer lengkap dalam sekeping silikon berukuran 12mm².",
   impact:"Lahirnya era komputer personal"},
  // ERA KONTEMPORER
  {year:1991,title:"Baterai Lithium-Ion Komersial",person:"John Goodenough / Sony",era:"kontemporer",
   desc:"Sony mengkomersialisasi baterai Li-ion berbasis riset Goodenough. Baterai ini lebih ringan, lebih padat energi, dan bisa diisi ulang ribuan kali — merevolusi perangkat portabel.",
   impact:"Dasar smartphone, EV, dan drone modern"},
  {year:1999,title:"WiFi Standar 802.11b",person:"IEEE / Vic Hayes",era:"kontemporer",
   desc:"Standar WiFi 802.11b dirilis, memungkinkan koneksi internet nirkabel 11 Mbps. Vic Hayes dijuluki 'Father of WiFi' karena kontribusinya dalam IEEE 802.11 working group.",
   impact:"Konektivitas nirkabel universal"},
  {year:2012,title:"Raspberry Pi & Era Maker",person:"Eben Upton",era:"kontemporer",
   desc:"Raspberry Pi diluncurkan dengan harga $35 — komputer lengkap seukuran kartu kredit. Bersama Arduino, ini melahirkan gerakan Maker/DIY elektronik global yang mendemokratisasi hardware.",
   impact:"Demokratisasi hardware & IoT"},
  {year:2022,title:"ChatGPT & AI dalam Elektronika",person:"OpenAI",era:"kontemporer",
   desc:"AI generatif mulai merevolusi desain elektronika — dari generasi kode HDL otomatis, optimasi layout PCB, hingga debugging rangkaian. Engineer elektro kini berkolaborasi dengan AI.",
   impact:"Era baru AI-assisted engineering"},
];

const PROJECTS = [
  {
    "id": "prj-001",
    "title": "Blinking LED (Hello World)",
    "description": "Proyek paling dasar untuk menguji papan Arduino dan memahami struktur kode (setup dan loop).",
    "difficulty": "Mudah",
    "components": [
      "1x Arduino Uno",
      "1x LED (Warna bebas)",
      "1x Resistor 220 Ohm",
      "Kabel Jumper secukupnya",
      "Breadboard"
    ],
    "schema_placeholder": "https://via.placeholder.com/600x400?text=Skema+Blinking+LED",
    "code": "void setup() {\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(1000);\n  digitalWrite(13, LOW);\n  delay(1000);\n}",
    "steps": [
      {
        "nama_komponen": "Arduino Uno",
        "alur_rangkaian": "Siapkan papan Arduino dan sambungkan ke komputer menggunakan kabel USB."
      },
      {
        "nama_komponen": "LED (Kaki Panjang / Anoda)",
        "alur_rangkaian": "Tancapkan ke breadboard, lalu hubungkan ke salah satu ujung Resistor 220 Ohm."
      },
      {
        "nama_komponen": "Resistor 220 Ohm",
        "alur_rangkaian": "Hubungkan ujung resistor yang lain ke Pin 13 digital pada papan Arduino."
      },
      {
        "nama_komponen": "LED (Kaki Pendek / Katoda)",
        "alur_rangkaian": "Hubungkan kaki pendek LED langsung ke jalur pin GND pada papan Arduino."
      }
    ]
  },
  {
    "id": "prj-002",
    "title": "Lampu Lalu Lintas Sederhana",
    "description": "Simulasi lampu lalu lintas menggunakan tiga buah LED dengan pengaturan jeda waktu (delay).",
    "difficulty": "Mudah",
    "components": [
      "1x Arduino Uno",
      "1x LED Merah, 1x LED Kuning, 1x LED Hijau",
      "3x Resistor 220 Ohm",
      "Kabel Jumper secukupnya",
      "Breadboard"
    ],
    "schema_placeholder": "https://via.placeholder.com/600x400?text=Skema+Traffic+Light",
    "code": "int ledMerah = 12;\nint ledKuning = 11;\nint ledHijau = 10;\n\nvoid setup() {\n  pinMode(ledMerah, OUTPUT);\n  pinMode(ledKuning, OUTPUT);\n  pinMode(ledHijau, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(ledMerah, HIGH);\n  delay(3000);\n  digitalWrite(ledMerah, LOW);\n  digitalWrite(ledKuning, HIGH);\n  delay(1000);\n  digitalWrite(ledKuning, LOW);\n  digitalWrite(ledHijau, HIGH);\n  delay(3000);\n  digitalWrite(ledHijau, LOW);\n}",
    "steps": [
      {
        "nama_komponen": "LED Merah, Kuning, Hijau",
        "alur_rangkaian": "Pasang ketiga LED pada breadboard dengan jarak yang cukup agar tidak saling bersentuhan."
      },
      {
        "nama_komponen": "Jalur GND Breadboard",
        "alur_rangkaian": "Hubungkan masing-masing kaki katoda (pendek) dari ketiga LED ke jalur negatif (GND) di breadboard."
      },
      {
        "nama_komponen": "Kabel Jumper GND",
        "alur_rangkaian": "Sambungkan jalur negatif (GND) breadboard ke pin GND pada Arduino."
      },
      {
        "nama_komponen": "Resistor 220 Ohm",
        "alur_rangkaian": "Hubungkan anoda (kaki panjang) LED Merah ke pin 12, Kuning ke pin 11, dan Hijau ke pin 10 menggunakan resistor."
      }
    ]
  },
  {
    "id": "prj-003",
    "title": "Lampu Tidur Otomatis (Sensor LDR)",
    "description": "Menyalakan lampu secara otomatis ketika kondisi ruangan di sekitarnya menjadi gelap.",
    "difficulty": "Menengah",
    "components": [
      "1x Arduino Uno",
      "1x Sensor Cahaya (LDR)",
      "1x LED",
      "1x Resistor 220 Ohm",
      "1x Resistor 10k Ohm",
      "Kabel Jumper secukupnya",
      "Breadboard"
    ],
    "schema_placeholder": "https://via.placeholder.com/600x400?text=Skema+Sensor+LDR",
    "code": "int ldrPin = A0;\nint ledPin = 9;\n\nvoid setup() {\n  pinMode(ledPin, OUTPUT);\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int ldrValue = analogRead(ldrPin);\n  if (ldrValue < 300) {\n    digitalWrite(ledPin, HIGH);\n  } else {\n    digitalWrite(ledPin, LOW);\n  }\n  delay(100);\n}",
    "steps": [
      {
        "nama_komponen": "Sensor LDR & Resistor 10k",
        "alur_rangkaian": "Buat rangkaian pembagi tegangan dengan menghubungkan satu kaki LDR dan satu kaki resistor 10k Ohm pada baris yang sama di breadboard."
      },
      {
        "nama_komponen": "Kabel Jumper Analog",
        "alur_rangkaian": "Hubungkan titik temu antara LDR dan resistor 10k Ohm ke pin analog A0 pada Arduino."
      },
      {
        "nama_komponen": "Kabel Daya (5V & GND)",
        "alur_rangkaian": "Hubungkan kaki LDR yang lain ke pin 5V Arduino, dan kaki resistor 10k Ohm yang lain ke pin GND Arduino."
      },
      {
        "nama_komponen": "LED & Resistor 220 Ohm",
        "alur_rangkaian": "Pasang LED pada breadboard. Hubungkan anoda ke pin 9 Arduino melalui resistor 220 Ohm, dan katoda ke GND."
      }
    ]
  },
  {
    "id": "prj-004",
    "title": "Alarm Anti Maling (Sensor PIR)",
    "description": "Sistem keamanan sederhana yang akan membunyikan alarm ketika mendeteksi pergerakan objek.",
    "difficulty": "Menengah",
    "components": [
      "1x Arduino Uno",
      "1x Sensor Gerak PIR",
      "1x Buzzer Aktif",
      "Kabel Jumper secukupnya",
      "Breadboard"
    ],
    "schema_placeholder": "https://via.placeholder.com/600x400?text=Skema+Sensor+PIR",
    "code": "int pirPin = 2;\nint buzzerPin = 8;\n\nvoid setup() {\n  pinMode(pirPin, INPUT);\n  pinMode(buzzerPin, OUTPUT);\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int pirState = digitalRead(pirPin);\n  if (pirState == HIGH) {\n    digitalWrite(buzzerPin, HIGH);\n    Serial.println(\"Gerakan terdeteksi!\");\n  } else {\n    digitalWrite(buzzerPin, LOW);\n  }\n  delay(100);\n}",
    "steps": [
      {
        "nama_komponen": "Sensor Gerak PIR",
        "alur_rangkaian": "Hubungkan pin VCC pada sensor PIR ke pin 5V Arduino, dan pin GND sensor ke GND Arduino."
      },
      {
        "nama_komponen": "Kabel Data PIR",
        "alur_rangkaian": "Hubungkan pin OUT (atau Data) pada sensor PIR ke pin digital 2 pada Arduino."
      },
      {
        "nama_komponen": "Buzzer Aktif",
        "alur_rangkaian": "Hubungkan pin positif (biasanya kaki lebih panjang) buzzer ke pin digital 8 Arduino."
      },
      {
        "nama_komponen": "Kabel GND Buzzer",
        "alur_rangkaian": "Hubungkan pin negatif buzzer ke pin GND pada Arduino."
      }
    ]
  },
  {
    "id": "prj-005",
    "title": "Pengukur Jarak (Sensor Ultrasonik)",
    "description": "Mengukur jarak suatu objek di depan sensor menggunakan gelombang suara.",
    "difficulty": "Menengah",
    "components": [
      "1x Arduino Uno",
      "1x Sensor Ultrasonik HC-SR04",
      "Kabel Jumper secukupnya",
      "Breadboard"
    ],
    "schema_placeholder": "https://via.placeholder.com/600x400?text=Skema+Ultrasonik",
    "code": "const int trigPin = 9;\nconst int echoPin = 10;\n\nvoid setup() {\n  pinMode(trigPin, OUTPUT);\n  pinMode(echoPin, INPUT);\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  digitalWrite(trigPin, LOW);\n  delayMicroseconds(2);\n  digitalWrite(trigPin, HIGH);\n  delayMicroseconds(10);\n  digitalWrite(trigPin, LOW);\n  \n  long duration = pulseIn(echoPin, HIGH);\n  int distance = duration * 0.034 / 2;\n  \n  Serial.print(\"Jarak: \");\n  Serial.print(distance);\n  Serial.println(\" cm\");\n  delay(500);\n}",
    "steps": [
      {
        "nama_komponen": "Sensor HC-SR04 (VCC & GND)",
        "alur_rangkaian": "Hubungkan pin VCC pada sensor ke pin 5V Arduino, dan pin GND sensor ke pin GND Arduino."
      },
      {
        "nama_komponen": "Pin Trigger Ultrasonik",
        "alur_rangkaian": "Hubungkan pin Trig pada sensor ultrasonik ke pin digital 9 pada Arduino."
      },
      {
        "nama_komponen": "Pin Echo Ultrasonik",
        "alur_rangkaian": "Hubungkan pin Echo pada sensor ultrasonik ke pin digital 10 pada Arduino."
      },
      {
        "nama_komponen": "Serial Monitor",
        "alur_rangkaian": "Setelah kode diunggah, buka Serial Monitor di Arduino IDE untuk melihat hasil pengukuran jarak."
      }
    ]
  }
];
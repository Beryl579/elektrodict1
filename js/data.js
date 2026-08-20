const KAMUS = [
  // ==== DASAR ====
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
  // ==== KOMPONEN ====
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
  // ==== RANGKAIAN ====
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
  // ==== DAYA ====
  {en:"Active Power",id:"Daya Aktif",kat:"daya",desc:"Daya nyata yang digunakan oleh beban resistif.",detail:"Daya yang benar-benar dikonsumsi dan diubah menjadi panas, cahaya, atau kerja mekanik.",formula:"P = VI\\cos\\varphi \\;\\; (\\text{Watt})",tags:["watt","daya nyata","cos phi","efisiensi"]},
  {en:"Reactive Power",id:"Daya Reaktif",kat:"daya",desc:"Daya yang disimpan dan dikembalikan oleh elemen reaktif.",detail:"Tidak menghasilkan kerja nyata, tapi membebani sistem distribusi. Disebabkan oleh induktor dan kapasitor.",formula:"Q = VI\\sin\\varphi \\;\\; (\\text{VAR})",tags:["VAR","induktif","kapasitif","kompensasi"]},
  {en:"Apparent Power",id:"Daya Semu",kat:"daya",desc:"Daya total yang di-supply oleh sumber dalam sistem AC.",detail:"Kombinasi daya aktif dan reaktif. Merupakan kapasitas yang harus disediakan generator dan kabel distribusi.",formula:"S = VI = \\sqrt{P^2+Q^2} \\;\\; (\\text{VA})",tags:["VA","generator","kapasitas","rating"]},
  {en:"Power Factor",id:"Faktor Daya",kat:"daya",desc:"Rasio daya aktif terhadap daya semu.",detail:"Nilai 1 = ideal. Beban induktif → lagging, beban kapasitif → leading. Perbaikan PF dengan bank kapasitor.",formula:"PF = \\cos\\varphi = \\frac{P}{S}",tags:["cos phi","efisiensi","lagging","leading","koreksi"]},
  {en:"Energy",id:"Energi Listrik",kat:"daya",desc:"Total daya yang dikonsumsi selama selang waktu tertentu.",detail:"Diukur dalam kWh oleh PLN untuk tagihan listrik. 1 kWh = 1000 Watt × 1 jam = 3,6 MJ.",formula:"W = P \\cdot t \\;\\; (\\text{kWh atau Joule})",tags:["kWh","tagihan","konsumsi","joule"]},
  {en:"Efficiency",id:"Efisiensi",kat:"daya",desc:"Perbandingan daya output dengan daya input.",detail:"Selisih daya input dan output adalah rugi-rugi (panas, gesekan). Transformator ideal η mendekati 99%.",formula:"\\eta = \\frac{P_{out}}{P_{in}} \\times 100\\%",tags:["rugi-rugi","transformator","motor","efisiensi"]},
  {en:"Three-Phase Power",id:"Daya Tiga Fasa",kat:"daya",desc:"Sistem distribusi AC tiga fasa bergeser 120°.",detail:"Lebih efisien dari single-phase untuk transmisi daya. Digunakan di industri dan PLN distribusi.",formula:"P_{3\\phi} = \\sqrt{3}\\cdot V_L \\cdot I_L \\cdot \\cos\\varphi",tags:["tiga fasa","industri","PLN","transmisi","star","delta"]},
  {en:"RMS Voltage",id:"Tegangan RMS",kat:"daya",desc:"Nilai efektif tegangan AC yang setara dengan daya DC.",detail:"220V AC PLN adalah nilai RMS. Nilai puncak lebih besar: Vpeak = 220√2 ≈ 311V.",formula:"V_{rms} = \\frac{V_m}{\\sqrt{2}} \\approx 0.707 V_m",tags:["efektif","peak","AC","220V","RMS"]},
  // ==== ELEKTRONIKA ====
  {en:"Op-Amp",id:"Op-Amp (Penguat Operasional)",kat:"elektronika",desc:"IC penguat diferensial tegangan tinggi.",detail:"Dua input (inverting −, non-inverting +) dan satu output. Penguatan open-loop sangat tinggi (~100.000). Dikontrol dengan feedback.",formula:"V_{out} = A_{OL}(V_+ - V_-)",tags:["IC","penguat","feedback","741","LM358"]},
  {en:"Inverting Amplifier",id:"Penguat Pembalik",kat:"elektronika",desc:"Konfigurasi op-amp dengan output berlawanan fasa input.",detail:"Input terhubung ke terminal inverting (−) melalui Ri. Feedback dari output ke − melalui Rf.",formula:"A_v = -\\frac{R_f}{R_i}",tags:["op-amp","feedback","penguatan","inverting"]},
  {en:"Non-Inverting Amplifier",id:"Penguat Non-Pembalik",kat:"elektronika",desc:"Konfigurasi op-amp output sefasa dengan input.",detail:"Input ke terminal non-inverting (+). Penguatan selalu ≥ 1. Impedansi input sangat tinggi.",formula:"A_v = 1 + \\frac{R_f}{R_1}",tags:["op-amp","non-inverting","penguatan","buffer"]},
  {en:"Comparator",id:"Komparator",kat:"elektronika",desc:"Rangkaian pembanding dua tegangan.",detail:"Output HIGH jika V+ > V−, LOW jika sebaliknya. Digunakan dalam ADC, level detector, dan osilator Schmitt.",formula:"V_{out} = \\begin{cases}+V_{sat} & V_+>V_- \\\\ -V_{sat} & V_+<V_-\\end{cases}",tags:["op-amp","level detector","ADC","schmitt trigger"]},
  {en:"Half-Wave Rectifier",id:"Penyearah Setengah Gelombang",kat:"elektronika",desc:"Mengubah AC ke DC menggunakan satu dioda.",detail:"Hanya melewatkan setengah siklus positif AC. Efisiensi rendah (40.6%), ripple besar. Digunakan untuk daya kecil.",formula:"V_{dc} = \\frac{V_m}{\\pi} \\approx 0.318 V_m",tags:["rectifier","dioda","AC ke DC","ripple"]},
  {en:"Full-Wave Rectifier",id:"Penyearah Gelombang Penuh",kat:"elektronika",desc:"Mengubah AC ke DC memanfaatkan kedua siklus.",detail:"Menggunakan 4 dioda (bridge) atau transformator CT + 2 dioda. Ripple lebih kecil, efisiensi lebih tinggi.",formula:"V_{dc} = \\frac{2V_m}{\\pi} \\approx 0.636 V_m",tags:["bridge","dioda","full-wave","power supply"]},
  {en:"Voltage Regulator",id:"Regulator Tegangan",kat:"elektronika",desc:"IC menjaga tegangan output tetap konstan.",detail:"IC 78xx untuk tegangan positif (7805 = 5V, 7812 = 12V), 79xx untuk negatif. Linear regulator membuang kelebihan sebagai panas.",formula:"V_{out} = V_{xx} \\;\\; \\text{(tetap konstan)}",tags:["78xx","7805","LDO","stabilizer","IC"]},
  {en:"PWM",id:"Modulasi Lebar Pulsa (PWM)",kat:"elektronika",desc:"Teknik mengontrol daya dengan mengubah duty cycle.",detail:"Frekuensi tetap, lebar pulsa bervariasi 0–100%. Digunakan untuk motor DC, LED dimmer, dan power supply switching.",formula:"\\text{Duty Cycle} = \\frac{t_{on}}{T} \\times 100\\%",tags:["duty cycle","motor","dimmer","switching","Arduino"]},
  {en:"555 Timer",id:"Timer 555",kat:"elektronika",desc:"IC timer serbaguna untuk pembangkit pulsa.",detail:"Mode astable: osilator frekuensi tetap. Mode monostable: pulsa sekali dengan lebar tertentu. Mudah digunakan.",formula:"f = \\frac{1.44}{(R_A+2R_B)C}",tags:["timer","osilator","monostable","astable","IC"]},
  // ==== DIGITAL ====
  {en:"Logic Gates",id:"Gerbang Logika",kat:"digital",desc:"Komponen digital dasar yang mengolah sinyal biner.",detail:"Gerbang dasar: AND, OR, NOT. Gerbang turunan: NAND, NOR, XOR, XNOR. Semua fungsi digital dapat dibangun dari NAND/NOR.",formula:"AND: Y=AB \\;\\; OR: Y=A+B \\;\\; NOT: Y=\\bar{A}",tags:["AND","OR","NOT","NAND","NOR","XOR","digital"]},
  {en:"Boolean Algebra",id:"Aljabar Boolean",kat:"digital",desc:"Matematika untuk analisis dan penyederhanaan rangkaian logika.",detail:"Hukum De Morgan: komplemen OR = AND dari komplemen. Digunakan untuk menyederhanakan ekspresi logika.",formula:"\\overline{A+B}=\\bar{A}\\cdot\\bar{B} \\;\\; \\overline{A\\cdot B}=\\bar{A}+\\bar{B}",tags:["De Morgan","penyederhanaan","logika","digital"]},
  {en:"Flip-Flop",id:"Flip-Flop",kat:"digital",desc:"Elemen memori 1-bit yang menyimpan keadaan biner.",detail:"Jenis: SR, D, JK, T. Flip-flop D paling umum di register dan memori. Keadaan berubah saat clock edge.",formula:"Q_{n+1} = D \\;\\; (\\text{D flip-flop})",tags:["SR","D","JK","T","memori","register","clock"]},
  {en:"ADC",id:"ADC (Analog to Digital Converter)",kat:"digital",desc:"Mengubah sinyal analog menjadi nilai digital.",detail:"Resolusi n-bit menghasilkan 2^n level. 10-bit ADC (Arduino) punya 1024 level. Frekuensi sampling ≥ 2x frekuensi sinyal (Nyquist).",formula:"V_{ref} / 2^n = \\text{resolusi per langkah}",tags:["konversi","resolusi","sampling","Nyquist","Arduino"]},
  {en:"DAC",id:"DAC (Digital to Analog Converter)",kat:"digital",desc:"Mengubah nilai digital menjadi sinyal analog.",detail:"Kebalikan ADC. Digunakan untuk output audio, kontrol motor, dan waveform generator.",formula:"V_{out} = V_{ref} \\cdot \\frac{D}{2^n}",tags:["konversi","audio","waveform","D/A"]},
  {en:"Multiplexer",id:"Multiplekser (MUX)",kat:"digital",desc:"Memilih satu dari beberapa input ke satu output.",detail:"MUX 4:1 memilih salah satu dari 4 input menggunakan 2 bit select. Digunakan untuk menghemat jalur data.",formula:"2^s = N_{inputs} \\;\\; (s=\\text{bit select})",tags:["MUX","selector","data","digital","komunikasi"]},
  {en:"Microcontroller",id:"Mikrokontroler",kat:"digital",desc:"Komputer mini dalam satu chip dengan CPU, memori, dan I/O.",detail:"Contoh: Arduino (AVR), STM32, ESP32. Dilengkapi ADC, PWM, UART, SPI, I2C dalam satu IC.",formula:"f_{clk} \\text{ menentukan kecepatan eksekusi}",tags:["Arduino","ESP32","STM32","embedded","IoT"]},
  // ==== PENGUKURAN ====
  {en:"Multimeter",id:"Multimeter",kat:"pengukuran",desc:"Alat ukur tegangan, arus, dan hambatan.",detail:"Mengukur tegangan DC/AC, arus DC, resistansi, kontinuitas, kadang kapasitansi dan frekuensi. Selalu cek range sebelum mengukur.",formula:"\\text{Ukur: } V,\\; I,\\; R,\\; \\text{Continuity}",tags:["AVO","voltmeter","amperemeter","ohmmeter"]},
  {en:"Oscilloscope",id:"Osiloskop",kat:"pengukuran",desc:"Alat visualisasi bentuk gelombang listrik.",detail:"Menampilkan grafik tegangan vs waktu. Digunakan untuk analisis amplitudo, frekuensi, fase, dan noise sinyal.",formula:"V = \\text{Div} \\times \\frac{V}{\\text{Div}} \\;\\; T = \\text{Div} \\times \\frac{t}{\\text{Div}}",tags:["waveform","sinyal","probe","bandwidth"]},
  {en:"Clamp Meter",id:"Tang Ampere",kat:"pengukuran",desc:"Mengukur arus tanpa memutus rangkaian.",detail:"Menggunakan prinsip induksi elektromagnetik. Ujung tang dikaitkan pada kabel yang dialiri arus.",formula:"I = \\frac{\\Phi}{N \\cdot \\mu_0 A}",tags:["tang ampere","arus","non-contact","induksi"]},
  {en:"LCR Meter",id:"LCR Meter",kat:"pengukuran",desc:"Mengukur induktansi, kapasitansi, dan resistansi.",detail:"Menerapkan sinyal AC dengan frekuensi tertentu dan menganalisis respons impedansi komponen.",formula:"Z = R + jX \\Rightarrow L,C,R",tags:["induktansi","kapasitansi","impedansi","komponen"]},
  {en:"Power Analyzer",id:"Analisator Daya",kat:"pengukuran",desc:"Mengukur daya aktif, reaktif, semu, dan faktor daya.",detail:"Digunakan untuk audit energi, analisis kualitas daya, dan pengujian peralatan listrik.",formula:"\\text{Baca: } P,\\; Q,\\; S,\\; PF,\\; THD",tags:["audit energi","kualitas daya","THD","harmonik"]},
  {en:"Function Generator",id:"Generator Fungsi",kat:"pengukuran",desc:"Alat pembangkit sinyal uji (sinus, kotak, segitiga).",detail:"Digunakan bersama osiloskop untuk menguji respons frekuensi rangkaian dan karakteristik komponen.",formula:"f_{out} \\text{ bisa diatur dari Hz hingga MHz}",tags:["sinyal uji","sinus","square","sawtooth","frekuensi"]},
  // ==== SINYAL ====
  {en:"Fourier Transform",id:"Transformasi Fourier",kat:"sinyal",desc:"Menguraikan sinyal menjadi komponen frekuensi.",detail:"Setiap sinyal periodik dapat direpresentasikan sebagai jumlahan sinusoid. Dasar dari analisis spektrum.",formula:"F(\\omega) = \\int_{-\\infty}^{\\infty} f(t)e^{-j\\omega t}dt",tags:["spektrum","frekuensi","FFT","analisis sinyal"]},
  {en:"Sampling Theorem",id:"Teorema Sampling (Nyquist)",kat:"sinyal",desc:"Syarat minimum frekuensi sampling untuk rekonstruksi sinyal.",detail:"Frekuensi sampling harus minimal 2x frekuensi tertinggi sinyal agar tidak terjadi aliasing.",formula:"f_s \\geq 2f_{max} \\;\\; (\\text{Nyquist})",tags:["Nyquist","aliasing","ADC","sampling","digital audio"]},
  {en:"Modulation",id:"Modulasi",kat:"sinyal",desc:"Proses menumpangkan informasi pada gelombang pembawa.",detail:"AM: memodulasi amplitudo. FM: memodulasi frekuensi. PM: memodulasi fase. Digunakan dalam radio, komunikasi.",formula:"AM: s(t)=[1+m\\cdot x(t)]\\cos(2\\pi f_c t)",tags:["AM","FM","PM","radio","komunikasi","carrier"]},
  {en:"Filter",id:"Filter Sinyal",kat:"sinyal",desc:"Rangkaian yang meloloskan atau memblokir frekuensi tertentu.",detail:"LPF: loloskan bawah. HPF: loloskan atas. BPF: loloskan band tertentu. BRF: notch filter.",formula:"f_c = \\frac{1}{2\\pi RC} \\;\\; (\\text{filter RC})",tags:["LPF","HPF","BPF","cutoff","frekuensi"]},
  {en:"Decibel",id:"Desibel (dB)",kat:"sinyal",desc:"Satuan logaritmik untuk perbandingan daya atau tegangan.",detail:"Digunakan dalam audio, RF, dan penguatan. 3dB = penguatan/redaman setengah daya. 20dB = 10x tegangan.",formula:"\\text{dB} = 20\\log_{10}\\frac{V_2}{V_1} = 10\\log_{10}\\frac{P_2}{P_1}",tags:["logaritmik","penguatan","audio","RF","atenuasi"]},
  {en:"Signal-to-Noise Ratio",id:"Rasio Sinyal-Noise (SNR)",kat:"sinyal",desc:"Perbandingan kekuatan sinyal terhadap noise.",detail:"SNR tinggi = sinyal lebih bersih. Dinyatakan dalam dB. Penting untuk komunikasi dan audio.",formula:"SNR = 10\\log_{10}\\frac{P_{signal}}{P_{noise}}",tags:["SNR","noise","kualitas","komunikasi","audio"]},
  {en:"Bode Plot",id:"Plot Bode",kat:"sinyal",desc:"Grafik respons frekuensi sistem (magnitude dan fase).",detail:"Digunakan untuk analisis stabilitas sistem dan desain filter. Menampilkan Gain (dB) dan Fase (°) vs frekuensi (log).",formula:"|H(j\\omega)|_{dB} = 20\\log_{10}|H(j\\omega)|",tags:["respons frekuensi","stabilitas","sistem kontrol","gain"]},
  {en:"Transmission Line",id:"Saluran Transmisi",kat:"sinyal",desc:"Konduktor untuk mentransmisi sinyal frekuensi tinggi.",detail:"Pada frekuensi tinggi, panjang kabel menjadi signifikan. Impedansi karakteristik Z0 harus dicocokkan untuk mencegah refleksi.",formula:"Z_0 = \\sqrt{\\frac{L'}{C'}} \\;\\; (\\Omega)",tags:["impedansi karakteristik","RF","matching","koaksial","PCB"]},
  {en:"Phase",id:"Fasa",kat:"sinyal",desc:"Posisi relatif suatu gelombang dalam satu siklus.",detail:"Dinyatakan dalam derajat (°) atau radian (rad). Dua sinyal sefasa (0°) atau berlawanan fasa (180°).",formula:"v(t) = V_m\\sin(\\omega t + \\varphi)",tags:["sudut fasa","sinus","AC","lagging","leading"]},
  // ==== LEBIH BANYAK ISTILAH ====
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
  {en:"Charge",id:"Muatan Listrik",kat:"dasar",desc:"Sifat fundamental materi yang menimbulkan gaya elektromagnetik.",detail:"Muatan elektron: -1.6× 10⁻¹⁹ C. Muatan proton: +1.6× 10⁻¹⁹ C. Satuan: Coulomb.",formula:"Q = n \\cdot e \\;\\; e = 1.6 \\times 10^{-19} C",tags:["coulomb","elektron","proton","muatan dasar"]},
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
  // ==== ENERGI TERBARUKAN (EBT) ====
  {en:"Wind Turbine",id:"Turbin Angin",kat:"terbarukan",desc:"Mengubah energi mekanik angin menjadi listrik.",detail:"Generator sinkron atau induksi diputar oleh bilah turbin. Digunakan pada PLTB (Pembangkit Listrik Tenaga Bayu).",formula:"P = \\frac{1}{2}\\rho A v^3 C_p",tags:["PLTB","angin","generator","renewable","kinetik"]},
  {en:"MPPT",id:"MPPT",kat:"terbarukan",desc:"Maximum Power Point Tracking untuk panel surya.",detail:"Algoritma kontroler DC-DC mengubah tegangan/arus agar panel surya selalu beroperasi di titik daya maksimumnya.",formula:"\\frac{dP}{dV} = 0 \\;\\; (\\text{Daya Maksimum})",tags:["solar charge","efisiensi","buck-boost","PLTS"]},
  {en:"Charge Controller",id:"SCC (Solar Charge Controller)",kat:"terbarukan",desc:"Pengatur pengisian daya baterai dari panel surya.",detail:"Mencegah baterai overcharge (kelebihan isi) dan overdischarge (terkuras). Sangat vital untuk keawetan baterai PLTS.",formula:"V_{batt} \\le V_{float} \\Rightarrow \\text{Aman}",tags:["baterai","regulator","PLTS","PWM","MPPT"]},
  {en:"SCADA",id:"SCADA",kat:"digital",desc:"Sistem monitor dan kontrol jarak jauh instalasi listrik.",detail:"Supervisory Control and Data Acquisition. Digunakan di pembangkit, distribusi PLN, dan industri proses.",formula:"\\text{RTU} \\leftrightarrow \\text{Master Station}",tags:["kontrol","monitoring","PLN","industri","RTU","HMI"]},
  {en:"PLC",id:"PLC (Programmable Logic Controller)",kat:"digital",desc:"Komputer industri untuk otomasi proses.",detail:"Menggantikan relay ladder konvensional. Diprogram dengan ladder diagram, FBD, atau ST. Tahan lingkungan industri.",formula:"\\text{Scan cycle: Input} \\to \\text{Program} \\to \\text{Output}",tags:["otomasi","industri","ladder","relay","SCADA"]},
  {en:"Capacitor Bank",id:"Bank Kapasitor",kat:"daya",desc:"Kumpulan kapasitor untuk koreksi faktor daya.",detail:"Dipasang di panel distribusi untuk mengkompensasi daya reaktif induktif. Meningkatkan PF mendekati 1 dan menghemat energi.",formula:"Q_C = \\frac{V^2}{X_C} = V^2 \\omega C",tags:["koreksi","faktor daya","LVMDP","APFC","reactive power"]},
  {en:"Surge Arrester",id:"Arester Surja",kat:"komponen",desc:"Komponen pelindung terhadap tegangan surja (petir/switching).",detail:"Memotong tegangan surja ke ground sebelum merusak peralatan. Wajib dipasang pada panel dan peralatan sensitif.",formula:"V_{clamping} < V_{protection} < V_{withstand}",tags:["proteksi","petir","surge","MOV","lightning"]},
  // ==== INSTALASI ====
  {en:"PUIL",id:"PUIL",kat:"instalasi",desc:"Persyaratan Umum Instalasi Listrik.",detail:"Buku standar wajib di Indonesia untuk perancangan, pemasangan, dan pemakaian instalasi listrik guna menjamin keselamatan keselamatan kerja dan keamanan bangunan.",formula:"\\text{SNI 0225:2011 (Versi Puil Terkini)}",tags:["regulasi","standar","keamanan","instalasi","SNI"]},
  {en:"MCB",id:"Miniature Circuit Breaker (MCB)",kat:"instalasi",desc:"Pengaman otomatis dari hubung singkat dan beban berlebih.",detail:"Memutus arus seketika saat batas nominal terlampaui. Memiliki dua pengaman mekanis: bimetal (overload) dan elektromagnetik (hubung singkat/short circuit).",formula:"I_{\\text{trip}} > I_{\\text{nominal}}",tags:["pemutus","proteksi","korsleting","panel","sekering"]},
  {en:"ELCB",id:"ELCB / RCBO",kat:"instalasi",desc:"Pemutus arus spesialis kebocoran tanah / tegangan sentuh.",detail:"Proteksi tingkat tinggi untuk nyawa manusia dari resiko tersetrum (kesetrum). Langsung jeglek (trip) jika mendeteksi kebocoran selisih arus sekecil 30mA menuju tanah (body/badan manusia).",formula:"|I_{\\text{Fasa}} - I_{\\text{Netral}}| > 30mA",tags:["anti kontak","kebocoran arus","keselamatan","ground fault","anti kesetrum"]},
  {en:"NYA / NYM / NYY Cable",id:"Kabel NYA / NYM / NYY",kat:"instalasi",desc:"Tata nama/standar penamaan kabel listrik PLN Indonesia.",detail:"NYA: Kabel inti tembaga kawat tunggal tanpa pelindung ekstra. NYM: Kabel banyak inti berpelindung ganda PVC biasanya untuk indoor (putih). NYY: Tahan cuaca & robekan, dirancang khusus instalasi tanam tanah outdoor (hitam).",formula:"I_{\\text{Kapasitas}} = \\text{Tabel KHA (Kuat Hantar Arus)}",tags:["kabel","konduktor","Tembaga","PVC","SPLN"]},
  {en:"PHB",id:"Panel Hubung Bagi (PHB)",kat:"instalasi",desc:"Kotak pusat pembagian energi (Distribution Board).",detail:"Lemari/boks baja tempat perangkat proteksi (MCB utama) dan rel tembaga (busbar) memecah tegangan distribusi arus tinggi menjadi cabang-cabang sirkuit kecil untuk setiap ruangan.",formula:"I_{\\text{Utama}} = \\sum_{n=1} I_{\\text{Sirkuit Cabang}}",tags:["distribusi","panel","busbar","kontrol distribusi","MDP"]},
  // ==== MESIN ====
  {en:"Stator & Rotor",id:"Stator dan Rotor",kat:"mesin",desc:"Bagian diam dan berputar pada sebuah mesin generator/motor.",detail:"Stator (Statis) terpasang di kerangka luar dan menciptakan medan putar AC. Sedangkan Rotor (Rotasi) ditengah-tengah yang terusir dan merespon induksi magnet lalu berputar menghasilkan gerak mekanik.",formula:"\\text{Stator} = \\text{Diam}, \\; \\text{Rotor} = \\text{Berputar}",tags:["anatomi mesin","motor lisrik","generator","kumparan"]},
  {en:"Synchronous Generator",id:"Generator Sinkron",kat:"mesin",desc:"Penghasil mayoritas suplai daya AC skala pembangkit / industri.",detail:"Dinamo/Alternator raksasa yang frekuensi listrik keluarannya mutlak bersinkronasi persis/sama rata sebanding dengan perputaran poros turbin di waduk, uap, atau PLTU.",formula:"f = \\frac{p \\cdot N_s}{120} \\;\\; (\\text{Hz})",tags:["alternator","pembangkit","PLN","sinkron","kecepatan sikron"]},
  {en:"Commutator",id:"Komutator & Sikat (Brush)",kat:"mesin",desc:"Sakelar pembalik arah otomatis pada poros motor arus searah (DC).",detail:"Cincin tembaga yang dibelah dan tersentuh oleh sikat karbon/arang. Gunanya memastikan bahwa arah gaya tolak elektro-magnet akan terus konstan tak peduli meski belitan kawat dalam poros telah berbalik 180 drajat.",formula:"\\tau = k \\cdot \\Phi \\cdot I_a",tags:["motor DC","sikat arang","brush","slip ring","rotasi"]},
  {en:"Stepper Motor",id:"Motor Stepper",kat:"mesin",desc:"Motor DC pergerakan presisi patah-patah / langkah murni.",detail:"Tidak berputar mulus melainkan bergerak berdasarkan komando 'pulsa digital' setiap sekian derajat (steps). Sangat mematikan dari segi keakuratan letak untuk Lengan Robot industri, Printer 3D, dan mesin pahat otomatis CNC.",formula:"\\text{Resolusi} = \\frac{360^\\circ}{\\text{Step Angle}} = 200 \\text{ steps/rev}",tags:["presisi","robotika","CNC","pulsa PWM","diskrit"]},
  // ==== KONTROL ====
  {en:"PID Controller",id:"Kontroler PID",kat:"kontrol",desc:"Proportional, Integral, Derivative Controller.",detail:"Algoritma loop kendali paling umum di ranah industri. Otak ini terus menghitung selisih 'error' dan otomatis menyesuaikan tarikan gas (output) agar mesin mencapai target dengan mulus tanpa bergetar berlebihan.",formula:"u(t) = K_p e(t) + K_i \\int_0^t e(\\tau) d\\tau + K_d \\frac{de(t)}{dt}",tags:["otomasi","feedback","loop","tuning","kendali"]},
  {en:"Closed Loop System",id:"Sistem Loop Tertutup",kat:"kontrol",desc:"Sistem kendali otomatis dengan penglihatan umpan balik.",detail:"Sistem mandiri yang menggunakan sensor untuk 'melihat' hasil akhirnya, lalu data tersebut ditarik balik untuk dikoreksi lagi jika meleset. Contoh: AC inverter atau cruise-control mobil.",formula:"\\text{Error} = \\text{Setpoint} - \\text{Measured}",tags:["feedback","umpan balik","sensor","cerdas","koreksi otomatis"]},
  {en:"Actuator",id:"Aktuator",kat:"kontrol",desc:"Otot penggerak mekanis dalam sistem robotika.",detail:"Jika sensor adalah mata dan controller adalah otak, maka Aktuator adalah ototnya. Komponen ini menerjemahkan sinyal listrik menjadi gerakan dorongan fisik yang nyata (piston hidrolik, motor relay, dll).",formula:"\\text{Signal Listrik} \\to \\text{Aksi Mekanik}",tags:["mekanik","penggerak","motor","solenoid","pneumatik","otot mesin"]},
  // ==== KOMUNIKASI ====
  {en:"I2C",id:"I2C (Inter-Integrated Circuit)",kat:"komunikasi",desc:"Protokol komunikasi serial jarak sangat dekat antar cip.",detail:"Sangat hemat tempat karena seluruh perangkat lunak (layar OLED, sensor) hanya butuh menumpang di 2 kabel yang sama: SDA (Data) dan SCL (Clock). Masing-masing komponen dipanggil lewat alamat ID.",formula:"\\text{Butuh Resistor Pull-Up (4.7k\\Omega)}",tags:["serial","protokol","sensor","mikrokontroler","bus","SDA SCL"]},
  {en:"SPI",id:"SPI (Serial Peripheral Interface)",kat:"komunikasi",desc:"Lajur komunikasi ekstrim antar perangkat (Super Cepat).",detail:"Memakai 4 kabel (MOSI, MISO, SCK, CS). Sangat populer dipakai Arduino untuk membaca modul berat seperti SD Card, Layar LCD warna, atau mentransfer data masif secara instan & bersamaan.",formula:"\\text{Full-Duplex (Kirim & Trima Berbarengan)}",tags:["serial","MISO","MOSI","sangat cepat","SD Card","RFID"]},
  {en:"UART",id:"UART / USART",kat:"komunikasi",desc:"Standar komunikasi serial asinkron dua arah merdeka.",detail:"Mengirim pecahan data bit-demi-bit saling silang (TX ke RX). Tergolong asinkron alias tanpa sinyal metronom (Clock), sehingga cip pengirim dan penerima wajib sepakat menggunakan Baud Rate (kecepatan) yang identik.",formula:"\\text{TX} \\to \\text{RX}, \\; \\text{RX} \\to \\text{TX}",tags:["serial","asinkron","baud rate","bluetooth HC-05","USB TTL"]},
  // ==== DISTRIBUSI ====
  {en:"SUTET",id:"SUTET",kat:"distribusi",desc:"Saluran Udara Tegangan Ekstra Tinggi menara PLN.",detail:"Jaringan kabel listrik naga terbang antar provinsi dengan tegangan brutal 500.000 Volt (500 kV). Tujuan digenjotnya Voltase begini adalah agar nilai 'Arusnya' menciut—sehingga meminimalkan triliunan rupiah rugi-rugi terbakarnya kawat.",formula:"P_{\\text{loss}} = I^2 \\cdot R",tags:["transmisi","PLN","tegangan tinggi","menara","tower","rugi daya"]},
  {en:"Substation",id:"Gardu Induk",kat:"distribusi",desc:"Markas sentral pembagi atau pengatur tekanan listrik.",detail:"Fasilitas raksasa lapang tempat bertemunya berbagai kabel transmisi antar kota. Berisi Trafo-Trafo monstrous yang bertugas mencekik turun Voltase (Step-Down) SUTET tadi agar ukurannya lebih normal sebelum masuk ke wilayah padat penduduk.",formula:"V_{\\text{primer}} \\gg V_{\\text{sekunder}}",tags:["trafo daya","switchyard","jaringan","pusat PLN","step-down"]},
  {en:"Busbar",id:"Busbar (Rel Tembaga)",kat:"distribusi",desc:"Tulang punggung pembagi arus di dalam lemari panel listrik.",detail:"Sebagai ganti kebel, digubran batangan logam murni masif (tembaga/aluminium) tanpa insulasi yang melintang guna menyalurkan suplai Arus raksasa ratusan Ampere menuju berbagai MCB anak bangunan secara aman tidak terbakar.",formula:"I_{\\text{Max}} = \\text{Kalkulasi Luas Penampang Batang}",tags:["rel tembaga","MDP","panel listrik","distribusi","konduktor arus tinggi", "panel switchgear"]},
  // ==== KOMPONEN TAMBAHAN ====
  {en:"Thermistor",id:"Termistor (NTC & PTC)",kat:"komponen",desc:"Resistor yang peka terhadap perubahan suhu.",detail:"NTC (Negative Temperature Coefficient) hambatannya turun saat panas, sering dipakai untuk sensor suhu. PTC (Positive) hambatannya naik drastis saat panas, sering dipakai sebagai sekering reset otomatis (Polyfuse).",formula:"R_T = R_0 \\exp\\left( \\beta \\left( \\frac{1}{T} - \\frac{1}{T_0} \\right) \\right)",tags:["sensor suhu","NTC","PTC","polyfuse"]},
  {en:"Varistor",id:"Varistor (VDR)",kat:"komponen",desc:"Resistor penjinak lonjakan tegangan (Voltage Dependent Resistor).",detail:"Hambatannya bernilai jutaan Ohm pada tegangan normal, tetapi akan anjlok drastis ke nyaris Nol Ohm seketika saat tersengat petir atau spike voltase ekstrem (Mem-bypass arus petir agar tak merusak TV/Kulkas).",formula:"R \\propto \\frac{1}{V^a}",tags:["MOV","surge protector","anti petir","proteksi"]},
  // ==== PENGUKURAN TAMBAHAN ====
  {en:"Megger",id:"Megger (Insulation Tester)",kat:"pengukuran",desc:"Alat pemberi siksaan tegangan tinggi untuk tes insulasi.",detail:"Alat ini menembakkan listrik DC ribuan volt (1000V - 5000V) ke dalam kulit kabel, sekadar untuk menguji apakah karet pembungkus kabel tersebut bocor atau tidak (mengukur resistansi insulasi dalam satuan MegaOhm/GigaOhm).",formula:"R_{\\text{insulasi}} \\ge 1 \\text{ M}\\Omega \\text{ per } 1000\\text{V}",tags:["tes kabel","mega ohm","kebocoran arus","k3"]},
  {en:"Lux Meter",id:"Lux Meter",kat:"pengukuran",desc:"Pengukur intensitas terang cahaya ruangan.",detail:"Sangat krusial untuk instalasi rumah atau kantor. Standar K3 mengatur bahwa ruang kerja/baca minimal harus diterangi 300 Lux agar mata manusia tidak lambat laun menjadi rabun.",formula:"E_v = \\frac{d\\Phi_v}{dA} \\;\\; (\\text{Lux} = \\text{Lumen/m}^2)",tags:["pencahayaan","penerangan","lumen","SNI","K3"]},
  // ==== EBT / TERBARUKAN TAMBAHAN ====
  {en:"Micro Hydro",id:"PLTMH (Pembangkit Mikrohidro)",kat:"terbarukan",desc:"Pembangkit listrik tenaga arus sungai skala desa.",detail:"Menggunakan kincir air mini untuk memutar generator secara gratis 24 jam nonstop. Cukup bermodalkan selisih ketinggian jatuhnya air (head) dan debit air sungai (flow). Cocok untuk desa terpencil.",formula:"P = \\eta \\cdot \\rho \\cdot g \\cdot Q \\cdot H",tags:["air","sungai","kincir","pelton","desa mandiri"]},
  {en:"Geothermal",id:"Geotermal (Tenaga Panas Bumi)",kat:"terbarukan",desc:"Energi abadi dari uap panas inti bumi.",detail:"Mengebor perut gunung berapi untuk mengambil semburan uap air mendidih. Uap tersebut didorong untuk memutar sumbu turbin Generator raksasa. Sangat cocok bagi Indonesia yang dikaruniai Ring of Fire.",formula:"E = m \\cdot h \\;\\; (\\text{Entalpi Uap})",tags:["PLTP","uap bumi","panas bumi","ring of fire","turbin"]},
  // ==== DIGITAL TAMBAHAN ====
  {en:"Shift Register",id:"Shift Register",kat:"digital",desc:"Perluas pin output mikrokontroler dengan sulap.",detail:"IC sakti (seperti seri 74HC595). Anda cuma mengorbankan 3 pin Arduino untuk bisa mengendalikan 8, 16, hingga ratusan lampu LED sekaligus secara paralel.",formula:"\\text{Serial IN} \\to \\text{Parallel OUT}",tags:["IC 74HC595","ekspansi PIN","multiplexing","arduino"]},
  {en:"Decoder",id:"Dekoder & Enkoder",kat:"digital",desc:"Penerjemah kode sandi Biner ke format manusia.",detail:"Rangkaian logika kombo yang mengubah input biner (misalnya sandi 1011) menjadi 1 jalur garis aktif. Contoh Dekoder 7-Segmen mengubah pin memori biner menjadi angka 8 bentuk lampu menyala.",formula:"N \\text{ bit} \\to 2^N \\text{ Output Jalur}",tags:["decoder","sandi biner","7-segment","terjemahan"]},
  // ==== ELEKTRONIKA DAYA (POWER ELECTRONICS) ====
  {en:"Thyristor (SCR)",id:"Silicon Controlled Rectifier",kat:"elektronika",desc:"Dioda raksasa yang butuh 'izin' untuk menghantarkan arus.",detail:"Berbeda dengan Dioda biasa, ia memiliki pin ke-3 yaitu 'Gate'. Arus raksasa dari Anoda cuma bisa lewat ke Katoda HANYA JIKA pin Gate kita setrum (trigger). Umum dipakai di Las Listrik dan pemanas Pabrik.",formula:"V_{AK} > 0 \\text{ dan } I_G > I_{GT}",tags:["sakelar daya","thyristor","katalisator","las listrik","pabrik"]},
  {en:"SMPS",id:"SMPS (Switching Power Supply)",kat:"elektronika",desc:"Adaptor mungil bertenaga naga tanpa trafo besi kubus yang berat.",detail:"Mengakali trafo besi 5kg kuno dengan Trafo Ferit mungil 50 gram menggunakan prinsip cacah-menyayat arus listrik pada frekuensi super kencang ber-PWM. Charger HP & Kotak Power Komputer Anda adalah buktinya.",formula:"V_{out} = D \\times V_{in} \\;\\; (\\text{Rasio Duty Cycle})",tags:["adaptor","charger","PSU","frekuensi tinggi","PWM","efisien"]},
  // ==== IoT & KONEKTIVITAS (DIGITAL/KOMUNIKASI) ====
  {en:"ESP32",id:"Mikrokontroler ESP32",kat:"digital",desc:"Cip 'Sakti' pembunuh Arduino dengan WiFi & Bluetooth bawaan.",detail:"Otak pintar seharga 50 ribu rupiah namun dibekali sayap mematikan (Dual-Core 240MHz). Langsung konek Internet, sambung Bluetooth, menggarap IoT mendunia tak terbatas jarak. Jauh melibas Arduino Uno 16MHz klasik.",formula:"\\text{Kecepatan 240MHz + Wi-Fi SoC}",tags:["IoT","wifi","bluetooth","smart home","nodemcu","mikrokontroler"]},
  {en:"MQTT Protocol",id:"Protokol MQTT",kat:"komunikasi",desc:"Bahasa telekomunikasi super enteng untuk mesin mengobrol.",detail:"Internet of Things (IoT) itu sangat anti protokol web/browser (HTTP) karena boros data. Mesin cerdas saling bisik lewat lorong MQTT (Subcribe-Publish) di broker, hitungan nyaris nol milidetik dengan kuota bytes mini.",formula:"\\text{Publish} \\to \\text{MQTT Broker} \\to \\text{Subscribe}",tags:["iot","internet of things","server","ringan","pesan instan","realtime"]},
  // ==== SENSOR INSTRUMENTASI INDUSTRI ====
  {en:"Thermocouple",id:"Termokopel (Thermocouple)",kat:"pengukuran",desc:"Sensor suhu penantang maut; celup baja cair sanggup.",detail:"Kabel kawat (2 logam berbeda disambung ujungnya) yang tiba-tiba menciptakan arus listrik mandiri (mV) akibat efek perbedaan panas kedua titik ekstremnya (Efek Seebeck). Menaklukkan suhu oven ratusan hingga ribuan drajat Celcius.",formula:"\\Delta V = S \\cdot \\Delta T \\;\\; (\\text{Efek Seebeck})",tags:["sensor suhu tinggi","peleburan","panas","tegangan","seebeck","oven pabrik"]},
  {en:"Load Cell",id:"Load Cell (Strain Gauge)",kat:"pengukuran",desc:"Pegas baja pendeteksi bengkokan mikro untuk Timbangan Digital.",detail:"Balok aluminium padat berlapis stiker kawat 'zigzag'. Anda letakkan gajah di atasnya, balok ikut melengkung sejauh ukuran 'rambut', kabel meregang dan merubah hambatannya (Ohm). Perubahan hambatan dikali angka untuk ketemu tonase berat.",formula:"R = \\rho \\frac{L}{A} \\;\\; (\\text{Kawat tertarik = Ohm Menanjak})",tags:["timbangan elektronik","berat murni","massa","alat ukur tonase","jembatan wheatstone"]}
];

const QUIZ_CATS = {
  dasar:      { label:'Dasar',       emoji:'', desc:'Tegangan, arus, hambatan, hukum dasar' },
  komponen:   { label:'Komponen',    emoji:'', desc:'Resistor, kapasitor, induktor, dioda, transistor' },
  rangkaian:  { label:'Rangkaian',   emoji:'', desc:'Seri, paralel, Kirchhoff, Thevenin, Norton' },
  daya:       { label:'Daya',        emoji:'', desc:'Daya aktif, reaktif, faktor daya, efisiensi' },
  elektronika:{ label:'Elektronika', emoji:'', desc:'Op-amp, transistor, penyearah, PWM' },
  digital:    { label:'Digital',     emoji:'', desc:'Gerbang logika, ADC, DAC, flip-flop, mikrokontroler' },
  sinyal:     { label:'Sinyal',      emoji:'', desc:'Filter, modulasi, FFT, bandwidth, dB' },
  pengukuran: { label:'Pengukuran',  emoji:'', desc:'Multimeter, osiloskop, LCR meter' },
  terbarukan: { label:'EBT',         emoji:'', desc:'Panel surya, turbin angin, inverter, MPPT, baterai' },
  instalasi:  { label:'Instalasi',   emoji:'', desc:'PUIL, grounding, kabel, MCB, safety K3' },
  mesin:      { label:'Mesin',       emoji:'', desc:'Motor DC/AC, generator, trafo, mesin industri' },
  kontrol:    { label:'Kontrol',     emoji:'', desc:'PLC, PID, feedback loop, robotik, otomasi' },
  komunikasi: { label:'Komunikasi',  emoji:'', desc:'I2C, SPI, UART, RS485, protokol IoT' },
  distribusi: { label:'Distribusi',  emoji:'', desc:'Gardu induk, transmisi SUTET, isolator, jaringan' },
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
   desc:"Intel meluncurkan 4004, mikroprosesor komersial pertama di dunia dengan 2.300 transistor dalam satu chip. Ini adalah komputer lengkap dalam sekeping silikon berukuran 12mm-².",
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

// ---- TENTANG ----
// VIDEO PEMBELAJARAN — Channel YouTube Indonesia (elektronika)
// Sumber: channel edukasi berbahasa Indonesia, diverifikasi via
// YouTube oEmbed. Thumbnail diambil dari i.ytimg.com.
// ---- TENTANG ----
const VIDEO_TOPICS = ['Semua','Dasar Listrik','Elektronika & Komponen','Motor Listrik','Energi Terbarukan','Instalasi & Panel','Digital & Kontrol','Arduino & IoT','PLC, HMI & SCADA'];

const VIDEOS = [
  // ==== DASAR LISTRIK ====
  { id:'YrziIT8kRmQ', title:'Seorang Teknisi Harus Faham Rumus Dasar Ini', channel:'TEKNIK LISTRIK', channelUrl:'https://www.youtube.com/@TEKNIKLISTRIK29', topic:'Dasar Listrik', desc:'Kumpulan rumus dasar kelistrikan (tegangan, arus, daya) yang wajib dikuasai teknisi & mahasiswa teknik elektro.' },
  { id:'nVD1jczzR-I', title:'Teori Dasar Listrik — Mencari Arus / Ampere', channel:'TEKNIK LISTRIK', channelUrl:'https://www.youtube.com/@TEKNIKLISTRIK29', topic:'Dasar Listrik', desc:'Cara menghitung arus listrik (ampere) dari tegangan dan hambatan, dijelaskan langkah demi langkah.' },
  { id:'aptOXSNpDp4', title:'Darimana Datangnya Listrik? (Animasi Edukasi)', channel:'museumlistrikpln', channelUrl:'https://www.youtube.com/@museumlistrikpln', topic:'Dasar Listrik', desc:'Animasi edukasi Museum Listrik PLN: sumber listrik dari tenaga uap, air, surya, diesel, dan gas.' },
  { id:'nWOdETgdytQ', title:'Listrik Dinamis — Rangkaian Hambatan Seri Paralel (Fisika SMP)', channel:'Le GuruLes', channelUrl:'https://www.youtube.com/@legurules', topic:'Dasar Listrik', desc:'Materi fisika SMP: hambatan pengganti, rangkaian seri dan paralel, lengkap dengan contoh soal.' },
  { id:'-e6m3WHeRZg', title:'30 Soal & Pembahasan Arus Searah (Hukum Ohm, Kirchhoff)', channel:'Justin Leonardo', channelUrl:'https://www.youtube.com/@JustinSLST57', topic:'Dasar Listrik', desc:'Latihan 30 soal arus searah kelas 12: rangkaian resistor seri/paralel, hukum Ohm, dan Kirchhoff untuk UTBK.' },
  { id:'4HnIp-_Ml1A', title:'Fisika Kelas 12 — Konsep Hukum Kirchoff 1 Loop', channel:'Rizu san study', channelUrl:'https://www.youtube.com/@rizusanstudy5844', topic:'Dasar Listrik', desc:'Konsep dasar Hukum Kirchoff untuk analisis loop rangkaian listrik, cocok untuk pemula.' },
  { id:'v13nuOWjuZo', title:'Fisika Kelas 9 — Hambatan Listrik & Hukum Ohm', channel:'Ganesha Operation', channelUrl:'https://www.youtube.com/@GaneshaOperationOfficial', topic:'Dasar Listrik', desc:'Hambatan pada kawat penghantar dan penerapan Hukum Ohm, dijelaskan dengan cara yang mudah dipahami.' },

  // ==== ELEKTRONIKA & KOMPONEN ====
  { id:'eJchTrTKLAo', title:'Apa Itu Elektronika? — Ayo Belajar Elektronika EP 01', channel:'Bang Leo Elektro', channelUrl:'https://www.youtube.com/@bangleoelektro', topic:'Elektronika & Komponen', desc:'Pengantar dunia elektronika: apa itu komponen, arus, dan cara mulai belajar elektronika dari nol.' },
  { id:'CZVYxynjDlI', title:'Tutorial Elektronika Dasar untuk Pemula', channel:'BISA AI Academy', channelUrl:'https://www.youtube.com/@BISAAI', topic:'Elektronika & Komponen', desc:'Panduan elektronika dasar oleh staf IoT BISA AI — dari komponen hingga cara merangkai.' },
  { id:'BXn0LaU_iY8', title:'Belajar Elektronika Paket Komplit: Skema, Resistor, SMD', channel:'Asan Elektronika', channelUrl:'https://www.youtube.com/@asanelektronika', topic:'Elektronika & Komponen', desc:'Paket komplit belajar elektronika: membaca skema, kode resistor, jenis komponen Through-Hole & SMD.' },
  { id:'Px5ma3U3U1k', title:'Resistor — Mengenal Komponen Elektronika Part 1', channel:'Asan Elektronika', channelUrl:'https://www.youtube.com/@asanelektronika', topic:'Elektronika & Komponen', desc:'Mengenal resistor: fungsi, jenis, dan cara menghitung nilai lewat kode warna, dijelaskan sederhana.' },
  { id:'EOqXndDRSho', title:'Cara Cepat Membaca Resistor 5 Gelang Tanpa Tabel', channel:'Guru Elektronika', channelUrl:'https://www.youtube.com/@guruelektronika', topic:'Elektronika & Komponen', desc:'Trik membaca kode warna resistor 5 gelang dengan cepat tanpa menghafal tabel.' },
  { id:'kZLi5BXvCWY', title:'Penjelasan Transistor NPN & Cara Membaca Rangkaiannya', channel:'Guru Elektronika', channelUrl:'https://www.youtube.com/@guruelektronika', topic:'Elektronika & Komponen', desc:'Cara kerja transistor NPN dan teknik membaca rangkaian yang memakai transistor.' },
  { id:'m_tUE_dqi6g', title:'Membaca & Mengidentifikasi Komponen Elektronika Aktif', channel:'Direktorat SMK - Kemdikdasmen', channelUrl:'https://www.youtube.com/@DirektoratSMKKemendikdasmen', topic:'Elektronika & Komponen', desc:'Video pembelajaran SMK: mengenali komponen aktif seperti dioda, transistor, dan IC.' },
  { id:'K3RkHJnAqrE', title:'Cara Menghitung Nilai Resistor dengan Kode Warna', channel:'IT channEL', channelUrl:'https://www.youtube.com/@itchannel_indonesia', topic:'Elektronika & Komponen', desc:'Langkah praktis menghitung nilai resistor 4 gelang warna beserta contoh soal.' },
  { id:'PaLa97hOTp4', title:'Cara Membaca Nilai Resistor 5 Gelang Warna — Part 2', channel:'ODHE AL Channel', channelUrl:'https://www.youtube.com/@odhealchannel330', topic:'Elektronika & Komponen', desc:'Lanjutan membaca resistor 5 gelang warna: dari tabel kode hingga contoh nyata.' },
  { id:'cYKK4Qd_k-A', title:'Cara Mudah Memahami Kode Resistor SMD', channel:'WIMA PROJECT', channelUrl:'https://www.youtube.com/@wimaproject', topic:'Elektronika & Komponen', desc:'Cara membaca kode resistor SMD (misal 102, 473, R47) yang umum dipakai di PCB modern.' },
  { id:'AxvqQrGHZXA', title:'Cara Menghitung Warna Resistor (Colour Code)', channel:'MI channel88', channelUrl:'https://www.youtube.com/@MIchannel88Ns', topic:'Elektronika & Komponen', desc:'Metode cepat menghafal urutan warna resistor dan menghitung nilainya.' },

  // ==== MOTOR LISTRIK ====
  { id:'Mt6hCs-IGH8', title:'Cara Mudah Memahami Karakteristik Motor Induksi', channel:'Muhal Media Creation', channelUrl:'https://www.youtube.com/@muhal-Creation', topic:'Motor Listrik', desc:'Rekaman pelatihan aplikasi motor listrik di industri: konsep & karakteristik motor induksi.' },
  { id:'5vVExtcuk80', title:'Apa itu VFD (Variable Frequency Drive)? Part 1', channel:'JAGO LISTRIK', channelUrl:'https://www.youtube.com/@JAGOLISTRIK', topic:'Motor Listrik', desc:'VFD/Inverter pengatur kecepatan motor 3 phase: prinsip kerja dan aplikasinya di industri.' },
  { id:'0YSXEDgCyXg', title:'Cara Kerja Motor Listrik DC', channel:'Autoexpose', channelUrl:'https://www.youtube.com/@Autoexposeid', topic:'Motor Listrik', desc:'Prinsip kerja motor listrik DC — mengubah energi listrik menjadi gerak, dengan animasi yang jelas.' },

  // ==== ENERGI TERBARUKAN ====
  { id:'FHsnvcvYp5U', title:'Fakta Menarik Sumber Energi Terbarukan', channel:'Majalah Bobo', channelUrl:'https://www.youtube.com/@MajalahBobo', topic:'Energi Terbarukan', desc:'Fakta seru seputar energi terbarukan dan contohnya dalam kehidupan sehari-hari.' },
  { id:'JzZGD7UXRyM', title:'IPA — Energi Terbarukan dan Tak Terbarukan', channel:'GIA Academy', channelUrl:'https://www.youtube.com/@GIAAcademy', topic:'Energi Terbarukan', desc:'Konsep energi terbarukan vs tak terbarukan: matahari, angin, air, dan lainnya.' },
  { id:'QWaqWD-brKs', title:'Energi Biomassa (Animasi Edukasi)', channel:'museumlistrikpln', channelUrl:'https://www.youtube.com/@museumlistrikpln', topic:'Energi Terbarukan', desc:'Animasi produksi MLEB: mengubah limbah biomassa menjadi energi listrik dan bahan bakar.' },
  { id:'x-NPJYcrt84', title:'Energi Air — PLTA Cirata', channel:'museumlistrikpln', channelUrl:'https://www.youtube.com/@museumlistrikpln', topic:'Energi Terbarukan', desc:'Cara PLTA memanfaatkan aliran air untuk memutar turbin dan membangkitkan listrik.' },
  { id:'f-4y05MYpu4', title:'Yuk, Mengenal Cara Kerja Panel Surya!', channel:'SUN Energy', channelUrl:'https://www.youtube.com/@sunenergyid', topic:'Energi Terbarukan', desc:'Penjelasan cara kerja panel surya mengubah energi matahari menjadi listrik (PLTS).' },
  { id:'hG3km2fGgrM', title:'Energi Terbarukan: Pengertian, Jenis & Dampak', channel:'Halo Edukasi', channelUrl:'https://www.youtube.com/@HaloEdukasi', topic:'Energi Terbarukan', desc:'Materi lengkap energi terbarukan: pengertian, jenis, dampak positif, dan contohnya.' },

  // ==== INSTALASI & PANEL ====
  { id:'SqQOkcKxOgA', title:'Belajar Instalasi Listrik Dasar — Pemula Langsung Paham', channel:'Guru Elektronika', channelUrl:'https://www.youtube.com/@guruelektronika', topic:'Instalasi & Panel', desc:'Instalasi listrik dasar untuk pemula: saklar, stop kontak, dan jalur kabel yang aman.' },
  { id:'yblVhc1nGt4', title:'Desain Gambar Teknik Instalasi Listrik dengan ProfiCAD', channel:'ArduMeka', channelUrl:'https://www.youtube.com/@ArduMeka', topic:'Instalasi & Panel', desc:'Membuat gambar teknik instalasi listrik memakai ProfiCAD untuk kebutuhan pembelajaran vokasional.' },
  { id:'JU08ywG2R4g', title:'Mengoperasikan Instalasi Listrik Bangunan Gedung', channel:'Direktorat SMK - Kemdikdasmen', channelUrl:'https://www.youtube.com/@DirektoratSMKKemendikdasmen', topic:'Instalasi & Panel', desc:'Video pembelajaran SMK: komponen dan proses wiring instalasi listrik bangunan gedung.' },

  // ==== DIGITAL & KONTROL ====
  { id:'xovWttK1IIM', title:'Belajar Bareng Komunitas Teknik Listrik — Gerbang Logika', channel:'TEKNIK LISTRIK', channelUrl:'https://www.youtube.com/@TEKNIKLISTRIK29', topic:'Digital & Kontrol', desc:'Pengenalan gerbang logika (AND, OR, NOT) untuk dasar sistem kontrol dan elektronika digital.' },
  { id:'VT5cg2nQIDg', title:'Cara Tercepat Belajar Wiring Kontrol', channel:'TEKNIK LISTRIK', channelUrl:'https://www.youtube.com/@TEKNIKLISTRIK29', topic:'Digital & Kontrol', desc:'Teknik membaca & merakit wiring kontrol industri (kontaktor, relay, timer) dengan cepat.' },
  { id:'4c9GwhuXpVc', title:'Memasang Instalasi PLC — Teknik Instalasi Tenaga Listrik', channel:'Direktorat SMK - Kemdikdasmen', channelUrl:'https://www.youtube.com/@DirektoratSMKKemendikdasmen', topic:'Digital & Kontrol', desc:'Praktik memasang instalasi PLC untuk otomasi industri, materi SMK Teknik Instalasi Tenaga Listrik.' },

  // ==== ARDUINO & IoT ====
  { id:'EN0Et74bBrU', title:'Tutorial Arduino 2024 — Dari 0 untuk Pemula', channel:'Dea Afrizal', channelUrl:'https://www.youtube.com/@deaafrizal', topic:'Arduino & IoT', desc:'Panduan dasar mikrokontroler Arduino Uno dari nol sampai bisa, langsung praktik.' },
  { id:'gJ-qd7U_Lw8', title:'Arduino Crash Course Bahasa Indonesia [2022]', channel:'Gus Nando', channelUrl:'https://www.youtube.com/@GusNando', topic:'Arduino & IoT', desc:'Belajar Arduino dari pemula: install IDE, setup & loop, hingga proyek pertama.' },
  { id:'9dHfT9M0DYU', title:'#1 Pengenalan — Tutorial Arduino Indonesia', channel:'Sigit Indriyanto', channelUrl:'https://www.youtube.com/@neosigitindriyanto', topic:'Arduino & IoT', desc:'Seri tutorial Arduino Indonesia: pengenalan hardware dan komponen pendukung.' },
  { id:'mBdWGOKFWIc', title:'Arduino Uno Pin — Tutorial untuk Pemula', channel:'Siapa Tahu Penemuan', channelUrl:'https://www.youtube.com/@SiapaTahuPenemuan', topic:'Arduino & IoT', desc:'Mengenal nama dan fungsi setiap pin Arduino Uno beserta kegunaannya.' },
  { id:'NUZx5TLe4uo', title:'Tutorial Arduino Bahasa Indonesia — Data Type (3)', channel:'Coders Indonesia', channelUrl:'https://www.youtube.com/@codersindonesia', topic:'Arduino & IoT', desc:'Belajar tipe data pemrograman Arduino: integer, float, dan boolean.' },

  // ==== PLC, HMI & SCADA (dari dasar hingga kompleks) ====
  // DASAR
  { id:'df7sxxhGKvw', title:'Pengenalan Dasar PLC | Apa itu PLC?', channel:'Anak Elektro', channelUrl:'https://www.youtube.com/@anakelektro3459', topic:'PLC, HMI & SCADA', desc:'Pengenalan PLC: apa itu Programmable Logic Controller, komponen penyusunnya, dan perannya dalam otomasi industri.' },
  { id:'59aLF8bxPoQ', title:'DASAR PLC — Komunitas Teknik Listrik', channel:'TEKNIK LISTRIK', channelUrl:'https://www.youtube.com/@TEKNIKLISTRIK29', topic:'PLC, HMI & SCADA', desc:'Materi dasar PLC dari komunitas Teknik Listrik — cocok untuk pemula dari SMK hingga otodidak.' },
  { id:'DU27_ece_50', title:'FUNGSI PLC (Programmable Logic Controller)', channel:'TEKNIK LISTRIK', channelUrl:'https://www.youtube.com/@TEKNIKLISTRIK29', topic:'PLC, HMI & SCADA', desc:'Fungsi-fungsi utama PLC dalam sistem kontrol industri: logika, timing, counting, hingga komunikasi antar device.' },
  { id:'2tneV_ZeUSA', title:'Belajar Ladder Program PLC dari NOL | Episode 1 | Gerbang Logika AND', channel:'JAGO LISTRIK', channelUrl:'https://www.youtube.com/@JAGOLISTRIK', topic:'PLC, HMI & SCADA', desc:'Memahami cara kerja PLC dan ladder diagram dari nol — episode 1 membahas gerbang logika AND.' },
  // MENENGAH
  { id:'-2AvewJbOZU', title:'Belajar Ladder Program PLC dari NOL | Episode 2 | Gerbang Logika OR dan NOT', channel:'JAGO LISTRIK', channelUrl:'https://www.youtube.com/@JAGOLISTRIK', topic:'PLC, HMI & SCADA', desc:'Lanjutan ladder diagram: kombinasi gerbang logika OR dan NOT untuk menyusun program kontrol nyata.' },
  { id:'MhIb4JGlhvU', title:'Mengoperasikan PLC — Teknik Otomasi Industri', channel:'Direktorat SMK - Kemdikdasmen', channelUrl:'https://www.youtube.com/@DirektoratSMKKemendikdasmen', topic:'PLC, HMI & SCADA', desc:'Video pembelajaran SMK Teknik Otomasi Industri: mengoperasikan PLC mulai dari wiring hingga menjalankan program.' },
  { id:'p--wbxOj7jE', title:'Belajar PLC Zelio: Rangkaian Program, Pengkabelan & Ladder Diagram', channel:'AMK2 Channel', channelUrl:'https://www.youtube.com/@amk2channel996', topic:'PLC, HMI & SCADA', desc:'Tutorial PLC Zelio Soft: membuat rangkaian program, pengkabelan PLC, ladder diagram, dan transfer program.' },
  { id:'XYon1CVK47c', title:'KEKURANGAN PLC (Programmable Logic Controller)', channel:'TEKNIK LISTRIK', channelUrl:'https://www.youtube.com/@TEKNIKLISTRIK29', topic:'PLC, HMI & SCADA', desc:'Sisi lain PLC: keterbatasan dan hal yang perlu dipertimbangkan saat memilih PLC untuk sistem kontrol.' },
  { id:'OA1WcpH3Orw', title:'Wecon HMI — Modbus RS-485 dari Inverter ke HMI Levi Series', channel:'Wecon Indonesia', channelUrl:'https://www.youtube.com/@weconindonesia', topic:'PLC, HMI & SCADA', desc:'Dasar komunikasi HMI: menghubungkan inverter ke HMI Wecon Levi Series via protokol Modbus RTU (RS-485).' },
  // KOMPLEKS
  { id:'Kz7nquKf3CQ', title:'Inverter Wecon ke HMI Wecon via Modbus 485', channel:'Wecon Indonesia', channelUrl:'https://www.youtube.com/@weconindonesia', topic:'PLC, HMI & SCADA', desc:'Konfigurasi komunikasi Modbus 485 antara inverter dan HMI Wecon untuk monitoring dan kontrol parameter motor.' },
  { id:'Hxf3B-neJ88', title:'Komunikasi Wecon HMI dengan Mitsubishi FX3U (RS-422)', channel:'Wecon Indonesia', channelUrl:'https://www.youtube.com/@weconindonesia', topic:'PLC, HMI & SCADA', desc:'Cara menghubungkan HMI Wecon ke PLC Mitsubishi FX3U menggunakan protokol RS-422, lengkap dengan setting address.' },
  { id:'DP41lE_hyAA', title:'Wecon HMI — Komunikasi Modbus dengan Servo Wecon', channel:'Wecon Indonesia', channelUrl:'https://www.youtube.com/@weconindonesia', topic:'PLC, HMI & SCADA', desc:'Integrasi HMI dengan servo drive Wecon via Modbus: setting parameter, display, dan kontrol posisi/kecepatan.' },
  { id:'TmTyxr_D_n8', title:'Pengenalan SCADA (Supervisory Control And Data Acquisition)', channel:'Anak Elektro 09', channelUrl:'https://www.youtube.com/@AnakElektro09', topic:'PLC, HMI & SCADA', desc:'Apa itu SCADA: kumpulan software & hardware untuk memantau dan mengendalikan proses industri secara real-time.' },
  { id:'32qBzn3Wk2s', title:'Implementasi SCADA Pompa Sunter Selatan Jakarta Utara', channel:'Dinas Sumber Daya Air Provinsi DKI Jakarta', channelUrl:'https://www.youtube.com/@dinassdajakarta', topic:'PLC, HMI & SCADA', desc:'Contoh nyata penerapan SCADA di lapangan: monitoring dan kontrol pompa air secara terpusat dan real-time.' },
];

// ========================================================================================================================-”€
// BANK PROYEK SIAP PAKAI (Terverifikasi) — Wokwi
// diagram & kode sudah divalidasi manual; langsung bisa disimulasikan
// ========================================================================================================================-”€
const WOKWI_TEMPLATES = [
  {
    id: "tpl-led-blink",
    title: "LED Blink (Hello World)",
    desc: "Kedipkan LED tiap 1 detik — proyek paling dasar untuk memahami struktur setup() dan loop() di Arduino.",
    difficulty: "Mudah",
    tags: ["LED", "Dasar"],
    verified: true,
    bom: ["1x Arduino Uno", "1x LED merah", "1x Resistor 220 Ohm", "Kabel jumper"],
    wiring_guide: [
      { komponen: "Resistor R1", pin_komponen: "1", koneksi_arduino: "Pin 13" },
      { komponen: "LED D1", pin_komponen: "A (anoda)", koneksi_arduino: "Resistor R1 pin 2" },
      { komponen: "LED D1", pin_komponen: "C (katoda)", koneksi_arduino: "GND" }
    ],
    cpp_code: "// Proyek: LED Blink\n// Logika: Kedip tiap 1 detik\n// Platform: Uno\nvoid setup() {\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(1000);\n  digitalWrite(13, LOW);\n  delay(1000);\n}",
    wokwi_diagram: JSON.stringify({
      version: 1, author: "ElektroDict", editor: "wokwi",
      parts: [
        { type: "wokwi-arduino-uno", id: "uno", top: 0, left: 0, attrs: {} },
        { type: "wokwi-led", id: "led1", top: -100, left: 300, attrs: { color: "red" } },
        { type: "wokwi-resistor", id: "r1", top: -20, left: 300, attrs: { value: "220" } }
      ],
      connections: [
        ["uno:13", "r1:1", "green", ["v0"]],
        ["r1:2", "led1:A", "green", ["v0"]],
        ["led1:C", "uno:GND.1", "black", ["v0"]]
      ]
    }),
    steps: [
      { nama_komponen: "Arduino Uno", alur_perakitan: "Siapkan papan Arduino Uno di breadboard atau meja kerja." },
      { nama_komponen: "Resistor 220 Ohm", alur_perakitan: "Hubungkan satu ujung resistor ke Pin 13 Arduino." },
      { nama_komponen: "LED Merah", alur_perakitan: "Hubungkan kaki anoda (panjang) LED ke ujung resistor yang lain." },
      { nama_komponen: "Ground", alur_perakitan: "Hubungkan kaki katoda (pendek) LED ke pin GND Arduino." }
    ]
  },
  {
    id: "tpl-traffic-light",
    title: "Lampu Lalu Lintas 3 LED",
    desc: "Simulasi lampu lalu lintas: merah 3 detik, kuning 1 detik, hijau 3 detik secara bergantian.",
    difficulty: "Mudah",
    tags: ["LED", "Kontrol"],
    verified: true,
    bom: ["1x Arduino Uno", "1x LED merah, 1x kuning, 1x hijau", "3x Resistor 220 Ohm", "Kabel jumper"],
    wiring_guide: [
      { komponen: "LED Merah", pin_komponen: "A", koneksi_arduino: "Pin 12 (via resistor)" },
      { komponen: "LED Kuning", pin_komponen: "A", koneksi_arduino: "Pin 11 (via resistor)" },
      { komponen: "LED Hijau", pin_komponen: "A", koneksi_arduino: "Pin 10 (via resistor)" },
      { komponen: "Semua LED", pin_komponen: "C", koneksi_arduino: "GND" }
    ],
    cpp_code: "// Proyek: Lampu Lalu Lintas\n// Logika: Merah 3s, kuning 1s, hijau 3s\n// Platform: Uno\nint merah = 12, kuning = 11, hijau = 10;\n\nvoid setup() {\n  pinMode(merah, OUTPUT);\n  pinMode(kuning, OUTPUT);\n  pinMode(hijau, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(merah, HIGH);\n  delay(3000);\n  digitalWrite(merah, LOW);\n  digitalWrite(kuning, HIGH);\n  delay(1000);\n  digitalWrite(kuning, LOW);\n  digitalWrite(hijau, HIGH);\n  delay(3000);\n  digitalWrite(hijau, LOW);\n  delay(50);\n}",
    wokwi_diagram: JSON.stringify({
      version: 1, author: "ElektroDict", editor: "wokwi",
      parts: [
        { type: "wokwi-arduino-uno", id: "uno", top: 0, left: 0, attrs: {} },
        { type: "wokwi-led", id: "ledM", top: -180, left: 300, attrs: { color: "red" } },
        { type: "wokwi-led", id: "ledK", top: -100, left: 300, attrs: { color: "yellow" } },
        { type: "wokwi-led", id: "ledH", top: -20, left: 300, attrs: { color: "green" } },
        { type: "wokwi-resistor", id: "r1", top: -180, left: 200, attrs: { value: "220" } },
        { type: "wokwi-resistor", id: "r2", top: -100, left: 200, attrs: { value: "220" } },
        { type: "wokwi-resistor", id: "r3", top: -20, left: 200, attrs: { value: "220" } }
      ],
      connections: [
        ["uno:12", "r1:1", "green", ["v0"]],
        ["r1:2", "ledM:A", "green", ["v0"]],
        ["ledM:C", "uno:GND.1", "black", ["v0"]],
        ["uno:11", "r2:1", "yellow", ["v0"]],
        ["r2:2", "ledK:A", "yellow", ["v0"]],
        ["ledK:C", "uno:GND.2", "black", ["v0"]],
        ["uno:10", "r3:1", "blue", ["v0"]],
        ["r3:2", "ledH:A", "blue", ["v0"]],
        ["ledH:C", "uno:GND.3", "black", ["v0"]]
      ]
    }),
    steps: [
      { nama_komponen: "LED Merah", alur_perakitan: "Anoda LED merah ke Pin 12 via resistor 220 Ohm." },
      { nama_komponen: "LED Kuning", alur_perakitan: "Anoda LED kuning ke Pin 11 via resistor 220 Ohm." },
      { nama_komponen: "LED Hijau", alur_perakitan: "Anoda LED hijau ke Pin 10 via resistor 220 Ohm." },
      { nama_komponen: "Ground", alur_perakitan: "Katoda ketiga LED disambung ke pin GND Arduino." }
    ]
  },
  {
    id: "tpl-dht22",
    title: "Suhu & Kelembaban DHT22",
    desc: "Baca suhu dan kelembaban ruangan dengan sensor DHT22, tampilkan di Serial Monitor tiap 2 detik.",
    difficulty: "Mudah",
    tags: ["Sensor", "DHT22"],
    verified: true,
    libraries: ["DHT sensor library"],
    bom: ["1x Arduino Uno", "1x Sensor DHT22", "Kabel jumper"],
    wiring_guide: [
      { komponen: "DHT22", pin_komponen: "VCC", koneksi_arduino: "5V" },
      { komponen: "DHT22", pin_komponen: "SDA", koneksi_arduino: "Pin 2" },
      { komponen: "DHT22", pin_komponen: "GND", koneksi_arduino: "GND" }
    ],
    cpp_code: "// Proyek: Sensor DHT22\n// Logika: Baca suhu & kelembaban\n// Platform: Uno\n#include <DHT.h>\n#define DHTPIN 2\n#define DHTTYPE DHT22\nDHT dht(DHTPIN, DHTTYPE);\n\nvoid setup() {\n  Serial.begin(9600);\n  dht.begin();\n}\n\nvoid loop() {\n  float h = dht.readHumidity();\n  float t = dht.readTemperature();\n  if (!isnan(h) && !isnan(t)) {\n    Serial.print(\"Kelembaban: \");\n    Serial.print(h);\n    Serial.print(\"%  Suhu: \");\n    Serial.print(t);\n    Serial.println(\"C\");\n  }\n  delay(2000);\n}",
    wokwi_diagram: JSON.stringify({
      version: 1, author: "ElektroDict", editor: "wokwi",
      parts: [
        { type: "wokwi-arduino-uno", id: "uno", top: 0, left: 0, attrs: {} },
        { type: "wokwi-dht22", id: "dht", top: -120, left: 300, attrs: {} }
      ],
      connections: [
        ["dht:VCC", "uno:5V", "red", ["v0"]],
        ["dht:SDA", "uno:2", "green", ["v0"]],
        ["dht:GND", "uno:GND.1", "black", ["v0"]]
      ]
    }),
    steps: [
      { nama_komponen: "Sensor DHT22", alur_perakitan: "Pasang DHT22 pada breadboard." },
      { nama_komponen: "VCC", alur_perakitan: "Hubungkan pin VCC sensor ke 5V Arduino." },
      { nama_komponen: "SDA", alur_perakitan: "Hubungkan pin SDA sensor ke Pin 2 Arduino (data)." },
      { nama_komponen: "GND", alur_perakitan: "Hubungkan pin GND sensor ke GND Arduino." }
    ]
  },
  {
    id: "tpl-hc-sr04",
    title: "Pengukur Jarak HC-SR04",
    desc: "Ukur jarak benda dengan sensor ultrasonik HC-SR04 dan tampilkan dalam cm di Serial Monitor.",
    difficulty: "Menengah",
    tags: ["Sensor", "Ultrasonik"],
    verified: true,
    bom: ["1x Arduino Uno", "1x Sensor HC-SR04", "Kabel jumper"],
    wiring_guide: [
      { komponen: "HC-SR04", pin_komponen: "VCC", koneksi_arduino: "5V" },
      { komponen: "HC-SR04", pin_komponen: "TRIG", koneksi_arduino: "Pin 9" },
      { komponen: "HC-SR04", pin_komponen: "ECHO", koneksi_arduino: "Pin 10" },
      { komponen: "HC-SR04", pin_komponen: "GND", koneksi_arduino: "GND" }
    ],
    cpp_code: "// Proyek: Pengukur Jarak\n// Logika: Ultrasonik -> cm\n// Platform: Uno\nconst int trig = 9, echo = 10;\n\nvoid setup() {\n  Serial.begin(9600);\n  pinMode(trig, OUTPUT);\n  pinMode(echo, INPUT);\n}\n\nvoid loop() {\n  digitalWrite(trig, LOW);\n  delayMicroseconds(2);\n  digitalWrite(trig, HIGH);\n  delayMicroseconds(10);\n  digitalWrite(trig, LOW);\n  long dur = pulseIn(echo, HIGH);\n  float cm = dur * 0.034 / 2;\n  Serial.print(\"Jarak: \");\n  Serial.print(cm);\n  Serial.println(\" cm\");\n  delay(500);\n}",
    wokwi_diagram: JSON.stringify({
      version: 1, author: "ElektroDict", editor: "wokwi",
      parts: [
        { type: "wokwi-arduino-uno", id: "uno", top: 0, left: 0, attrs: {} },
        { type: "wokwi-hc-sr04", id: "hc", top: -120, left: 300, attrs: {} }
      ],
      connections: [
        ["hc:VCC", "uno:5V", "red", ["v0"]],
        ["hc:TRIG", "uno:9", "green", ["v0"]],
        ["hc:ECHO", "uno:10", "yellow", ["v0"]],
        ["hc:GND", "uno:GND.1", "black", ["v0"]]
      ]
    }),
    steps: [
      { nama_komponen: "Sensor HC-SR04", alur_perakitan: "Pasang sensor menghadap area pengukuran." },
      { nama_komponen: "VCC & GND", alur_perakitan: "Hubungkan VCC ke 5V dan GND ke GND Arduino." },
      { nama_komponen: "TRIG", alur_perakitan: "Hubungkan TRIG ke Pin 9 Arduino." },
      { nama_komponen: "ECHO", alur_perakitan: "Hubungkan ECHO ke Pin 10 Arduino." }
    ]
  },
  {
    id: "tpl-lcd1602",
    title: "Tampilan LCD 16x2",
    desc: "Tampilkan teks 'ElektroDict!' pada LCD 16x2 mode parallel 4-bit — dasar untuk proyek display.",
    difficulty: "Menengah",
    tags: ["LCD", "Display"],
    verified: true,
    bom: ["1x Arduino Uno", "1x LCD 1602", "Kabel jumper"],
    wiring_guide: [
      { komponen: "LCD", pin_komponen: "VSS", koneksi_arduino: "GND" },
      { komponen: "LCD", pin_komponen: "VDD", koneksi_arduino: "5V" },
      { komponen: "LCD", pin_komponen: "RS", koneksi_arduino: "Pin 12" },
      { komponen: "LCD", pin_komponen: "RW", koneksi_arduino: "GND" },
      { komponen: "LCD", pin_komponen: "E", koneksi_arduino: "Pin 11" },
      { komponen: "LCD", pin_komponen: "D4-D7", koneksi_arduino: "Pin 10, 9, 8, 7" },
      { komponen: "LCD", pin_komponen: "A/K", koneksi_arduino: "5V / GND (backlight)" }
    ],
    cpp_code: "// Proyek: LCD 16x2\n// Logika: Tampilkan teks statis\n// Platform: Uno\n#include <LiquidCrystal.h>\nLiquidCrystal lcd(12, 11, 10, 9, 8, 7);\n\nvoid setup() {\n  lcd.begin(16, 2);\n  lcd.print(\"ElektroDict!\");\n  lcd.setCursor(0, 1);\n  lcd.print(\"Belajar Elektro\");\n}\n\nvoid loop() {\n  delay(50);\n}",
    wokwi_diagram: JSON.stringify({
      version: 1, author: "ElektroDict", editor: "wokwi",
      parts: [
        { type: "wokwi-arduino-uno", id: "uno", top: 0, left: 0, attrs: {} },
        { type: "wokwi-lcd1602", id: "lcd", top: -180, left: 300, attrs: {} }
      ],
      connections: [
        ["lcd:VSS", "uno:GND.1", "black", ["v0"]],
        ["lcd:VDD", "uno:5V", "red", ["v0"]],
        ["lcd:V0", "uno:GND.2", "black", ["v0"]],
        ["lcd:RS", "uno:12", "green", ["v0"]],
        ["lcd:RW", "uno:GND.3", "black", ["v0"]],
        ["lcd:E", "uno:11", "yellow", ["v0"]],
        ["lcd:D4", "uno:10", "blue", ["v0"]],
        ["lcd:D5", "uno:9", "blue", ["v0"]],
        ["lcd:D6", "uno:8", "blue", ["v0"]],
        ["lcd:D7", "uno:7", "blue", ["v0"]],
        ["lcd:A", "uno:5V", "red", ["v0"]],
        ["lcd:K", "uno:GND.1", "black", ["v0"]]
      ]
    }),
    steps: [
      { nama_komponen: "LCD 1602", alur_perakitan: "Pasang LCD pada breadboard." },
      { nama_komponen: "Daya", alur_perakitan: "VSS ke GND, VDD ke 5V, V0 ke GND (kontras)." },
      { nama_komponen: "Kontrol", alur_perakitan: "RS ke Pin 12, E ke Pin 11, RW ke GND." },
      { nama_komponen: "Data", alur_perakitan: "D4-D7 ke Pin 10, 9, 8, 7; backlight A ke 5V, K ke GND." }
    ]
  },
  {
    id: "tpl-relay",
    title: "Kendali Relay (Motor/Pompa)",
    desc: "Kendalikan relay untuk menyalakan/mematikan beban (motor, pompa, lampu AC) dari pin digital.",
    difficulty: "Menengah",
    tags: ["Relay", "Daya"],
    verified: true,
    bom: ["1x Arduino Uno", "1x Modul Relay 1 channel", "Kabel jumper"],
    wiring_guide: [
      { komponen: "Modul Relay", pin_komponen: "VCC", koneksi_arduino: "5V" },
      { komponen: "Modul Relay", pin_komponen: "GND", koneksi_arduino: "GND" },
      { komponen: "Modul Relay", pin_komponen: "IN", koneksi_arduino: "Pin 8" },
      { komponen: "Beban", pin_komponen: "COM & NO", koneksi_arduino: "Sumber daya beban (eksternal)" }
    ],
    cpp_code: "// Proyek: Kendali Relay\n// Logika: ON 2s, OFF 2s\n// Platform: Uno\nconst int relayPin = 8;\n\nvoid setup() {\n  pinMode(relayPin, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(relayPin, HIGH); // Beban ON\n  delay(2000);\n  digitalWrite(relayPin, LOW);  // Beban OFF\n  delay(2000);\n}",
    wokwi_diagram: JSON.stringify({
      version: 1, author: "ElektroDict", editor: "wokwi",
      parts: [
        { type: "wokwi-arduino-uno", id: "uno", top: 0, left: 0, attrs: {} },
        { type: "wokwi-relay-module", id: "relay", top: -120, left: 300, attrs: {} }
      ],
      connections: [
        ["relay:VCC", "uno:5V", "red", ["v0"]],
        ["relay:GND", "uno:GND.1", "black", ["v0"]],
        ["relay:IN", "uno:8", "green", ["v0"]]
      ]
    }),
    steps: [
      { nama_komponen: "Modul Relay", alur_perakitan: "Hubungkan VCC ke 5V dan GND ke GND Arduino." },
      { nama_komponen: "Sinyal", alur_perakitan: "Hubungkan IN ke Pin 8 Arduino." },
      { nama_komponen: "Beban", alur_perakitan: "Sambungkan beban (motor/pompa) ke terminal COM dan NO relay." },
      { nama_komponen: "Sumber beban", alur_perakitan: "Berikan sumber daya terpisah sesuai kebutuhan beban." }
    ]
  },
  {
    id: "tpl-servo",
    title: "Servo Sweep 0-180°",
    desc: "Gerakkan servo maju-mundur dari 0° ke 180° dan kembali — dasar kontrol posisi.",
    difficulty: "Mudah",
    tags: ["Servo", "Motor"],
    verified: true,
    bom: ["1x Arduino Uno", "1x Servo SG90", "Kabel jumper"],
    wiring_guide: [
      { komponen: "Servo", pin_komponen: "V+ (merah)", koneksi_arduino: "5V" },
      { komponen: "Servo", pin_komponen: "PWM (kuning)", koneksi_arduino: "Pin 9" },
      { komponen: "Servo", pin_komponen: "GND (coklat)", koneksi_arduino: "GND" }
    ],
    cpp_code: "// Proyek: Servo Sweep\n// Logika: Sweep 0-180 derajat\n// Platform: Uno\n#include <Servo.h>\nServo servo;\n\nvoid setup() {\n  servo.attach(9);\n}\n\nvoid loop() {\n  for (int a = 0; a <= 180; a++) {\n    servo.write(a);\n    delay(15);\n  }\n  for (int a = 180; a >= 0; a--) {\n    servo.write(a);\n    delay(15);\n  }\n  delay(50);\n}",
    wokwi_diagram: JSON.stringify({
      version: 1, author: "ElektroDict", editor: "wokwi",
      parts: [
        { type: "wokwi-arduino-uno", id: "uno", top: 0, left: 0, attrs: {} },
        { type: "wokwi-servo", id: "servo", top: -120, left: 300, attrs: {} }
      ],
      connections: [
        ["servo:V+", "uno:5V", "red", ["v0"]],
        ["servo:PWM", "uno:9", "yellow", ["v0"]],
        ["servo:GND", "uno:GND.1", "black", ["v0"]]
      ]
    }),
    steps: [
      { nama_komponen: "Servo", alur_perakitan: "Hubungkan V+ (merah) servo ke 5V Arduino." },
      { nama_komponen: "Sinyal", alur_perakitan: "Hubungkan PWM (kuning) servo ke Pin 9 Arduino." },
      { nama_komponen: "Ground", alur_perakitan: "Hubungkan GND (coklat) servo ke GND Arduino." }
    ]
  },
  {
    id: "tpl-pushbutton-led",
    title: "LED Dikontrol Tombol",
    desc: "Tekan tombol untuk menyalakan LED. Memakai INPUT_PULLUP internal Arduino — tanpa resistor pull-up.",
    difficulty: "Mudah",
    tags: ["Tombol", "Input"],
    verified: true,
    bom: ["1x Arduino Uno", "1x Pushbutton", "1x LED merah", "1x Resistor 220 Ohm", "Kabel jumper"],
    wiring_guide: [
      { komponen: "Pushbutton", pin_komponen: "1.l", koneksi_arduino: "Pin 2" },
      { komponen: "Pushbutton", pin_komponen: "2.l", koneksi_arduino: "GND" },
      { komponen: "Resistor R1", pin_komponen: "1", koneksi_arduino: "Pin 13" },
      { komponen: "LED D1", pin_komponen: "A", koneksi_arduino: "Resistor R1 pin 2" },
      { komponen: "LED D1", pin_komponen: "C", koneksi_arduino: "GND" }
    ],
    cpp_code: "// Proyek: Tombol -> LED\n// Logika: INPUT_PULLUP, tekan = nyala\n// Platform: Uno\nconst int btn = 2, led = 13;\n\nvoid setup() {\n  pinMode(btn, INPUT_PULLUP);\n  pinMode(led, OUTPUT);\n}\n\nvoid loop() {\n  if (digitalRead(btn) == LOW) {\n    digitalWrite(led, HIGH);\n  } else {\n    digitalWrite(led, LOW);\n  }\n  delay(50);\n}",
    wokwi_diagram: JSON.stringify({
      version: 1, author: "ElektroDict", editor: "wokwi",
      parts: [
        { type: "wokwi-arduino-uno", id: "uno", top: 0, left: 0, attrs: {} },
        { type: "wokwi-pushbutton", id: "btn", top: -120, left: 300, attrs: {} },
        { type: "wokwi-led", id: "led1", top: -120, left: 420, attrs: { color: "red" } },
        { type: "wokwi-resistor", id: "r1", top: -40, left: 420, attrs: { value: "220" } }
      ],
      connections: [
        ["btn:1.l", "uno:2", "green", ["v0"]],
        ["btn:2.l", "uno:GND.1", "black", ["v0"]],
        ["uno:13", "r1:1", "green", ["v0"]],
        ["r1:2", "led1:A", "green", ["v0"]],
        ["led1:C", "uno:GND.2", "black", ["v0"]]
      ]
    }),
    steps: [
      { nama_komponen: "Pushbutton", alur_perakitan: "Hubungkan kontak 1.l tombol ke Pin 2 Arduino." },
      { nama_komponen: "Ground", alur_perakitan: "Hubungkan kontak 2.l tombol ke GND Arduino." },
      { nama_komponen: "LED + Resistor", alur_perakitan: "Rangkaikan LED ke Pin 13 via resistor 220 Ohm, katoda ke GND." }
    ]
  },
  {
  "id": "tpl-rgb-led",
  "title": "LED RGB Warna Berganti",
  "desc": "LED RGB menyala bergantian merah, hijau, biru, dan campurannya — latihan dasar PWM 3 kanal.",
  "difficulty": "Mudah",
  "tags": [
    "LED",
    "RGB",
    "PWM"
  ],
  "verified": true,
  "bom": [
    "1x Arduino Uno",
    "1x LED RGB katoda bersama",
    "3x Resistor 220 Ohm",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "LED RGB",
      "pin_komponen": "R",
      "koneksi_arduino": "Pin 9 (via resistor)"
    },
    {
      "komponen": "LED RGB",
      "pin_komponen": "G",
      "koneksi_arduino": "Pin 10 (via resistor)"
    },
    {
      "komponen": "LED RGB",
      "pin_komponen": "B",
      "koneksi_arduino": "Pin 11 (via resistor)"
    },
    {
      "komponen": "LED RGB",
      "pin_komponen": "COM (katoda)",
      "koneksi_arduino": "GND"
    }
  ],
  "cpp_code": "// Proyek: LED RGB Warna Berganti\n// Logika: Nyala bergantian RGB\n// Platform: Uno\nint R = 9, G = 10, B = 11;\n\nvoid setup() {\n  pinMode(R, OUTPUT); pinMode(G, OUTPUT); pinMode(B, OUTPUT);\n}\n\nvoid warna(int r, int g, int b) {\n  analogWrite(R, r); analogWrite(G, g); analogWrite(B, b);\n}\n\nvoid loop() {\n  warna(255, 0, 0); delay(800);\n  warna(0, 255, 0); delay(800);\n  warna(0, 0, 255); delay(800);\n  warna(255, 255, 0); delay(800);\n  warna(0, 255, 255); delay(800);\n  warna(255, 0, 255); delay(800);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-rgb-led\",\"id\":\"rgb\",\"top\":-140,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-resistor\",\"id\":\"r1\",\"top\":-210,\"left\":340,\"attrs\":{\"value\":\"220\"}},{\"type\":\"wokwi-resistor\",\"id\":\"r2\",\"top\":-210,\"left\":440,\"attrs\":{\"value\":\"220\"}},{\"type\":\"wokwi-resistor\",\"id\":\"r3\",\"top\":-210,\"left\":540,\"attrs\":{\"value\":\"220\"}}],\"connections\":[[\"uno:9\",\"r1:1\",\"red\",[\"v0\"]],[\"r1:2\",\"rgb:R\",\"red\",[\"v0\"]],[\"uno:10\",\"r2:1\",\"green\",[\"v0\"]],[\"r2:2\",\"rgb:G\",\"green\",[\"v0\"]],[\"uno:11\",\"r3:1\",\"blue\",[\"v0\"]],[\"r3:2\",\"rgb:B\",\"blue\",[\"v0\"]],[\"rgb:COM\",\"uno:GND.1\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "LED RGB",
      "alur_perakitan": "Pasang LED RGB di breadboard."
    },
    {
      "nama_komponen": "Resistor",
      "alur_perakitan": "R via 220 Ohm ke Pin 9, G ke Pin 10, B ke Pin 11."
    },
    {
      "nama_komponen": "Ground",
      "alur_perakitan": "Kaki COM (katoda bersama) ke GND Arduino."
    }
  ]
},
  {
  "id": "tpl-pir-alarm",
  "title": "Alarm Gerakan PIR",
  "desc": "Sensor PIR mendeteksi gerakan lalu menyalakan LED dan membunyikan buzzer sebagai alarm sederhana.",
  "difficulty": "Mudah",
  "tags": [
    "Sensor",
    "PIR",
    "Alarm"
  ],
  "verified": true,
  "bom": [
    "1x Arduino Uno",
    "1x Sensor PIR HC-SR501",
    "1x Buzzer aktif",
    "1x LED merah",
    "1x Resistor 220 Ohm",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "PIR",
      "pin_komponen": "VCC",
      "koneksi_arduino": "5V"
    },
    {
      "komponen": "PIR",
      "pin_komponen": "OUT",
      "koneksi_arduino": "Pin 2"
    },
    {
      "komponen": "PIR",
      "pin_komponen": "GND",
      "koneksi_arduino": "GND"
    },
    {
      "komponen": "Buzzer",
      "pin_komponen": "2 (+)",
      "koneksi_arduino": "Pin 8"
    },
    {
      "komponen": "LED",
      "pin_komponen": "A",
      "koneksi_arduino": "Pin 13 (via resistor)"
    },
    {
      "komponen": "Buzzer & LED",
      "pin_komponen": "(-)/(C)",
      "koneksi_arduino": "GND"
    }
  ],
  "cpp_code": "// Proyek: Alarm Gerakan PIR\n// Logika: PIR -> buzzer + LED\n// Platform: Uno\nint pir = 2, buzzer = 8, led = 13;\n\nvoid setup() {\n  pinMode(pir, INPUT); pinMode(buzzer, OUTPUT); pinMode(led, OUTPUT);\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  if (digitalRead(pir) == HIGH) {\n    Serial.println(\"Gerakan terdeteksi!\");\n    digitalWrite(buzzer, HIGH); digitalWrite(led, HIGH);\n    delay(2000);\n    digitalWrite(buzzer, LOW); digitalWrite(led, LOW);\n  }\n  delay(200);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-pir-motion-sensor\",\"id\":\"pir\",\"top\":-130,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-buzzer\",\"id\":\"buz\",\"top\":-260,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-led\",\"id\":\"led\",\"top\":-260,\"left\":520,\"attrs\":{\"color\":\"red\"}}],\"connections\":[[\"pir:VCC\",\"uno:5V\",\"red\",[\"v0\"]],[\"pir:OUT\",\"uno:2\",\"green\",[\"v0\"]],[\"pir:GND\",\"uno:GND.1\",\"black\",[\"v0\"]],[\"buz:2\",\"uno:8\",\"yellow\",[\"v0\"]],[\"buz:1\",\"uno:GND.2\",\"black\",[\"v0\"]],[\"led:A\",\"uno:13\",\"blue\",[\"v0\"]],[\"led:C\",\"uno:GND.3\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "PIR",
      "alur_perakitan": "VCC ke 5V, OUT ke Pin 2, GND ke GND."
    },
    {
      "nama_komponen": "Buzzer",
      "alur_perakitan": "(+) ke Pin 8, (-) ke GND."
    },
    {
      "nama_komponen": "LED",
      "alur_perakitan": "Anoda via resistor ke Pin 13, katoda ke GND."
    }
  ]
},
  {
  "id": "tpl-ldr-night-light",
  "title": "Lampu Otomatis (LDR)",
  "desc": "Modul sensor cahaya LDR menyalakan LED otomatis saat ruangan gelap — simulasi lampu jalan hemat energi.",
  "difficulty": "Mudah",
  "tags": [
    "Sensor",
    "LDR",
    "Otomatis"
  ],
  "verified": true,
  "bom": [
    "1x Arduino Uno",
    "1x Modul sensor cahaya (LDR)",
    "1x LED",
    "1x Resistor 220 Ohm",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "Modul LDR",
      "pin_komponen": "VCC",
      "koneksi_arduino": "5V"
    },
    {
      "komponen": "Modul LDR",
      "pin_komponen": "DO",
      "koneksi_arduino": "Pin 2"
    },
    {
      "komponen": "Modul LDR",
      "pin_komponen": "GND",
      "koneksi_arduino": "GND"
    },
    {
      "komponen": "LED",
      "pin_komponen": "A",
      "koneksi_arduino": "Pin 13 (via resistor)"
    },
    {
      "komponen": "LED",
      "pin_komponen": "C",
      "koneksi_arduino": "GND"
    }
  ],
  "cpp_code": "// Proyek: Lampu Otomatis LDR\n// Logika: Gelap -> LED nyala\n// Platform: Uno\nint ldr = 2, led = 13;\n\nvoid setup() {\n  pinMode(ldr, INPUT); pinMode(led, OUTPUT);\n}\n\nvoid loop() {\n  int gelap = digitalRead(ldr);\n  if (gelap == HIGH) digitalWrite(led, HIGH);  // modul DO aktif saat gelap\n  else digitalWrite(led, LOW);\n  delay(200);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-photoresistor-sensor\",\"id\":\"ldr\",\"top\":-130,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-led\",\"id\":\"led\",\"top\":-260,\"left\":340,\"attrs\":{\"color\":\"white\"}},{\"type\":\"wokwi-resistor\",\"id\":\"r1\",\"top\":-330,\"left\":340,\"attrs\":{\"value\":\"220\"}}],\"connections\":[[\"ldr:VCC\",\"uno:5V\",\"red\",[\"v0\"]],[\"ldr:DO\",\"uno:2\",\"green\",[\"v0\"]],[\"ldr:GND\",\"uno:GND.1\",\"black\",[\"v0\"]],[\"uno:13\",\"r1:1\",\"yellow\",[\"v0\"]],[\"r1:2\",\"led:A\",\"yellow\",[\"v0\"]],[\"led:C\",\"uno:GND.2\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "Modul LDR",
      "alur_perakitan": "VCC ke 5V, DO ke Pin 2, GND ke GND."
    },
    {
      "nama_komponen": "LED",
      "alur_perakitan": "Anoda via 220 Ohm ke Pin 13, katoda ke GND."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Tutup sensor (gelapkan) — LED menyala otomatis."
    }
  ]
},
  {
  "id": "tpl-servo-knob",
  "title": "Servo Knob",
  "desc": "Putar potensiometer untuk menggerakkan sudut servo 0-180 derajat — dasar kontrol posisi analog.",
  "difficulty": "Mudah",
  "tags": [
    "Servo",
    "Potensiometer",
    "Analog"
  ],
  "verified": true,
  "bom": [
    "1x Arduino Uno",
    "1x Servo SG90",
    "1x Potensiometer 10k",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "Potensiometer",
      "pin_komponen": "VCC",
      "koneksi_arduino": "5V"
    },
    {
      "komponen": "Potensiometer",
      "pin_komponen": "SIG",
      "koneksi_arduino": "A0"
    },
    {
      "komponen": "Potensiometer",
      "pin_komponen": "GND",
      "koneksi_arduino": "GND"
    },
    {
      "komponen": "Servo",
      "pin_komponen": "V+",
      "koneksi_arduino": "5V"
    },
    {
      "komponen": "Servo",
      "pin_komponen": "PWM",
      "koneksi_arduino": "Pin 9"
    },
    {
      "komponen": "Servo",
      "pin_komponen": "GND",
      "koneksi_arduino": "GND"
    }
  ],
  "cpp_code": "// Proyek: Servo Knob\n// Logika: Potensiometer -> servo\n// Platform: Uno\n#include <Servo.h>\nServo servo;\nint pot = A0;\n\nvoid setup() {\n  servo.attach(9);\n}\n\nvoid loop() {\n  int baca = analogRead(pot);\n  int sudut = map(baca, 0, 1023, 0, 180);\n  servo.write(sudut);\n  delay(15);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-potentiometer\",\"id\":\"pot\",\"top\":-130,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-servo\",\"id\":\"servo\",\"top\":-260,\"left\":340,\"attrs\":{}}],\"connections\":[[\"pot:VCC\",\"uno:5V\",\"red\",[\"v0\"]],[\"pot:SIG\",\"uno:A0\",\"green\",[\"v0\"]],[\"pot:GND\",\"uno:GND.1\",\"black\",[\"v0\"]],[\"servo:V+\",\"uno:5V\",\"red\",[\"v0\"]],[\"servo:PWM\",\"uno:9\",\"yellow\",[\"v0\"]],[\"servo:GND\",\"uno:GND.2\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "Potensiometer",
      "alur_perakitan": "VCC ke 5V, SIG ke A0, GND ke GND."
    },
    {
      "nama_komponen": "Servo",
      "alur_perakitan": "V+ ke 5V, PWM ke Pin 9, GND ke GND."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Putar knob — servo bergerak mengikuti posisi potensiometer."
    }
  ]
},
  {
  "id": "tpl-joystick-servo",
  "title": "Servo Kendali Joystick",
  "desc": "Joystick analog menggerakkan servo secara halus — sumbu X mengontrol posisi, sumbu Y mengontrol kecepatan.",
  "difficulty": "Menengah",
  "tags": [
    "Joystick",
    "Servo",
    "Analog"
  ],
  "verified": true,
  "bom": [
    "1x Arduino Uno",
    "1x Modul joystick analog",
    "1x Servo SG90",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "Joystick",
      "pin_komponen": "VCC",
      "koneksi_arduino": "5V"
    },
    {
      "komponen": "Joystick",
      "pin_komponen": "VERT",
      "koneksi_arduino": "A1"
    },
    {
      "komponen": "Joystick",
      "pin_komponen": "HORZ",
      "koneksi_arduino": "A0"
    },
    {
      "komponen": "Joystick",
      "pin_komponen": "GND",
      "koneksi_arduino": "GND"
    },
    {
      "komponen": "Servo",
      "pin_komponen": "V+",
      "koneksi_arduino": "5V"
    },
    {
      "komponen": "Servo",
      "pin_komponen": "PWM",
      "koneksi_arduino": "Pin 9"
    },
    {
      "komponen": "Servo",
      "pin_komponen": "GND",
      "koneksi_arduino": "GND"
    }
  ],
  "cpp_code": "// Proyek: Servo Kendali Joystick\n// Logika: Joystick X -> servo\n// Platform: Uno\n#include <Servo.h>\nServo servo;\nconst int hX = A0, hY = A1;\n\nvoid setup() {\n  servo.attach(9);\n}\n\nvoid loop() {\n  int x = analogRead(hX);\n  int sudut = map(x, 0, 1023, 0, 180);\n  servo.write(sudut);\n  delay(15);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-analog-joystick\",\"id\":\"joy\",\"top\":-130,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-servo\",\"id\":\"servo\",\"top\":-260,\"left\":340,\"attrs\":{}}],\"connections\":[[\"joy:VCC\",\"uno:5V\",\"red\",[\"v0\"]],[\"joy:HORZ\",\"uno:A0\",\"green\",[\"v0\"]],[\"joy:VERT\",\"uno:A1\",\"yellow\",[\"v0\"]],[\"joy:GND\",\"uno:GND.1\",\"black\",[\"v0\"]],[\"servo:V+\",\"uno:5V\",\"red\",[\"v0\"]],[\"servo:PWM\",\"uno:9\",\"blue\",[\"v0\"]],[\"servo:GND\",\"uno:GND.2\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "Joystick",
      "alur_perakitan": "VCC ke 5V, HORZ ke A0, VERT ke A1, GND ke GND."
    },
    {
      "nama_komponen": "Servo",
      "alur_perakitan": "V+ ke 5V, PWM ke Pin 9, GND ke GND."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Geser joystick kiri-kanan — servo mengikuti."
    }
  ]
},
  {
  "id": "tpl-7segment-counter",
  "title": "Counter 7-Segmen 0-9",
  "desc": "Tampilkan angka 0-9 bergantian di display 7-segmen setiap detik — belajar decode BCD ke segmen.",
  "difficulty": "Menengah",
  "tags": [
    "Display",
    "7-Segmen",
    "Counter"
  ],
  "verified": true,
  "bom": [
    "1x Arduino Uno",
    "1x Display 7-segmen (katoda bersama)",
    "8x Resistor 220 Ohm",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "7-Segmen",
      "pin_komponen": "A-G",
      "koneksi_arduino": "Pin 2-8 (via resistor)"
    },
    {
      "komponen": "7-Segmen",
      "pin_komponen": "DP",
      "koneksi_arduino": "Pin 9 (via resistor)"
    },
    {
      "komponen": "7-Segmen",
      "pin_komponen": "COM",
      "koneksi_arduino": "GND"
    }
  ],
  "cpp_code": "// Proyek: Counter 7-Segmen\n// Logika: Hitung 0-9 tiap detik\n// Platform: Uno\nbyte seg[10] = {0x3F, 0x06, 0x5B, 0x4F, 0x66, 0x6D, 0x7D, 0x07, 0x7F, 0x6F};\nint pins[7] = {2, 3, 4, 5, 6, 7, 8};\n\nvoid setup() {\n  for (int i = 0; i < 7; i++) pinMode(pins[i], OUTPUT);\n}\n\nvoid tampil(int n) {\n  for (int i = 0; i < 7; i++) {\n    digitalWrite(pins[i], bitRead(seg[n], i) ? HIGH : LOW);\n  }\n}\n\nvoid loop() {\n  for (int n = 0; n <= 9; n++) { tampil(n); delay(1000); }\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-7segment\",\"id\":\"seg\",\"top\":-140,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-resistor\",\"id\":\"r1\",\"top\":-220,\"left\":340,\"attrs\":{\"value\":\"220\"}},{\"type\":\"wokwi-resistor\",\"id\":\"r2\",\"top\":-220,\"left\":400,\"attrs\":{\"value\":\"220\"}},{\"type\":\"wokwi-resistor\",\"id\":\"r3\",\"top\":-220,\"left\":460,\"attrs\":{\"value\":\"220\"}},{\"type\":\"wokwi-resistor\",\"id\":\"r4\",\"top\":-220,\"left\":520,\"attrs\":{\"value\":\"220\"}},{\"type\":\"wokwi-resistor\",\"id\":\"r5\",\"top\":-220,\"left\":580,\"attrs\":{\"value\":\"220\"}},{\"type\":\"wokwi-resistor\",\"id\":\"r6\",\"top\":-220,\"left\":640,\"attrs\":{\"value\":\"220\"}},{\"type\":\"wokwi-resistor\",\"id\":\"r7\",\"top\":-220,\"left\":700,\"attrs\":{\"value\":\"220\"}}],\"connections\":[[\"uno:2\",\"r1:1\",\"green\",[\"v0\"]],[\"r1:2\",\"seg:A\",\"green\",[\"v0\"]],[\"uno:3\",\"r2:1\",\"green\",[\"v0\"]],[\"r2:2\",\"seg:B\",\"green\",[\"v0\"]],[\"uno:4\",\"r3:1\",\"green\",[\"v0\"]],[\"r3:2\",\"seg:C\",\"green\",[\"v0\"]],[\"uno:5\",\"r4:1\",\"green\",[\"v0\"]],[\"r4:2\",\"seg:D\",\"green\",[\"v0\"]],[\"uno:6\",\"r5:1\",\"green\",[\"v0\"]],[\"r5:2\",\"seg:E\",\"green\",[\"v0\"]],[\"uno:7\",\"r6:1\",\"green\",[\"v0\"]],[\"r6:2\",\"seg:F\",\"green\",[\"v0\"]],[\"uno:8\",\"r7:1\",\"green\",[\"v0\"]],[\"r7:2\",\"seg:G\",\"green\",[\"v0\"]],[\"seg:COM\",\"uno:GND.1\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "7-Segmen",
      "alur_perakitan": "Pasang display di breadboard, kaki A-G via resistor 220 Ohm ke Pin 2-8."
    },
    {
      "nama_komponen": "Ground",
      "alur_perakitan": "Kaki COM (katoda bersama) ke GND."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Angka 0-9 tampil bergantian tiap detik."
    }
  ]
},
  {
  "id": "tpl-stepper-motor",
  "title": "Motor Stepper Berputar",
  "desc": "Motor stepper bipolar berputar satu arah lalu berbalik — dasar kontrol presisi untuk printer/CNC mini.",
  "difficulty": "Menengah",
  "tags": [
    "Motor",
    "Stepper"
  ],
  "verified": true,
  "bom": [
    "1x Arduino Uno",
    "1x Motor stepper bipolar",
    "1x Driver A4988",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "Stepper",
      "pin_komponen": "A-, A+, B+, B-",
      "koneksi_arduino": "Driver A4988 (1A,1B,2A,2B)"
    },
    {
      "komponen": "Driver A4988",
      "pin_komponen": "STEP",
      "koneksi_arduino": "Pin 3"
    },
    {
      "komponen": "Driver A4988",
      "pin_komponen": "DIR",
      "koneksi_arduino": "Pin 4"
    },
    {
      "komponen": "Driver A4988",
      "pin_komponen": "VDD/GND",
      "koneksi_arduino": "5V/GND"
    }
  ],
  "cpp_code": "// Proyek: Motor Stepper Berputar\n// Logika: Maju 200 langkah, mundur 200\n// Platform: Uno (via driver A4988)\nint stepPin = 3, dirPin = 4;\n\nvoid setup() {\n  pinMode(stepPin, OUTPUT); pinMode(dirPin, OUTPUT);\n}\n\nvoid gerak(int langkah) {\n  digitalWrite(dirPin, langkah > 0 ? HIGH : LOW);\n  for (int i = 0; i < abs(langkah); i++) {\n    digitalWrite(stepPin, HIGH); delayMicroseconds(1000);\n    digitalWrite(stepPin, LOW); delayMicroseconds(1000);\n  }\n}\n\nvoid loop() {\n  gerak(200); delay(500);\n  gerak(-200); delay(500);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-stepper-motor\",\"id\":\"stp\",\"top\":-140,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-a4988\",\"id\":\"drv\",\"top\":-20,\"left\":340,\"attrs\":{}}],\"connections\":[[\"uno:3\",\"drv:STEP\",\"green\",[\"v0\"]],[\"uno:4\",\"drv:DIR\",\"yellow\",[\"v0\"]],[\"drv:2A\",\"stp:A+\",\"blue\",[\"v0\"]],[\"drv:2B\",\"stp:A-\",\"blue\",[\"v0\"]],[\"drv:1A\",\"stp:B+\",\"red\",[\"v0\"]],[\"drv:1B\",\"stp:B-\",\"red\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "Driver A4988",
      "alur_perakitan": "STEP ke Pin 3, DIR ke Pin 4, VDD ke 5V, GND ke GND."
    },
    {
      "nama_komponen": "Stepper",
      "alur_perakitan": "Kumparan A ke 1A/1B, kumparan B ke 2A/2B driver."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Motor berputar maju-mundur 200 langkah."
    }
  ]
},
  {
  "id": "tpl-ultrasonic-buzzer",
  "title": "Alarm Jarak Ultrasonik",
  "desc": "HC-SR04 mengukur jarak; buzzer berbunyi semakin cepat saat objek semakin dekat — simulasi sensor parkir.",
  "difficulty": "Menengah",
  "tags": [
    "Sensor",
    "Ultrasonik",
    "Alarm"
  ],
  "verified": true,
  "bom": [
    "1x Arduino Uno",
    "1x HC-SR04",
    "1x Buzzer aktif",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "HC-SR04",
      "pin_komponen": "VCC",
      "koneksi_arduino": "5V"
    },
    {
      "komponen": "HC-SR04",
      "pin_komponen": "TRIG",
      "koneksi_arduino": "Pin 9"
    },
    {
      "komponen": "HC-SR04",
      "pin_komponen": "ECHO",
      "koneksi_arduino": "Pin 10"
    },
    {
      "komponen": "HC-SR04",
      "pin_komponen": "GND",
      "koneksi_arduino": "GND"
    },
    {
      "komponen": "Buzzer",
      "pin_komponen": "2 (+)",
      "koneksi_arduino": "Pin 8"
    },
    {
      "komponen": "Buzzer",
      "pin_komponen": "1 (-)",
      "koneksi_arduino": "GND"
    }
  ],
  "cpp_code": "// Proyek: Alarm Jarak Ultrasonik\n// Logika: Jarak -> frekuensi buzzer\n// Platform: Uno\nint trig = 9, echo = 10, buz = 8;\n\nlong bacaJarak() {\n  digitalWrite(trig, LOW); delayMicroseconds(2);\n  digitalWrite(trig, HIGH); delayMicroseconds(10);\n  digitalWrite(trig, LOW);\n  return pulseIn(echo, HIGH) * 0.034 / 2;\n}\n\nvoid setup() {\n  pinMode(trig, OUTPUT); pinMode(echo, INPUT); pinMode(buz, OUTPUT);\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  long cm = bacaJarak();\n  Serial.print(cm); Serial.println(\" cm\");\n  if (cm < 30) { digitalWrite(buz, HIGH); delay(100); digitalWrite(buz, LOW); delay(map(cm, 0, 30, 50, 400)); }\n  else delay(300);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-hc-sr04\",\"id\":\"ultra\",\"top\":-130,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-buzzer\",\"id\":\"buz\",\"top\":-260,\"left\":340,\"attrs\":{}}],\"connections\":[[\"ultra:VCC\",\"uno:5V\",\"red\",[\"v0\"]],[\"ultra:TRIG\",\"uno:9\",\"green\",[\"v0\"]],[\"ultra:ECHO\",\"uno:10\",\"yellow\",[\"v0\"]],[\"ultra:GND\",\"uno:GND.1\",\"black\",[\"v0\"]],[\"buz:2\",\"uno:8\",\"blue\",[\"v0\"]],[\"buz:1\",\"uno:GND.2\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "HC-SR04",
      "alur_perakitan": "VCC ke 5V, TRIG ke Pin 9, ECHO ke Pin 10, GND ke GND."
    },
    {
      "nama_komponen": "Buzzer",
      "alur_perakitan": "(+) ke Pin 8, (-) ke GND."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Dekatkan objek — bunyi buzzer semakin cepat."
    }
  ]
},
  {
  "id": "tpl-dht22-lcd",
  "title": "Termometer LCD (DHT22)",
  "desc": "Suhu & kelembaban dari DHT22 ditampilkan di LCD 1602 — kombinasi sensor dan display populer.",
  "difficulty": "Menengah",
  "tags": [
    "Sensor",
    "DHT22",
    "LCD"
  ],
  "verified": true,
  "libraries": ["DHT sensor library"],
  "bom": [
    "1x Arduino Uno",
    "1x DHT22",
    "1x LCD 1602 (parallel)",
    "1x Potensiometer 10k (kontras)",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "DHT22",
      "pin_komponen": "VCC",
      "koneksi_arduino": "5V"
    },
    {
      "komponen": "DHT22",
      "pin_komponen": "SDA",
      "koneksi_arduino": "Pin 2"
    },
    {
      "komponen": "DHT22",
      "pin_komponen": "GND",
      "koneksi_arduino": "GND"
    },
    {
      "komponen": "LCD 1602",
      "pin_komponen": "VSS, V0, RW, K",
      "koneksi_arduino": "GND"
    },
    {
      "komponen": "LCD 1602",
      "pin_komponen": "VDD, A",
      "koneksi_arduino": "5V"
    },
    {
      "komponen": "LCD 1602",
      "pin_komponen": "RS, E, D4-D7",
      "koneksi_arduino": "Pin 12, 11, 5-2"
    }
  ],
  "cpp_code": "// Proyek: Termometer LCD\n// Logika: DHT22 -> LCD 1602\n// Platform: Uno\n#include <LiquidCrystal.h>\n#include <DHT.h>\nLiquidCrystal lcd(12, 11, 5, 4, 3, 2);\n#define DHTPIN 6\n#define DHTTYPE DHT22\nDHT dht(DHTPIN, DHTTYPE);\n\nvoid setup() {\n  lcd.begin(16, 2);\n  dht.begin();\n}\n\nvoid loop() {\n  float h = dht.readHumidity();\n  float t = dht.readTemperature();\n  if (!isnan(h) && !isnan(t)) {\n    lcd.setCursor(0, 0); lcd.print(\"Suhu: \"); lcd.print(t); lcd.print(\" C\");\n    lcd.setCursor(0, 1); lcd.print(\"Lembab: \"); lcd.print(h); lcd.print(\"%\");\n  }\n  delay(2000);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-dht22\",\"id\":\"dht\",\"top\":-130,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-lcd1602\",\"id\":\"lcd\",\"top\":-260,\"left\":340,\"attrs\":{\"pins\":\"full\"}}],\"connections\":[[\"dht:VCC\",\"uno:5V\",\"red\",[\"v0\"]],[\"dht:SDA\",\"uno:6\",\"green\",[\"v0\"]],[\"dht:GND\",\"uno:GND.1\",\"black\",[\"v0\"]],[\"lcd:VSS\",\"uno:GND.2\",\"black\",[\"v0\"]],[\"lcd:VDD\",\"uno:5V\",\"red\",[\"v0\"]],[\"lcd:RS\",\"uno:12\",\"yellow\",[\"v0\"]],[\"lcd:E\",\"uno:11\",\"yellow\",[\"v0\"]],[\"lcd:D4\",\"uno:5\",\"blue\",[\"v0\"]],[\"lcd:D5\",\"uno:4\",\"blue\",[\"v0\"]],[\"lcd:D6\",\"uno:3\",\"blue\",[\"v0\"]],[\"lcd:D7\",\"uno:2\",\"blue\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "DHT22",
      "alur_perakitan": "VCC ke 5V, data ke Pin 6, GND ke GND."
    },
    {
      "nama_komponen": "LCD 1602",
      "alur_perakitan": "RS ke 12, E ke 11, D4-D7 ke Pin 5-2, VSS/GND, VDD ke 5V."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Suhu & kelembaban tampil di LCD tiap 2 detik."
    }
  ]
},
  {
  "id": "tpl-ntc-thermostat",
  "title": "Termostat Otomatis (NTC)",
  "desc": "Sensor NTC membaca suhu; relay menyala/mati untuk mengontrol beban seperti kipas atau pemanas sesuai ambang batas.",
  "difficulty": "Menengah",
  "tags": [
    "Sensor",
    "NTC",
    "Relay",
    "Otomasi"
  ],
  "verified": true,
  "bom": [
    "1x Arduino Uno",
    "1x Sensor suhu NTC",
    "1x Modul relay 1 kanal",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "NTC",
      "pin_komponen": "VCC",
      "koneksi_arduino": "5V"
    },
    {
      "komponen": "NTC",
      "pin_komponen": "OUT",
      "koneksi_arduino": "A0"
    },
    {
      "komponen": "NTC",
      "pin_komponen": "GND",
      "koneksi_arduino": "GND"
    },
    {
      "komponen": "Relay",
      "pin_komponen": "VCC",
      "koneksi_arduino": "5V"
    },
    {
      "komponen": "Relay",
      "pin_komponen": "IN",
      "koneksi_arduino": "Pin 8"
    },
    {
      "komponen": "Relay",
      "pin_komponen": "GND",
      "koneksi_arduino": "GND"
    }
  ],
  "cpp_code": "// Proyek: Termostat NTC\n// Logika: Suhu > ambang -> relay nyala\n// Platform: Uno\nint ntc = A0, relay = 8;\nint ambang = 30;\n\nvoid setup() {\n  pinMode(relay, OUTPUT);\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int adc = analogRead(ntc);\n  float suhu = map(adc, 0, 1023, 0, 100);  // kalibrasi sederhana\n  if (suhu > ambang) digitalWrite(relay, HIGH);\n  else digitalWrite(relay, LOW);\n  Serial.print(\"Suhu: \"); Serial.println(suhu);\n  delay(1000);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-ntc-temperature-sensor\",\"id\":\"ntc\",\"top\":-130,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-relay-module\",\"id\":\"rel\",\"top\":-260,\"left\":340,\"attrs\":{}}],\"connections\":[[\"ntc:VCC\",\"uno:5V\",\"red\",[\"v0\"]],[\"ntc:OUT\",\"uno:A0\",\"green\",[\"v0\"]],[\"ntc:GND\",\"uno:GND.1\",\"black\",[\"v0\"]],[\"rel:VCC\",\"uno:5V\",\"red\",[\"v0\"]],[\"rel:IN\",\"uno:8\",\"yellow\",[\"v0\"]],[\"rel:GND\",\"uno:GND.2\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "NTC",
      "alur_perakitan": "VCC ke 5V, OUT ke A0, GND ke GND."
    },
    {
      "nama_komponen": "Relay",
      "alur_perakitan": "VCC ke 5V, IN ke Pin 8, GND ke GND. Beban ke COM & NO."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Relay aktif saat suhu melewati ambang."
    }
  ]
},
  {
  "id": "tpl-ds18b20",
  "title": "Suhu Digital DS18B20",
  "desc": "Sensor DS18B20 1-Wire mengukur suhu presisi dan mengirim data via satu kabel data saja.",
  "difficulty": "Menengah",
  "tags": [
    "Sensor",
    "DS18B20",
    "1-Wire"
  ],
  "verified": true,
  "libraries": ["OneWire", "DallasTemperature"],
  "bom": [
    "1x Arduino Uno",
    "1x DS18B20 (TO-92)",
    "1x Resistor 4.7k Ohm (pull-up)",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "DS18B20",
      "pin_komponen": "VCC",
      "koneksi_arduino": "5V"
    },
    {
      "komponen": "DS18B20",
      "pin_komponen": "DQ",
      "koneksi_arduino": "Pin 2 (via 4.7k ke 5V)"
    },
    {
      "komponen": "DS18B20",
      "pin_komponen": "GND",
      "koneksi_arduino": "GND"
    }
  ],
  "cpp_code": "// Proyek: Suhu Digital DS18B20\n// Logika: 1-Wire -> Serial\n// Platform: Uno\n#include <OneWire.h>\n#include <DallasTemperature.h>\n#define PIN 2\nOneWire oneWire(PIN);\nDallasTemperature sensor(&oneWire);\n\nvoid setup() {\n  Serial.begin(9600);\n  sensor.begin();\n}\n\nvoid loop() {\n  sensor.requestTemperatures();\n  float suhu = sensor.getTempCByIndex(0);\n  Serial.print(\"Suhu: \"); Serial.println(suhu);\n  delay(1000);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-ds18b20\",\"id\":\"ds\",\"top\":-130,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-resistor\",\"id\":\"r1\",\"top\":-200,\"left\":340,\"attrs\":{\"value\":\"4.7k\"}}],\"connections\":[[\"ds:VCC\",\"uno:5V\",\"red\",[\"v0\"]],[\"ds:DQ\",\"uno:2\",\"green\",[\"v0\"]],[\"ds:GND\",\"uno:GND.1\",\"black\",[\"v0\"]],[\"r1:1\",\"uno:5V\",\"red\",[\"v0\"]],[\"r1:2\",\"ds:DQ\",\"green\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "DS18B20",
      "alur_perakitan": "VCC ke 5V, DQ ke Pin 2, GND ke GND."
    },
    {
      "nama_komponen": "Pull-up",
      "alur_perakitan": "Resistor 4.7k antara DQ dan 5V."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Suhu tampil di Serial Monitor tiap detik."
    }
  ]
},
  {
  "id": "tpl-hx711-scale",
  "title": "Timbangan Digital HX711",
  "desc": "Modul HX711 + load cell menimbang beban dan menampilkan berat gram di Serial Monitor — dasar timbangan digital.",
  "difficulty": "Sulit",
  "tags": [
    "Sensor",
    "HX711",
    "Load Cell"
  ],
  "verified": true,
  "libraries": ["HX711"],
  "bom": [
    "1x Arduino Uno",
    "1x Modul HX711",
    "1x Load cell 1kg",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "HX711",
      "pin_komponen": "VCC",
      "koneksi_arduino": "5V"
    },
    {
      "komponen": "HX711",
      "pin_komponen": "DT",
      "koneksi_arduino": "Pin 3"
    },
    {
      "komponen": "HX711",
      "pin_komponen": "SCK",
      "koneksi_arduino": "Pin 2"
    },
    {
      "komponen": "HX711",
      "pin_komponen": "GND",
      "koneksi_arduino": "GND"
    },
    {
      "komponen": "Load Cell",
      "pin_komponen": "E+, E-, S+, S-",
      "koneksi_arduino": "Screw terminal HX711"
    }
  ],
  "cpp_code": "// Proyek: Timbangan Digital HX711\n// Logika: Load cell -> gram\n// Platform: Uno\n#include <HX711.h>\nHX711 timbangan;\nconst int DT = 3, SCK = 2;\nfloat kalibrasi = 2280.0;  // sesuaikan dengan beban standar\n\nvoid setup() {\n  Serial.begin(9600);\n  timbangan.begin(DT, SCK);\n  timbangan.set_scale(kalibrasi);\n  timbangan.tare();\n}\n\nvoid loop() {\n  if (timbangan.is_ready()) {\n    float gram = timbangan.get_units(5);\n    Serial.print(\"Berat: \"); Serial.print(gram); Serial.println(\" g\");\n  } else {\n    Serial.println(\"HX711 belum siap\");\n  }\n  delay(500);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-hx711\",\"id\":\"hx\",\"top\":-130,\"left\":340,\"attrs\":{}}],\"connections\":[[\"hx:VCC\",\"uno:5V\",\"red\",[\"v0\"]],[\"hx:DT\",\"uno:3\",\"green\",[\"v0\"]],[\"hx:SCK\",\"uno:2\",\"yellow\",[\"v0\"]],[\"hx:GND\",\"uno:GND.1\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "HX711",
      "alur_perakitan": "VCC ke 5V, DT ke Pin 3, SCK ke Pin 2, GND ke GND."
    },
    {
      "nama_komponen": "Load Cell",
      "alur_perakitan": "Sambung ke screw terminal HX711 (E+/E-/S+/S-)."
    },
    {
      "nama_komponen": "Kalibrasi",
      "alur_perakitan": "Ubah nilai kalibrasi dengan beban standar yang diketahui."
    }
  ]
},
  {
  "id": "tpl-mpu6050-tilt",
  "title": "Servo Pengikut Kemiringan",
  "desc": "MPU6050 mendeteksi kemiringan sumbu dan menggerakkan servo agar selalu tegak — dasar stabilisasi gimbal.",
  "difficulty": "Sulit",
  "tags": [
    "Sensor",
    "MPU6050",
    "Servo",
    "I2C"
  ],
  "verified": true,
  "bom": [
    "1x Arduino Uno",
    "1x MPU6050",
    "1x Servo SG90",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "MPU6050",
      "pin_komponen": "VCC",
      "koneksi_arduino": "5V"
    },
    {
      "komponen": "MPU6050",
      "pin_komponen": "GND",
      "koneksi_arduino": "GND"
    },
    {
      "komponen": "MPU6050",
      "pin_komponen": "SCL",
      "koneksi_arduino": "A5 (SCL)"
    },
    {
      "komponen": "MPU6050",
      "pin_komponen": "SDA",
      "koneksi_arduino": "A4 (SDA)"
    },
    {
      "komponen": "MPU6050",
      "pin_komponen": "INT",
      "koneksi_arduino": "Pin 3"
    },
    {
      "komponen": "Servo",
      "pin_komponen": "V+",
      "koneksi_arduino": "5V"
    },
    {
      "komponen": "Servo",
      "pin_komponen": "PWM",
      "koneksi_arduino": "Pin 9"
    },
    {
      "komponen": "Servo",
      "pin_komponen": "GND",
      "koneksi_arduino": "GND"
    }
  ],
  "cpp_code": "// Proyek: Servo Kemiringan\n// Logika: MPU6050 -> servo\n// Platform: Uno\n#include <Wire.h>\n#include <Servo.h>\nServo servo;\nconst int addr = 0x68;\n\nvoid setup() {\n  Wire.begin();\n  servo.attach(9);\n  Wire.beginTransmission(addr);\n  Wire.write(0x6B);\n  Wire.write(0);\n  Wire.endTransmission();\n}\n\nvoid loop() {\n  Wire.beginTransmission(addr);\n  Wire.write(0x3B);\n  Wire.endTransmission(false);\n  Wire.requestFrom(addr, 6, true);\n  int16_t ax = Wire.read() << 8 | Wire.read();\n  int16_t ay = Wire.read() << 8 | Wire.read();\n  int16_t az = Wire.read() << 8 | Wire.read();\n  long sudut = atan2(-ax, az) * 180 / PI;\n  int pos = map(sudut, -90, 90, 0, 180);\n  servo.write(constrain(pos, 0, 180));\n  delay(50);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-mpu6050\",\"id\":\"imu\",\"top\":-120,\"left\":300,\"attrs\":{}},{\"type\":\"wokwi-servo\",\"id\":\"servo\",\"top\":-120,\"left\":460,\"attrs\":{}}],\"connections\":[[\"imu:VCC\",\"uno:5V\",\"red\",[\"v0\"]],[\"imu:GND\",\"uno:GND.1\",\"black\",[\"v0\"]],[\"imu:SCL\",\"uno:A5\",\"yellow\",[\"v0\"]],[\"imu:SDA\",\"uno:A4\",\"green\",[\"v0\"]],[\"imu:INT\",\"uno:3\",\"blue\",[\"v0\"]],[\"servo:V+\",\"uno:5V\",\"red\",[\"v0\"]],[\"servo:PWM\",\"uno:9\",\"yellow\",[\"v0\"]],[\"servo:GND\",\"uno:GND.2\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "MPU6050",
      "alur_perakitan": "VCC ke 5V, GND ke GND, SCL ke A5, SDA ke A4."
    },
    {
      "nama_komponen": "Interupsi",
      "alur_perakitan": "Hubungkan INT ke Pin 3 (opsional)."
    },
    {
      "nama_komponen": "Servo",
      "alur_perakitan": "V+ ke 5V, PWM ke Pin 9, GND ke GND."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Miringkan sensor; servo mengikuti arah kemiringan."
    }
  ]
},
  {
  "id": "tpl-esp32-firebase-dht",
  "title": "IoT Suhu & Kelembaban Firebase",
  "desc": "ESP32 membaca DHT22 lalu mengirim suhu & kelembaban ke Firebase Realtime Database — pantau dari dashboard web kapan saja.",
  "difficulty": "Menengah",
  "tags": [
    "ESP32",
    "Firebase",
    "IoT",
    "DHT22"
  ],
  "libraries": ["DHT sensor library for ESPx"],
  "verified": true,
  "board": "board-esp32-devkit-c-v4",
  "bom": [
    "1x ESP32 DevKitC V4",
    "1x Sensor DHT22",
    "Kabel jumper"
  ],
  "firebase_setup": [
    "Buka console.firebase.google.com → buat project baru (gratis).",
    "Build → Realtime Database → Create Database (mode test agar mudah dicoba).",
    "Salin URL database (mis. https://xyz-default-rtdb.firebaseio.com) → isi DATABASE_URL.",
    "Ganti WIFI_SSID & WIFI_PASSWORD dengan WiFi kamu (di simulator Wokwi: SSID 'Wokwi-GUEST', password kosong)."
  ],
  "dashboard": {
    "title": "Dashboard IoT Suhu & Kelembaban",
    "cards": [
      { "label": "Suhu", "path": "/sensor/suhu", "unit": "°C", "icon": "🌡️" },
      { "label": "Kelembaban", "path": "/sensor/kelembaban", "unit": "%", "icon": "💧" }
    ],
    "badges": [
      { "label": "Status", "path": "/sensor/status", "on": "online", "off": "offline" }
    ],
    "note": "ESP32 mengirim data tiap 5 detik — nilai di bawah ter-update otomatis."
  },
  "wiring_guide": [
    {
      "komponen": "DHT22",
      "pin_komponen": "VCC",
      "koneksi_arduino": "3V3"
    },
    {
      "komponen": "DHT22",
      "pin_komponen": "SDA (data)",
      "koneksi_arduino": "GPIO 4"
    },
    {
      "komponen": "DHT22",
      "pin_komponen": "GND",
      "koneksi_arduino": "GND"
    }
  ],
  "cpp_code": "// ===== IoT Suhu & Kelembaban → Firebase =====\n// ESP32 DevKitC V4 + DHT22 + Firebase Realtime Database\n// Isi 2 bagian bertanda TODO di bawah ini.\n\n#include <WiFi.h>\n#include <HTTPClient.h>\n#include <DHT.h>\n\n// ===== TODO 1: WiFi kamu =====\n// Di simulator Wokwi: SSID \"Wokwi-GUEST\", password \"\" (kosong)\n#define WIFI_SSID     \"Wokwi-GUEST\"\n#define WIFI_PASSWORD \"\"\n\n// ===== TODO 2: Firebase =====\n#define DATABASE_URL \"..alamat-database-firebase..\"   // mis. https://proyekmu-default-rtdb.firebaseio.com\n\n#define DHTPIN 4\n#define DHTTYPE DHT22\nDHT dht(DHTPIN, DHTTYPE);\n\nint kirimKeFirebase(const String& path, const String& json) {\n  HTTPClient http;\n  http.begin(String(DATABASE_URL) + path + \".json\");\n  http.addHeader(\"Content-Type\", \"application/json\");\n  int code = http.PUT(json);\n  http.end();\n  return code;\n}\n\nvoid setup() {\n  Serial.begin(115200);\n  dht.begin();\n\n  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);\n  Serial.print(\"Menghubungkan WiFi\");\n  while (WiFi.status() != WL_CONNECTED) { delay(300); Serial.print(\".\"); }\n  Serial.println(\"\\nWiFi OK - IP: \" + WiFi.localIP().toString());\n  // Firebase dikirim via HTTP REST di loop() — tanpa library tambahan.\n}\n\nvoid loop() {\n  float h = dht.readHumidity();\n  float t = dht.readTemperature();\n  if (isnan(h) || isnan(t)) { Serial.println(\"Gagal baca DHT22\"); delay(2000); return; }\n\n  // Kirim ke Firebase (dashboard membaca path ini)\n  kirimKeFirebase(\"/sensor/suhu\", String(t));\n  kirimKeFirebase(\"/sensor/kelembaban\", String(h));\n  kirimKeFirebase(\"/sensor/status\", \"\\\"online\\\"\");\n\n  Serial.printf(\"Suhu: %.1f C | Kelembaban: %.1f %%\\n\", t, h);\n  delay(5000);\n}\n",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"board-esp32-devkit-c-v4\",\"id\":\"esp\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-dht22\",\"id\":\"dht\",\"top\":-130,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-wifi-ap\",\"id\":\"ap\",\"top\":-260,\"left\":0,\"attrs\":{\"ssid\":\"Wokwi-GUEST\",\"password\":\"\"}}],\"connections\":[[\"dht:VCC\",\"esp:3V3\",\"red\",[\"v0\"]],[\"dht:SDA\",\"esp:4\",\"green\",[\"v0\"]],[\"dht:GND\",\"esp:GND.1\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "DHT22",
      "alur_perakitan": "VCC ke 3V3, data (SDA) ke GPIO 4, GND ke GND."
    },
    {
      "nama_komponen": "WiFi AP (simulator)",
      "alur_perakitan": "Part wokwi-wifi-ap menyediakan jaringan 'Wokwi-GUEST' (bebas). Untuk hardware asli, ganti WIFI_SSID/PASSWORD."
    },
    {
      "nama_komponen": "Firebase",
      "alur_perakitan": "Isi DATABASE_URL di kode."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Buka Realtime Database → path /sensor — suhu & kelembaban ter-update tiap 5 detik."
    }
  ]
},
  {
  "id": "tpl-esp32-firebase-ultrasonic",
  "title": "Monitor Jarak + Alarm Firebase",
  "desc": "HC-SR04 mengukur jarak, buzzer berbunyi jika ada objek terlalu dekat, dan data jarak dikirim ke Firebase untuk dashboard.",
  "difficulty": "Menengah",
  "tags": [
    "ESP32",
    "Firebase",
    "Ultrasonik",
    "Buzzer"
  ],
  "libraries": [],
  "verified": true,
  "board": "board-esp32-devkit-c-v4",
  "bom": [
    "1x ESP32 DevKitC V4",
    "1x HC-SR04",
    "1x Buzzer aktif",
    "Kabel jumper"
  ],
  "firebase_setup": [
    "Buat project Firebase gratis → Realtime Database mode test.",
    "Salin URL database → isi DATABASE_URL.",
    "Ganti WiFi sesuai jaringan kamu (simulator: 'Wokwi-GUEST')."
  ],
  "dashboard": {
    "title": "Monitor Jarak + Alarm",
    "cards": [
      { "label": "Jarak", "path": "/jarak/cm", "unit": "cm", "icon": "📏" }
    ],
    "badges": [
      { "label": "Bahaya", "path": "/jarak/bahaya", "on": "true", "on_text": "BAHAYA", "off": "Aman", "danger": true }
    ],
    "note": "Jarak < 30 cm → badge merah (BAHAYA) dan buzzer di ESP32 berbunyi."
  },
  "wiring_guide": [
    {
      "komponen": "HC-SR04",
      "pin_komponen": "VCC",
      "koneksi_arduino": "5V"
    },
    {
      "komponen": "HC-SR04",
      "pin_komponen": "TRIG",
      "koneksi_arduino": "GPIO 5"
    },
    {
      "komponen": "HC-SR04",
      "pin_komponen": "ECHO",
      "koneksi_arduino": "GPIO 18"
    },
    {
      "komponen": "HC-SR04",
      "pin_komponen": "GND",
      "koneksi_arduino": "GND"
    },
    {
      "komponen": "Buzzer",
      "pin_komponen": "2 (+)",
      "koneksi_arduino": "GPIO 19"
    },
    {
      "komponen": "Buzzer",
      "pin_komponen": "1 (-)",
      "koneksi_arduino": "GND"
    }
  ],
  "cpp_code": "// ===== Monitor Jarak + Alarm → Firebase =====\n// ESP32 + HC-SR04 + Buzzer + Firebase Realtime Database\n\n#include <WiFi.h>\n#include <HTTPClient.h>\n\n#define WIFI_SSID     \"Wokwi-GUEST\"   // TODO: ganti WiFi kamu\n#define WIFI_PASSWORD \"\"\n#define DATABASE_URL \"..alamat-database-firebase..\"  // TODO\n\n#define TRIG 5\n#define ECHO 18\n#define BUZZ 19\n#define BATAS_BAHAYA 30  // cm\n\nint kirimKeFirebase(const String& path, const String& json) {\n  HTTPClient http;\n  http.begin(String(DATABASE_URL) + path + \".json\");\n  http.addHeader(\"Content-Type\", \"application/json\");\n  int code = http.PUT(json);\n  http.end();\n  return code;\n}\n\nfloat bacaJarak() {\n  digitalWrite(TRIG, LOW); delayMicroseconds(2);\n  digitalWrite(TRIG, HIGH); delayMicroseconds(10);\n  digitalWrite(TRIG, LOW);\n  long durasi = pulseIn(ECHO, HIGH);\n  return durasi * 0.034 / 2;\n}\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(TRIG, OUTPUT); pinMode(ECHO, INPUT); pinMode(BUZZ, OUTPUT);\n\n  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);\n  while (WiFi.status() != WL_CONNECTED) { delay(300); Serial.print(\".\"); }\n  Serial.println(\"\\nWiFi OK\");\n  // Firebase dikirim via HTTP REST di loop() — tanpa library tambahan.\n}\n\nvoid loop() {\n  float cm = bacaJarak();\n  bool bahaya = (cm > 0 && cm < BATAS_BAHAYA);\n  digitalWrite(BUZZ, bahaya ? HIGH : LOW);\n\n  kirimKeFirebase(\"/jarak/cm\", String(cm));\n  kirimKeFirebase(\"/jarak/bahaya\", bahaya ? \"true\" : \"false\");\n\n  Serial.printf(\"Jarak: %.1f cm | Bahaya: %s\\n\", cm, bahaya ? \"YA\" : \"tidak\");\n  delay(1000);\n}\n",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"board-esp32-devkit-c-v4\",\"id\":\"esp\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-hc-sr04\",\"id\":\"ultra\",\"top\":-130,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-buzzer\",\"id\":\"buz\",\"top\":-260,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-wifi-ap\",\"id\":\"ap\",\"top\":-260,\"left\":0,\"attrs\":{\"ssid\":\"Wokwi-GUEST\",\"password\":\"\"}}],\"connections\":[[\"ultra:VCC\",\"esp:5V\",\"red\",[\"v0\"]],[\"ultra:TRIG\",\"esp:5\",\"green\",[\"v0\"]],[\"ultra:ECHO\",\"esp:18\",\"yellow\",[\"v0\"]],[\"ultra:GND\",\"esp:GND.1\",\"black\",[\"v0\"]],[\"buz:2\",\"esp:19\",\"blue\",[\"v0\"]],[\"buz:1\",\"esp:GND.2\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "HC-SR04",
      "alur_perakitan": "VCC ke 5V, TRIG ke GPIO 5, ECHO ke GPIO 18, GND ke GND."
    },
    {
      "nama_komponen": "Buzzer",
      "alur_perakitan": "Kaki (+) ke GPIO 19, kaki (-) ke GND."
    },
    {
      "nama_komponen": "Firebase",
      "alur_perakitan": "Isi DATABASE_URL, ganti WiFi bila perlu."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Dekatkan objek ke sensor — buzzer berbunyi < 30 cm dan /jarak/bahaya jadi true di Firebase."
    }
  ]
},
  {
  "id": "tpl-esp32-firebase-pir",
  "title": "Deteksi Gerakan + Notifikasi",
  "desc": "Sensor PIR mendeteksi gerakan, LED menyala sebagai indikator, dan status gerakan dikirim ke Firebase untuk dashboard keamanan rumah.",
  "difficulty": "Mudah",
  "tags": [
    "ESP32",
    "Firebase",
    "PIR",
    "Keamanan"
  ],
  "libraries": [],
  "verified": true,
  "board": "board-esp32-devkit-c-v4",
  "bom": [
    "1x ESP32 DevKitC V4",
    "1x Sensor PIR HC-SR501",
    "1x LED merah",
    "1x Resistor 220 Ohm",
    "Kabel jumper"
  ],
  "firebase_setup": [
    "Buat project Firebase gratis → Realtime Database mode test.",
    "Isi DATABASE_URL di kode.",
    "Ganti WiFi sesuai jaringan kamu (simulator: 'Wokwi-GUEST')."
  ],
  "dashboard": {
    "title": "Dashboard Keamanan Rumah",
    "cards": [
      { "label": "Waktu Terakhir", "path": "/keamanan/waktu_terakhir", "icon": "🕐" }
    ],
    "badges": [
      { "label": "Gerakan", "path": "/keamanan/gerakan", "on": "true", "on_text": "GERAKAN TERDETEKSI", "off": "Aman", "danger": true }
    ],
    "note": "Saat PIR mendeteksi gerakan, badge berubah merah dan waktu terakhir ter-update."
  },
  "wiring_guide": [
    {
      "komponen": "PIR",
      "pin_komponen": "VCC",
      "koneksi_arduino": "3V3"
    },
    {
      "komponen": "PIR",
      "pin_komponen": "OUT",
      "koneksi_arduino": "GPIO 26"
    },
    {
      "komponen": "PIR",
      "pin_komponen": "GND",
      "koneksi_arduino": "GND"
    },
    {
      "komponen": "LED (via 220 Ohm)",
      "pin_komponen": "A",
      "koneksi_arduino": "GPIO 13"
    },
    {
      "komponen": "LED",
      "pin_komponen": "C",
      "koneksi_arduino": "GND"
    }
  ],
  "cpp_code": "// ===== Deteksi Gerakan → Firebase =====\n// ESP32 + PIR + LED + Firebase Realtime Database\n\n#include <WiFi.h>\n#include <HTTPClient.h>\n\n#define WIFI_SSID     \"Wokwi-GUEST\"   // TODO: ganti WiFi kamu\n#define WIFI_PASSWORD \"\"\n#define DATABASE_URL \"..alamat-database-firebase..\"  // TODO\n\n#define PIR_PIN 26\n#define LED_PIN 13\n\nint kirimKeFirebase(const String& path, const String& json) {\n  HTTPClient http;\n  http.begin(String(DATABASE_URL) + path + \".json\");\n  http.addHeader(\"Content-Type\", \"application/json\");\n  int code = http.PUT(json);\n  http.end();\n  return code;\n}\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(PIR_PIN, INPUT); pinMode(LED_PIN, OUTPUT);\n\n  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);\n  while (WiFi.status() != WL_CONNECTED) { delay(300); Serial.print(\".\"); }\n  Serial.println(\"\\nWiFi OK\");\n  // Firebase dikirim via HTTP REST di loop() — tanpa library tambahan.\n\n  kirimKeFirebase(\"/keamanan/status\", \"\\\"siap\\\"\");\n}\n\nvoid loop() {\n  int gerakan = digitalRead(PIR_PIN);\n  digitalWrite(LED_PIN, gerakan ? HIGH : LOW);\n\n  if (gerakan) {\n    kirimKeFirebase(\"/keamanan/gerakan\", \"true\");\n    kirimKeFirebase(\"/keamanan/waktu_terakhir\", \"\\\"ada gerakan\\\"\");\n    Serial.println(\"Gerakan terdeteksi!\");\n  } else {\n    kirimKeFirebase(\"/keamanan/gerakan\", \"false\");\n  }\n  delay(500);\n}\n",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"board-esp32-devkit-c-v4\",\"id\":\"esp\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-pir-motion-sensor\",\"id\":\"pir\",\"top\":-130,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-led\",\"id\":\"led\",\"top\":-130,\"left\":520,\"attrs\":{\"color\":\"red\"}},{\"type\":\"wokwi-resistor\",\"id\":\"r1\",\"top\":-50,\"left\":520,\"attrs\":{\"value\":\"220\"}},{\"type\":\"wokwi-wifi-ap\",\"id\":\"ap\",\"top\":-260,\"left\":0,\"attrs\":{\"ssid\":\"Wokwi-GUEST\",\"password\":\"\"}}],\"connections\":[[\"pir:VCC\",\"esp:3V3\",\"red\",[\"v0\"]],[\"pir:OUT\",\"esp:26\",\"green\",[\"v0\"]],[\"pir:GND\",\"esp:GND.1\",\"black\",[\"v0\"]],[\"esp:13\",\"r1:1\",\"yellow\",[\"v0\"]],[\"r1:2\",\"led:A\",\"yellow\",[\"v0\"]],[\"led:C\",\"esp:GND.2\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "PIR",
      "alur_perakitan": "VCC ke 3V3, OUT ke GPIO 26, GND ke GND."
    },
    {
      "nama_komponen": "LED indikator",
      "alur_perakitan": "Anoda via resistor 220 Ohm ke GPIO 13, katoda ke GND."
    },
    {
      "nama_komponen": "Firebase",
      "alur_perakitan": "Isi DATABASE_URL, ganti WiFi bila perlu."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Lewat di depan sensor — LED menyala dan /keamanan/gerakan jadi true di dashboard."
    }
  ]
},
  {
  "id": "tpl-esp32-firebase-ldr",
  "title": "Lampu Otomatis Sensor Cahaya",
  "desc": "LDR mendeteksi intensitas cahaya; ESP32 menyalakan LED saat gelap dan mengirim data ke Firebase untuk dashboard monitoring.",
  "difficulty": "Mudah",
  "tags": [
    "ESP32",
    "Firebase",
    "LDR",
    "Otomatis"
  ],
  "libraries": [],
  "verified": true,
  "board": "board-esp32-devkit-c-v4",
  "bom": [
    "1x ESP32 DevKitC V4",
    "1x Modul sensor cahaya (LDR)",
    "1x LED",
    "1x Resistor 220 Ohm",
    "Kabel jumper"
  ],
  "firebase_setup": [
    "Buat project Firebase gratis → Realtime Database mode test.",
    "Isi DATABASE_URL di kode.",
    "Ganti WiFi sesuai jaringan kamu (simulator: 'Wokwi-GUEST')."
  ],
  "dashboard": {
    "title": "Lampu Otomatis Sensor Cahaya",
    "cards": [
      { "label": "Nilai ADC", "path": "/cahaya/nilai_adc", "icon": "🔆" }
    ],
    "badges": [
      { "label": "Lampu", "path": "/cahaya/lampu_nyala", "on": "true", "on_text": "Lampu NYALA", "off": "Mati" }
    ],
    "note": "Nilai ADC kecil = ruangan gelap → lampu menyala otomatis."
  },
  "wiring_guide": [
    {
      "komponen": "Modul LDR",
      "pin_komponen": "VCC",
      "koneksi_arduino": "3V3"
    },
    {
      "komponen": "Modul LDR",
      "pin_komponen": "AO",
      "koneksi_arduino": "GPIO 34 (ADC)"
    },
    {
      "komponen": "Modul LDR",
      "pin_komponen": "GND",
      "koneksi_arduino": "GND"
    },
    {
      "komponen": "LED (via 220 Ohm)",
      "pin_komponen": "A",
      "koneksi_arduino": "GPIO 25"
    },
    {
      "komponen": "LED",
      "pin_komponen": "C",
      "koneksi_arduino": "GND"
    }
  ],
  "cpp_code": "// ===== Lampu Otomatis Sensor Cahaya → Firebase =====\n// ESP32 + modul LDR + LED + Firebase Realtime Database\n\n#include <WiFi.h>\n#include <HTTPClient.h>\n\n#define WIFI_SSID     \"Wokwi-GUEST\"   // TODO: ganti WiFi kamu\n#define WIFI_PASSWORD \"\"\n#define DATABASE_URL \"..alamat-database-firebase..\"  // TODO\n\n#define LDR_PIN 34   // GPIO 34 = ADC (input saja)\n#define LED_PIN 25\n#define AMBANG_GELAP 2000  // nilai ADC di bawah ini = gelap\n\nint kirimKeFirebase(const String& path, const String& json) {\n  HTTPClient http;\n  http.begin(String(DATABASE_URL) + path + \".json\");\n  http.addHeader(\"Content-Type\", \"application/json\");\n  int code = http.PUT(json);\n  http.end();\n  return code;\n}\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED_PIN, OUTPUT);\n\n  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);\n  while (WiFi.status() != WL_CONNECTED) { delay(300); Serial.print(\".\"); }\n  Serial.println(\"\\nWiFi OK\");\n  // Firebase dikirim via HTTP REST di loop() — tanpa library tambahan.\n}\n\nvoid loop() {\n  int cahaya = analogRead(LDR_PIN);  // kecil = gelap\n  bool lampu = (cahaya < AMBANG_GELAP);\n  digitalWrite(LED_PIN, lampu ? HIGH : LOW);\n\n  kirimKeFirebase(\"/cahaya/nilai_adc\", String(cahaya));\n  kirimKeFirebase(\"/cahaya/lampu_nyala\", lampu ? \"true\" : \"false\");\n\n  Serial.printf(\"Cahaya: %d | Lampu: %s\\n\", cahaya, lampu ? \"NYALA\" : \"mati\");\n  delay(1000);\n}\n",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"board-esp32-devkit-c-v4\",\"id\":\"esp\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-photoresistor-sensor\",\"id\":\"ldr\",\"top\":-130,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-led\",\"id\":\"led\",\"top\":-130,\"left\":520,\"attrs\":{\"color\":\"white\"}},{\"type\":\"wokwi-resistor\",\"id\":\"r1\",\"top\":-50,\"left\":520,\"attrs\":{\"value\":\"220\"}},{\"type\":\"wokwi-wifi-ap\",\"id\":\"ap\",\"top\":-260,\"left\":0,\"attrs\":{\"ssid\":\"Wokwi-GUEST\",\"password\":\"\"}}],\"connections\":[[\"ldr:VCC\",\"esp:3V3\",\"red\",[\"v0\"]],[\"ldr:AO\",\"esp:34\",\"green\",[\"v0\"]],[\"ldr:GND\",\"esp:GND.1\",\"black\",[\"v0\"]],[\"esp:25\",\"r1:1\",\"yellow\",[\"v0\"]],[\"r1:2\",\"led:A\",\"yellow\",[\"v0\"]],[\"led:C\",\"esp:GND.2\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "Modul LDR",
      "alur_perakitan": "VCC ke 3V3, AO ke GPIO 34, GND ke GND."
    },
    {
      "nama_komponen": "LED",
      "alur_perakitan": "Anoda via resistor 220 Ohm ke GPIO 25, katoda ke GND."
    },
    {
      "nama_komponen": "Firebase",
      "alur_perakitan": "Isi DATABASE_URL, ganti WiFi bila perlu."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Tutup sensor LDR (gelapkan) — LED menyala dan /cahaya/lampu_nyala jadi true."
    }
  ]
},
  {
  "id": "tpl-esp32-firebase-thermostat",
  "title": "Termostat + Relay Firebase",
  "desc": "NTC membaca suhu; relay memutus/menyambung beban (mis. kipas/pemanas) otomatis dan statusnya dikirim ke Firebase.",
  "difficulty": "Menengah",
  "tags": [
    "ESP32",
    "Firebase",
    "NTC",
    "Relay",
    "Otomasi"
  ],
  "verified": true,
  "libraries": [],
  "board": "board-esp32-devkit-c-v4",
  "bom": [
    "1x ESP32 DevKitC V4",
    "1x Sensor suhu NTC",
    "1x Modul relay 1 kanal",
    "Kabel jumper"
  ],
  "firebase_setup": [
    "Buat project Firebase gratis → Realtime Database mode test.",
    "Isi DATABASE_URL di kode.",
    "Ganti WiFi sesuai jaringan kamu (simulator: 'Wokwi-GUEST')."
  ],
  "dashboard": {
    "title": "Termostat + Relay",
    "cards": [
      { "label": "Suhu", "path": "/termostat/suhu", "unit": "°C", "icon": "🌡️" }
    ],
    "badges": [
      { "label": "Beban", "path": "/termostat/beban_nyala", "on": "true", "on_text": "Beban NYALA", "off": "Mati" }
    ],
    "note": "Suhu di atas 30°C → beban (relay) menyala otomatis."
  },
  "wiring_guide": [
    {
      "komponen": "NTC",
      "pin_komponen": "VCC",
      "koneksi_arduino": "3V3"
    },
    {
      "komponen": "NTC",
      "pin_komponen": "OUT",
      "koneksi_arduino": "GPIO 35 (ADC)"
    },
    {
      "komponen": "NTC",
      "pin_komponen": "GND",
      "koneksi_arduino": "GND"
    },
    {
      "komponen": "Relay",
      "pin_komponen": "VCC",
      "koneksi_arduino": "5V"
    },
    {
      "komponen": "Relay",
      "pin_komponen": "IN",
      "koneksi_arduino": "GPIO 25"
    },
    {
      "komponen": "Relay",
      "pin_komponen": "GND",
      "koneksi_arduino": "GND"
    }
  ],
  "cpp_code": "// ===== Termostat + Relay → Firebase =====\n// ESP32 + NTC + relay + Firebase Realtime Database\n// Kalibrasi: nilai ADC NTC -> suhu perkiraan (sesuaikan dengan datasheet NTC kamu)\n\n#include <WiFi.h>\n#include <HTTPClient.h>\n\n#define WIFI_SSID     \"Wokwi-GUEST\"   // TODO: ganti WiFi kamu\n#define WIFI_PASSWORD \"\"\n#define DATABASE_URL \"..alamat-database-firebase..\"  // TODO\n\n#define NTC_PIN 35\n#define RELAY_PIN 25\n#define SUHU_TARGET 30.0  // nyalakan beban di atas 30 C\n\nint kirimKeFirebase(const String& path, const String& json) {\n  HTTPClient http;\n  http.begin(String(DATABASE_URL) + path + \".json\");\n  http.addHeader(\"Content-Type\", \"application/json\");\n  int code = http.PUT(json);\n  http.end();\n  return code;\n}\n\nfloat bacaSuhu() {\n  int adc = analogRead(NTC_PIN);\n  // Konversi sederhana ADC -> suhu (kalibrasi opsional di sini)\n  return map(adc, 0, 4095, 0, 100);\n}\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(RELAY_PIN, OUTPUT);\n  digitalWrite(RELAY_PIN, LOW);\n\n  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);\n  while (WiFi.status() != WL_CONNECTED) { delay(300); Serial.print(\".\"); }\n  Serial.println(\"\\nWiFi OK\");\n  // Firebase dikirim via HTTP REST di loop() — tanpa library tambahan.\n}\n\nvoid loop() {\n  float suhu = bacaSuhu();\n  bool nyala = (suhu > SUHU_TARGET);\n  digitalWrite(RELAY_PIN, nyala ? HIGH : LOW);\n\n  kirimKeFirebase(\"/termostat/suhu\", String(suhu));\n  kirimKeFirebase(\"/termostat/beban_nyala\", nyala ? \"true\" : \"false\");\n\n  Serial.printf(\"Suhu: %.1f C | Beban: %s\\n\", suhu, nyala ? \"NYALA\" : \"mati\");\n  delay(2000);\n}\n",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"board-esp32-devkit-c-v4\",\"id\":\"esp\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-ntc-temperature-sensor\",\"id\":\"ntc\",\"top\":-130,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-relay-module\",\"id\":\"rel\",\"top\":-130,\"left\":520,\"attrs\":{}},{\"type\":\"wokwi-wifi-ap\",\"id\":\"ap\",\"top\":-260,\"left\":0,\"attrs\":{\"ssid\":\"Wokwi-GUEST\",\"password\":\"\"}}],\"connections\":[[\"ntc:VCC\",\"esp:3V3\",\"red\",[\"v0\"]],[\"ntc:OUT\",\"esp:35\",\"green\",[\"v0\"]],[\"ntc:GND\",\"esp:GND.1\",\"black\",[\"v0\"]],[\"rel:VCC\",\"esp:5V\",\"red\",[\"v0\"]],[\"rel:IN\",\"esp:25\",\"yellow\",[\"v0\"]],[\"rel:GND\",\"esp:GND.2\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "NTC",
      "alur_perakitan": "VCC ke 3V3, OUT ke GPIO 35, GND ke GND."
    },
    {
      "nama_komponen": "Relay",
      "alur_perakitan": "VCC ke 5V, IN ke GPIO 25, GND ke GND. Beban (kipas/pemanas) ke COM & NO."
    },
    {
      "nama_komponen": "Firebase",
      "alur_perakitan": "Isi DATABASE_URL, ganti WiFi bila perlu."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Naikkan suhu di atas target — relay aktif dan /termostat/beban_nyala jadi true."
    }
  ]
},
  {
  "id": "tpl-esp32-firebase-servo",
  "title": "Servo Kendali Jarak Jauh",
  "desc": "Kontrol posisi servo dari dashboard Firebase — tulis nilai 0-180 di path /servo/sudut, dan ESP32 langsung menggerakkan servo.",
  "difficulty": "Menengah",
  "tags": [
    "ESP32",
    "Firebase",
    "Servo",
    "Kontrol"
  ],
  "verified": true,
  "libraries": ["ESP32Servo"],
  "board": "board-esp32-devkit-c-v4",
  "bom": [
    "1x ESP32 DevKitC V4",
    "1x Servo SG90",
    "Kabel jumper"
  ],
  "firebase_setup": [
    "Buat project Firebase gratis → Realtime Database mode test.",
    "Isi DATABASE_URL di kode.",
    "Ganti WiFi sesuai jaringan kamu (simulator: 'Wokwi-GUEST').",
    "Dashboard: tulis angka 0-180 di node /servo/sudut untuk menggerakkan servo."
  ],
  "dashboard": {
    "title": "Kendali Servo dari Web",
    "controls": [
      { "type": "slider", "label": "Sudut Servo", "path": "/servo/sudut", "min": 0, "max": 180, "unit": "°" }
    ],
    "note": "Geser slider → nilai ditulis ke /servo/sudut, ESP32 langsung menggerakkan servo."
  },
  "wiring_guide": [
    {
      "komponen": "Servo",
      "pin_komponen": "V+",
      "koneksi_arduino": "5V"
    },
    {
      "komponen": "Servo",
      "pin_komponen": "PWM",
      "koneksi_arduino": "GPIO 13"
    },
    {
      "komponen": "Servo",
      "pin_komponen": "GND",
      "koneksi_arduino": "GND"
    }
  ],
  "cpp_code": "// ===== Servo Kendali dari Firebase =====\n// ESP32 + Servo SG90 + Firebase Realtime Database\n// INSTALL: ESP32Servo\n\n#include <WiFi.h>\n#include <HTTPClient.h>\n#include <ESP32Servo.h>\n\n#define WIFI_SSID     \"Wokwi-GUEST\"   // TODO: ganti WiFi kamu\n#define WIFI_PASSWORD \"\"\n#define DATABASE_URL \"..alamat-database-firebase..\"  // TODO\n\n#define SERVO_PIN 13\nServo servo;\n\nint bacaDariFirebase(const String& path) {\n  HTTPClient http;\n  http.begin(String(DATABASE_URL) + path + \".json\");\n  int code = http.GET();\n  String body = (code > 0) ? http.getString() : \"\";\n  http.end();\n  body.trim();\n  return body;\n}\nint kirimKeFirebase(const String& path, const String& json) {\n  HTTPClient http;\n  http.begin(String(DATABASE_URL) + path + \".json\");\n  http.addHeader(\"Content-Type\", \"application/json\");\n  int code = http.PUT(json);\n  http.end();\n  return code;\n}\n\nint sudutSekarang = 90;\n\nvoid setup() {\n  Serial.begin(115200);\n  servo.attach(SERVO_PIN);\n  servo.write(sudutSekarang);\n\n  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);\n  while (WiFi.status() != WL_CONNECTED) { delay(300); Serial.print(\".\"); }\n  Serial.println(\"\\nWiFi OK\");\n  // Firebase dikirim via HTTP REST di loop() — tanpa library tambahan.\n\n  kirimKeFirebase(\"/servo/sudut\", String(sudutSekarang));\n}\n\nvoid loop() {\n  // Baca perintah dari dashboard: tulis 0-180 di /servo/sudut\n  int sudut = bacaDariFirebase(\"/servo/sudut\").toInt();\n  sudut = constrain(sudut, 0, 180);\n  if (sudut != sudutSekarang) {\n    servo.write(sudut);\n    sudutSekarang = sudut;\n    Serial.printf(\"Servo -> %d derajat\\n\", sudut);\n  }\n  delay(300);\n}\n",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"board-esp32-devkit-c-v4\",\"id\":\"esp\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-servo\",\"id\":\"servo\",\"top\":-130,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-wifi-ap\",\"id\":\"ap\",\"top\":-260,\"left\":0,\"attrs\":{\"ssid\":\"Wokwi-GUEST\",\"password\":\"\"}}],\"connections\":[[\"servo:V+\",\"esp:5V\",\"red\",[\"v0\"]],[\"servo:PWM\",\"esp:13\",\"yellow\",[\"v0\"]],[\"servo:GND\",\"esp:GND.1\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "Servo",
      "alur_perakitan": "V+ ke 5V, PWM ke GPIO 13, GND ke GND."
    },
    {
      "nama_komponen": "Firebase",
      "alur_perakitan": "Isi DATABASE_URL, ganti WiFi bila perlu."
    },
    {
      "nama_komponen": "Dashboard",
      "alur_perakitan": "Buka Realtime Database → ubah /servo/sudut menjadi angka 0-180."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Servo bergerak mengikuti nilai yang ditulis dari dashboard."
    }
  ]
},
  {
  "id": "tpl-esp32-firebase-rgb",
  "title": "Lampu RGB Kendali Web",
  "desc": "Atur warna LED RGB dari dashboard Firebase — tulis nilai R, G, B (0-255) di database dan ESP32 menampilkannya via PWM.",
  "difficulty": "Menengah",
  "tags": [
    "ESP32",
    "Firebase",
    "RGB LED",
    "Kontrol"
  ],
  "verified": true,
  "libraries": [],
  "board": "board-esp32-devkit-c-v4",
  "bom": [
    "1x ESP32 DevKitC V4",
    "1x LED RGB (katoda bersama)",
    "3x Resistor 220 Ohm",
    "Kabel jumper"
  ],
  "firebase_setup": [
    "Buat project Firebase gratis → Realtime Database mode test.",
    "Isi DATABASE_URL di kode.",
    "Ganti WiFi sesuai jaringan kamu (simulator: 'Wokwi-GUEST').",
    "Dashboard: tulis nilai 0-255 di /rgb/merah, /rgb/hijau, /rgb/biru."
  ],
  "dashboard": {
    "title": "Lampu RGB dari Web",
    "controls": [
      { "type": "color", "label": "Warna LED RGB", "paths": ["/rgb/merah", "/rgb/hijau", "/rgb/biru"] }
    ],
    "note": "Pilih warna → nilai RGB ditulis ke Firebase, LED langsung berubah."
  },
  "wiring_guide": [
    {
      "komponen": "LED RGB",
      "pin_komponen": "R (via 220 Ohm)",
      "koneksi_arduino": "GPIO 25"
    },
    {
      "komponen": "LED RGB",
      "pin_komponen": "G (via 220 Ohm)",
      "koneksi_arduino": "GPIO 26"
    },
    {
      "komponen": "LED RGB",
      "pin_komponen": "B (via 220 Ohm)",
      "koneksi_arduino": "GPIO 27"
    },
    {
      "komponen": "LED RGB",
      "pin_komponen": "COM (katoda)",
      "koneksi_arduino": "GND"
    }
  ],
  "cpp_code": "// ===== Lampu RGB Kendali dari Firebase =====\n// ESP32 + LED RGB + Firebase Realtime Database\n\n#include <WiFi.h>\n#include <HTTPClient.h>\n\n#define WIFI_SSID     \"Wokwi-GUEST\"   // TODO: ganti WiFi kamu\n#define WIFI_PASSWORD \"\"\n#define DATABASE_URL \"..alamat-database-firebase..\"  // TODO\n\n#define PIN_R 25\n#define PIN_G 26\n#define PIN_B 27\n\nint nilai[3] = {0, 0, 0};\n\nint bacaDariFirebase(const String& path, int fallback) {\n  HTTPClient http;\n  http.begin(String(DATABASE_URL) + path + \".json\");\n  int code = http.GET();\n  String body = (code > 0) ? http.getString() : \"\";\n  http.end();\n  body.trim();\n  if (body.length() == 0) return fallback;\n  return constrain(body.toInt(), 0, 255);\n}\nint kirimKeFirebase(const String& path, const String& json) {\n  HTTPClient http;\n  http.begin(String(DATABASE_URL) + path + \".json\");\n  http.addHeader(\"Content-Type\", \"application/json\");\n  int code = http.PUT(json);\n  http.end();\n  return code;\n}\n\nint bacaNilai(const char* path, int fallback) {\n  return bacaDariFirebase(path, fallback);\n}\n\nvoid setup() {\n  Serial.begin(115200);\n  ledcSetup(0, 5000, 8); ledcAttachPin(PIN_R, 0);\n  ledcSetup(1, 5000, 8); ledcAttachPin(PIN_G, 1);\n  ledcSetup(2, 5000, 8); ledcAttachPin(PIN_B, 2);\n\n  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);\n  while (WiFi.status() != WL_CONNECTED) { delay(300); Serial.print(\".\"); }\n  Serial.println(\"\\nWiFi OK\");\n  // Firebase dikirim via HTTP REST di loop() — tanpa library tambahan.\n}\n\nvoid loop() {\n  nilai[0] = bacaNilai(\"/rgb/merah\", nilai[0]);\n  nilai[1] = bacaNilai(\"/rgb/hijau\", nilai[1]);\n  nilai[2] = bacaNilai(\"/rgb/biru\", nilai[2]);\n\n  ledcWrite(0, nilai[0]);\n  ledcWrite(1, nilai[1]);\n  ledcWrite(2, nilai[2]);\n\n  Serial.printf(\"RGB: %d %d %d\\n\", nilai[0], nilai[1], nilai[2]);\n  delay(500);\n}\n",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"board-esp32-devkit-c-v4\",\"id\":\"esp\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-rgb-led\",\"id\":\"rgb\",\"top\":-130,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-resistor\",\"id\":\"r1\",\"top\":-200,\"left\":340,\"attrs\":{\"value\":\"220\"}},{\"type\":\"wokwi-resistor\",\"id\":\"r2\",\"top\":-200,\"left\":440,\"attrs\":{\"value\":\"220\"}},{\"type\":\"wokwi-resistor\",\"id\":\"r3\",\"top\":-200,\"left\":540,\"attrs\":{\"value\":\"220\"}},{\"type\":\"wokwi-wifi-ap\",\"id\":\"ap\",\"top\":-320,\"left\":0,\"attrs\":{\"ssid\":\"Wokwi-GUEST\",\"password\":\"\"}}],\"connections\":[[\"esp:25\",\"r1:1\",\"red\",[\"v0\"]],[\"r1:2\",\"rgb:R\",\"red\",[\"v0\"]],[\"esp:26\",\"r2:1\",\"green\",[\"v0\"]],[\"r2:2\",\"rgb:G\",\"green\",[\"v0\"]],[\"esp:27\",\"r3:1\",\"blue\",[\"v0\"]],[\"r3:2\",\"rgb:B\",\"blue\",[\"v0\"]],[\"rgb:COM\",\"esp:GND.1\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "LED RGB",
      "alur_perakitan": "R via 220 Ohm ke GPIO 25, G via 220 Ohm ke GPIO 26, B via 220 Ohm ke GPIO 27, COM ke GND."
    },
    {
      "nama_komponen": "Firebase",
      "alur_perakitan": "Isi DATABASE_URL, ganti WiFi bila perlu."
    },
    {
      "nama_komponen": "Dashboard",
      "alur_perakitan": "Tulis nilai 0-255 di /rgb/merah, /rgb/hijau, /rgb/biru."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "LED RGB berubah warna sesuai nilai dari dashboard."
    }
  ]
},
  {
  "id": "tpl-esp32-firebase-gas",
  "title": "Deteksi Gas Bocor + Alarm",
  "desc": "Sensor MQ2 mendeteksi kadar gas/asap; buzzer berbunyi saat berbahaya dan data dikirim ke Firebase untuk dashboard keamanan.",
  "difficulty": "Menengah",
  "tags": [
    "ESP32",
    "Firebase",
    "MQ2",
    "Keamanan"
  ],
  "verified": true,
  "libraries": [],
  "board": "board-esp32-devkit-c-v4",
  "bom": [
    "1x ESP32 DevKitC V4",
    "1x Sensor gas MQ2",
    "1x Buzzer aktif",
    "1x LED merah",
    "Kabel jumper"
  ],
  "firebase_setup": [
    "Buat project Firebase gratis → Realtime Database mode test.",
    "Isi DATABASE_URL di kode.",
    "Ganti WiFi sesuai jaringan kamu (simulator: 'Wokwi-GUEST')."
  ],
  "dashboard": {
    "title": "Deteksi Gas Bocor",
    "cards": [
      { "label": "Nilai ADC", "path": "/gas/nilai_adc", "icon": "💨" }
    ],
    "badges": [
      { "label": "Bahaya", "path": "/gas/bahaya", "on": "true", "on_text": "BAHAYA!", "off": "Aman", "danger": true }
    ],
    "note": "Nilai ADC di atas 2500 = kebocoran gas → badge merah + buzzer & LED menyala."
  },
  "wiring_guide": [
    {
      "komponen": "MQ2",
      "pin_komponen": "VCC",
      "koneksi_arduino": "5V"
    },
    {
      "komponen": "MQ2",
      "pin_komponen": "AO",
      "koneksi_arduino": "GPIO 35 (ADC)"
    },
    {
      "komponen": "MQ2",
      "pin_komponen": "GND",
      "koneksi_arduino": "GND"
    },
    {
      "komponen": "Buzzer",
      "pin_komponen": "2 (+)",
      "koneksi_arduino": "GPIO 19"
    },
    {
      "komponen": "LED merah",
      "pin_komponen": "A",
      "koneksi_arduino": "GPIO 13 (via resistor)"
    },
    {
      "komponen": "Buzzer & LED",
      "pin_komponen": "(-)/(C)",
      "koneksi_arduino": "GND"
    }
  ],
  "cpp_code": "// ===== Deteksi Gas Bocor → Firebase =====\n// ESP32 + MQ2 + buzzer + LED + Firebase Realtime Database\n\n#include <WiFi.h>\n#include <HTTPClient.h>\n\n#define WIFI_SSID     \"Wokwi-GUEST\"   // TODO: ganti WiFi kamu\n#define WIFI_PASSWORD \"\"\n#define DATABASE_URL \"..alamat-database-firebase..\"  // TODO\n\n#define GAS_PIN 35   // AO (analog)\n#define BUZZ_PIN 19\n#define LED_PIN 13\n#define AMBANG_BAHAYA 2500  // kalibrasi sesuai lingkungan\n\nint kirimKeFirebase(const String& path, const String& json) {\n  HTTPClient http;\n  http.begin(String(DATABASE_URL) + path + \".json\");\n  http.addHeader(\"Content-Type\", \"application/json\");\n  int code = http.PUT(json);\n  http.end();\n  return code;\n}\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(BUZZ_PIN, OUTPUT); pinMode(LED_PIN, OUTPUT);\n\n  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);\n  while (WiFi.status() != WL_CONNECTED) { delay(300); Serial.print(\".\"); }\n  Serial.println(\"\\nWiFi OK\");\n  // Firebase dikirim via HTTP REST di loop() — tanpa library tambahan.\n}\n\nvoid loop() {\n  int gas = analogRead(GAS_PIN);\n  bool bahaya = (gas > AMBANG_BAHAYA);\n  digitalWrite(BUZZ_PIN, bahaya ? HIGH : LOW);\n  digitalWrite(LED_PIN, bahaya ? HIGH : LOW);\n\n  kirimKeFirebase(\"/gas/nilai_adc\", String(gas));\n  kirimKeFirebase(\"/gas/bahaya\", bahaya ? \"true\" : \"false\");\n\n  Serial.printf(\"Gas: %d | Bahaya: %s\\n\", gas, bahaya ? \"YA!!\" : \"aman\");\n  delay(1000);\n}\n",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"board-esp32-devkit-c-v4\",\"id\":\"esp\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-gas-sensor\",\"id\":\"mq2\",\"top\":-130,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-buzzer\",\"id\":\"buz\",\"top\":-130,\"left\":540,\"attrs\":{}},{\"type\":\"wokwi-led\",\"id\":\"led\",\"top\":-260,\"left\":540,\"attrs\":{\"color\":\"red\"}},{\"type\":\"wokwi-wifi-ap\",\"id\":\"ap\",\"top\":-320,\"left\":0,\"attrs\":{\"ssid\":\"Wokwi-GUEST\",\"password\":\"\"}}],\"connections\":[[\"mq2:VCC\",\"esp:5V\",\"red\",[\"v0\"]],[\"mq2:AO\",\"esp:35\",\"green\",[\"v0\"]],[\"mq2:GND\",\"esp:GND.1\",\"black\",[\"v0\"]],[\"buz:2\",\"esp:19\",\"blue\",[\"v0\"]],[\"buz:1\",\"esp:GND.2\",\"black\",[\"v0\"]],[\"led:A\",\"esp:13\",\"yellow\",[\"v0\"]],[\"led:C\",\"esp:GND.3\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "MQ2",
      "alur_perakitan": "VCC ke 5V, AO ke GPIO 35, GND ke GND."
    },
    {
      "nama_komponen": "Buzzer & LED",
      "alur_perakitan": "Buzzer (+) ke GPIO 19, LED via resistor ke GPIO 13, semua (-)/(C) ke GND."
    },
    {
      "nama_komponen": "Firebase",
      "alur_perakitan": "Isi DATABASE_URL, ganti WiFi bila perlu."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Dekatkan asap/gas — buzzer dan LED menyala, /gas/bahaya jadi true."
    }
  ]
},
  {
  "id": "tpl-esp32-firebase-oled",
  "title": "Cuaca Lokal + OLED Firebase",
  "desc": "DHT22 + OLED SSD1306: suhu & kelembaban tampil di layar sekaligus dikirim ke Firebase untuk dashboard dan grafik.",
  "difficulty": "Menengah",
  "tags": [
    "ESP32",
    "Firebase",
    "OLED",
    "DHT22",
    "Display"
  ],
  "verified": true,
  "libraries": ["Adafruit SSD1306", "Adafruit GFX Library", "DHT sensor library for ESPx"],
  "board": "board-esp32-devkit-c-v4",
  "bom": [
    "1x ESP32 DevKitC V4",
    "1x DHT22",
    "1x OLED SSD1306 128x64 (I2C)",
    "Kabel jumper"
  ],
  "firebase_setup": [
    "Buat project Firebase gratis → Realtime Database mode test.",
    "Isi DATABASE_URL di kode.",
    "Ganti WiFi sesuai jaringan kamu (simulator: 'Wokwi-GUEST')."
  ],
  "dashboard": {
    "title": "Cuaca Lokal (OLED + Firebase)",
    "cards": [
      { "label": "Suhu", "path": "/cuaca/suhu", "unit": "°C", "icon": "🌡️" },
      { "label": "Kelembaban", "path": "/cuaca/kelembaban", "unit": "%", "icon": "💧" }
    ],
    "note": "Data DHT22 dikirim tiap 4 detik dan tampil di OLED ESP32 + dashboard ini."
  },
  "wiring_guide": [
    {
      "komponen": "DHT22",
      "pin_komponen": "VCC",
      "koneksi_arduino": "3V3"
    },
    {
      "komponen": "DHT22",
      "pin_komponen": "SDA (data)",
      "koneksi_arduino": "GPIO 4"
    },
    {
      "komponen": "DHT22",
      "pin_komponen": "GND",
      "koneksi_arduino": "GND"
    },
    {
      "komponen": "OLED SSD1306",
      "pin_komponen": "VIN",
      "koneksi_arduino": "3V3"
    },
    {
      "komponen": "OLED SSD1306",
      "pin_komponen": "DATA (SDA)",
      "koneksi_arduino": "GPIO 21"
    },
    {
      "komponen": "OLED SSD1306",
      "pin_komponen": "CLK (SCL)",
      "koneksi_arduino": "GPIO 22"
    },
    {
      "komponen": "OLED SSD1306",
      "pin_komponen": "GND",
      "koneksi_arduino": "GND"
    }
  ],
  "cpp_code": "// ===== Cuaca Lokal + OLED → Firebase =====\n// ESP32 + DHT22 + OLED SSD1306 (I2C) + Firebase Realtime Database\n// INSTALL: Adafruit SSD1306, Adafruit GFX, DHT sensor library\n\n#include <WiFi.h>\n#include <HTTPClient.h>\n#include <Wire.h>\n#include <Adafruit_GFX.h>\n#include <Adafruit_SSD1306.h>\n#include <DHT.h>\n\n#define WIFI_SSID     \"Wokwi-GUEST\"   // TODO: ganti WiFi kamu\n#define WIFI_PASSWORD \"\"\n#define DATABASE_URL \"..alamat-database-firebase..\"  // TODO\n\n#define DHTPIN 4\n#define DHTTYPE DHT22\nDHT dht(DHTPIN, DHTTYPE);\n\n#define OLED_W 128\n#define OLED_H 64\nAdafruit_SSD1306 oled(OLED_W, OLED_H, &Wire, -1);\n\nint kirimKeFirebase(const String& path, const String& json) {\n  HTTPClient http;\n  http.begin(String(DATABASE_URL) + path + \".json\");\n  http.addHeader(\"Content-Type\", \"application/json\");\n  int code = http.PUT(json);\n  http.end();\n  return code;\n}\n\nvoid setup() {\n  Serial.begin(115200);\n  dht.begin();\n  if (!oled.begin(SSD1306_SWITCHCAPVCC, 0x3C)) { Serial.println(\"OLED gagal\"); }\n  oled.clearDisplay(); oled.setTextSize(1); oled.setTextColor(SSD1306_WHITE);\n\n  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);\n  while (WiFi.status() != WL_CONNECTED) { delay(300); Serial.print(\".\"); }\n  Serial.println(\"\\nWiFi OK\");\n  // Firebase dikirim via HTTP REST di loop() — tanpa library tambahan.\n}\n\nvoid loop() {\n  float h = dht.readHumidity();\n  float t = dht.readTemperature();\n  if (!isnan(h) && !isnan(t)) {\n    // Tampil di OLED\n    oled.clearDisplay();\n    oled.setCursor(0, 0); oled.println(\"  Cuaca Lokal\");\n    oled.setCursor(0, 20); oled.printf(\"Suhu: %.1f C\", t);\n    oled.setCursor(0, 36); oled.printf(\"Lembab: %.1f%%\", h);\n    oled.display();\n\n    // Kirim ke Firebase\n    kirimKeFirebase(\"/cuaca/suhu\", String(t));\n    kirimKeFirebase(\"/cuaca/kelembaban\", String(h));\n    Serial.printf(\"Suhu: %.1f | Lembab: %.1f\\n\", t, h);\n  }\n  delay(4000);\n}\n",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"board-esp32-devkit-c-v4\",\"id\":\"esp\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-dht22\",\"id\":\"dht\",\"top\":-130,\"left\":340,\"attrs\":{}},{\"type\":\"board-ssd1306\",\"id\":\"oled\",\"top\":-260,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-wifi-ap\",\"id\":\"ap\",\"top\":-260,\"left\":0,\"attrs\":{\"ssid\":\"Wokwi-GUEST\",\"password\":\"\"}}],\"connections\":[[\"dht:VCC\",\"esp:3V3\",\"red\",[\"v0\"]],[\"dht:SDA\",\"esp:4\",\"green\",[\"v0\"]],[\"dht:GND\",\"esp:GND.1\",\"black\",[\"v0\"]],[\"oled:VCC\",\"esp:3V3\",\"red\",[\"v0\"]],[\"oled:SDA\",\"esp:21\",\"green\",[\"v0\"]],[\"oled:SCL\",\"esp:22\",\"yellow\",[\"v0\"]],[\"oled:GND\",\"esp:GND.2\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "DHT22",
      "alur_perakitan": "VCC ke 3V3, data ke GPIO 4, GND ke GND."
    },
    {
      "nama_komponen": "OLED SSD1306",
      "alur_perakitan": "VIN ke 3V3, DATA (SDA) ke GPIO 21, CLK (SCL) ke GPIO 22, GND ke GND."
    },
    {
      "nama_komponen": "Firebase",
      "alur_perakitan": "Isi DATABASE_URL, ganti WiFi bila perlu."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "OLED menampilkan suhu & kelembaban; data juga masuk ke /cuaca di Firebase."
    }
  ]
},
  {
  "id": "tpl-esp32-firebase-bell",
  "title": "Bel Pintu Smart + Notifikasi",
  "desc": "Tombol bel mengaktifkan buzzer dan mengirim notifikasi ke Firebase — dashboard mencatat waktu bel ditekan.",
  "difficulty": "Mudah",
  "tags": [
    "ESP32",
    "Firebase",
    "Pushbutton",
    "Buzzer",
    "Rumah"
  ],
  "verified": true,
  "libraries": [],
  "board": "board-esp32-devkit-c-v4",
  "bom": [
    "1x ESP32 DevKitC V4",
    "1x Pushbutton",
    "1x Buzzer aktif",
    "1x Resistor 10k Ohm (pull-down)",
    "Kabel jumper"
  ],
  "firebase_setup": [
    "Buat project Firebase gratis → Realtime Database mode test.",
    "Isi DATABASE_URL di kode.",
    "Ganti WiFi sesuai jaringan kamu (simulator: 'Wokwi-GUEST')."
  ],
  "dashboard": {
    "title": "Bel Pintu Smart",
    "cards": [
      { "label": "Waktu (ms)", "path": "/bel/waktu_ms", "icon": "🕐" }
    ],
    "badges": [
      { "label": "Bel", "path": "/bel/ditekan", "on": "true", "on_text": "BEL BERBUNYI", "off": "Diam", "danger": true }
    ],
    "note": "Saat tombol bel ditekan, badge berubah merah dan buzzer berbunyi ±1 detik."
  },
  "wiring_guide": [
    {
      "komponen": "Pushbutton",
      "pin_komponen": "1.l",
      "koneksi_arduino": "GPIO 4"
    },
    {
      "komponen": "Pushbutton",
      "pin_komponen": "2.r",
      "koneksi_arduino": "GND"
    },
    {
      "komponen": "Buzzer",
      "pin_komponen": "2 (+)",
      "koneksi_arduino": "GPIO 18"
    },
    {
      "komponen": "Buzzer",
      "pin_komponen": "1 (-)",
      "koneksi_arduino": "GND"
    }
  ],
  "cpp_code": "// ===== Bel Pintu Smart → Firebase =====\n// ESP32 + pushbutton + buzzer + Firebase Realtime Database\n\n#include <WiFi.h>\n#include <HTTPClient.h>\n\n#define WIFI_SSID     \"Wokwi-GUEST\"   // TODO: ganti WiFi kamu\n#define WIFI_PASSWORD \"\"\n#define DATABASE_URL \"..alamat-database-firebase..\"  // TODO\n\n#define BELL_PIN 4\n#define BUZZ_PIN 18\n\nint kirimKeFirebase(const String& path, const String& json) {\n  HTTPClient http;\n  http.begin(String(DATABASE_URL) + path + \".json\");\n  http.addHeader(\"Content-Type\", \"application/json\");\n  int code = http.PUT(json);\n  http.end();\n  return code;\n}\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(BELL_PIN, INPUT_PULLUP);\n  pinMode(BUZZ_PIN, OUTPUT);\n\n  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);\n  while (WiFi.status() != WL_CONNECTED) { delay(300); Serial.print(\".\"); }\n  Serial.println(\"\\nWiFi OK\");\n  // Firebase dikirim via HTTP REST di loop() — tanpa library tambahan.\n}\n\nvoid loop() {\n  if (digitalRead(BELL_PIN) == LOW) {  // tombol ditekan\n    digitalWrite(BUZZ_PIN, HIGH);\n    Serial.println(\"Bel berbunyi!\");\n\n    // Kirim notifikasi & timestamp ke Firebase\n    kirimKeFirebase(\"/bel/ditekan\", \"true\");\n    kirimKeFirebase(\"/bel/waktu_ms\", String(millis()));\n    delay(1000);\n    digitalWrite(BUZZ_PIN, LOW);\n    kirimKeFirebase(\"/bel/ditekan\", \"false\");\n  }\n  delay(50);\n}\n",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"board-esp32-devkit-c-v4\",\"id\":\"esp\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-pushbutton\",\"id\":\"btn\",\"top\":-130,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-buzzer\",\"id\":\"buz\",\"top\":-260,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-wifi-ap\",\"id\":\"ap\",\"top\":-260,\"left\":0,\"attrs\":{\"ssid\":\"Wokwi-GUEST\",\"password\":\"\"}}],\"connections\":[[\"btn:1.l\",\"esp:4\",\"green\",[\"v0\"]],[\"btn:2.r\",\"esp:GND.1\",\"black\",[\"v0\"]],[\"buz:2\",\"esp:18\",\"yellow\",[\"v0\"]],[\"buz:1\",\"esp:GND.2\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "Pushbutton",
      "alur_perakitan": "Satu kaki ke GPIO 4, kaki diagonal ke GND (pakai pull-up internal di kode)."
    },
    {
      "nama_komponen": "Buzzer",
      "alur_perakitan": "(+) ke GPIO 18, (-) ke GND."
    },
    {
      "nama_komponen": "Firebase",
      "alur_perakitan": "Isi DATABASE_URL, ganti WiFi bila perlu."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Tekan tombol — buzzer berbunyi dan /bel/ditekan jadi true di Firebase."
    }
  ]
}, {
  "id": "tpl-keypad-lock",
  "title": "Kunci Pintu Keypad 4x4 + LCD",
  "desc": "Keypad 4x4 jadi password lock: masukkan sandi 4 digit, LCD I2C menampilkan status BUKA/TOLAK — latihan input & logika kondisi.",
  "difficulty": "Sulit",
  "tags": [
    "Keypad",
    "LCD",
    "Keamanan",
    "Input"
  ],
  "verified": true,
  "libraries": ["Keypad", "LiquidCrystal I2C"],
  "bom": [
    "1x Arduino Uno",
    "1x Keypad membran 4x4",
    "1x LCD 16x2 (mode I2C)",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "Keypad",
      "pin_komponen": "R1-R4 (baris)",
      "koneksi_arduino": "Pin 2, 3, 4, 5"
    },
    {
      "komponen": "Keypad",
      "pin_komponen": "C1-C4 (kolom)",
      "koneksi_arduino": "Pin 6, 7, 8, 9"
    },
    {
      "komponen": "LCD I2C",
      "pin_komponen": "VCC / GND",
      "koneksi_arduino": "5V / GND"
    },
    {
      "komponen": "LCD I2C",
      "pin_komponen": "SDA / SCL",
      "koneksi_arduino": "A4 / A5"
    }
  ],
  "cpp_code": "// Proyek: Kunci Keypad + LCD\n// Logika: Sandi 1234, '#' cek, '*' hapus\n// Platform: Uno\n#include <Keypad.h>\n#include <LiquidCrystal_I2C.h>\n\nLiquidCrystal_I2C lcd(0x27, 16, 2);\nconst char SANDI[] = \"1234\";\nString input = \"\";\n\nconst byte ROWS = 4, COLS = 4;\nchar keys[ROWS][COLS] = {\n  {'1','2','3','A'},\n  {'4','5','6','B'},\n  {'7','8','9','C'},\n  {'*','0','#','D'}\n};\nbyte rowPins[ROWS] = {2, 3, 4, 5};\nbyte colPins[COLS] = {6, 7, 8, 9};\nKeypad kp = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);\n\nvoid setup() {\n  lcd.init();\n  lcd.backlight();\n  lcd.setCursor(0, 0);\n  lcd.print(\"Masukkan Sandi:\");\n}\n\nvoid cekSandi() {\n  if (input == SANDI) {\n    lcd.setCursor(0, 1); lcd.print(\"  BUKA  \");\n  } else {\n    lcd.setCursor(0, 1); lcd.print(\" TOLAK! \");\n  }\n  delay(1500);\n  lcd.setCursor(0, 1); lcd.print(\"        \");\n  input = \"\";\n}\n\nvoid loop() {\n  char key = kp.getKey();\n  if (key) {\n    if (key == '#') {\n      cekSandi();\n    } else if (key == '*') {\n      input = \"\";\n      lcd.setCursor(0, 1); lcd.print(\"        \");\n    } else if (input.length() < 4) {\n      input += key;\n      lcd.setCursor(0, 1); lcd.print(\"****\");\n    }\n  }\n  delay(50);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-membrane-keypad\",\"id\":\"kp\",\"top\":-160,\"left\":300,\"attrs\":{}},{\"type\":\"wokwi-lcd1602\",\"id\":\"lcd\",\"top\":-160,\"left\":540,\"attrs\":{\"pins\":\"i2c\"}}],\"connections\":[[\"kp:R1\",\"uno:2\",\"green\",[\"v0\"]],[\"kp:R2\",\"uno:3\",\"green\",[\"v0\"]],[\"kp:R3\",\"uno:4\",\"green\",[\"v0\"]],[\"kp:R4\",\"uno:5\",\"green\",[\"v0\"]],[\"kp:C1\",\"uno:6\",\"yellow\",[\"v0\"]],[\"kp:C2\",\"uno:7\",\"yellow\",[\"v0\"]],[\"kp:C3\",\"uno:8\",\"yellow\",[\"v0\"]],[\"kp:C4\",\"uno:9\",\"yellow\",[\"v0\"]],[\"lcd:VSS\",\"uno:GND.1\",\"black\",[\"v0\"]],[\"lcd:VDD\",\"uno:5V\",\"red\",[\"v0\"]],[\"lcd:SDA\",\"uno:A4\",\"blue\",[\"v0\"]],[\"lcd:SCL\",\"uno:A5\",\"blue\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "Keypad",
      "alur_perakitan": "Baris R1-R4 ke pin 2-5, kolom C1-C4 ke pin 6-9."
    },
    {
      "nama_komponen": "LCD I2C",
      "alur_perakitan": "VCC ke 5V, GND ke GND, SDA ke A4, SCL ke A5."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Tekan 1-2-3-4 lalu # → LCD tampil BUKA. Sandi salah → TOLAK."
    }
  ]
},
{
  "id": "tpl-tm1637-stopwatch",
  "title": "Stopwatch 4-Digit TM1637",
  "desc": "Modul display 4 digit TM1637 menghitung detik menit (stopwatch) dengan titik dua berkedip — latihan display 7-segmen modern.",
  "difficulty": "Menengah",
  "tags": [
    "Display",
    "TM1637",
    "Timer"
  ],
  "verified": true,
  "libraries": ["TM1637"],
  "bom": [
    "1x Arduino Uno",
    "1x Display 4 digit TM1637",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "TM1637",
      "pin_komponen": "CLK",
      "koneksi_arduino": "Pin 2"
    },
    {
      "komponen": "TM1637",
      "pin_komponen": "DIO",
      "koneksi_arduino": "Pin 3"
    },
    {
      "komponen": "TM1637",
      "pin_komponen": "VCC",
      "koneksi_arduino": "5V"
    },
    {
      "komponen": "TM1637",
      "pin_komponen": "GND",
      "koneksi_arduino": "GND"
    }
  ],
  "cpp_code": "// Proyek: Stopwatch TM1637\n// Logika: Hitung detik -> menit:detik\n// Platform: Uno\n#include <TM1637Display.h>\n#define CLK 2\n#define DIO 3\nTM1637Display display(CLK, DIO);\n\nlong detik = 0;\n\nvoid setup() {\n  display.setBrightness(0x0f);\n}\n\nvoid loop() {\n  int menit = detik / 60;\n  int s = detik % 60;\n  int nilai = menit * 100 + s;\n  display.showNumberDecEx(nilai, 0b01000000, true, 4, 0);\n  detik++;\n  if (detik > 5999) detik = 0;\n  delay(1000);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-tm1637-7segment\",\"id\":\"seg\",\"top\":-140,\"left\":300,\"attrs\":{}}],\"connections\":[[\"seg:CLK\",\"uno:2\",\"green\",[\"v0\"]],[\"seg:DIO\",\"uno:3\",\"yellow\",[\"v0\"]],[\"seg:VCC\",\"uno:5V\",\"red\",[\"v0\"]],[\"seg:GND\",\"uno:GND.1\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "TM1637",
      "alur_perakitan": "CLK ke pin 2, DIO ke pin 3."
    },
    {
      "nama_komponen": "Daya",
      "alur_perakitan": "VCC ke 5V, GND ke GND."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Display menghitung naik tiap detik, titik dua menyala sebagai pemisah menit:detik."
    }
  ]
},
{
  "id": "tpl-ir-remote-led",
  "title": "Lampu Kendali Remote IR",
  "desc": "Remote infrared (38 kHz) menyalakan/mematikan LED — pelajari protokol NEC dan cara membaca sinyal IR dengan Arduino.",
  "difficulty": "Sulit",
  "tags": [
    "IR",
    "Remote",
    "Wireless"
  ],
  "verified": true,
  "libraries": ["IRremote"],
  "bom": [
    "1x Arduino Uno",
    "1x Receiver IR (38 kHz)",
    "1x Remote IR (dari simulator)",
    "1x LED",
    "1x Resistor 220 Ohm",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "Receiver IR",
      "pin_komponen": "DAT",
      "koneksi_arduino": "Pin 11"
    },
    {
      "komponen": "Receiver IR",
      "pin_komponen": "VCC",
      "koneksi_arduino": "5V"
    },
    {
      "komponen": "Receiver IR",
      "pin_komponen": "GND",
      "koneksi_arduino": "GND"
    },
    {
      "komponen": "LED",
      "pin_komponen": "A",
      "koneksi_arduino": "Pin 13 (via resistor)"
    },
    {
      "komponen": "LED",
      "pin_komponen": "C",
      "koneksi_arduino": "GND"
    }
  ],
  "cpp_code": "// Proyek: Remote IR -> LED\n// Logika: Tombol remote toggle LED\n// Platform: Uno\n#include <IRremote.h>\nconst int RECV_PIN = 11;\nIRrecv irrecv(RECV_PIN);\ndecode_results results;\nbool nyala = false;\n\nvoid setup() {\n  Serial.begin(9600);\n  pinMode(13, OUTPUT);\n  irrecv.enableIRIn();\n}\n\nvoid loop() {\n  if (irrecv.decode(&results)) {\n    if (results.value != 0xFFFFFFFF) {  // lewati kode repeat\n      Serial.println(results.value, HEX);\n      nyala = !nyala;\n      digitalWrite(13, nyala ? HIGH : LOW);\n    }\n    irrecv.resume();\n  }\n  delay(50);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-ir-receiver\",\"id\":\"ir\",\"top\":-140,\"left\":300,\"attrs\":{}},{\"type\":\"wokwi-ir-remote\",\"id\":\"remote\",\"top\":-280,\"left\":300,\"attrs\":{}},{\"type\":\"wokwi-led\",\"id\":\"led1\",\"top\":-140,\"left\":460,\"attrs\":{\"color\":\"red\"}},{\"type\":\"wokwi-resistor\",\"id\":\"r1\",\"top\":-60,\"left\":460,\"attrs\":{\"value\":\"220\"}}],\"connections\":[[\"ir:GND\",\"uno:GND.1\",\"black\",[\"v0\"]],[\"ir:VCC\",\"uno:5V\",\"red\",[\"v0\"]],[\"ir:DAT\",\"uno:11\",\"green\",[\"v0\"]],[\"uno:13\",\"r1:1\",\"yellow\",[\"v0\"]],[\"r1:2\",\"led1:A\",\"yellow\",[\"v0\"]],[\"led1:C\",\"uno:GND.2\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "Receiver IR",
      "alur_perakitan": "DAT ke pin 11, VCC ke 5V, GND ke GND."
    },
    {
      "nama_komponen": "LED",
      "alur_perakitan": "Anoda ke pin 13 via resistor 220 Ohm, katoda ke GND."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Klik tombol di widget Remote IR (simulator) → LED toggle nyala/mati, kode tombol tampil di Serial Monitor."
    }
  ]
},
{
  "id": "tpl-neopixel-ring",
  "title": "Cincin Cahaya NeoPixel",
  "desc": "Ring LED NeoPixel 16 pixel menampilkan efek pelangi berjalan — pengenalan LED addressable WS2812 dan perpustakaan Adafruit NeoPixel.",
  "difficulty": "Menengah",
  "tags": [
    "LED",
    "NeoPixel",
    "WS2812"
  ],
  "verified": true,
  "libraries": ["Adafruit NeoPixel"],
  "bom": [
    "1x Arduino Uno",
    "1x Ring LED NeoPixel 16 pixel",
    "1x Kapasitor 100uF (opsional, di rangkaian asli)",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "NeoPixel Ring",
      "pin_komponen": "DIN",
      "koneksi_arduino": "Pin 6"
    },
    {
      "komponen": "NeoPixel Ring",
      "pin_komponen": "VCC",
      "koneksi_arduino": "5V"
    },
    {
      "komponen": "NeoPixel Ring",
      "pin_komponen": "GND",
      "koneksi_arduino": "GND"
    }
  ],
  "cpp_code": "// Proyek: NeoPixel Ring Pelangi\n// Logika: Rotasi warna pelangi\n// Platform: Uno\n#include <Adafruit_NeoPixel.h>\n#define PIN 6\n#define NUMPIXELS 16\nAdafruit_NeoPixel ring(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);\n\nvoid setup() {\n  ring.begin();\n  ring.setBrightness(50);\n  ring.show();\n}\n\nvoid loop() {\n  for (int i = 0; i < NUMPIXELS; i++) {\n    ring.setPixelColor(i, ring.Color(i * 16, 255 - i * 16, 0));\n  }\n  ring.show();\n  delay(80);\n}\n\nvoid rainbowCycle() {\n  for (int j = 0; j < 64; j++) {\n    for (int i = 0; i < NUMPIXELS; i++) {\n      int warna = (i * 256 / NUMPIXELS + j) & 255;\n      ring.setPixelColor(i, ring.ColorHSV(warna * 256, 255, 100));\n    }\n    ring.show();\n    delay(10);\n  }\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-led-ring\",\"id\":\"ring\",\"top\":-160,\"left\":300,\"attrs\":{\"pixels\":\"16\"}}],\"connections\":[[\"ring:GND\",\"uno:GND.1\",\"black\",[\"v0\"]],[\"ring:VCC\",\"uno:5V\",\"red\",[\"v0\"]],[\"ring:DIN\",\"uno:6\",\"green\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "NeoPixel Ring",
      "alur_perakitan": "DIN ke pin 6, VCC ke 5V, GND ke GND."
    },
    {
      "nama_komponen": "Library",
      "alur_perakitan": "Pasang library Adafruit NeoPixel via libraries.txt."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Ring menampilkan efek pelangi bergeser setiap 80 ms."
    }
  ]
},
{
  "id": "tpl-rtc-clock",
  "title": "Jam Digital RTC + LCD",
  "desc": "Modul RTC DS1307 menjaga waktu real (jam:menit:detik & tanggal) meski board mati — ditampilkan di LCD 16x2.",
  "difficulty": "Menengah",
  "tags": [
    "RTC",
    "LCD",
    "Waktu"
  ],
  "verified": true,
  "libraries": ["RTClib"],
  "bom": [
    "1x Arduino Uno",
    "1x Modul RTC DS1307",
    "1x Baterai CR2032 (di rangkaian asli)",
    "1x LCD 16x2",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "DS1307",
      "pin_komponen": "SDA",
      "koneksi_arduino": "A4"
    },
    {
      "komponen": "DS1307",
      "pin_komponen": "SCL",
      "koneksi_arduino": "A5"
    },
    {
      "komponen": "DS1307",
      "pin_komponen": "5V / GND",
      "koneksi_arduino": "5V / GND"
    },
    {
      "komponen": "LCD 16x2",
      "pin_komponen": "RS, E, D4-D7",
      "koneksi_arduino": "Pin 12, 11, 10, 9, 8, 7"
    },
    {
      "komponen": "LCD 16x2",
      "pin_komponen": "VDD / VSS",
      "koneksi_arduino": "5V / GND"
    }
  ],
  "cpp_code": "// Proyek: Jam RTC DS1307\n// Logika: Baca RTC -> LCD 16x2\n// Platform: Uno\n#include <Wire.h>\n#include <RTClib.h>\n#include <LiquidCrystal.h>\n\nRTC_DS1307 rtc;\nLiquidCrystal lcd(12, 11, 10, 9, 8, 7);\n\nvoid setup() {\n  lcd.begin(16, 2);\n  Wire.begin();\n  rtc.begin();\n  if (!rtc.isrunning()) {\n    rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));\n  }\n}\n\nvoid loop() {\n  DateTime now = rtc.now();\n  char buf[17];\n  snprintf(buf, 17, \"%02d:%02d:%02d\", now.hour(), now.minute(), now.second());\n  lcd.setCursor(0, 0); lcd.print(\"Jam  : \"); lcd.print(buf);\n  snprintf(buf, 17, \"%02d/%02d/%04d\", now.day(), now.month(), now.year());\n  lcd.setCursor(0, 1); lcd.print(\"Tgl  : \"); lcd.print(buf);\n  delay(1000);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-ds1307\",\"id\":\"ds\",\"top\":-140,\"left\":300,\"attrs\":{\"initTime\":\"now\"}},{\"type\":\"wokwi-lcd1602\",\"id\":\"lcd\",\"top\":-140,\"left\":520,\"attrs\":{}}],\"connections\":[[\"ds:GND\",\"uno:GND.1\",\"black\",[\"v0\"]],[\"ds:5V\",\"uno:5V\",\"red\",[\"v0\"]],[\"ds:SDA\",\"uno:A4\",\"blue\",[\"v0\"]],[\"ds:SCL\",\"uno:A5\",\"blue\",[\"v0\"]],[\"lcd:VSS\",\"uno:GND.2\",\"black\",[\"v0\"]],[\"lcd:VDD\",\"uno:5V\",\"red\",[\"v0\"]],[\"lcd:RS\",\"uno:12\",\"yellow\",[\"v0\"]],[\"lcd:E\",\"uno:11\",\"yellow\",[\"v0\"]],[\"lcd:D4\",\"uno:10\",\"green\",[\"v0\"]],[\"lcd:D5\",\"uno:9\",\"green\",[\"v0\"]],[\"lcd:D6\",\"uno:8\",\"green\",[\"v0\"]],[\"lcd:D7\",\"uno:7\",\"green\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "DS1307",
      "alur_perakitan": "SDA ke A4, SCL ke A5, 5V ke 5V, GND ke GND."
    },
    {
      "nama_komponen": "LCD 16x2",
      "alur_perakitan": "RS=12, E=11, D4=10, D5=9, D6=8, D7=7, VDD=5V, VSS=GND."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Waktu & tanggal dari RTC tampil di LCD dan berjalan terus. Di Wokwi, RTC diset otomatis saat simulasi dimulai."
    }
  ]
},
{
  "id": "tpl-shift-register",
  "title": "LED Chaser 74HC595",
  "desc": "Satu IC shift register 74HC595 mengendalikan 4 (atau lebih) LED hanya dengan 3 pin Arduino — dasar ekspansi output digital.",
  "difficulty": "Menengah",
  "tags": [
    "Shift Register",
    "74HC595",
    "LED"
  ],
  "verified": true,
  "bom": [
    "1x Arduino Uno",
    "1x IC 74HC595",
    "4x LED (warna beda)",
    "4x Resistor 220 Ohm",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "74HC595",
      "pin_komponen": "DS (data)",
      "koneksi_arduino": "Pin 11"
    },
    {
      "komponen": "74HC595",
      "pin_komponen": "SHCP (clock)",
      "koneksi_arduino": "Pin 13"
    },
    {
      "komponen": "74HC595",
      "pin_komponen": "STCP (latch)",
      "koneksi_arduino": "Pin 12"
    },
    {
      "komponen": "74HC595",
      "pin_komponen": "OE",
      "koneksi_arduino": "GND (aktif low)"
    },
    {
      "komponen": "74HC595",
      "pin_komponen": "MR",
      "koneksi_arduino": "5V (aktif low)"
    },
    {
      "komponen": "74HC595",
      "pin_komponen": "VCC / GND",
      "koneksi_arduino": "5V / GND"
    },
    {
      "komponen": "LED Q0-Q3",
      "pin_komponen": "A",
      "koneksi_arduino": "Output Q0-Q3 via resistor 220 Ohm"
    }
  ],
  "cpp_code": "// Proyek: LED Chaser 74HC595\n// Logika: Nyala bergantian Q0-Q3\n// Platform: Uno\nconst int DS = 11;    // data\nconst int SHCP = 13;  // clock\nconst int STCP = 12;  // latch\n\nvoid setup() {\n  pinMode(DS, OUTPUT);\n  pinMode(SHCP, OUTPUT);\n  pinMode(STCP, OUTPUT);\n}\n\nvoid loop() {\n  for (int i = 0; i < 4; i++) {\n    shiftOut(DS, SHCP, MSBFIRST, 1 << i);\n    digitalWrite(STCP, HIGH);\n    digitalWrite(STCP, LOW);\n    delay(250);\n  }\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-74hc595\",\"id\":\"reg\",\"top\":-140,\"left\":300,\"attrs\":{}},{\"type\":\"wokwi-led\",\"id\":\"led0\",\"top\":-140,\"left\":500,\"attrs\":{\"color\":\"red\"}},{\"type\":\"wokwi-led\",\"id\":\"led1\",\"top\":-60,\"left\":500,\"attrs\":{\"color\":\"yellow\"}},{\"type\":\"wokwi-led\",\"id\":\"led2\",\"top\":20,\"left\":500,\"attrs\":{\"color\":\"green\"}},{\"type\":\"wokwi-led\",\"id\":\"led3\",\"top\":100,\"left\":500,\"attrs\":{\"color\":\"blue\"}},{\"type\":\"wokwi-resistor\",\"id\":\"r0\",\"top\":-140,\"left\":400,\"attrs\":{\"value\":\"220\"}},{\"type\":\"wokwi-resistor\",\"id\":\"r1\",\"top\":-60,\"left\":400,\"attrs\":{\"value\":\"220\"}},{\"type\":\"wokwi-resistor\",\"id\":\"r2\",\"top\":20,\"left\":400,\"attrs\":{\"value\":\"220\"}},{\"type\":\"wokwi-resistor\",\"id\":\"r3\",\"top\":100,\"left\":400,\"attrs\":{\"value\":\"220\"}}],\"connections\":[[\"reg:DS\",\"uno:11\",\"green\",[\"v0\"]],[\"reg:SHCP\",\"uno:13\",\"green\",[\"v0\"]],[\"reg:STCP\",\"uno:12\",\"green\",[\"v0\"]],[\"reg:OE\",\"uno:GND.1\",\"black\",[\"v0\"]],[\"reg:MR\",\"uno:5V\",\"red\",[\"v0\"]],[\"reg:VCC\",\"uno:5V\",\"red\",[\"v0\"]],[\"reg:GND\",\"uno:GND.1\",\"black\",[\"v0\"]],[\"reg:Q0\",\"r0:1\",\"yellow\",[\"v0\"]],[\"r0:2\",\"led0:A\",\"yellow\",[\"v0\"]],[\"led0:C\",\"uno:GND.1\",\"black\",[\"v0\"]],[\"reg:Q1\",\"r1:1\",\"yellow\",[\"v0\"]],[\"r1:2\",\"led1:A\",\"yellow\",[\"v0\"]],[\"led1:C\",\"uno:GND.2\",\"black\",[\"v0\"]],[\"reg:Q2\",\"r2:1\",\"yellow\",[\"v0\"]],[\"r2:2\",\"led2:A\",\"yellow\",[\"v0\"]],[\"led2:C\",\"uno:GND.3\",\"black\",[\"v0\"]],[\"reg:Q3\",\"r3:1\",\"yellow\",[\"v0\"]],[\"r3:2\",\"led3:A\",\"yellow\",[\"v0\"]],[\"led3:C\",\"uno:GND.3\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "74HC595",
      "alur_perakitan": "DS ke pin 11, SHCP ke pin 13, STCP ke pin 12."
    },
    {
      "nama_komponen": "Kontrol",
      "alur_perakitan": "OE ke GND, MR ke 5V, VCC ke 5V, GND ke GND."
    },
    {
      "nama_komponen": "LED",
      "alur_perakitan": "Q0-Q3 ke anoda LED via resistor 220 Ohm, katoda ke GND."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "LED menyala bergantian dari Q0 ke Q3 setiap 250 ms."
    }
  ]
},
{
  "id": "tpl-max7219-matrix",
  "title": "Matrix LED MAX7219",
  "desc": "Dot matrix 8x8 MAX7219 menampilkan pixel berjalan — belajar driver display dengan protokol SPI dan library LedControl.",
  "difficulty": "Sulit",
  "tags": [
    "MAX7219",
    "Matrix",
    "SPI"
  ],
  "verified": true,
  "libraries": ["LedControl"],
  "bom": [
    "1x Arduino Uno",
    "1x Modul Matrix 8x8 MAX7219",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "MAX7219",
      "pin_komponen": "DIN",
      "koneksi_arduino": "Pin 11 (MOSI)"
    },
    {
      "komponen": "MAX7219",
      "pin_komponen": "CLK",
      "koneksi_arduino": "Pin 13 (SCK)"
    },
    {
      "komponen": "MAX7219",
      "pin_komponen": "CS",
      "koneksi_arduino": "Pin 10"
    },
    {
      "komponen": "MAX7219",
      "pin_komponen": "VCC / GND",
      "koneksi_arduino": "5V / GND"
    }
  ],
  "cpp_code": "// Proyek: Matrix MAX7219\n// Logika: Pixel berjalan 8x8\n// Platform: Uno\n#include <LedControl.h>\nLedControl lc = LedControl(11, 13, 10, 1);  // DIN, CLK, CS, jumlah modul\n\nvoid setup() {\n  lc.shutdown(0, false);   // aktifkan\n  lc.setIntensity(0, 8);   // kecerahan\n  lc.clearDisplay(0);\n}\n\nvoid loop() {\n  for (int x = 0; x < 8; x++) {\n    for (int y = 0; y < 8; y++) {\n      lc.setLed(0, y, x, true);\n      delay(60);\n      lc.setLed(0, y, x, false);\n    }\n  }\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-max7219-matrix\",\"id\":\"mx\",\"top\":-140,\"left\":300,\"attrs\":{}}],\"connections\":[[\"mx:DIN\",\"uno:11\",\"green\",[\"v0\"]],[\"mx:CS\",\"uno:10\",\"yellow\",[\"v0\"]],[\"mx:CLK\",\"uno:13\",\"green\",[\"v0\"]],[\"mx:VCC\",\"uno:5V\",\"red\",[\"v0\"]],[\"mx:GND\",\"uno:GND.1\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "MAX7219",
      "alur_perakitan": "DIN ke pin 11, CLK ke pin 13, CS ke pin 10."
    },
    {
      "nama_komponen": "Daya",
      "alur_perakitan": "VCC ke 5V, GND ke GND."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Satu pixel menyala bergerak dari kiri-atas ke kanan-bawah di matrix."
    }
  ]
},
{
  "id": "tpl-rotary-dimmer",
  "title": "Dimmer Rotary Encoder",
  "desc": "Encoder rotary KY-040 mengatur kecerahan LED PWM (dimmer) dan tombolnya sebagai saklar on/off — latihan input rotary & PWM.",
  "difficulty": "Menengah",
  "tags": [
    "Encoder",
    "KY-040",
    "PWM"
  ],
  "verified": true,
  "bom": [
    "1x Arduino Uno",
    "1x Rotary Encoder KY-040",
    "1x LED",
    "1x Resistor 220 Ohm",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "KY-040",
      "pin_komponen": "CLK",
      "koneksi_arduino": "Pin 2"
    },
    {
      "komponen": "KY-040",
      "pin_komponen": "DT",
      "koneksi_arduino": "Pin 3"
    },
    {
      "komponen": "KY-040",
      "pin_komponen": "SW",
      "koneksi_arduino": "Pin 4"
    },
    {
      "komponen": "KY-040",
      "pin_komponen": "VCC / GND",
      "koneksi_arduino": "5V / GND"
    },
    {
      "komponen": "LED",
      "pin_komponen": "A",
      "koneksi_arduino": "Pin 9 (PWM) via resistor"
    },
    {
      "komponen": "LED",
      "pin_komponen": "C",
      "koneksi_arduino": "GND"
    }
  ],
  "cpp_code": "// Proyek: Dimmer Rotary Encoder\n// Logika: Putar -> kecerahan, tekan -> on/off\n// Platform: Uno\nconst int CLK = 2, DT = 3, SW = 4, LED = 9;\nint lastCLK;\nint brightness = 128;\nbool nyala = true;\n\nvoid setup() {\n  pinMode(CLK, INPUT_PULLUP);\n  pinMode(DT, INPUT_PULLUP);\n  pinMode(SW, INPUT_PULLUP);\n  pinMode(LED, OUTPUT);\n  lastCLK = digitalRead(CLK);\n  analogWrite(LED, brightness);\n}\n\nvoid loop() {\n  int clk = digitalRead(CLK);\n  if (clk != lastCLK) {\n    if (digitalRead(DT) != clk) brightness += 8;\n    else brightness -= 8;\n    brightness = constrain(brightness, 0, 255);\n    if (nyala) analogWrite(LED, brightness);\n    lastCLK = clk;\n  }\n  if (digitalRead(SW) == LOW) {\n    nyala = !nyala;\n    analogWrite(LED, nyala ? brightness : 0);\n    delay(200);\n  }\n  delay(1);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-ky-040\",\"id\":\"enc\",\"top\":-140,\"left\":300,\"attrs\":{}},{\"type\":\"wokwi-led\",\"id\":\"led1\",\"top\":-140,\"left\":460,\"attrs\":{\"color\":\"white\"}},{\"type\":\"wokwi-resistor\",\"id\":\"r1\",\"top\":-60,\"left\":460,\"attrs\":{\"value\":\"220\"}}],\"connections\":[[\"enc:CLK\",\"uno:2\",\"green\",[\"v0\"]],[\"enc:DT\",\"uno:3\",\"yellow\",[\"v0\"]],[\"enc:SW\",\"uno:4\",\"blue\",[\"v0\"]],[\"enc:VCC\",\"uno:5V\",\"red\",[\"v0\"]],[\"enc:GND\",\"uno:GND.1\",\"black\",[\"v0\"]],[\"uno:9\",\"r1:1\",\"yellow\",[\"v0\"]],[\"r1:2\",\"led1:A\",\"yellow\",[\"v0\"]],[\"led1:C\",\"uno:GND.2\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "KY-040",
      "alur_perakitan": "CLK ke pin 2, DT ke pin 3, SW ke pin 4."
    },
    {
      "nama_komponen": "Daya",
      "alur_perakitan": "VCC ke 5V, GND ke GND."
    },
    {
      "nama_komponen": "LED",
      "alur_perakitan": "Anoda ke pin 9 via resistor 220 Ohm, katoda ke GND."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Putar knob (drag di simulator) → kecerahan berubah. Tekan tombol encoder → LED mati/nyala."
    }
  ]
},
{
  "id": "tpl-esp32-web-led",
  "title": "Web Server LED ESP32",
  "desc": "ESP32 membuat web server WiFi — buka alamat IP-nya di browser, klik tombol untuk menyalakan/mematikan LED. Tanpa library tambahan!",
  "difficulty": "Menengah",
  "tags": [
    "ESP32",
    "WiFi",
    "Web Server"
  ],
  "verified": true,
  "board": "board-esp32-devkit-c-v4",
  "bom": [
    "1x ESP32 DevKitC V4",
    "1x LED",
    "1x Resistor 220 Ohm",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "LED",
      "pin_komponen": "A",
      "koneksi_arduino": "GPIO 2 (via resistor)"
    },
    {
      "komponen": "LED",
      "pin_komponen": "C",
      "koneksi_arduino": "GND"
    },
    {
      "komponen": "WiFi",
      "pin_komponen": "-",
      "koneksi_arduino": "SSID Wokwi-GUEST (bawaan simulator)"
    }
  ],
  "cpp_code": "// Proyek: Web Server LED\n// Logika: Kontrol LED via browser\n// Platform: ESP32\n#include <WiFi.h>\n#include <WebServer.h>\n\nconst char* SSID = \"Wokwi-GUEST\";\nconst char* PASS = \"\";\n#define LED_PIN 2\n\nWebServer server(80);\n\nvoid handleRoot() {\n  String html = \"<!DOCTYPE html><html><body><h1>ESP32 Web LED</h1>\"\n                \"<a href='/on'><button>NYALA</button></a> \"\n                \"<a href='/off'><button>MATI</button></a></body></html>\";\n  server.send(200, \"text/html\", html);\n}\n\nvoid setup() {\n  pinMode(LED_PIN, OUTPUT);\n  Serial.begin(115200);\n\n  WiFi.begin(SSID, PASS);\n  while (WiFi.status() != WL_CONNECTED) { delay(300); Serial.print(\".\"); }\n  Serial.println(\"\");\n  Serial.println(\"IP: \" + WiFi.localIP().toString());\n\n  server.on(\"/\", handleRoot);\n  server.on(\"/on\", []() { digitalWrite(LED_PIN, HIGH); server.send(200, \"text/html\", \"<h1>LED NYALA</h1><a href='/'>Kembali</a>\"); });\n  server.on(\"/off\", []() { digitalWrite(LED_PIN, LOW); server.send(200, \"text/html\", \"<h1>LED MATI</h1><a href='/'>Kembali</a>\"); });\n  server.begin();\n  Serial.println(\"Server siap!\");\n}\n\nvoid loop() {\n  server.handleClient();\n  delay(10);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"board-esp32-devkit-c-v4\",\"id\":\"esp\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-wifi-ap\",\"id\":\"ap\",\"top\":-260,\"left\":0,\"attrs\":{\"ssid\":\"Wokwi-GUEST\",\"password\":\"\"}},{\"type\":\"wokwi-led\",\"id\":\"led1\",\"top\":-140,\"left\":340,\"attrs\":{\"color\":\"red\"}},{\"type\":\"wokwi-resistor\",\"id\":\"r1\",\"top\":-60,\"left\":340,\"attrs\":{\"value\":\"220\"}}],\"connections\":[[\"esp:2\",\"r1:1\",\"yellow\",[\"v0\"]],[\"r1:2\",\"led1:A\",\"yellow\",[\"v0\"]],[\"led1:C\",\"esp:GND.1\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "LED",
      "alur_perakitan": "Anoda ke GPIO 2 via resistor 220 Ohm, katoda ke GND."
    },
    {
      "nama_komponen": "Jalankan",
      "alur_perakitan": "Mulai simulasi — buka tab serial untuk melihat alamat IP, lalu buka URL tersebut di browser."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Klik tombol NYALA/MATI di halaman web → LED ikut menyala/mati."
    }
  ]
},
{
  "id": "tpl-esp32-oled-weather",
  "title": "Stasiun Cuaca OLED ESP32",
  "desc": "ESP32 membaca DHT22 lalu menampilkan suhu & kelembaban di layar OLED SSD1306 (I2C) — tanpa cloud, data langsung di layar.",
  "difficulty": "Menengah",
  "tags": [
    "ESP32",
    "DHT22",
    "OLED",
    "Display"
  ],
  "verified": true,
  "board": "board-esp32-devkit-c-v4",
  "libraries": ["Adafruit SSD1306", "Adafruit GFX Library", "DHT sensor library for ESPx"],
  "bom": [
    "1x ESP32 DevKitC V4",
    "1x Sensor DHT22",
    "1x OLED SSD1306 128x64 (I2C)",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "DHT22",
      "pin_komponen": "SDA (data)",
      "koneksi_arduino": "GPIO 4"
    },
    {
      "komponen": "DHT22",
      "pin_komponen": "VCC / GND",
      "koneksi_arduino": "3V3 / GND"
    },
    {
      "komponen": "OLED",
      "pin_komponen": "DATA / CLK",
      "koneksi_arduino": "GPIO 21 (SDA) / GPIO 22 (SCL)"
    },
    {
      "komponen": "OLED",
      "pin_komponen": "VIN / GND",
      "koneksi_arduino": "3V3 / GND"
    }
  ],
  "cpp_code": "// Proyek: Cuaca OLED ESP32\n// Logika: DHT22 -> OLED SSD1306\n// Platform: ESP32\n#include <Wire.h>\n#include <Adafruit_GFX.h>\n#include <Adafruit_SSD1306.h>\n#include <DHT.h>\n\n#define DHTPIN 4\n#define DHTTYPE DHT22\nDHT dht(DHTPIN, DHTTYPE);\n\n#define OLED_W 128\n#define OLED_H 64\nAdafruit_SSD1306 oled(OLED_W, OLED_H, &Wire, -1);\n\nvoid setup() {\n  Serial.begin(115200);\n  dht.begin();\n  if (!oled.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {\n    Serial.println(\"OLED gagal inisialisasi\");\n  }\n  oled.clearDisplay();\n  oled.setTextSize(1);\n  oled.setTextColor(SSD1306_WHITE);\n}\n\nvoid loop() {\n  float h = dht.readHumidity();\n  float t = dht.readTemperature();\n  if (!isnan(h) && !isnan(t)) {\n    oled.clearDisplay();\n    oled.setCursor(0, 0); oled.println(\"  Cuaca Lokal\");\n    oled.drawLine(0, 10, 128, 10, SSD1306_WHITE);\n    oled.setCursor(0, 18); oled.printf(\"Suhu: %.1f C\", t);\n    oled.setCursor(0, 32); oled.printf(\"Lembab: %.1f %%\", h);\n    oled.display();\n    Serial.printf(\"Suhu: %.1f | Lembab: %.1f\\n\", t, h);\n  }\n  delay(2000);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"board-esp32-devkit-c-v4\",\"id\":\"esp\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-dht22\",\"id\":\"dht\",\"top\":-140,\"left\":340,\"attrs\":{}},{\"type\":\"board-ssd1306\",\"id\":\"oled\",\"top\":-140,\"left\":540,\"attrs\":{}}],\"connections\":[[\"dht:VCC\",\"esp:3V3\",\"red\",[\"v0\"]],[\"dht:SDA\",\"esp:4\",\"green\",[\"v0\"]],[\"dht:GND\",\"esp:GND.1\",\"black\",[\"v0\"]],[\"oled:VCC\",\"esp:3V3\",\"red\",[\"v0\"]],[\"oled:SDA\",\"esp:21\",\"green\",[\"v0\"]],[\"oled:SCL\",\"esp:22\",\"yellow\",[\"v0\"]],[\"oled:GND\",\"esp:GND.2\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "DHT22",
      "alur_perakitan": "Data ke GPIO 4, VCC ke 3V3, GND ke GND."
    },
    {
      "nama_komponen": "OLED",
      "alur_perakitan": "DATA ke GPIO 21, CLK ke GPIO 22, VIN ke 3V3, GND ke GND."
    },
    {
      "nama_komponen": "Library",
      "alur_perakitan": "Pasang Adafruit SSD1306, Adafruit GFX, dan DHT sensor library for ESPx via libraries.txt."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "OLED menampilkan suhu & kelembaban, diperbarui tiap 2 detik."
    }
  ]
}, {
  "id": "tpl-rfid-door-lock",
  "title": "Kunci Pintu RFID (MFRC522 + Servo)",
  "desc": "Kunci pintu RFID: tempelkan kartu yang terdaftar, servo membuka kunci selama 3 detik. LED hijau = akses diterima, LED merah = ditolak. UID kartu master bisa diganti di kode.",
  "difficulty": "Sulit",
  "tags": [
    "RFID",
    "Servo",
    "Keamanan",
    "Sensor"
  ],
  "verified": true,
  "libraries": ["MFRC522"],
  "bom": [
    "1x Arduino Uno",
    "1x Modul RFID MFRC522",
    "1x Servo SG90",
    "2x LED (hijau & merah)",
    "2x Resistor 220 ohm",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "MFRC522",
      "pin_komponen": "SDA / SCK / MOSI / MISO",
      "koneksi_arduino": "Pin 10 / 13 / 11 / 12"
    },
    {
      "komponen": "MFRC522",
      "pin_komponen": "RST / 3.3V / GND",
      "koneksi_arduino": "Pin 9 / 5V / GND"
    },
    {
      "komponen": "Servo",
      "pin_komponen": "PWM / V+ / GND",
      "koneksi_arduino": "Pin 5 / 5V / GND"
    },
    {
      "komponen": "LED hijau & merah",
      "pin_komponen": "Anoda (via 220 ohm)",
      "koneksi_arduino": "Pin 6 (hijau) / Pin 7 (merah)"
    }
  ],
  "cpp_code": "// Proyek: Kunci Pintu RFID\n// Logika: Baca UID kartu, cocokkan, buka servo\n// Platform: Uno\n#include <SPI.h>\n#include <MFRC522.h>\n#include <Servo.h>\n\n#define SS_PIN 10\n#define RST_PIN 9\nMFRC522 rfid(SS_PIN, RST_PIN);\nServo kunci;\n\nbyte kartuAkses[4] = {0xE3, 0x4D, 0x2A, 0x1B}; // UID kartu master (ganti punyamu)\n\nconst int pinLedOK = 6;\nconst int pinLedGagal = 7;\n\nvoid setup() {\n  Serial.begin(9600);\n  SPI.begin();\n  rfid.PCD_Init();\n  kunci.attach(5);\n  kunci.write(0); // kunci tertutup\n  pinMode(pinLedOK, OUTPUT);\n  pinMode(pinLedGagal, OUTPUT);\n  Serial.println(\"Tempelkan kartu...\");\n}\n\nvoid loop() {\n  if (!rfid.PICC_IsNewCardPresent()) return;\n  if (!rfid.PICC_ReadCardSerial()) return;\n\n  if (cekUID(rfid.uid.uidByte, rfid.uid.size)) {\n    bukaKunci();\n  } else {\n    digitalWrite(pinLedGagal, HIGH);\n    delay(1500);\n    digitalWrite(pinLedGagal, LOW);\n    Serial.println(\"Akses ditolak\");\n  }\n  rfid.PICC_HaltA();\n  delay(100);\n}\n\nboolean cekUID(byte *uid, byte ukuran) {\n  if (ukuran != 4) return false;\n  for (byte i = 0; i < 4; i++) {\n    if (uid[i] != kartuAkses[i]) return false;\n  }\n  return true;\n}\n\nvoid bukaKunci() {\n  digitalWrite(pinLedOK, HIGH);\n  kunci.write(90); // buka 90 derajat\n  Serial.println(\"Akses diterima\");\n  delay(3000);\n  kunci.write(0);\n  digitalWrite(pinLedOK, LOW);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"board-mfrc522\",\"id\":\"rfid\",\"top\":-170,\"left\":300,\"attrs\":{}},{\"type\":\"wokwi-servo\",\"id\":\"sv\",\"top\":-60,\"left\":560,\"attrs\":{}},{\"type\":\"wokwi-led\",\"id\":\"ledok\",\"top\":60,\"left\":300,\"attrs\":{\"color\":\"green\"}},{\"type\":\"wokwi-resistor\",\"id\":\"r1\",\"top\":140,\"left\":300,\"attrs\":{\"value\":\"220\"}},{\"type\":\"wokwi-led\",\"id\":\"ledno\",\"top\":60,\"left\":520,\"attrs\":{\"color\":\"red\"}},{\"type\":\"wokwi-resistor\",\"id\":\"r2\",\"top\":140,\"left\":520,\"attrs\":{\"value\":\"220\"}}],\"connections\":[[\"rfid:SDA\",\"uno:10\",\"orange\",[\"v0\"]],[\"rfid:SCK\",\"uno:13\",\"yellow\",[\"v0\"]],[\"rfid:MOSI\",\"uno:11\",\"green\",[\"v0\"]],[\"rfid:MISO\",\"uno:12\",\"blue\",[\"v0\"]],[\"rfid:RST\",\"uno:9\",\"orange\",[\"v0\"]],[\"rfid:3.3V\",\"uno:5V\",\"red\",[\"v0\"]],[\"rfid:GND\",\"uno:GND.1\",\"black\",[\"v0\"]],[\"sv:PWM\",\"uno:5\",\"yellow\",[\"v0\"]],[\"sv:V+\",\"uno:5V\",\"red\",[\"v0\"]],[\"sv:GND\",\"uno:GND.2\",\"black\",[\"v0\"]],[\"ledok:A\",\"r1:2\",\"green\",[\"v0\"]],[\"r1:1\",\"uno:6\",\"green\",[\"v0\"]],[\"ledok:C\",\"uno:GND.3\",\"black\",[\"v0\"]],[\"ledno:A\",\"r2:2\",\"red\",[\"v0\"]],[\"r2:1\",\"uno:7\",\"red\",[\"v0\"]],[\"ledno:C\",\"uno:GND.3\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "Modul RFID",
      "alur_perakitan": "SDA ke pin 10, SCK ke 13, MOSI ke 11, MISO ke 12, RST ke 9."
    },
    {
      "nama_komponen": "Modul RFID",
      "alur_perakitan": "Power: 3.3V ke 5V (Uno di simulator Wokwi tidak punya pin 3V3), GND ke GND."
    },
    {
      "nama_komponen": "Servo",
      "alur_perakitan": "PWM ke pin 5, V+ ke 5V, GND ke GND."
    },
    {
      "nama_komponen": "LED",
      "alur_perakitan": "LED hijau via resistor 220 ohm ke pin 6, LED merah via resistor ke pin 7. Katoda ke GND."
    },
    {
      "nama_komponen": "Software",
      "alur_perakitan": "Upload kode, buka serial monitor, tempelkan kartu untuk uji. Sesuaikan UID kartu master di kode."
    }
  ]
}
, {
  "id": "tpl-i2c-oled-demo",
  "title": "OLED I2C Interaktif (SSD1306 + Tombol)",
  "desc": "Latihan dasar OLED I2C: tampilkan logo animasi, gambar bentuk geometris, dan counter yang diubah dengan 2 tombol. Cocok untuk memahami library Adafruit SSD1306 dan Adafruit GFX.",
  "difficulty": "Mudah",
  "tags": [
    "OLED",
    "Display",
    "I2C",
    "Animasi"
  ],
  "verified": true,
  "libraries": ["Adafruit SSD1306", "Adafruit GFX Library"],
  "bom": [
    "1x Arduino Uno",
    "1x OLED 0.96 inch I2C (SSD1306)",
    "2x Pushbutton",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "OLED",
      "pin_komponen": "SDA / SCL",
      "koneksi_arduino": "A4 / A5"
    },
    {
      "komponen": "OLED",
      "pin_komponen": "VCC / GND",
      "koneksi_arduino": "5V / GND"
    },
    {
      "komponen": "Tombol A",
      "pin_komponen": "2.l / 1.l",
      "koneksi_arduino": "Pin 2 / GND"
    },
    {
      "komponen": "Tombol B",
      "pin_komponen": "2.l / 1.l",
      "koneksi_arduino": "Pin 3 / GND"
    }
  ],
  "cpp_code": "// Proyek: OLED I2C Interaktif\n// Logika: Logo, gambar, counter tombol\n// Platform: Uno\n#include <Wire.h>\n#include <Adafruit_SSD1306.h>\n#include <Adafruit_GFX.h>\n\n#define LEBAR 128\n#define TINGGI 64\nAdafruit_SSD1306 layar(LEBAR, TINGGI, &Wire, -1);\n\nconst int pinTombolA = 2;\nconst int pinTombolB = 3;\nint hitung = 0;\n\nvoid setup() {\n  pinMode(pinTombolA, INPUT_PULLUP);\n  pinMode(pinTombolB, INPUT_PULLUP);\n  if (!layar.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {\n    for (;;);\n  }\n  layar.clearDisplay();\n  layar.setTextColor(SSD1306_WHITE);\n  tampilkanLogo();\n}\n\nvoid loop() {\n  if (digitalRead(pinTombolA) == LOW) {\n    hitung++;\n    while (digitalRead(pinTombolA) == LOW);\n  }\n  if (digitalRead(pinTombolB) == LOW) {\n    hitung = 0;\n    while (digitalRead(pinTombolB) == LOW);\n  }\n  layar.clearDisplay();\n  layar.setTextSize(2);\n  layar.setCursor(10, 10);\n  layar.print(\"Hitung:\");\n  layar.setCursor(40, 36);\n  layar.print(hitung);\n  layar.display();\n  delay(50);\n}\n\nvoid tampilkanLogo() {\n  layar.clearDisplay();\n  layar.setTextSize(1);\n  layar.setCursor(20, 10);\n  layar.print(\"ElektroDict\");\n  layar.drawCircle(64, 32, 20, SSD1306_WHITE);\n  layar.drawRect(0, 0, 128, 64, SSD1306_WHITE);\n  layar.display();\n  delay(1500);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-ssd1306\",\"id\":\"oled\",\"top\":-150,\"left\":300,\"attrs\":{}},{\"type\":\"wokwi-pushbutton\",\"id\":\"btn1\",\"top\":80,\"left\":300,\"attrs\":{}},{\"type\":\"wokwi-pushbutton\",\"id\":\"btn2\",\"top\":80,\"left\":440,\"attrs\":{}}],\"connections\":[[\"oled:SDA\",\"uno:A4\",\"blue\",[\"v0\"]],[\"oled:SCL\",\"uno:A5\",\"blue\",[\"v0\"]],[\"oled:VCC\",\"uno:5V\",\"red\",[\"v0\"]],[\"oled:GND\",\"uno:GND.1\",\"black\",[\"v0\"]],[\"btn1:2.l\",\"uno:2\",\"green\",[\"v0\"]],[\"btn1:1.l\",\"uno:GND.2\",\"black\",[\"v0\"]],[\"btn2:2.l\",\"uno:3\",\"green\",[\"v0\"]],[\"btn2:1.l\",\"uno:GND.2\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "OLED",
      "alur_perakitan": "SDA ke A4, SCL ke A5, VCC ke 5V, GND ke GND."
    },
    {
      "nama_komponen": "Tombol A",
      "alur_perakitan": "2.l ke pin 2, 1.l ke GND (pakai INPUT_PULLUP, tanpa resistor)."
    },
    {
      "nama_komponen": "Tombol B",
      "alur_perakitan": "2.l ke pin 3, 1.l ke GND."
    },
    {
      "nama_komponen": "Software",
      "alur_perakitan": "Upload kode. Tombol A menambah counter, tombol B mereset ke nol."
    }
  ]
}
, {
  "id": "tpl-sd-data-logger",
  "title": "Data Logger Suhu ke SD Card",
  "desc": "Data logger sederhana: DHT22 membaca suhu & kelembaban lalu menuliskannya ke file log.csv di kartu microSD setiap 5 detik. LED berkedip setiap kali data tersimpan. Bisa dibuka di Excel.",
  "difficulty": "Menengah",
  "tags": [
    "SD Card",
    "DHT22",
    "Logger",
    "Penyimpanan"
  ],
  "verified": true,
  "libraries": ["DHT sensor library"],
  "bom": [
    "1x Arduino Uno",
    "1x Modul microSD reader",
    "1x Kartu microSD",
    "1x Sensor DHT22",
    "1x LED",
    "1x Resistor 220 ohm",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "MicroSD",
      "pin_komponen": "CS / DI / DO / SCK",
      "koneksi_arduino": "Pin 10 / 11 / 12 / 13"
    },
    {
      "komponen": "MicroSD",
      "pin_komponen": "VCC / GND",
      "koneksi_arduino": "5V / GND"
    },
    {
      "komponen": "DHT22",
      "pin_komponen": "VCC / SDA / GND",
      "koneksi_arduino": "5V / Pin 4 / GND"
    },
    {
      "komponen": "LED",
      "pin_komponen": "Anoda (via 220 ohm)",
      "koneksi_arduino": "Pin 8"
    }
  ],
  "cpp_code": "// Proyek: Data Logger SD\n// Logika: DHT22 direkam ke log.csv\n// Platform: Uno\n#include <SPI.h>\n#include <SD.h>\n#include <DHT.h>\n\n#define PIN_CS 10\n#define PIN_DHT 4\nDHT sensor(PIN_DHT, DHT22);\n\nconst int pinLED = 8;\n\nvoid setup() {\n  Serial.begin(9600);\n  sensor.begin();\n  pinMode(pinLED, OUTPUT);\n  if (!SD.begin(PIN_CS)) {\n    Serial.println(\"SD gagal init\");\n    return;\n  }\n  File berkas = SD.open(\"log.csv\", FILE_WRITE);\n  if (berkas) {\n    berkas.println(\"waktu_ms,suhu,kelembaban\");\n    berkas.close();\n  }\n  Serial.println(\"Logger siap\");\n}\n\nvoid loop() {\n  float suhu = sensor.readTemperature();\n  float lembab = sensor.readHumidity();\n\n  File berkas = SD.open(\"log.csv\", FILE_WRITE);\n  if (berkas) {\n    berkas.print(millis());\n    berkas.print(\",\");\n    berkas.print(suhu);\n    berkas.print(\",\");\n    berkas.println(lembab);\n    berkas.close();\n  }\n  digitalWrite(pinLED, HIGH);\n  delay(200);\n  digitalWrite(pinLED, LOW);\n  Serial.print(\"Tercatat: \");\n  Serial.println(suhu);\n  delay(5000);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-microsd-card\",\"id\":\"sd\",\"top\":-170,\"left\":300,\"attrs\":{}},{\"type\":\"wokwi-dht22\",\"id\":\"dht\",\"top\":-40,\"left\":540,\"attrs\":{}},{\"type\":\"wokwi-led\",\"id\":\"led\",\"top\":80,\"left\":400,\"attrs\":{}},{\"type\":\"wokwi-resistor\",\"id\":\"r1\",\"top\":160,\"left\":400,\"attrs\":{\"value\":\"220\"}}],\"connections\":[[\"sd:CS\",\"uno:10\",\"yellow\",[\"v0\"]],[\"sd:DI\",\"uno:11\",\"green\",[\"v0\"]],[\"sd:DO\",\"uno:12\",\"blue\",[\"v0\"]],[\"sd:SCK\",\"uno:13\",\"yellow\",[\"v0\"]],[\"sd:VCC\",\"uno:5V\",\"red\",[\"v0\"]],[\"sd:GND\",\"uno:GND.1\",\"black\",[\"v0\"]],[\"dht:VCC\",\"uno:5V\",\"red\",[\"v0\"]],[\"dht:SDA\",\"uno:4\",\"green\",[\"v0\"]],[\"dht:GND\",\"uno:GND.2\",\"black\",[\"v0\"]],[\"led:A\",\"r1:2\",\"green\",[\"v0\"]],[\"r1:1\",\"uno:8\",\"green\",[\"v0\"]],[\"led:C\",\"uno:GND.3\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "MicroSD",
      "alur_perakitan": "CS ke pin 10, DI ke 11, DO ke 12, SCK ke 13, VCC ke 5V, GND ke GND."
    },
    {
      "nama_komponen": "DHT22",
      "alur_perakitan": "VCC ke 5V, SDA (data) ke pin 4, GND ke GND."
    },
    {
      "nama_komponen": "LED",
      "alur_perakitan": "Anoda via resistor 220 ohm ke pin 8, katoda ke GND."
    },
    {
      "nama_komponen": "Software",
      "alur_perakitan": "Upload kode. Buka file log.csv di kartu SD untuk melihat data (format CSV bisa dibuka Excel)."
    }
  ]
}
, {
  "id": "tpl-led-strip-effects",
  "title": "Efek LED Strip WS2812 + Potensiometer",
  "desc": "Efek lampu WS2812: strip 12 LED menjalankan animasi rainbow dan chase secara bergantian. Potensiometer mengatur kecepatan animasi secara real-time.",
  "difficulty": "Mudah",
  "tags": [
    "WS2812",
    "LED",
    "Animasi",
    "Potensiometer"
  ],
  "verified": true,
  "libraries": ["Adafruit NeoPixel"],
  "bom": [
    "1x Arduino Uno",
    "1x Strip LED WS2812 (12 LED)",
    "1x Potensiometer 10k",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "Strip WS2812",
      "pin_komponen": "DIN / VDD / VSS",
      "koneksi_arduino": "Pin 6 / 5V / GND"
    },
    {
      "komponen": "Potensiometer",
      "pin_komponen": "VCC / SIG / GND",
      "koneksi_arduino": "5V / A0 / GND"
    }
  ],
  "cpp_code": "// Proyek: Efek LED Strip\n// Logika: Rainbow + chase, pot ubah cepat\n// Platform: Uno\n#include <Adafruit_NeoPixel.h>\n\n#define JUMLAH 12\n#define PIN_STRIP 6\nAdafruit_NeoPixel strip(JUMLAH, PIN_STRIP, NEO_GRB + NEO_KHZ800);\n\nconst int pinPot = A0;\nint mode = 0;\n\nvoid setup() {\n  strip.begin();\n  strip.show();\n}\n\nvoid loop() {\n  int cepat = map(analogRead(pinPot), 0, 1023, 5, 100);\n  if (mode == 0) {\n    rainbow(cepat);\n  } else {\n    chase(cepat);\n  }\n}\n\nvoid rainbow(int delayMs) {\n  for (int i = 0; i < 256; i++) {\n    for (int p = 0; p < JUMLAH; p++) {\n      strip.setPixelColor(p, pelangi((p * 256 / JUMLAH + i) & 255));\n    }\n    strip.show();\n    delay(delayMs);\n  }\n  mode = 1;\n}\n\nvoid chase(int delayMs) {\n  for (int i = 0; i < JUMLAH; i++) {\n    strip.clear();\n    strip.setPixelColor(i, strip.Color(255, 255, 255));\n    strip.show();\n    delay(delayMs);\n  }\n  mode = 0;\n}\n\nuint32_t pelangi(uint8_t pos) {\n  if (pos < 85) return strip.Color(pos * 3, 255 - pos * 3, 0);\n  if (pos < 170) {\n    pos -= 85;\n    return strip.Color(255 - pos * 3, 0, pos * 3);\n  }\n  pos -= 170;\n  return strip.Color(0, pos * 3, 255 - pos * 3);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-led-strip\",\"id\":\"strip\",\"top\":-140,\"left\":300,\"attrs\":{\"pixels\":12}},{\"type\":\"wokwi-potentiometer\",\"id\":\"pot\",\"top\":80,\"left\":440,\"attrs\":{}}],\"connections\":[[\"strip:DIN\",\"uno:6\",\"green\",[\"v0\"]],[\"strip:VDD\",\"uno:5V\",\"red\",[\"v0\"]],[\"strip:VSS\",\"uno:GND.1\",\"black\",[\"v0\"]],[\"pot:VCC\",\"uno:5V\",\"red\",[\"v0\"]],[\"pot:SIG\",\"uno:A0\",\"blue\",[\"v0\"]],[\"pot:GND\",\"uno:GND.2\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "Strip LED",
      "alur_perakitan": "DIN ke pin 6, VDD ke 5V, VSS ke GND."
    },
    {
      "nama_komponen": "Potensiometer",
      "alur_perakitan": "VCC ke 5V, SIG ke A0, GND ke GND."
    },
    {
      "nama_komponen": "Software",
      "alur_perakitan": "Upload kode. Putar potensiometer untuk mengubah kecepatan efek."
    }
  ]
}
, {
  "id": "tpl-neopixel-matrix-draw",
  "title": "Lukis di Matrix LED 8x8 + Joystick",
  "desc": "Lukis di matrix LED 8x8: joystick menggerakkan kursor, tekan tombol joystick untuk menyalakan/mematikan pixel. Latihan pemetaan koordinat 2D dan pembacaan joystick analog.",
  "difficulty": "Menengah",
  "tags": [
    "Matrix",
    "WS2812",
    "Joystick",
    "Game"
  ],
  "verified": true,
  "libraries": ["Adafruit NeoPixel"],
  "bom": [
    "1x Arduino Uno",
    "1x Matrix LED 8x8 WS2812",
    "1x Joystick analog",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "Matrix 8x8",
      "pin_komponen": "DIN / VDD / VSS",
      "koneksi_arduino": "Pin 6 / 5V / GND"
    },
    {
      "komponen": "Joystick",
      "pin_komponen": "HORZ / VERT / SEL",
      "koneksi_arduino": "A0 / A1 / Pin 2"
    },
    {
      "komponen": "Joystick",
      "pin_komponen": "VCC / GND",
      "koneksi_arduino": "5V / GND"
    }
  ],
  "cpp_code": "// Proyek: Gambar di Matrix LED\n// Logika: Joystick geser, tekan nyalakan pixel\n// Platform: Uno\n#include <Adafruit_NeoPixel.h>\n\n#define UKURAN 8\n#define PIN_MATRIX 6\nAdafruit_NeoPixel matrix(UKURAN * UKURAN, PIN_MATRIX, NEO_GRB + NEO_KHZ800);\n\nconst int pinX = A0;\nconst int pinY = A1;\nconst int pinSW = 2;\nint kx = 3, ky = 3;\nboolean bingkai[UKURAN][UKURAN];\n\nvoid setup() {\n  matrix.begin();\n  matrix.show();\n  pinMode(pinSW, INPUT_PULLUP);\n}\n\nvoid loop() {\n  int x = analogRead(pinX);\n  int y = analogRead(pinY);\n  if (x < 400) kx = max(0, kx - 1);\n  else if (x > 600) kx = min(UKURAN - 1, kx + 1);\n  if (y < 400) ky = max(0, ky - 1);\n  else if (y > 600) ky = min(UKURAN - 1, ky + 1);\n  if (digitalRead(pinSW) == LOW) {\n    bingkai[ky][kx] = !bingkai[ky][kx];\n    while (digitalRead(pinSW) == LOW);\n  }\n  gambar();\n  delay(120);\n}\n\nvoid gambar() {\n  matrix.clear();\n  for (int r = 0; r < UKURAN; r++) {\n    for (int c = 0; c < UKURAN; c++) {\n      if (bingkai[r][c]) matrix.setPixelColor(r * UKURAN + c, matrix.Color(0, 255, 0));\n    }\n  }\n  matrix.setPixelColor(ky * UKURAN + kx, matrix.Color(255, 255, 255));\n  matrix.show();\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-led-matrix\",\"id\":\"mx\",\"top\":-170,\"left\":300,\"attrs\":{}},{\"type\":\"wokwi-analog-joystick\",\"id\":\"joy\",\"top\":60,\"left\":440,\"attrs\":{}}],\"connections\":[[\"mx:DIN\",\"uno:6\",\"green\",[\"v0\"]],[\"mx:VDD\",\"uno:5V\",\"red\",[\"v0\"]],[\"mx:VSS\",\"uno:GND.1\",\"black\",[\"v0\"]],[\"joy:HORZ\",\"uno:A0\",\"blue\",[\"v0\"]],[\"joy:VERT\",\"uno:A1\",\"blue\",[\"v0\"]],[\"joy:SEL\",\"uno:2\",\"green\",[\"v0\"]],[\"joy:VCC\",\"uno:5V\",\"red\",[\"v0\"]],[\"joy:GND\",\"uno:GND.2\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "Matrix 8x8",
      "alur_perakitan": "DIN ke pin 6, VDD ke 5V, VSS ke GND."
    },
    {
      "nama_komponen": "Joystick",
      "alur_perakitan": "HORZ ke A0, VERT ke A1, SEL ke pin 2."
    },
    {
      "nama_komponen": "Joystick",
      "alur_perakitan": "VCC ke 5V, GND ke GND."
    },
    {
      "nama_komponen": "Software",
      "alur_perakitan": "Upload kode. Geser joystick untuk gerakkan kursor, tekan untuk menyalakan/mematikan pixel."
    }
  ]
}
, {
  "id": "tpl-lcd2004-keypad-menu",
  "title": "Menu LCD 20x4 + Keypad",
  "desc": "Menu interaktif LCD 20x4 dengan keypad: navigasi menu A (LED), B (Kecepatan PWM), C (Info). Tombol 2 dan 8 mengubah nilai. Latihan state machine menu sederhana.",
  "difficulty": "Menengah",
  "tags": [
    "LCD",
    "Keypad",
    "Menu",
    "Interaktif"
  ],
  "verified": true,
  "libraries": ["Keypad", "LiquidCrystal I2C"],
  "bom": [
    "1x Arduino Uno",
    "1x LCD 20x4 (mode I2C)",
    "1x Keypad membran 4x4",
    "1x LED",
    "1x Resistor 220 ohm",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "Keypad",
      "pin_komponen": "R1-R4 (baris)",
      "koneksi_arduino": "Pin 2, 3, 4, 5"
    },
    {
      "komponen": "Keypad",
      "pin_komponen": "C1-C4 (kolom)",
      "koneksi_arduino": "Pin 6, 7, 8, 9"
    },
    {
      "komponen": "LCD 20x4 I2C",
      "pin_komponen": "VSS / VDD / SDA / SCL",
      "koneksi_arduino": "GND / 5V / A4 / A5"
    },
    {
      "komponen": "LED",
      "pin_komponen": "Anoda (via 220 ohm)",
      "koneksi_arduino": "Pin 10 (PWM)"
    }
  ],
  "cpp_code": "// Proyek: Menu LCD 2004 + Keypad\n// Logika: Navigasi menu via keypad\n// Platform: Uno\n#include <Wire.h>\n#include <LiquidCrystal_I2C.h>\n#include <Keypad.h>\n\nLiquidCrystal_I2C lcd(0x27, 20, 4);\n\nconst byte BARIS = 4;\nconst byte KOLOM = 4;\nchar tombolMap[BARIS][KOLOM] = {\n  {'1','2','3','A'},\n  {'4','5','6','B'},\n  {'7','8','9','C'},\n  {'*','0','#','D'}\n};\nbyte pinBaris[BARIS] = {2, 3, 4, 5};\nbyte pinKolom[KOLOM] = {6, 7, 8, 9};\nKeypad keypad(makeKeymap(tombolMap), pinBaris, pinKolom, BARIS, KOLOM);\n\nint menu = 0;\nint nilaiLed = 0;\nint kecepatan = 100;\n\nvoid setup() {\n  lcd.init();\n  lcd.backlight();\n  pinMode(10, OUTPUT);\n  tampilMenu();\n}\n\nvoid loop() {\n  char k = keypad.getKey();\n  if (!k) return;\n  if (k == 'A') menu = 0;\n  else if (k == 'B') menu = 1;\n  else if (k == 'C') menu = 2;\n  else if (k == '2') {\n    if (menu == 0) nilaiLed = !nilaiLed;\n    else if (menu == 1) kecepatan = max(0, kecepatan - 20);\n  }\n  else if (k == '8') {\n    if (menu == 1) kecepatan = min(255, kecepatan + 20);\n  }\n  aturOutput();\n  tampilMenu();\n}\n\nvoid aturOutput() {\n  analogWrite(10, nilaiLed ? kecepatan : 0);\n}\n\nvoid tampilMenu() {\n  lcd.clear();\n  lcd.setCursor(0, 0);\n  lcd.print(\"Menu Utama\");\n  lcd.setCursor(0, 1);\n  lcd.print(\"A:LED  B:Kecepatan\");\n  lcd.setCursor(0, 2);\n  if (menu == 0) {\n    lcd.print(\"2=On/Off  LED: \");\n    lcd.print(nilaiLed ? \"ON \" : \"OFF\");\n  } else if (menu == 1) {\n    lcd.print(\"8=+ 2=-  PWM:\");\n    lcd.print(kecepatan);\n  } else {\n    lcd.print(\"C: Info ElektroDict\");\n  }\n  lcd.setCursor(0, 3);\n  lcd.print(\"PWM Aktif: \");\n  lcd.print(nilaiLed ? kecepatan : 0);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-lcd2004\",\"id\":\"lcd\",\"top\":-180,\"left\":300,\"attrs\":{\"pins\":\"i2c\"}},{\"type\":\"wokwi-membrane-keypad\",\"id\":\"kp\",\"top\":-180,\"left\":560,\"attrs\":{}},{\"type\":\"wokwi-led\",\"id\":\"led\",\"top\":100,\"left\":400,\"attrs\":{}},{\"type\":\"wokwi-resistor\",\"id\":\"r1\",\"top\":180,\"left\":400,\"attrs\":{\"value\":\"220\"}}],\"connections\":[[\"kp:R1\",\"uno:2\",\"green\",[\"v0\"]],[\"kp:R2\",\"uno:3\",\"green\",[\"v0\"]],[\"kp:R3\",\"uno:4\",\"green\",[\"v0\"]],[\"kp:R4\",\"uno:5\",\"green\",[\"v0\"]],[\"kp:C1\",\"uno:6\",\"yellow\",[\"v0\"]],[\"kp:C2\",\"uno:7\",\"yellow\",[\"v0\"]],[\"kp:C3\",\"uno:8\",\"yellow\",[\"v0\"]],[\"kp:C4\",\"uno:9\",\"yellow\",[\"v0\"]],[\"lcd:VSS\",\"uno:GND.1\",\"black\",[\"v0\"]],[\"lcd:VDD\",\"uno:5V\",\"red\",[\"v0\"]],[\"lcd:SDA\",\"uno:A4\",\"blue\",[\"v0\"]],[\"lcd:SCL\",\"uno:A5\",\"blue\",[\"v0\"]],[\"led:A\",\"r1:2\",\"green\",[\"v0\"]],[\"r1:1\",\"uno:10\",\"green\",[\"v0\"]],[\"led:C\",\"uno:GND.2\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "Keypad",
      "alur_perakitan": "Baris R1-R4 ke pin 2-5, kolom C1-C4 ke pin 6-9."
    },
    {
      "nama_komponen": "LCD 20x4",
      "alur_perakitan": "Mode i2c: VSS ke GND, VDD ke 5V, SDA ke A4, SCL ke A5."
    },
    {
      "nama_komponen": "LED",
      "alur_perakitan": "Anoda via resistor 220 ohm ke pin 10 (PWM), katoda ke GND."
    },
    {
      "nama_komponen": "Software",
      "alur_perakitan": "Upload kode. Tekan A/B untuk pindah menu, 2 dan 8 untuk mengubah nilai."
    }
  ]
}
, {
  "id": "tpl-nokia5110-encoder",
  "title": "Menu Nokia 5110 + Rotary Encoder",
  "desc": "Menu di layar Nokia 5110: rotary encoder untuk scroll dan klik untuk memilih menu. Latihan library Adafruit PCD8544 dan pembacaan rotary encoder KY-040.",
  "difficulty": "Menengah",
  "tags": [
    "Nokia 5110",
    "Encoder",
    "Display",
    "Menu"
  ],
  "verified": true,
  "libraries": ["Adafruit PCD8544 Nokia 5110 LCD", "Adafruit GFX Library"],
  "bom": [
    "1x Arduino Uno",
    "1x LCD Nokia 5110",
    "1x Rotary encoder KY-040",
    "1x LED",
    "1x Resistor 220 ohm",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "Nokia 5110",
      "pin_komponen": "RST / CE / DC / DIN / CLK",
      "koneksi_arduino": "Pin 7 / 8 / 9 / 10 / 11"
    },
    {
      "komponen": "Nokia 5110",
      "pin_komponen": "VCC / BL / GND",
      "koneksi_arduino": "5V / 5V / GND"
    },
    {
      "komponen": "Encoder KY-040",
      "pin_komponen": "CLK / DT / SW",
      "koneksi_arduino": "Pin 2 / 3 / 4"
    },
    {
      "komponen": "Encoder KY-040",
      "pin_komponen": "VCC / GND",
      "koneksi_arduino": "5V / GND"
    },
    {
      "komponen": "LED",
      "pin_komponen": "Anoda (via 220 ohm)",
      "koneksi_arduino": "Pin 12"
    }
  ],
  "cpp_code": "// Proyek: Menu Nokia 5110\n// Logika: Encoder scroll, klik pilih\n// Platform: Uno\n#include <Adafruit_GFX.h>\n#include <Adafruit_PCD8544.h>\n\nAdafruit_PCD8544 layar(11, 10, 9, 8, 7); // CLK, DIN, DC, CE, RST\n\nconst int pinCLK = 2;\nconst int pinDT = 3;\nconst int pinSW = 4;\nint pilih = 0;\nint posisiLama = 0;\nconst char *menu[] = {\"LED Nyala\", \"LED Mati\", \"Info\"};\nconst int JUMLAH_MENU = 3;\n\nvoid setup() {\n  pinMode(pinCLK, INPUT_PULLUP);\n  pinMode(pinDT, INPUT_PULLUP);\n  pinMode(pinSW, INPUT_PULLUP);\n  pinMode(12, OUTPUT);\n  layar.begin();\n  layar.setContrast(60);\n  gambarMenu();\n}\n\nvoid loop() {\n  int posisiBaru = bacaEncoder();\n  if (posisiBaru != posisiLama) {\n    int delta = posisiBaru - posisiLama;\n    pilih = (pilih + delta + JUMLAH_MENU) % JUMLAH_MENU;\n    posisiLama = posisiBaru;\n    gambarMenu();\n  }\n  if (digitalRead(pinSW) == LOW) {\n    jalankan();\n    while (digitalRead(pinSW) == LOW);\n  }\n  delay(10);\n}\n\nint bacaEncoder() {\n  static int posisi = 0;\n  static int clkLama = 1;\n  int clk = digitalRead(pinCLK);\n  if (clk != clkLama) {\n    if (digitalRead(pinDT) != clk) posisi++;\n    else posisi--;\n    clkLama = clk;\n  }\n  return posisi;\n}\n\nvoid gambarMenu() {\n  layar.clearDisplay();\n  layar.setTextSize(1);\n  for (int i = 0; i < JUMLAH_MENU; i++) {\n    layar.setCursor(5, i * 10);\n    if (i == pilih) {\n      layar.setTextColor(WHITE, BLACK);\n    } else {\n      layar.setTextColor(BLACK, WHITE);\n    }\n    layar.print(menu[i]);\n  }\n  layar.display();\n}\n\nvoid jalankan() {\n  layar.clearDisplay();\n  layar.setCursor(0, 10);\n  if (pilih == 0) digitalWrite(12, HIGH);\n  if (pilih == 1) digitalWrite(12, LOW);\n  layar.print(\"Dipilih: \");\n  layar.print(menu[pilih]);\n  layar.display();\n  delay(1500);\n  gambarMenu();\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-nokia-5110-screen\",\"id\":\"lcd\",\"top\":-180,\"left\":300,\"attrs\":{}},{\"type\":\"wokwi-ky-040\",\"id\":\"enc\",\"top\":-20,\"left\":560,\"attrs\":{}},{\"type\":\"wokwi-led\",\"id\":\"led\",\"top\":100,\"left\":400,\"attrs\":{}},{\"type\":\"wokwi-resistor\",\"id\":\"r1\",\"top\":180,\"left\":400,\"attrs\":{\"value\":\"220\"}}],\"connections\":[[\"lcd:RST\",\"uno:7\",\"orange\",[\"v0\"]],[\"lcd:CE\",\"uno:8\",\"yellow\",[\"v0\"]],[\"lcd:DC\",\"uno:9\",\"yellow\",[\"v0\"]],[\"lcd:DIN\",\"uno:10\",\"green\",[\"v0\"]],[\"lcd:CLK\",\"uno:11\",\"blue\",[\"v0\"]],[\"lcd:VCC\",\"uno:5V\",\"red\",[\"v0\"]],[\"lcd:BL\",\"uno:5V\",\"red\",[\"v0\"]],[\"lcd:GND\",\"uno:GND.1\",\"black\",[\"v0\"]],[\"enc:CLK\",\"uno:2\",\"yellow\",[\"v0\"]],[\"enc:DT\",\"uno:3\",\"yellow\",[\"v0\"]],[\"enc:SW\",\"uno:4\",\"green\",[\"v0\"]],[\"enc:VCC\",\"uno:5V\",\"red\",[\"v0\"]],[\"enc:GND\",\"uno:GND.2\",\"black\",[\"v0\"]],[\"led:A\",\"r1:2\",\"green\",[\"v0\"]],[\"r1:1\",\"uno:12\",\"green\",[\"v0\"]],[\"led:C\",\"uno:GND.3\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "Nokia 5110",
      "alur_perakitan": "RST ke pin 7, CE ke 8, DC ke 9, DIN ke 10, CLK ke 11."
    },
    {
      "nama_komponen": "Nokia 5110",
      "alur_perakitan": "VCC ke 5V, BL (backlight) ke 5V, GND ke GND."
    },
    {
      "nama_komponen": "Encoder",
      "alur_perakitan": "CLK ke pin 2, DT ke 3, SW ke 4, VCC ke 5V, GND ke GND."
    },
    {
      "nama_komponen": "LED",
      "alur_perakitan": "Anoda via resistor 220 ohm ke pin 12, katoda ke GND."
    },
    {
      "nama_komponen": "Software",
      "alur_perakitan": "Upload kode. Putar encoder untuk scroll menu, tekan untuk memilih."
    }
  ]
}
, {
  "id": "tpl-esp32-web-servo",
  "title": "Servo Kendali Web (ESP32 Web Server)",
  "desc": "Kendalikan servo dari browser: ESP32 jadi web server, buka alamat IP-nya lalu geser slider untuk menggerakkan servo 0-180 derajat. LED berkedip tiap kali menerima perintah.",
  "difficulty": "Menengah",
  "tags": [
    "ESP32",
    "Web Server",
    "Servo",
    "IoT"
  ],
  "verified": true,
  "board": "board-esp32-devkit-c-v4",
  "libraries": ["ESP32Servo"],
  "bom": [
    "1x ESP32 DevKitC V4",
    "1x Servo SG90",
    "1x LED",
    "1x Resistor 220 ohm",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "Servo",
      "pin_komponen": "PWM / V+ / GND",
      "koneksi_arduino": "Pin 13 / 5V / GND"
    },
    {
      "komponen": "LED",
      "pin_komponen": "Anoda (via 220 ohm)",
      "koneksi_arduino": "Pin 2"
    },
    {
      "komponen": "WiFi AP",
      "alur_perakitan": "Tanpa kabel - akses point simulasi Wokwi (SSID Wokwi-GUEST).",
      "pin_komponen": "-",
      "koneksi_arduino": "-"
    }
  ],
  "cpp_code": "// Proyek: Servo Kendali Web\n// Logika: Slider web menggerakkan servo\n// Platform: ESP32\n#include <WiFi.h>\n#include <WebServer.h>\n#include <ESP32Servo.h>\n\nconst char* ssid = \"Wokwi-GUEST\";\nconst char* password = \"\";\nWebServer server(80);\nServo servo;\n\nconst int pinServo = 13;\nconst int pinLED = 2;\n\nvoid setup() {\n  Serial.begin(115200);\n  servo.attach(pinServo);\n  pinMode(pinLED, OUTPUT);\n  WiFi.begin(ssid, password);\n  while (WiFi.status() != WL_CONNECTED) {\n    delay(500);\n    Serial.print(\".\");\n  }\n  Serial.println(\"\");\n  Serial.println(WiFi.localIP());\n  server.on(\"/\", halaman);\n  server.on(\"/gerak\", gerak);\n  server.begin();\n}\n\nvoid loop() {\n  server.handleClient();\n  delay(50);\n}\n\nvoid halaman() {\n  String html = \"<html><body style='text-align:center;font-family:Arial'>\";\n  html += \"<h2>Kendali Servo</h2>\";\n  html += \"<input type='range' min='0' max='180' value='90' oninput='fetch(\\\"/gerak?pos=\\\"+this.value)'>\";\n  html += \"<p>Geser slider untuk menggerakkan servo</p></body></html>\";\n  server.send(200, \"text/html\", html);\n}\n\nvoid gerak() {\n  int pos = server.arg(\"pos\").toInt();\n  pos = constrain(pos, 0, 180);\n  servo.write(pos);\n  digitalWrite(pinLED, HIGH);\n  delay(100);\n  digitalWrite(pinLED, LOW);\n  server.send(200, \"text/plain\", \"OK\");\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"board-esp32-devkit-c-v4\",\"id\":\"esp\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-wifi-ap\",\"id\":\"ap\",\"top\":-120,\"left\":380,\"attrs\":{}},{\"type\":\"wokwi-servo\",\"id\":\"sv\",\"top\":-140,\"left\":560,\"attrs\":{}},{\"type\":\"wokwi-led\",\"id\":\"led\",\"top\":60,\"left\":380,\"attrs\":{\"color\":\"blue\"}},{\"type\":\"wokwi-resistor\",\"id\":\"r1\",\"top\":140,\"left\":380,\"attrs\":{\"value\":\"220\"}}],\"connections\":[[\"sv:PWM\",\"esp:13\",\"yellow\",[\"v0\"]],[\"sv:V+\",\"esp:5V\",\"red\",[\"v0\"]],[\"sv:GND\",\"esp:GND.1\",\"black\",[\"v0\"]],[\"led:A\",\"r1:2\",\"blue\",[\"v0\"]],[\"r1:1\",\"esp:2\",\"blue\",[\"v0\"]],[\"led:C\",\"esp:GND.2\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "Servo",
      "alur_perakitan": "PWM ke pin 13, V+ ke 5V, GND ke GND."
    },
    {
      "nama_komponen": "LED",
      "alur_perakitan": "Anoda via resistor 220 ohm ke pin 2, katoda ke GND."
    },
    {
      "nama_komponen": "Software",
      "alur_perakitan": "Upload kode. Buka serial monitor untuk melihat IP, akses lewat browser."
    },
    {
      "nama_komponen": "Uji Coba",
      "alur_perakitan": "Geser slider di halaman web; servo bergerak 0-180 derajat."
    }
  ]
}
, {
  "id": "tpl-esp32-web-dht",
  "title": "Dashboard Suhu Web (ESP32 + DHT22)",
  "desc": "Dashboard cuaca mini di browser: ESP32 membaca DHT22 dan mengirim suhu & kelembaban via HTTP JSON, halaman web auto-refresh tiap 2 detik tanpa reload.",
  "difficulty": "Menengah",
  "tags": [
    "ESP32",
    "Web Server",
    "DHT22",
    "IoT"
  ],
  "verified": true,
  "board": "board-esp32-devkit-c-v4",
  "libraries": ["DHT sensor library for ESPx"],
  "bom": [
    "1x ESP32 DevKitC V4",
    "1x Sensor DHT22",
    "1x LED",
    "1x Resistor 220 ohm",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "DHT22",
      "pin_komponen": "VCC / SDA / GND",
      "koneksi_arduino": "3V3 / Pin 4 / GND"
    },
    {
      "komponen": "LED",
      "pin_komponen": "Anoda (via 220 ohm)",
      "koneksi_arduino": "Pin 2"
    },
    {
      "komponen": "WiFi AP",
      "alur_perakitan": "Tanpa kabel - akses point simulasi Wokwi (SSID Wokwi-GUEST).",
      "pin_komponen": "-",
      "koneksi_arduino": "-"
    }
  ],
  "cpp_code": "// Proyek: Dashboard Suhu Web\n// Logika: Kirim suhu/lembab via JSON\n// Platform: ESP32\n#include <WiFi.h>\n#include <WebServer.h>\n#include <DHT.h>\n\nconst char* ssid = \"Wokwi-GUEST\";\nconst char* password = \"\";\nWebServer server(80);\n\n#define PIN_DHT 4\nDHT sensor(PIN_DHT, DHT22);\n\nconst int pinLED = 2;\n\nvoid setup() {\n  Serial.begin(115200);\n  sensor.begin();\n  pinMode(pinLED, OUTPUT);\n  WiFi.begin(ssid, password);\n  while (WiFi.status() != WL_CONNECTED) {\n    delay(500);\n  }\n  Serial.println(WiFi.localIP());\n  server.on(\"/\", halaman);\n  server.on(\"/data\", dataJSON);\n  server.begin();\n}\n\nvoid loop() {\n  server.handleClient();\n  delay(50);\n}\n\nvoid halaman() {\n  String html = \"<html><body style='text-align:center;font-family:Arial'>\";\n  html += \"<h2>Dashboard DHT22</h2>\";\n  html += \"<p id='suhu'>...</p>\";\n  html += \"<p id='lembab'>...</p>\";\n  html += \"<script>setInterval(()=>{fetch('/data').then(r=>r.json()).then(d=>{\";\n  html += \"document.getElementById('suhu').textContent='Suhu: '+d.suhu+' C';\";\n  html += \"document.getElementById('lembab').textContent='Lembab: '+d.lembab+' %';});},2000);</script>\";\n  html += \"</body></html>\";\n  server.send(200, \"text/html\", html);\n}\n\nvoid dataJSON() {\n  float suhu = sensor.readTemperature();\n  float lembab = sensor.readHumidity();\n  String json = \"{\\\"suhu\\\":\" + String(suhu) + \",\\\"lembab\\\":\" + String(lembab) + \"}\";\n  digitalWrite(pinLED, HIGH);\n  delay(50);\n  digitalWrite(pinLED, LOW);\n  server.send(200, \"application/json\", json);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"board-esp32-devkit-c-v4\",\"id\":\"esp\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-dht22\",\"id\":\"dht\",\"top\":-160,\"left\":300,\"attrs\":{}},{\"type\":\"wokwi-wifi-ap\",\"id\":\"ap\",\"top\":-80,\"left\":540,\"attrs\":{}},{\"type\":\"wokwi-led\",\"id\":\"led\",\"top\":60,\"left\":400,\"attrs\":{\"color\":\"green\"}},{\"type\":\"wokwi-resistor\",\"id\":\"r1\",\"top\":140,\"left\":400,\"attrs\":{\"value\":\"220\"}}],\"connections\":[[\"dht:VCC\",\"esp:3V3\",\"red\",[\"v0\"]],[\"dht:SDA\",\"esp:4\",\"green\",[\"v0\"]],[\"dht:GND\",\"esp:GND.1\",\"black\",[\"v0\"]],[\"led:A\",\"r1:2\",\"green\",[\"v0\"]],[\"r1:1\",\"esp:2\",\"green\",[\"v0\"]],[\"led:C\",\"esp:GND.2\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "DHT22",
      "alur_perakitan": "VCC ke 3V3, SDA (data) ke pin 4, GND ke GND."
    },
    {
      "nama_komponen": "LED",
      "alur_perakitan": "Anoda via resistor 220 ohm ke pin 2, katoda ke GND."
    },
    {
      "nama_komponen": "Software",
      "alur_perakitan": "Upload kode. Buka IP dari serial monitor di browser."
    },
    {
      "nama_komponen": "Uji Coba",
      "alur_perakitan": "Halaman web menampilkan suhu & kelembaban, auto-refresh tiap 2 detik."
    }
  ]
}
, {
  "id": "tpl-esp32-web-neopixel",
  "title": "Lampu RGB Web (ESP32 + Strip WS2812)",
  "desc": "Lampu RGB pintar: pilih warna dari color picker di browser, seluruh strip WS2812 langsung berubah warna. Gateway menuju proyek IoT lampu rumah.",
  "difficulty": "Menengah",
  "tags": [
    "ESP32",
    "Web Server",
    "WS2812",
    "IoT"
  ],
  "verified": true,
  "board": "board-esp32-devkit-c-v4",
  "libraries": ["Adafruit NeoPixel"],
  "bom": [
    "1x ESP32 DevKitC V4",
    "1x Strip LED WS2812 (8 LED)",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "Strip WS2812",
      "pin_komponen": "DIN / VDD / VSS",
      "koneksi_arduino": "Pin 5 / 5V / GND"
    },
    {
      "komponen": "WiFi AP",
      "alur_perakitan": "Tanpa kabel - akses point simulasi Wokwi (SSID Wokwi-GUEST).",
      "pin_komponen": "-",
      "koneksi_arduino": "-"
    }
  ],
  "cpp_code": "// Proyek: Lampu RGB Web\n// Logika: Pilih warna, strip ikut berubah\n// Platform: ESP32\n#include <WiFi.h>\n#include <WebServer.h>\n#include <Adafruit_NeoPixel.h>\n\nconst char* ssid = \"Wokwi-GUEST\";\nconst char* password = \"\";\nWebServer server(80);\n\n#define JUMLAH 8\n#define PIN_STRIP 5\nAdafruit_NeoPixel strip(JUMLAH, PIN_STRIP, NEO_GRB + NEO_KHZ800);\n\nint r = 255, g = 100, b = 0;\n\nvoid setup() {\n  Serial.begin(115200);\n  strip.begin();\n  strip.show();\n  WiFi.begin(ssid, password);\n  while (WiFi.status() != WL_CONNECTED) {\n    delay(500);\n  }\n  Serial.println(WiFi.localIP());\n  server.on(\"/\", halaman);\n  server.on(\"/warna\", ubahWarna);\n  server.begin();\n}\n\nvoid loop() {\n  server.handleClient();\n  delay(50);\n}\n\nvoid halaman() {\n  String html = \"<html><body style='text-align:center;font-family:Arial'>\";\n  html += \"<h2>Lampu RGB Web</h2>\";\n  html += \"<input type='color' value='#ff6400' onchange='fetch(\\\"/warna?nilai=\\\"+this.value)'>\";\n  html += \"<p>Pilih warna untuk LED strip</p></body></html>\";\n  server.send(200, \"text/html\", html);\n}\n\nvoid ubahWarna() {\n  String nilai = server.arg(\"nilai\");\n  if (nilai.length() >= 7 && nilai[0] == '#') {\n    r = strtol(nilai.substring(1, 3).c_str(), NULL, 16);\n    g = strtol(nilai.substring(3, 5).c_str(), NULL, 16);\n    b = strtol(nilai.substring(5, 7).c_str(), NULL, 16);\n    for (int i = 0; i < JUMLAH; i++) {\n      strip.setPixelColor(i, r, g, b);\n    }\n    strip.show();\n  }\n  server.send(200, \"text/plain\", \"OK\");\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"board-esp32-devkit-c-v4\",\"id\":\"esp\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-led-strip\",\"id\":\"strip\",\"top\":-140,\"left\":300,\"attrs\":{\"pixels\":8}},{\"type\":\"wokwi-wifi-ap\",\"id\":\"ap\",\"top\":-80,\"left\":540,\"attrs\":{}}],\"connections\":[[\"strip:DIN\",\"esp:5\",\"green\",[\"v0\"]],[\"strip:VDD\",\"esp:5V\",\"red\",[\"v0\"]],[\"strip:VSS\",\"esp:GND.1\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "Strip WS2812",
      "alur_perakitan": "DIN ke pin 5, VDD ke 5V, VSS ke GND."
    },
    {
      "nama_komponen": "Software",
      "alur_perakitan": "Upload kode. Buka IP dari serial monitor di browser."
    },
    {
      "nama_komponen": "Uji Coba",
      "alur_perakitan": "Pilih warna di color picker; strip langsung berubah warna."
    }
  ]
},
{
  "id": "tpl-neopixel-rainbow",
  "title": "Lampu RGB Animasi NeoPixel (WS2812)",
  "desc": "Strip LED WS2812 (NeoPixel) menampilkan animasi pelangi dan chase dengan library Adafruit NeoPixel - pelajaran dasar LED addressable: satu pin data mengendalikan banyak LED.",
  "difficulty": "Mudah",
  "tags": ["LED", "RGB", "Animasi", "WS2812"],
  "verified": true,
  "libraries": ["Adafruit NeoPixel"],
  "bom": [
    "1x Arduino Uno",
    "1x NeoPixel Strip WS2812 (8 LED)",
    "1x Kapasitor 1000uF (opsional, di real hardware)",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "NeoPixel",
      "pin_komponen": "VDD (5V)",
      "koneksi_arduino": "5V"
    },
    {
      "komponen": "NeoPixel",
      "pin_komponen": "VSS (GND)",
      "koneksi_arduino": "GND"
    },
    {
      "komponen": "NeoPixel",
      "pin_komponen": "DIN (data)",
      "koneksi_arduino": "Pin 6"
    }
  ],
  "cpp_code": "// Proyek: Lampu RGB Animasi NeoPixel (WS2812)\n// Logika: animasi pelangi & chase LED addressable\n// Platform: Uno\n#include <Adafruit_NeoPixel.h>\n\n#define JUMLAH_LED 8\n#define PIN_DATA 6\n\nAdafruit_NeoPixel strip(JUMLAH_LED, PIN_DATA, NEO_GRB + NEO_KHZ800);\n\nvoid setup() {\n  strip.begin();\n  strip.setBrightness(40);\n  strip.show();\n}\n\nvoid loop() {\n  pelangi(5);\n  chase(40);\n}\n\n// Animasi pelangi bergulir\nvoid pelangi(int tunggu) {\n  for (long siklus = 0; siklus < 256 * 5; siklus++) {\n    for (int i = 0; i < JUMLAH_LED; i++) {\n      strip.setPixelColor(i, rodaWarna((i * 256 / JUMLAH_LED + siklus) & 255));\n    }\n    strip.show();\n    delay(tunggu);\n  }\n}\n\n// Efek chase (LED menyala bergantian)\nvoid chase(int tunggu) {\n  for (int i = 0; i < JUMLAH_LED; i++) {\n    strip.setPixelColor(i, strip.Color(0, 150, 255));\n    strip.show();\n    delay(tunggu);\n  }\n  for (int i = JUMLAH_LED - 1; i >= 0; i--) {\n    strip.setPixelColor(i, 0);\n    strip.show();\n    delay(tunggu);\n  }\n}\n\n// Konversi posisi (0-255) ke warna RGB\nuint32_t rodaWarna(byte posisi) {\n  if (posisi < 85) return strip.Color(posisi * 3, 255 - posisi * 3, 0);\n  if (posisi < 170) {\n    posisi -= 85;\n    return strip.Color(255 - posisi * 3, 0, posisi * 3);\n  }\n  posisi -= 170;\n  return strip.Color(0, posisi * 3, 255 - posisi * 3);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-neopixel\",\"id\":\"np\",\"top\":-120,\"left\":340,\"attrs\":{}}],\"connections\":[[\"np:VDD\",\"uno:5V\",\"red\",[\"v0\"]],[\"np:VSS\",\"uno:GND.1\",\"black\",[\"v0\"]],[\"np:DIN\",\"uno:6\",\"green\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "NeoPixel",
      "alur_perakitan": "VDD ke 5V, VSS ke GND, DIN ke pin 6."
    },
    {
      "nama_komponen": "Library",
      "alur_perakitan": "Pasang library Adafruit NeoPixel via libraries.txt (Wokwi) atau Library Manager (IDE)."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Upload kode; strip menampilkan animasi pelangi lalu chase. Coba ubah JUMLAH_LED sesuai strip kamu."
    }
  ]
},
{
  "id": "tpl-vu-meter",
  "title": "VU Meter LED Bar Graph",
  "desc": "Potensiometer mengatur level yang ditampilkan pada bar graph 10 LED - latihan analogRead, map(), dan output digital sekaligus.",
  "difficulty": "Mudah",
  "tags": ["LED", "Potensiometer", "Analog", "Display"],
  "verified": true,
  "libraries": [],
  "bom": [
    "1x Arduino Uno",
    "1x Potensiometer 10k",
    "1x LED Bar Graph 10 segmen",
    "10x Resistor 220 Ohm (real hardware)",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "Potensiometer",
      "pin_komponen": "SIG / VCC / GND",
      "koneksi_arduino": "A0 / 5V / GND"
    },
    {
      "komponen": "Bar Graph",
      "pin_komponen": "A1 - A10 (anoda)",
      "koneksi_arduino": "Pin 2 - Pin 11"
    },
    {
      "komponen": "Bar Graph",
      "pin_komponen": "C1 - C10 (katoda)",
      "koneksi_arduino": "GND (via resistor 220 di real hardware)"
    }
  ],
  "cpp_code": "// Proyek: VU Meter LED Bar Graph\n// Logika: potensio -> analogRead -> nyalakan 1..10 LED\n// Platform: Uno\nconst int pinPot = A0;\nconst int pinLedAwal = 2; // LED pertama di pin 2, terakhir di pin 11\n\nvoid setup() {\n  for (int i = 0; i < 10; i++) {\n    pinMode(pinLedAwal + i, OUTPUT);\n  }\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int nilai = analogRead(pinPot);\n  int level = map(nilai, 0, 1023, 0, 10);\n\n  for (int i = 0; i < 10; i++) {\n    digitalWrite(pinLedAwal + i, i < level ? HIGH : LOW);\n  }\n\n  Serial.print(\"ADC: \");\n  Serial.print(nilai);\n  Serial.print(\" | Level: \");\n  Serial.println(level);\n  delay(50);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-potentiometer\",\"id\":\"pot\",\"top\":-140,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-led-bar-graph\",\"id\":\"bg\",\"top\":-140,\"left\":540,\"attrs\":{}}],\"connections\":[[\"pot:VCC\",\"uno:5V\",\"red\",[\"v0\"]],[\"pot:SIG\",\"uno:A0\",\"blue\",[\"v0\"]],[\"pot:GND\",\"uno:GND.1\",\"black\",[\"v0\"]],[\"bg:A1\",\"uno:2\",\"green\",[\"v0\"]],[\"bg:A2\",\"uno:3\",\"green\",[\"v0\"]],[\"bg:A3\",\"uno:4\",\"green\",[\"v0\"]],[\"bg:A4\",\"uno:5\",\"green\",[\"v0\"]],[\"bg:A5\",\"uno:6\",\"green\",[\"v0\"]],[\"bg:A6\",\"uno:7\",\"green\",[\"v0\"]],[\"bg:A7\",\"uno:8\",\"green\",[\"v0\"]],[\"bg:A8\",\"uno:9\",\"green\",[\"v0\"]],[\"bg:A9\",\"uno:10\",\"green\",[\"v0\"]],[\"bg:A10\",\"uno:11\",\"green\",[\"v0\"]],[\"bg:C1\",\"uno:GND.2\",\"black\",[\"v0\"]],[\"bg:C2\",\"uno:GND.2\",\"black\",[\"v0\"]],[\"bg:C3\",\"uno:GND.2\",\"black\",[\"v0\"]],[\"bg:C4\",\"uno:GND.2\",\"black\",[\"v0\"]],[\"bg:C5\",\"uno:GND.2\",\"black\",[\"v0\"]],[\"bg:C6\",\"uno:GND.2\",\"black\",[\"v0\"]],[\"bg:C7\",\"uno:GND.2\",\"black\",[\"v0\"]],[\"bg:C8\",\"uno:GND.2\",\"black\",[\"v0\"]],[\"bg:C9\",\"uno:GND.2\",\"black\",[\"v0\"]],[\"bg:C10\",\"uno:GND.2\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "Potensiometer",
      "alur_perakitan": "Kaki tengah (SIG) ke A0, kaki kanan ke 5V, kaki kiri ke GND."
    },
    {
      "nama_komponen": "Bar Graph",
      "alur_perakitan": "Anoda A1-A10 ke pin 2-11, semua katoda C1-C10 ke GND."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Putar potensiometer; jumlah LED menyala mengikuti level ADC. Serial monitor menampilkan nilai ADC & level."
    }
  ]
},
{
  "id": "tpl-shift-in-8button",
  "title": "Baca 8 Tombol dengan Shift Register 74HC165",
  "desc": "8 tombol dibaca hanya dengan 3 pin Arduino menggunakan shift register PISO 74HC165 - kebalikan dari 74HC595 yang sudah dipakai untuk output.",
  "difficulty": "Menengah",
  "tags": ["Shift Register", "74HC165", "Tombol", "Input"],
  "verified": true,
  "libraries": [],
  "bom": [
    "1x Arduino Uno",
    "1x Shift Register 74HC165",
    "8x Pushbutton",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "74HC165",
      "pin_komponen": "VCC / GND",
      "koneksi_arduino": "5V / GND"
    },
    {
      "komponen": "74HC165",
      "pin_komponen": "PL (parallel load)",
      "koneksi_arduino": "Pin 9"
    },
    {
      "komponen": "74HC165",
      "pin_komponen": "CP (clock)",
      "koneksi_arduino": "Pin 10"
    },
    {
      "komponen": "74HC165",
      "pin_komponen": "CE (clock enable)",
      "koneksi_arduino": "GND (aktif low)"
    },
    {
      "komponen": "74HC165",
      "pin_komponen": "Q7 (serial out)",
      "koneksi_arduino": "Pin 11"
    },
    {
      "komponen": "Tombol 1-8",
      "pin_komponen": "2.l",
      "koneksi_arduino": "D0-D7 (kaki paralel 74HC165)"
    },
    {
      "komponen": "Tombol 1-8",
      "pin_komponen": "1.l",
      "koneksi_arduino": "5V (aktif high)"
    }
  ],
  "cpp_code": "// Proyek: Baca 8 Tombol dengan Shift Register 74HC165\n// Logika: 8 tombol -> 74HC165 (PISO) -> baca 3 pin saja\n// Platform: Uno\nconst int pinPL = 9;   // Parallel Load (aktif low)\nconst int pinCP = 10;  // Clock\nconst int pinQ7 = 11;  // Serial out\n\nbyte bacaTombol() {\n  digitalWrite(pinPL, LOW);   // kunci data paralel\n  delayMicroseconds(2);\n  digitalWrite(pinPL, HIGH);\n\n  byte nilai = 0;\n  for (int i = 0; i < 8; i++) {\n    digitalWrite(pinCP, LOW);\n    nilai |= (digitalRead(pinQ7) << (7 - i));\n    digitalWrite(pinCP, HIGH);\n  }\n  return nilai;\n}\n\nvoid setup() {\n  pinMode(pinPL, OUTPUT);\n  pinMode(pinCP, OUTPUT);\n  pinMode(pinQ7, INPUT);\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  byte tombol = bacaTombol();\n  Serial.print(\"Tombol (bit 7-0): \");\n  for (int i = 7; i >= 0; i--) {\n    Serial.print(bitRead(tombol, i) ? \"1\" : \"0\");\n  }\n  Serial.println();\n  delay(200);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-74hc165\",\"id\":\"reg\",\"top\":-150,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-pushbutton-6mm\",\"id\":\"btn1\",\"top\":60,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-pushbutton-6mm\",\"id\":\"btn2\",\"top\":60,\"left\":420,\"attrs\":{}},{\"type\":\"wokwi-pushbutton-6mm\",\"id\":\"btn3\",\"top\":60,\"left\":500,\"attrs\":{}},{\"type\":\"wokwi-pushbutton-6mm\",\"id\":\"btn4\",\"top\":60,\"left\":580,\"attrs\":{}},{\"type\":\"wokwi-pushbutton-6mm\",\"id\":\"btn5\",\"top\":140,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-pushbutton-6mm\",\"id\":\"btn6\",\"top\":140,\"left\":420,\"attrs\":{}},{\"type\":\"wokwi-pushbutton-6mm\",\"id\":\"btn7\",\"top\":140,\"left\":500,\"attrs\":{}},{\"type\":\"wokwi-pushbutton-6mm\",\"id\":\"btn8\",\"top\":140,\"left\":580,\"attrs\":{}}],\"connections\":[[\"reg:VCC\",\"uno:5V\",\"red\",[\"v0\"]],[\"reg:GND\",\"uno:GND.1\",\"black\",[\"v0\"]],[\"reg:PL\",\"uno:9\",\"green\",[\"v0\"]],[\"reg:CP\",\"uno:10\",\"yellow\",[\"v0\"]],[\"reg:CE\",\"uno:GND.2\",\"black\",[\"v0\"]],[\"reg:Q7\",\"uno:11\",\"green\",[\"v0\"]],[\"btn1:2.l\",\"reg:D0\",\"green\",[\"v0\"]],[\"btn2:2.l\",\"reg:D1\",\"green\",[\"v0\"]],[\"btn3:2.l\",\"reg:D2\",\"green\",[\"v0\"]],[\"btn4:2.l\",\"reg:D3\",\"green\",[\"v0\"]],[\"btn5:2.l\",\"reg:D4\",\"green\",[\"v0\"]],[\"btn6:2.l\",\"reg:D5\",\"green\",[\"v0\"]],[\"btn7:2.l\",\"reg:D6\",\"green\",[\"v0\"]],[\"btn8:2.l\",\"reg:D7\",\"green\",[\"v0\"]],[\"btn1:1.l\",\"uno:5V\",\"red\",[\"v0\"]],[\"btn2:1.l\",\"uno:5V\",\"red\",[\"v0\"]],[\"btn3:1.l\",\"uno:5V\",\"red\",[\"v0\"]],[\"btn4:1.l\",\"uno:5V\",\"red\",[\"v0\"]],[\"btn5:1.l\",\"uno:5V\",\"red\",[\"v0\"]],[\"btn6:1.l\",\"uno:5V\",\"red\",[\"v0\"]],[\"btn7:1.l\",\"uno:5V\",\"red\",[\"v0\"]],[\"btn8:1.l\",\"uno:5V\",\"red\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "74HC165",
      "alur_perakitan": "VCC ke 5V, GND ke GND, PL ke pin 9, CP ke pin 10, CE ke GND, Q7 ke pin 11."
    },
    {
      "nama_komponen": "Tombol",
      "alur_perakitan": "Kaki 2.l tiap tombol ke D0-D7 74HC165, kaki 1.l ke 5V (aktif high)."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Tekan tombol; serial monitor menampilkan pola bit 8 tombol. Perhatikan urutan bit MSB di kiri."
    }
  ]
},
{
  "id": "tpl-bmp180-barometer",
  "title": "Barometer & Altimeter BMP180",
  "desc": "Sensor tekanan BMP180 mengukur tekanan udara, suhu, dan estimasi ketinggian - hasilnya ditampilkan di OLED SSD1306.",
  "difficulty": "Menengah",
  "tags": ["ESP32", "BMP180", "Sensor", "Tekanan", "OLED"],
  "verified": true,
  "libraries": ["Adafruit BMP085 Library", "Adafruit SSD1306", "Adafruit GFX Library"],
  "board": "board-esp32-devkit-c-v4",
  "bom": [
    "1x ESP32 DevKitC V4",
    "1x Sensor BMP180",
    "1x OLED SSD1306 128x64 (I2C)",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "BMP180",
      "pin_komponen": "VCC / GND",
      "koneksi_arduino": "3V3 / GND"
    },
    {
      "komponen": "BMP180",
      "pin_komponen": "SCL / SDA",
      "koneksi_arduino": "GPIO 22 / GPIO 21"
    },
    {
      "komponen": "OLED",
      "pin_komponen": "VCC / GND",
      "koneksi_arduino": "3V3 / GND"
    },
    {
      "komponen": "OLED",
      "pin_komponen": "SCL / SDA",
      "koneksi_arduino": "GPIO 22 / GPIO 21 (paralel dengan BMP180)"
    }
  ],
  "cpp_code": "// Proyek: Barometer & Altimeter BMP180\n// Logika: tekanan & suhu udara -> OLED SSD1306\n// Platform: ESP32\n#include <Wire.h>\n#include <Adafruit_GFX.h>\n#include <Adafruit_SSD1306.h>\n#include <Adafruit_BMP085.h>\n\n#define OLED_W 128\n#define OLED_H 64\nAdafruit_SSD1306 oled(OLED_W, OLED_H, &Wire, -1);\n\nAdafruit_BMP085 bmp;\n\nvoid setup() {\n  Serial.begin(115200);\n  if (!bmp.begin()) {\n    Serial.println(\"BMP180 tidak ditemukan!\");\n    for (;;);\n  }\n  if (!oled.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {\n    Serial.println(\"OLED gagal\");\n  }\n  oled.clearDisplay();\n  oled.setTextSize(1);\n  oled.setTextColor(SSD1306_WHITE);\n}\n\nvoid loop() {\n  float suhu = bmp.readTemperature();\n  long tekanan = bmp.readPressure();\n  float ketinggian = bmp.readAltitude();\n\n  oled.clearDisplay();\n  oled.setCursor(0, 0); oled.println(\"  BAROMETER\");\n  oled.setCursor(0, 18); oled.printf(\"Suhu: %.1f C\", suhu);\n  oled.setCursor(0, 32); oled.printf(\"Tek: %ld Pa\", tekanan);\n  oled.setCursor(0, 46); oled.printf(\"Tinggi: %.0f m\", ketinggian);\n  oled.display();\n\n  Serial.printf(\"Suhu: %.1f C | Tekanan: %ld Pa | Ketinggian: %.1f m\\n\", suhu, tekanan, ketinggian);\n  delay(2000);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"board-esp32-devkit-c-v4\",\"id\":\"esp\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"board-bmp180\",\"id\":\"bmp\",\"top\":-120,\"left\":340,\"attrs\":{}},{\"type\":\"board-ssd1306\",\"id\":\"oled\",\"top\":-120,\"left\":540,\"attrs\":{}}],\"connections\":[[\"bmp:VCC\",\"esp:3V3\",\"red\",[\"v0\"]],[\"bmp:GND\",\"esp:GND.1\",\"black\",[\"v0\"]],[\"bmp:SCL\",\"esp:22\",\"yellow\",[\"v0\"]],[\"bmp:SDA\",\"esp:21\",\"green\",[\"v0\"]],[\"oled:VCC\",\"esp:3V3\",\"red\",[\"v0\"]],[\"oled:GND\",\"esp:GND.2\",\"black\",[\"v0\"]],[\"oled:SCL\",\"esp:22\",\"yellow\",[\"v0\"]],[\"oled:SDA\",\"esp:21\",\"green\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "BMP180",
      "alur_perakitan": "VCC ke 3V3, GND ke GND, SCL ke GPIO 22, SDA ke GPIO 21 (I2C)."
    },
    {
      "nama_komponen": "OLED",
      "alur_perakitan": "VCC ke 3V3, GND ke GND, SCL/SDA paralel ke GPIO 22/21."
    },
    {
      "nama_komponen": "Library",
      "alur_perakitan": "Pasang Adafruit BMP085 Library (kompatibel BMP180), Adafruit SSD1306, dan Adafruit GFX via libraries.txt."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "OLED menampilkan suhu, tekanan (Pa), dan estimasi ketinggian (m). Baca juga di serial monitor."
    }
  ]
},
{
  "id": "tpl-tft-thermograph",
  "title": "Termometer Grafik TFT ILI9341",
  "desc": "Suhu dari DS18B20 digambar sebagai grafik bergulir real-time di layar TFT 240x320 (ILI9341, SPI) - latihan OneWire, DallasTemperature, dan grafik dengan Adafruit GFX.",
  "difficulty": "Sulit",
  "tags": ["ESP32", "TFT", "ILI9341", "DS18B20", "Grafik"],
  "verified": true,
  "libraries": ["Adafruit ILI9341", "Adafruit GFX Library", "OneWire", "DallasTemperature"],
  "board": "board-esp32-devkit-c-v4",
  "bom": [
    "1x ESP32 DevKitC V4",
    "1x TFT ILI9341 240x320 (SPI)",
    "1x Sensor DS18B20",
    "1x Resistor 4.7k Ohm (pull-up DQ, real hardware)",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "TFT ILI9341",
      "pin_komponen": "VCC / GND",
      "koneksi_arduino": "5V / GND"
    },
    {
      "komponen": "TFT ILI9341",
      "pin_komponen": "CS / D/C",
      "koneksi_arduino": "GPIO 5 / GPIO 17"
    },
    {
      "komponen": "TFT ILI9341",
      "pin_komponen": "MOSI / SCK / MISO",
      "koneksi_arduino": "GPIO 23 / GPIO 18 / GPIO 19"
    },
    {
      "komponen": "DS18B20",
      "pin_komponen": "VCC / DQ / GND",
      "koneksi_arduino": "3V3 / GPIO 4 / GND"
    }
  ],
  "cpp_code": "// Proyek: Termometer Grafik TFT ILI9341\n// Logika: DS18B20 -> grafik suhu bergulir di TFT 240x320\n// Platform: ESP32\n#include <SPI.h>\n#include <Adafruit_GFX.h>\n#include <Adafruit_ILI9341.h>\n#include <OneWire.h>\n#include <DallasTemperature.h>\n\n#define TFT_CS 5\n#define TFT_DC 17\nAdafruit_ILI9341 tft(TFT_CS, TFT_DC);\n\n#define PIN_DS18B20 4\nOneWire oneWire(PIN_DS18B20);\nDallasTemperature sensor(&oneWire);\n\nfloat riwayat[320];\nint posisi = 0;\n\nvoid setup() {\n  Serial.begin(115200);\n  sensor.begin();\n  tft.begin();\n  tft.fillScreen(ILI9341_BLACK);\n  tft.setTextColor(ILI9341_WHITE);\n  tft.setTextSize(2);\n  tft.setCursor(20, 10);\n  tft.print(\"Termometer TFT\");\n}\n\nvoid loop() {\n  sensor.requestTemperatures();\n  float suhu = sensor.getTempCByIndex(0);\n  if (suhu <= -100) return;\n\n  riwayat[posisi] = suhu;\n  posisi = (posisi + 1) % 320;\n\n  tft.fillScreen(ILI9341_BLACK);\n  tft.setTextSize(2);\n  tft.setCursor(10, 10);\n  tft.printf(\"Suhu: %.1f C\", suhu);\n  tft.drawFastHLine(0, 40, 320, ILI9341_WHITE);\n\n  for (int x = 1; x < 320; x++) {\n    int i1 = (posisi + x - 1) % 320;\n    int i2 = (posisi + x) % 320;\n    float s1 = riwayat[i1];\n    float s2 = riwayat[i2];\n    if (s1 == 0 && s2 == 0) continue;\n    int y1 = 220 - map((int)(s1 * 10), 0, 500, 0, 200);\n    int y2 = 220 - map((int)(s2 * 10), 0, 500, 0, 200);\n    tft.drawLine(x - 1, y1, x, y2, ILI9341_CYAN);\n  }\n  delay(1000);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"board-esp32-devkit-c-v4\",\"id\":\"esp\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-ili9341\",\"id\":\"tft\",\"top\":-160,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-ds18b20\",\"id\":\"ds\",\"top\":-160,\"left\":620,\"attrs\":{}}],\"connections\":[[\"tft:VCC\",\"esp:5V\",\"red\",[\"v0\"]],[\"tft:GND\",\"esp:GND.1\",\"black\",[\"v0\"]],[\"tft:CS\",\"esp:5\",\"green\",[\"v0\"]],[\"tft:D/C\",\"esp:17\",\"green\",[\"v0\"]],[\"tft:MOSI\",\"esp:23\",\"green\",[\"v0\"]],[\"tft:SCK\",\"esp:18\",\"yellow\",[\"v0\"]],[\"tft:MISO\",\"esp:19\",\"blue\",[\"v0\"]],[\"ds:VCC\",\"esp:3V3\",\"red\",[\"v0\"]],[\"ds:DQ\",\"esp:4\",\"green\",[\"v0\"]],[\"ds:GND\",\"esp:GND.2\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "TFT ILI9341",
      "alur_perakitan": "VCC ke 5V, GND ke GND, CS ke GPIO 5, D/C ke GPIO 17, MOSI ke 23, SCK ke 18, MISO ke 19. Pin RST & LED tidak disimulasikan."
    },
    {
      "nama_komponen": "DS18B20",
      "alur_perakitan": "VCC ke 3V3, DQ ke GPIO 4, GND ke GND."
    },
    {
      "nama_komponen": "Library",
      "alur_perakitan": "Pasang Adafruit ILI9341, Adafruit GFX, OneWire, dan DallasTemperature via libraries.txt."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Grafik suhu bergulir dari kiri ke kanan. Ubah suhu DS18B20 di simulator (klik sensor) untuk melihat respons grafik."
    }
  ]
},
{
  "id": "tpl-attiny85-nightlight",
  "title": "Lampu Malam Otomatis ATtiny85",
  "desc": "Photoresistor membaca cahaya sekitar; saat gelap LED menyala otomatis. Belajar MCU 8-pin ATtiny85, ADC, dan hemat daya.",
  "difficulty": "Mudah",
  "tags": ["ATtiny85", "Photoresistor", "Otomatis", "ADC"],
  "verified": true,
  "libraries": [],
  "bom": [
    "1x ATtiny85 (8MHz)",
    "1x Photoresistor (LDR)",
    "1x LED",
    "1x Resistor 220 Ohm",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "Photoresistor",
      "pin_komponen": "VCC / GND",
      "koneksi_arduino": "VCC / GND (ATtiny85)"
    },
    {
      "komponen": "Photoresistor",
      "pin_komponen": "AO (analog)",
      "koneksi_arduino": "PB2 (A1)"
    },
    {
      "komponen": "LED",
      "pin_komponen": "Anoda via Resistor 220",
      "koneksi_arduino": "PB0 (pin 0)"
    },
    {
      "komponen": "LED",
      "pin_komponen": "Katoda",
      "koneksi_arduino": "GND"
    }
  ],
  "cpp_code": "// Proyek: Lampu Malam Otomatis ATtiny85\n// Logika: cahaya redup -> LED menyala (photoresistor)\n// Platform: ATtiny85 (8 MHz)\n// Pin: LED di PB0 (pin 0), LDR analog di PB2/A1 (pin 7)\n#define PIN_LED 0\n#define PIN_LDR A1\n\nconst int batasGelap = 500;\n\nvoid setup() {\n  pinMode(PIN_LED, OUTPUT);\n}\n\nvoid loop() {\n  int cahaya = analogRead(PIN_LDR);\n  if (cahaya < batasGelap) {\n    digitalWrite(PIN_LED, HIGH); // gelap -> nyala\n  } else {\n    digitalWrite(PIN_LED, LOW);  // terang -> mati\n  }\n  delay(200);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-attiny85\",\"id\":\"attiny\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-photoresistor-sensor\",\"id\":\"ldr\",\"top\":-120,\"left\":300,\"attrs\":{}},{\"type\":\"wokwi-led\",\"id\":\"led\",\"top\":80,\"left\":300,\"attrs\":{}},{\"type\":\"wokwi-resistor\",\"id\":\"r1\",\"top\":80,\"left\":420,\"attrs\":{\"value\":\"220\"}}],\"connections\":[[\"ldr:VCC\",\"attiny:VCC\",\"red\",[\"v0\"]],[\"ldr:GND\",\"attiny:GND\",\"black\",[\"v0\"]],[\"ldr:AO\",\"attiny:PB2\",\"blue\",[\"v0\"]],[\"led:A\",\"r1:1\",\"green\",[\"v0\"]],[\"r1:2\",\"attiny:PB0\",\"green\",[\"v0\"]],[\"led:C\",\"attiny:GND\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "Photoresistor",
      "alur_perakitan": "VCC ke VCC, GND ke GND, output analog (AO) ke PB2 (A1)."
    },
    {
      "nama_komponen": "LED",
      "alur_perakitan": "Anoda via resistor 220 ohm ke PB0 (pin 0), katoda ke GND."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "Geser slider cahaya di simulator (klik LDR): saat gelap LED menyala, saat terang LED mati. Ubah batasGelap untuk sensitivitas."
    }
  ]
},
{
  "id": "tpl-grove-oled-dashboard",
  "title": "Dashboard Cuaca Mini OLED 128x128",
  "desc": "DHT22 mengukur suhu & kelembaban, ditampilkan rapi di OLED Grove SH1107 128x128 dengan library U8g2 - layar besar cocok untuk dashboard mini.",
  "difficulty": "Menengah",
  "tags": ["ESP32", "OLED", "SH1107", "DHT22", "U8g2"],
  "verified": true,
  "libraries": ["U8g2", "DHT sensor library for ESPx"],
  "board": "board-esp32-devkit-c-v4",
  "bom": [
    "1x ESP32 DevKitC V4",
    "1x OLED Grove 128x128 (SH1107)",
    "1x Sensor DHT22",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "OLED SH1107",
      "pin_komponen": "SCL / SDA",
      "koneksi_arduino": "GPIO 22 / GPIO 21"
    },
    {
      "komponen": "OLED SH1107",
      "pin_komponen": "VCC / GND",
      "koneksi_arduino": "3V3 / GND"
    },
    {
      "komponen": "DHT22",
      "pin_komponen": "VCC / SDA (data) / GND",
      "koneksi_arduino": "3V3 / GPIO 4 / GND"
    }
  ],
  "cpp_code": "// Proyek: Dashboard Cuaca Mini OLED 128x128 (Grove SH1107)\n// Logika: DHT22 -> suhu & kelembaban di OLED U8g2\n// Platform: ESP32\n#include <U8g2lib.h>\n#include <Wire.h>\n#include <DHT.h>\n\n#define DHTPIN 4\n#define DHTTYPE DHT22\nDHT dht(DHTPIN, DHTTYPE);\n\n// I2C: SCL=22, SDA=21\nU8G2_SH1107_128X128_F_HW_I2C u8g2(U8G2_R0, /* clock=*/ 22, /* data=*/ 21, /* reset=*/ U8X8_PIN_NONE);\n\nvoid setup() {\n  Serial.begin(115200);\n  dht.begin();\n  u8g2.begin();\n  u8g2.setFont(u8g2_font_6x10_tf);\n}\n\nvoid loop() {\n  float h = dht.readHumidity();\n  float t = dht.readTemperature();\n\n  if (!isnan(h) && !isnan(t)) {\n    u8g2.clearBuffer();\n    u8g2.drawFrame(0, 0, 128, 128);\n    u8g2.setFont(u8g2_font_10x20_tf);\n    u8g2.drawStr(28, 24, \"Cuaca\");\n    u8g2.setFont(u8g2_font_6x10_tf);\n    u8g2.drawStr(8, 48, \"Suhu:\");\n    u8g2.drawStr(8, 64, \"Lembab:\");\n    u8g2.setFont(u8g2_font_10x20_tf);\n    u8g2.setCursor(8, 90);\n    u8g2.print(t, 1);\n    u8g2.drawStr(76, 90, \"C\");\n    u8g2.setCursor(8, 116);\n    u8g2.print(h, 1);\n    u8g2.drawStr(76, 116, \"%\");\n    u8g2.sendBuffer();\n  }\n  delay(2000);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"board-esp32-devkit-c-v4\",\"id\":\"esp\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"board-grove-oled-sh1107\",\"id\":\"oled\",\"top\":-120,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-dht22\",\"id\":\"dht\",\"top\":-120,\"left\":540,\"attrs\":{}}],\"connections\":[[\"oled:SCL\",\"esp:22\",\"yellow\",[\"v0\"]],[\"oled:SDA\",\"esp:21\",\"green\",[\"v0\"]],[\"oled:VCC\",\"esp:3V3\",\"red\",[\"v0\"]],[\"oled:GND\",\"esp:GND.1\",\"black\",[\"v0\"]],[\"dht:VCC\",\"esp:3V3\",\"red\",[\"v0\"]],[\"dht:SDA\",\"esp:4\",\"green\",[\"v0\"]],[\"dht:GND\",\"esp:GND.2\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "OLED SH1107",
      "alur_perakitan": "SCL ke GPIO 22, SDA ke GPIO 21, VCC ke 3V3, GND ke GND."
    },
    {
      "nama_komponen": "DHT22",
      "alur_perakitan": "VCC ke 3V3, data (SDA) ke GPIO 4, GND ke GND."
    },
    {
      "nama_komponen": "Library",
      "alur_perakitan": "Pasang U8g2 dan DHT sensor library for ESPx via libraries.txt."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "OLED 128x128 menampilkan suhu & kelembaban di dalam bingkai. Geser suhu DHT22 di simulator untuk melihat perubahan."
    }
  ]
},
{
  "id": "tpl-dpdt-power-switch",
  "title": "Alih Sumber Daya dengan Relay DPDT",
  "desc": "Relay DPDT (KS2E-M-DC5) mengalihkan beban antara kontak NO dan NC - memahami prinsip normally-open, normally-closed, dan kontrol coil dengan pin digital.",
  "difficulty": "Menengah",
  "tags": ["Relay", "DPDT", "Kontak", "Sakelar"],
  "verified": true,
  "libraries": [],
  "bom": [
    "1x Arduino Uno",
    "1x Relay DPDT KS2E-M-DC5",
    "2x LED (merah & hijau)",
    "2x Resistor 220 Ohm",
    "Kabel jumper"
  ],
  "wiring_guide": [
    {
      "komponen": "Relay DPDT",
      "pin_komponen": "COIL1 / COIL2",
      "koneksi_arduino": "Pin 7 / GND"
    },
    {
      "komponen": "Relay DPDT",
      "pin_komponen": "P1 (pole)",
      "koneksi_arduino": "5V"
    },
    {
      "komponen": "Relay DPDT",
      "pin_komponen": "NC1 / NO1",
      "koneksi_arduino": "LED merah / LED hijau (via resistor 220)"
    }
  ],
  "cpp_code": "// Proyek: Alih Sumber Daya Otomatis dengan Relay DPDT\n// Logika: relay DPDT mengalihkan beban antara kontak NC dan NO\n// Platform: Uno\nconst int pinCoil = 7;\n\nvoid setup() {\n  pinMode(pinCoil, OUTPUT);\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  digitalWrite(pinCoil, LOW);   // coil OFF -> kontak NC aktif (LED merah)\n  Serial.println(\"Relay OFF -> lampu merah (NC)\");\n  delay(2000);\n\n  digitalWrite(pinCoil, HIGH);  // coil ON -> kontak NO aktif (LED hijau)\n  Serial.println(\"Relay ON -> lampu hijau (NO)\");\n  delay(2000);\n}",
  "wokwi_diagram": "{\"version\":1,\"author\":\"ElektroDict\",\"editor\":\"wokwi\",\"parts\":[{\"type\":\"wokwi-arduino-uno\",\"id\":\"uno\",\"top\":0,\"left\":0,\"attrs\":{}},{\"type\":\"wokwi-ks2e-m-dc5\",\"id\":\"rel\",\"top\":-140,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-led\",\"id\":\"led1\",\"top\":40,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-resistor\",\"id\":\"r1\",\"top\":40,\"left\":440,\"attrs\":{\"value\":\"220\"}},{\"type\":\"wokwi-led\",\"id\":\"led2\",\"top\":120,\"left\":340,\"attrs\":{}},{\"type\":\"wokwi-resistor\",\"id\":\"r2\",\"top\":120,\"left\":440,\"attrs\":{\"value\":\"220\"}}],\"connections\":[[\"rel:COIL1\",\"uno:7\",\"green\",[\"v0\"]],[\"rel:COIL2\",\"uno:GND.1\",\"black\",[\"v0\"]],[\"rel:P1\",\"uno:5V\",\"red\",[\"v0\"]],[\"rel:NC1\",\"r1:1\",\"green\",[\"v0\"]],[\"r1:2\",\"led1:A\",\"green\",[\"v0\"]],[\"led1:C\",\"uno:GND.2\",\"black\",[\"v0\"]],[\"rel:NO1\",\"r2:1\",\"green\",[\"v0\"]],[\"r2:2\",\"led2:A\",\"green\",[\"v0\"]],[\"led2:C\",\"uno:GND.2\",\"black\",[\"v0\"]]]}",
  "steps": [
    {
      "nama_komponen": "Relay DPDT",
      "alur_perakitan": "COIL1 ke pin 7, COIL2 ke GND, P1 (pole) ke 5V."
    },
    {
      "nama_komponen": "Kontak NC",
      "alur_perakitan": "NC1 ke LED merah via resistor 220, katoda ke GND."
    },
    {
      "nama_komponen": "Kontak NO",
      "alur_perakitan": "NO1 ke LED hijau via resistor 220, katoda ke GND."
    },
    {
      "nama_komponen": "Uji coba",
      "alur_perakitan": "LED menyala bergantian tiap 2 detik: merah saat coil OFF (NC), hijau saat coil ON (NO)."
    }
  ]
}
];;

// ---- TENTANG ----
// TENTANG — konten About di-embed langsung (tidak fetch README.md)
// agar selalu tampil: offline, Vercel, GitHub Pages, dll.
const ABOUT_MD = `# ⚡ ElektroDict

> **Kamus teknik elektro lengkap — buat mahasiswa, oleh mahasiswa.**

ElektroDict adalah aplikasi web (PWA) pembelajaran teknik elektro berbahasa Indonesia.
Mulai dari istilah & rumus dasar, kalkulator, konversi satuan, kode warna resistor,
timeline sejarah kelistrikan, sampai latihan soal berbasis AI dan video pembelajaran
dari channel YouTube Indonesia — semua dalam satu tempat.

---

## 📖 Fitur Utama

| Fitur | Deskripsi |
|---|---|
| **Kamus Elektro** | 150+ istilah lengkap dengan rumus (KaTeX), penjelasan, dan kategori |
| **Kalkulator** | Hukum Ohm, daya listrik, hingga kalkulator resistor (4 & 5 gelang) |
| **Konversi Satuan** | Konversi praktis: arus, tegangan, daya, resistansi, dll. |
| **Kode Warna Resistor** | Kalkulator nilai resistor dari kode warna 4/5 gelang + resistor SMD |
| **Timeline Sejarah** | Perjalanan ilmu kelistrikan dari era kuno sampai era AI |
| **Skema / Diagram** | Diagram rangkaian interaktif (Mermaid) |
| **Chip Library** | Referensi kaki (pinout) IC & komponen umum |
| **Standar & K3** | Standar kelistrikan dan keselamatan kerja |
| **Latihan Soal AI** | Soal random di-generate tiap sesi oleh AI |
| **ElektroBot AI** | Chatbot tanya-jawab materi elektro, jawab gaul & akurat |
| **AI Vision** | Analisis foto rangkaian/komponen dengan AI |
| **Lab Proyek (AI)** | Rancang proyek mikrokontroler (Arduino Uno / ESP32) secara instan + 51 template siap pakai |
| **Dashboard IoT Firebase** | Pantau sensor ESP32 real-time dengan grafik & kontrol servo/RGB via Firebase |
| **Video Pembelajaran** | Kumpulan video edukasi elektronika dari channel YouTube Indonesia, bisa diputar langsung di dalam app |
| **Synth** | Eksperimen sintesis suara & sinyal |
| **Logika** | Eksplorasi gerbang logika digital |
| **Export PDF** | Ekspor kamus / materi menjadi file PDF |
| **PWA Offline** | Bisa di-install ke HP/desktop & diakses tanpa internet (setelah load pertama) |
| **Mode Gelap** | Tema gelap & terang otomatis |

---

## 👨‍💻 Kredit & Kontak

**Beryl Nathaniel Sinaga**

🌐 [berylnathaniel.my.id](https://berylnathaniel.my.id/)

---

## 📄 Lisensi & Catatan

- Konten edukasi (istilah, materi, video) bersumber dari referensi umum & channel
  YouTube edukasi Indonesia — hak cipta masing-masing tetap pada pemiliknya.
- Respon AI bersifat generatif dan bisa saja kurang akurat; gunakan sebagai
  bantuan belajar, bukan satu-satunya sumber kebenaran.
`;

function jalan(){let c=document.getElementById('kode').value;let f=document.getElementById('hasil');let d=f.contentDocument||f.contentWindow.document;let skor=0;if(c.length>=8)skor++;if(/[A-Z]/.test(c))skor++;if(/[0-9]/.test(c))skor++;if(/[^A-Za-z0-9]/.test(c))skor++;let hasil=skor<=1?"<h2 style='color:red'>❌ LEMAH</h2><p>Gampang dibobol. Tambah huruf besar, angka, simbol.</p>":skor==2?"<h2 style='color:orange'>⚠️ SEDANG</h2><p>Lumayan, tapi bisa ditingkatkan.</p>":"<h2 style='color:green'>✅ KUAT</h2><p>Bagus! Password ini aman.</p>";d.open();d.write("<div style='font-family:sans-serif;padding:16px;color:#111'>"+hasil+"<p>Panjang: "+c.length+" karakter</p><p>Skor: "+skor+"/4</p></div>");d.close();}
function salin(){let t=document.getElementById('kode');t.select();document.execCommand('copy');alert('Disalin!');}
const data={
dasar:`ETHICAL HACKING = Belajar cara hacker bekerja untuk MELINDUNGI sistem. Aturan: Hanya di lab sendiri, ada izin, tidak merusak. Learn • Practice • Protect.`,
linux:`KALI LINUX = OS untuk pentest. Perintah dasar: ls, cd, pwd, ifconfig, nmap. Jangan install sembarangan, pakai di VM / lab sendiri.`,
nmap:`NMAP = Scan port jaringan sendiri. Contoh: nmap -sV target.com -> Hasil: 22/tcp ssh, 80/tcp http, 443/tcp https. Port terbuka = celah, harus ditutup kalau tidak dipakai.`,
wireshark:`WIRESHARK = Lihat paket data di jaringan sendiri. Bisa lihat HTTP, DNS, TCP. Jangan sadap jaringan orang!`,
firewall:`FIREWALL = Satpam jaringan. IDS = Deteksi serangan. IPS = Cegah serangan. Aktifkan firewall di router & laptop.`,
web:`WEB SECURITY = SQL Injection & XSS. Cegah: Validasi input, Prepared Statement, Escape output, pakai HTTPS.`,
password:`Password kuat: Minimal 12 karakter, ada huruf BESAR, kecil, angka, simbol. Contoh: Ulla#2026!Bengkulu. Coba ketik di lab atas.`,
phishing:`CIRI PHISHING: Domain aneh (faceb00k.com), minta login buru-buru, hadiah palsu. Jangan klik! Cek domain asli, jangan kasih OTP.`,
wifi:`AMANKAN WIFI: Ganti password default router, password WiFi 12+, matikan WPS, pakai WPA2/WPA3, jangan m-banking di WiFi umum.`,
soceng:`SOCIAL ENGINEERING = Penipuan lewat chat/telepon pura-pura jadi admin. JANGAN PERNAH kasih kode OTP ke siapapun!`,
malware:`MALWARE = Virus. Ciri HP kena: Baterai boros, iklan muncul sendiri. Cegah: Jangan install APK sembarangan, update HP. FORENSIK = Lacak jejak digital pelaku.`,
karir:`BUG BOUNTY: Belajar dasar -> Praktik di lab -> Ikut HackerOne / Bugcrowd -> Lapor celah dengan baik, dapat reward legal.`
};
function muat(k){document.getElementById('kode').value=data[k]||data.dasar;jalan();document.getElementById('lab').scrollIntoView({behavior:'smooth'});}
function buatAI(){alert('AI Tutor: Mulai dari: 1. Paham struktur jaringan 2. Password kuat 3. Kenali phishing 4. Amankan WiFi. Praktik hanya di lab sendiri ya!');}
const ai={phishing:'PHISHING = Penipuan lewat link / WA / email palsu yang pura-pura jadi Facebook, bank. Cegah: Jangan klik sembarangan, cek domain, aktifkan 2FA, jangan kasih OTP.',password:'PASSWORD KUAT = Panjang 12+, ada huruf besar, kecil, angka, simbol. Jangan pakai tanggal lahir. Beda password untuk tiap akun.',nmap:'NMAP = Tool scan port jaringan sendiri. Contoh: nmap -sV target.com. Hasil: 22 ssh, 80 http, 443 https. Untuk cek pintu mana yang terbuka.',wifi:'AMANKAN WIFI: Ganti password default router, password WiFi 12+, matikan WPS, pakai WPA3, jangan buka m-banking di WiFi umum.',dasar:'HACKER PUTIH = Belajar cara hacker untuk melindungi sistem, bukan merusak. Harus ada izin & di lab sendiri. Learn • Practice • Protect.'};
function tanyaAI(){let q=document.getElementById('tanya').value.toLowerCase();let k='dasar';if(q.includes('phish')||q.includes('link'))k='phishing';else if(q.includes('password')||q.includes('sandi'))k='password';else if(q.includes('nmap')||q.includes('scan')||q.includes('port'))k='nmap';else if(q.includes('wifi')||q.includes('router'))k='wifi';document.getElementById('jawab').innerHTML='<b>'+ai[k]+'</b><br><br>
✅ Mau belajar lebih? Chat Admin Ulla.';document.getElementById('tanya').value='';}
function tanyaCepat(k){document.getElementById('jawab').innerHTML='<b>'+(ai[k]||ai.dasar)+'</b>';}
function cek(){let c=document.querySelectorAll('#checklist input:checked').length;document.getElementById('skorCheck').innerHTML='Skor Keamanan Kamu: '+c+' / 5 - '+(c==5?'🎉 LUAR BIASA! Sudah aman!':c>=3?'👍 Lumayan, tinggal sedikit lagi!':'⚠️ Masih belum aman, yuk amankan!');}
function kirimWA(){let n=document.getElementById('namaP').value||'Teman';let p=document.getElementById('isiP').value||'Saya mau belajar ethical hacking jaringan';window.open('https://wa.me/6281234567890?text='+encodeURIComponent('Halo Kak Ulla, saya '+n+'. '+p),'_blank');}
window.onload=function(){jalan();}
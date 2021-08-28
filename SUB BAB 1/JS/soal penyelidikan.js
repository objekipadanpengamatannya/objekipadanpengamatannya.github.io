/*
###########################
##### SETUP SOAL PG #######
###########################
*/
const SOAL = [
  {
    soal: "1. Langkah awal yang harus dilakukan dalam sebuah penyelidikan IPA adalah . . . .",
    pilihan:[
              'A.	Melakukan Inferensi',
              'B.	Melakukan Pengamatan',
              'C.	Mengkomunikasikan',
              'D.	Menanyakan'
            ]
  },{
    soal: "2. Pengertian inferensi dalam penyelidikan IPA adalah . . . .",
    pilihan:[
              'A.	Mengumpulkan data dan informasi melalui pengamatan',
              'B.	Merumuskan penjelasan berdasarkan pengamatan',
              'C.	Membuat laporan tertulis tentang kesimpulan akhir dari hasil pengamatan',
              'D.	Melakukan pengamatan menggunakan pancaindra/alat peraga'
            ]
  }
]

// membuat kunci jawaban
const kunciJawaban = [1,0]

// deklarasi untuk menambah tombol
let kuisJalan = 0
let skor = 0
let simpanJawaban = []

document.addEventListener("DOMContentLoaded", function(event){
  setupKuis()
});

function setupKuis(){
  document.getElementById('soal').innerText = SOAL[kuisJalan]['soal']
  document.getElementById('teksPilihan0').innerText = SOAL[kuisJalan]['pilihan'][0]
  document.getElementById('teksPilihan1').innerText = SOAL[kuisJalan]['pilihan'][1]
  document.getElementById('teksPilihan2').innerText = SOAL[kuisJalan]['pilihan'][2]
  document.getElementById('teksPilihan3').innerText = SOAL[kuisJalan]['pilihan'][3]
}

/*
**************************
***** SETUP TOMBOL *****
**************************
*/

function tombolLanjut(){
  kuisJalan++

  // // menjalankan fungsi simpan jawaban
  // cekJawaban()

  // sebuah aksi ketika soal sudah selesai
  if (kuisJalan > SOAL.length -1) {
      kuisSelesai();
  }
  resetPilihan()
  //menjalankan fungsi kuis
  setupKuis()
}

function resetPilihan(){
  const pilihan = document.querySelector('input[name="pilihan"]:checked');
    if (pilihan != null) {
      pilihan.checked = null
    }
}

// aksi ketika soal sudah selesai dijawab
function kuisSelesai() {
  nilai();
  alert('SELESAI')
  return
}

function btnKembali(){
  kuisJalan--
  setupKuis()
}


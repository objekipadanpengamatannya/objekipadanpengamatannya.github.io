/*
###########################
##### SETUP SOAL PG #######
###########################
*/
const SOAL = [
  {
    soal: "1.   Besaran yang satuannya telah ditetapkan terlebih dahulu dan tidak dapat diturunkan dari besaran lain disebut  . . . .",
    pilihan:[
              'A.	Besaran Pokok',
              'B.	Besaran yang satuannya baku',
              'C.	Besaran',
              'D.	Besaran Turunan'
            ]
  },{
    soal:  "2. Perhatikan table berikut!",
    pilihan:[
              'A.	waktu',
              'B.	panjang',
              'C.	massa',
              'D.	kekuatan'
            ]
  },{
    soal: "3.  Di bawah ini yang termasuk kelompok besaran pokok adalah  . . . .",
    pilihan:[
              'A.	volume, panjang dan waktu',
              'B.	kuat arus, panjang dan suhu',
              'C.	luas, kecepatan dan waktu',
              'D.	kecepatan, massa dan massa jenis'
            ]
  }
]

// membuat kunci jawaban
const kunciJawaban = [0,3,1]

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


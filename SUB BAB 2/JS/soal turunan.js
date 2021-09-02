/*
###########################
##### SETUP SOAL PG #######
###########################
*/
const SOAL = [
  {
    soal: "1.   Apa yang dimaksud dengan besaran turunan . . . .",
    pilihan:[
              'A.	Besaran yang satuannya didapatkan dari besaran pokok',
              'B.	Besaran yang satuannya baku',
              'C.	Besaran yang satuannya berlaku universal di semua negara',
              'D.	Besaran yang satuannya sesuai standar internasional'
            ]
  },{
    soal: "2.   Simbol satuan volume adalah . . . .",
    pilihan:[
              'A.	m2',
              'B.	m3',
              'C.	kg/m3',
              'D.	m/s'
            ]
  },{
    soal: "3.  Simbol satuan luas adalah . . . .",
    pilihan:[
              'A.	m2',
              'B.	m3',
              'C.	kg/m3',
              'D.	m/s'
            ]
  }
]

// membuat kunci jawaban
const kunciJawaban = [0,1,0]

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


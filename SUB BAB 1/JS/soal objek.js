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

  // menjalankan fungsi simpan jawaban
  cekJawaban()

  // sebuah aksi ketika soal sudah selesai
  if (kuisJalan > SOAL.length -1) {
      kuisSelesai()
  } 
  
  if (kuisJalan == 1) {
      document.getElementById('btnLanjut').innerHTML = "SELESAI";
  }


  resetPilihan()

  //menjalankan fungsi kuis
  setupKuis()
}

function resetPilihan(){
  const pilihan = document.querySelector('input[name="pilihan"]:checked');
    if (pilihan != null) {
        pilihan.checked = false
    }
}

// aksi ketika soal sudah selesai dijawab
function kuisSelesai() {
  nilai();

  if (skor > 80) {
      document.getElementById('nilai').innerHTML = "SKOR KAMU " + skor;
      document.getElementById('ket').innerHTML = "Silahkan lanjutkan ke materi berikutnya dengan menekan tombol dibawah ini";
      document.getElementById('tombolLanjut').classList.remove('hide');
  } else {
      document.getElementById('nilai').innerHTML = "SKOR KAMU " + skor;
      document.getElementById('ket').innerHTML = "Silahkan baca kembali materi penyelidikan IPA";
      document.getElementById('tombolKembali').classList.remove('hide');
  }

  document.getElementById('soalMuncul').classList.add('hide')
  document.getElementById('soalSelesai').classList.remove('hide')
  return
}

// aksi untuk membuat nilai

function cekJawaban() {
  const jawaban = document.querySelector('input[name="pilihan"]:checked');
if (jawaban != null) {
  simpanJawaban.push(parseInt(jawaban.getAttribute('data-id')))
  console.log(simpanJawaban)
} else {
  simpanJawaban.push()
}
}

function nilai(){
 for (var i = 0; i < simpanJawaban.length; i++) {
   if (simpanJawaban[i] == kunciJawaban[i]) {
        skor+= 50
   }
 }
}

// function btnKembali(){
//   kuisJalan--
//   setupKuis()
// }

// Button Selesai membaca petunjuk
const btnPetunjuk = document.querySelector('#btnPetunjuk');

btnPetunjuk.addEventListener("click", function(){
  document.querySelector('.card-petunjuk').classList.add('hide');
  document.getElementById('soalMuncul').classList.remove('hide');
});

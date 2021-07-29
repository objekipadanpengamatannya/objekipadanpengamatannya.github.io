/*
#########################
##### SETUP SOAL #######
########################
*/
// const SOAL = [
//   {
//     soal: "apakah",
//     pilihan:['a','b','c','d']
//   },{
//     soal: "jdjjdjd",
//     pilihan:['a','a','a','a'],
//   }
// ]

// // membuat kunci jawaban
// const kunciJawaban = [0,1]

// // deklarasi untuk menambah tombol
// let kuisJalan = 0
// let skor = 0
// let simpanJawaban = []

// document.addEventListener("DOMContentLoaded", function(event){
//   setupKuis()
// });

// function setupKuis(){
//   document.getElementById('soal').innerText = SOAL[kuisJalan]['soal']
//   document.getElementById('teksPilihan0').innerText = SOAL[kuisJalan]['pilihan'][0]
//   document.getElementById('teksPilihan1').innerText = SOAL[kuisJalan]['pilihan'][1]
//   document.getElementById('teksPilihan2').innerText = SOAL[kuisJalan]['pilihan'][2]
//   document.getElementById('teksPilihan3').innerText = SOAL[kuisJalan]['pilihan'][3]
// }

// /*
// **************************
// ***** SETUP TOMBOL *****
// **************************
// */

// function tombolLanjut(){
//   kuisJalan++

//   // menjalankan fungsi simpan jawaban
//   cekJawaban()

//   // sebuah aksi ketika soal sudah selesai
//   if (kuisJalan > SOAL.length -1) {
//       kuisSelesai();
//   }
//   resetPilihan()
//   //menjalankan fungsi kuis
//   setupKuis()
// }

// function resetPilihan(){
//   const pilihan = document.querySelector('input[name="pilihan"]:checked');
//     if (pilihan != null) {
//       pilihan.checked = null
//     }
// }

// // aksi ketika soal sudah selesai dijawab
// function kuisSelesai() {
//   nilai();
//   alert('SELESAI')
//   return
// }

// // aksi untuk membuat nilai

// function cekJawaban() {
//   const jawaban = document.querySelector('input[name="pilihan"]:checked');
// if (jawaban != null) {
//   simpanJawaban.push(parseInt(jawaban.getAttribute('data-id')))
// } else {
//   simpanJawaban.push(0)
// }
// }

// function nilai (){
//  for (var i = 0; i < simpanJawaban.length; i++) {
//    if (simpanJawaban[i] == kunciJawaban[i]) {
//         skor+= 10
//         console.log(skor);
//    }
//  }
// }


/*
************************
*** SETUP KESIMPULAN ***
************************
*/

function cekKesimpulan() {
  var cek1 = document.getElementById("no1").value.toUpperCase();
  var cek2 = document.getElementById("no2").value.toUpperCase();
  var cek3 = document.getElementById("no3").value.toUpperCase();

  if (cek1 === "PENGUKURAN" ) {
    document.getElementById("satu").innerHTML =" " + cek1;
    document.getElementById("satu").style.color = "green";
    document.getElementById("no1").style.display = "none";
  } else {
    document.getElementById("no1").style.color = "red";
  }

  if (cek2 === "ANGKA") {
    document.getElementById("dua").innerHTML =" " + cek2;
    document.getElementById("dua").style.color = "green";
    document.getElementById("no2").style.display = "none";
  } else if (cek2 === "SATUAN") {
    document.getElementById("dua").innerHTML =" " + cek2;
    document.getElementById("dua").style.color = "green";
    document.getElementById("no2").style.display = "none";
  }
    else {
    document.getElementById("no2").style.color = "red";
  }

  if (cek3 === cek2){
    document.getElementById("no3").style.color = "red";
  } else if (cek3 === "SATUAN"){
    document.getElementById("tiga").innerHTML =" " + cek3;
    document.getElementById("tiga").style.color = "green";
    document.getElementById("no3").style.display = "none";
  } else if (cek3 === "ANGKA") {
    document.getElementById("tiga").innerHTML =" " + cek3;
    document.getElementById("tiga").style.color = "green";
    document.getElementById("no3").style.display = "none";
  } else {
    document.getElementById("no3").style.color = "red";
  }
}

function ulang(){
  document.getElementById("no1").value ="";
  document.getElementById("no2").value ="";
  document.getElementById("no3").value ="";
}
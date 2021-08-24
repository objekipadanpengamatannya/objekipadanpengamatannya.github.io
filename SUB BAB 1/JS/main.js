/*
*************************
*** SETUP VIDEO ***
*************************
*/
const videoPenyelidikan = document.getElementById("videoPenyelidikan");

videoPenyelidikan.onended = function() {
  document.getElementById("qw").classList.add("hide");
  document.getElementById("we").classList.remove("hide");
};


/*
********************************************
*** SETUP PERTANYAAN BUTTON PENYELIDIKAN ***
********************************************
*/

// NO 1

const btnSatuA = document.getElementById("btnSatuA");
const btnSatuB = document.getElementById("btnSatuB");
const btnSatuC = document.getElementById("btnSatuC");
const btnSatuD = document.getElementById("btnSatuD");

btnSatuA.addEventListener('click',function(){
  document.getElementById("salahSatu").classList.remove("hide");
  document.getElementById("soalDua").classList.remove("hide");
  btnSatuA.style.background = "red";

  btnSatuA.disabled = true;
  btnSatuB.disabled = true;
  btnSatuC.disabled = true;
  btnSatuD.disabled = true;
})
btnSatuB.addEventListener('click',function(){
  document.getElementById("benarSatu").classList.remove("hide");
  document.getElementById("soalDua").classList.remove("hide");
  btnSatuB.style.background = "green";

  btnSatuA.disabled = true;
  btnSatuB.disabled = true;
  btnSatuC.disabled = true;
  btnSatuD.disabled = true;
})
btnSatuC.addEventListener('click',function(){
  document.getElementById("salahSatu").classList.remove("hide");
  document.getElementById("soalDua").classList.remove("hide");
  btnSatuC.style.background = "red";

  btnSatuA.disabled = true;
  btnSatuB.disabled = true;
  btnSatuC.disabled = true;
  btnSatuD.disabled = true;
})
btnSatuD.addEventListener('click',function(){
  document.getElementById("salahSatu").classList.remove("hide");
  document.getElementById("soalDua").classList.remove("hide");
  btnSatuD.style.background = "red";

  btnSatuA.disabled = true;
  btnSatuB.disabled = true;
  btnSatuC.disabled = true;
  btnSatuD.disabled = true;
})

// NO 2

const btnDuaA = document.getElementById("btnDuaA");
const btnDuaB = document.getElementById("btnDuaB");
const btnduaC = document.getElementById("btnDuaC");
const btnDuaD = document.getElementById("btnDuaD");

btnDuaA.addEventListener('click',function(){
  document.getElementById("benarDua").classList.remove("hide");
  document.getElementById("soalTiga").classList.remove("hide");
  btnDuaA.style.background = "green";

  btnDuaA.disabled = true;
  btnDuaB.disabled = true;
  btnDuaC.disabled = true;
  btnDuaD.disabled = true;
})
btnDuaB.addEventListener('click',function(){
  document.getElementById("salahDua").classList.remove("hide");
  document.getElementById("soalTiga").classList.remove("hide");
  btnDuaB.style.background = "red";

  btnDuaA.disabled = true;
  btnDuaB.disabled = true;
  btnDuaC.disabled = true;
  btnDuaD.disabled = true;
})
btnDuaC.addEventListener('click',function(){
  document.getElementById("salahDua").classList.remove("hide");
  document.getElementById("soalTiga").classList.remove("hide");
  btnDuaC.style.background = "red";

  btnDuaA.disabled = true;
  btnDuaB.disabled = true;
  btnDuaC.disabled = true;
  btnDuaD.disabled = true;
})
btnDuaD.addEventListener('click',function(){
  document.getElementById("salahDua").classList.remove("hide");
  document.getElementById("soalTiga").classList.remove("hide");
  btnDuaD.style.background = "red";

  btnDuaA.disabled = true;
  btnDuaB.disabled = true;
  btnDuaC.disabled = true;
  btnDuaD.disabled = true;
})

// NO 3

const btnTigaA = document.getElementById("btnTigaA");
const btnTigaB = document.getElementById("btnTigaB");
const btnTigaC = document.getElementById("btnTigaC");
const btnTigaD = document.getElementById("btnTigaD");

btnTigaA.addEventListener('click',function(){
  document.getElementById("salahTiga").classList.remove("hide");
  document.querySelector(".pembahasan span").classList.add("hide");
  document.querySelector(".pembahasan section").classList.remove("hide");
  btnTigaA.style.background = "red";

  btnTigaA.disabled = true;
  btnTigaB.disabled = true;
  btnTigaC.disabled = true;
  btnTigaD.disabled = true;
})
btnTigaB.addEventListener('click',function(){
  document.getElementById("salahTiga").classList.remove("hide");
  document.querySelector(".pembahasan span").classList.add("hide");
  document.querySelector(".pembahasan section").classList.remove("hide");
  btnTigaB.style.background = "red";

  btnTigaA.disabled = true;
  btnTigaB.disabled = true;
  btnTigaC.disabled = true;
  btnTigaD.disabled = true;

})
btnTigaC.addEventListener('click',function(){
  document.getElementById("benarTiga").classList.remove("hide");
  document.querySelector(".pembahasan span").classList.add("hide");
  document.querySelector(".pembahasan section").classList.remove("hide");
  btnTigaC.style.background = "green";

  btnTigaA.disabled = true;
  btnTigaB.disabled = true;
  btnTigaC.disabled = true;
  btnTigaD.disabled = true;

})
btnTigaD.addEventListener('click',function(){
  document.getElementById("salahTiga").classList.remove("hide");
  document.querySelector(".pembahasan span").classList.add("hide");
  document.querySelector(".pembahasan section").classList.remove("hide");
  btnTigaD.style.background = "red";

  btnTigaA.disabled = true;
  btnTigaB.disabled = true;
  btnTigaC.disabled = true;
  btnTigaD.disabled = true;

})


/*
*************************
*** SETUP CEK JAWABAN ***
*************************
*/

function cekJawaban() {
  satu = soal.jwb1.value;
  dua = soal.jwb2.value;
  tiga = soal.jwb3.value;
  var score = 0;

  if (satu == "C") {
    document.getElementById("no1").style = "border: 3px solid green";
    score += 5;
  } else if (satu == "c") {
    document.getElementById("no1").style = "border: 3px solid green";
    score += 5;
  } else {
    document.getElementById("no1").style = "border: 3px solid red";
  }

  if (dua == "D") {
    document.getElementById("no2").style = "border: 3px solid green";
    score += 5;
  } else if (dua == "d") {
    document.getElementById("no2").style = "border: 3px solid green";
    score += 5;
  } else {
    document.getElementById("no2").style = "border: 3px solid red";
  }


  if (tiga == "B") {
    document.getElementById("no3").style = "border: 3px solid green";
    score += 5;
  } else if (tiga == "b") {
    document.getElementById("no3").style = "border: 3px solid green";
    score += 5;
  } else {
    document.getElementById("no3").style = "border: 3px solid red";
  }

  // memunculkan button materi selanjutnya
  if (score == 15) {
    document.getElementById("muncul").style.display = "block";
  } else {
    document.getElementById("muncul").style.display = "none";
  }
}

function ulang() {
  document.getElementById("no1").value = "";
  document.getElementById("no2").value = "";
  document.getElementById("no3").value = "";
}

/*
*******************
*** SETUP RESET ***
*******************
*/
function ulang() {
  document.getElementById("ulang").reset();
  document.getElementById("no1").style = "none";
  document.getElementById("no2").style = "none";
  document.getElementById("no3").style = "none";
  document.getElementById("muncul").style.display = "none";
}


/*
**********************************
***** SETUP PERTANYAAN OBJEK *****
**********************************
*/

//pertanyaan satu

const btnBiotikSatu = document.getElementById("btnBiotikSatu");
const btnAbiotikSatu = document.getElementById("btnAbiotikSatu");

btnBiotikSatu.addEventListener('click', function(){
  document.getElementById("ketSatu").innerHTML = "JAWABAN ANDA BENAR";
  document.getElementById("ketSatu").style.color = "green";
  btnBiotikSatu.classList.add("btn-objek-aktif");
  
  btnBiotikSatu.disabled = true;
  btnAbiotikSatu.disabled = true;

  document.getElementById("munculDua").classList.remove("hide");
})

btnAbiotikSatu.addEventListener('click', function(){
  document.getElementById("ketSatu").innerHTML = "JAWABAN ANDA KURANG TEPAT";
  document.getElementById("ketSatu").style.color = "red";
  btnAbiotikSatu.classList.add("btn-objek-aktif");
  
  btnBiotikSatu.disabled = true;
  btnAbiotikSatu.disabled = true;

  document.getElementById("munculDua").classList.remove("hide");
})

// pertanyaan dua

const btnBiotikDua = document.getElementById("btnBiotikDua");
const btnAbiotikDua = document.getElementById("btnAbiotikDua");

btnBiotikDua.addEventListener('click', function(){
  document.getElementById("ketDua").innerHTML = "JAWABAN ANDA KURANG TEPAT";
  document.getElementById("ketDua").style.color = "red";
  btnBiotikDua.classList.add("btn-objek-aktif");
  
  btnBiotikDua.disabled = true;
  btnAbiotikDua.disabled = true;

  document.getElementById("munculTiga").classList.remove("hide");
})

btnAbiotikDua.addEventListener('click', function(){
  document.getElementById("ketDua").innerHTML = "JAWABAN ANDA BENAR";
  document.getElementById("ketDua").style.color = "green";
  btnAbiotikDua.classList.add("btn-objek-aktif")
  
  btnBiotikDua.disabled = true;
  btnAbiotikDua.disabled = true;

  document.getElementById("munculTiga").classList.remove("hide");
})

//pertanyaan tiga

const btnBiotikTiga = document.getElementById("btnBiotikTiga");
const btnAbiotikTiga = document.getElementById("btnAbiotikTiga");

btnBiotikTiga.addEventListener('click', function(){
  document.getElementById("ketTiga").innerHTML = "JAWABAN ANDA KURANG TEPAT";
  document.getElementById("ketTiga").style.color = "red";
  btnBiotikTiga.classList.add("btn-objek-aktif");
  
  btnBiotikTiga.disabled = true;
  btnAbiotikTiga.disabled = true;

  document.getElementById("munculEmpat").classList.remove("hide");
})

btnAbiotikTiga.addEventListener('click', function(){
  document.getElementById("ketTiga").innerHTML = "JAWABAN ANDA BENAR";
  document.getElementById("ketTiga").style.color = "green";
  btnAbiotikTiga.classList.add("btn-objek-aktif")
  
  btnBiotikTiga.disabled = true;
  btnAbiotikTiga.disabled = true;

  document.getElementById("munculEmpat").classList.remove("hide");
})

//pertanyaan empat

const btnBiotikEmpat = document.getElementById("btnBiotikEmpat");
const btnAbiotikEmpat = document.getElementById("btnAbiotikEmpat");

btnBiotikEmpat.addEventListener('click', function(){
  document.getElementById("ketEmpat").innerHTML = "JAWABAN ANDA BENAR";
  document.getElementById("ketEmpat").style.color = "green";
  btnBiotikEmpat.classList.add("btn-objek-aktif");
  
  btnBiotikEmpat.disabled = true;
  btnAbiotikEmpat.disabled = true;

  document.getElementById("munculLima").classList.remove("hide");
})

btnAbiotikEmpat.addEventListener('click', function(){
  document.getElementById("ketEmpat").innerHTML = "JAWABAN ANDA KURANG TEPAT";
  document.getElementById("ketEmpat").style.color = "red";
  btnAbiotikEmpat.classList.add("btn-objek-aktif");
  
  btnBiotikEmpat.disabled = true;
  btnAbiotikEmpat.disabled = true;

  document.getElementById("munculLima").classList.remove("hide");
})

// pertanyaan lima

const btnBiotikLima = document.getElementById("btnBiotikLima");
const btnAbiotikLima = document.getElementById("btnAbiotikLima");

btnBiotikLima.addEventListener('click', function(){
  document.getElementById("ketLima").innerHTML = "JAWABAN ANDA KURANG TEPAT";
  document.getElementById("ketLima").style.color = "red";
  btnBiotikLima.classList.add("btn-objek-aktif");
  
  btnBiotikLima.disabled = true;
  btnAbiotikLima.disabled = true;
  
  document.getElementById("munculEnam").classList.remove("hide");
})

btnAbiotikLima.addEventListener('click', function(){
  document.getElementById("ketLima").innerHTML = "JAWABAN ANDA BENAR";
  document.getElementById("ketLima").style.color = "green";
  btnAbiotikLima.classList.add("btn-objek-aktif");
  
  btnBiotikLima.disabled = true;
  btnAbiotikLima.disabled = true;
  
  document.getElementById("munculEnam").classList.remove("hide");
})

//pertanyaan enam

const btnBiotikEnam = document.getElementById("btnBiotikEnam");
const btnAbiotikEnam = document.getElementById("btnAbiotikEnam");

btnBiotikEnam.addEventListener('click', function(){
  document.getElementById("ketEnam").innerHTML = "JAWABAN ANDA KURANG TEPAT";
  document.getElementById("ketEnam").style.color = "red";
  btnBiotikEnam.classList.add("btn-objek-aktif");
  
  btnBiotikEnam.disabled = true;
  btnAbiotikEnam.disabled = true;
  
  document.getElementById("munculTujuh").classList.remove("hide");
})

btnAbiotikEnam.addEventListener('click', function(){
  document.getElementById("ketEnam").innerHTML = "JAWABAN ANDA BENAR";
  document.getElementById("ketEnam").style.color = "green";
  btnAbiotikEnam.classList.add("btn-objek-aktif");
  
  btnBiotikEnam.disabled = true;
  btnAbiotikEnam.disabled = true;
  
  document.getElementById("munculTujuh").classList.remove("hide");
})

// pertanyaan tujuh

const btnBiotikTujuh = document.getElementById("btnBiotikTujuh");
const btnAbiotikTujuh = document.getElementById("btnAbiotikTujuh");

btnBiotikTujuh.addEventListener('click', function(){
  document.getElementById("ketTujuh").innerHTML = "JAWABAN ANDA BENAR";
  document.getElementById("ketTujuh").style.color = "green";
  btnBiotikTujuh.classList.add("btn-objek-aktif");
  
  btnBiotikTujuh.disabled = true;
  btnAbiotikTujuh.disabled = true;

  document.getElementById("munculDelapan").classList.remove("hide");
})

btnAbiotikTujuh.addEventListener('click', function(){
  document.getElementById("ketTujuh").innerHTML = "JAWABAN ANDA KURANG TEPAT";
  document.getElementById("ketTujuh").style.color = "red";
  btnAbiotikTujuh.classList.add("btn-objek-aktif");
  
  btnBiotikTujuh.disabled = true;
  btnAbiotikTujuh.disabled = true;

  document.getElementById("munculDelapan").classList.remove("hide");
})

//pertanyaan delapan

const btnBiotikDelapan = document.getElementById("btnBiotikDelapan");
const btnAbiotikDelapan = document.getElementById("btnAbiotikDelapan");

btnBiotikDelapan.addEventListener('click', function(){
  document.getElementById("ketDelapan").innerHTML = "JAWABAN ANDA BENAR";
  document.getElementById("ketDelapan").style.color = "green";
  btnBiotikDelapan.classList.add("btn-objek-aktif");
  
  btnBiotikDelapan.disabled = true;
  btnAbiotikDelapan.disabled = true;

  document.getElementById("munculSembilan").classList.remove("hide");
})

btnAbiotikDelapan.addEventListener('click', function(){
  document.getElementById("ketDelapan").innerHTML = "JAWABAN ANDA KURANG TEPAT";
  document.getElementById("ketDelapan").style.color = "red";
  btnAbiotikDelapan.classList.add("btn-objek-aktif");
  
  btnBiotikDelapan.disabled = true;
  btnAbiotikDelapan.disabled = true;

  document.getElementById("munculSembilan").classList.remove("hide");
})

//pertanyaan sembilan

const btnBiotikSembilan = document.getElementById("btnBiotikSembilan");
const btnAbiotikSembilan = document.getElementById("btnAbiotikSembilan");

btnBiotikSembilan.addEventListener('click', function(){
  document.getElementById("ketSembilan").innerHTML = "JAWABAN ANDA KURANG TEPAT";
  document.getElementById("ketSembilan").style.color = "red";
  btnBiotikSembilan.classList.add("btn-objek-aktif");
  
  btnBiotikSembilan.disabled = true;
  btnAbiotikSembilan.disabled = true;
  
  document.getElementById("munculSepuluh").classList.remove("hide");
})

btnAbiotikSembilan.addEventListener('click', function(){
  document.getElementById("ketSembilan").innerHTML = "JAWABAN ANDA BENAR";
  document.getElementById("ketSembilan").style.color = "green";
  btnAbiotikSembilan.classList.add("btn-objek-aktif");
  
  btnBiotikSembilan.disabled = true;
  btnAbiotikSembilan.disabled = true;
  
  document.getElementById("munculSepuluh").classList.remove("hide");
})

//pertanyaan sepuluh

const btnBiotikSepuluh = document.getElementById("btnBiotikSepuluh");
const btnAbiotikSepuluh= document.getElementById("btnAbiotikSepuluh");

btnBiotikSepuluh.addEventListener('click', function(){
  document.getElementById("ketSepuluh").innerHTML = "JAWABAN ANDA KURANG TEPAT";
  document.getElementById("ketSepuluh").style.color = "red";
  btnBiotikSepuluh.classList.add("btn-objek-aktif");
  
  btnBiotikSepuluh.disabled = true;
  btnAbiotikSepuluh.disabled = true;
  
  document.getElementById("munculSectionPembahasanKet").classList.add("hide");
  document.getElementById("munculSectionPembahasanObjek").classList.remove("hide");
})

btnAbiotikSepuluh.addEventListener('click', function(){
  document.getElementById("ketSepuluh").innerHTML = "JAWABAN ANDA BENAR";
  document.getElementById("ketSepuluh").style.color = "green";
  btnAbiotikSepuluh.classList.add("btn-objek-aktif");
  
  btnBiotikSepuluh.disabled = true;
  btnAbiotikSepuluh.disabled = true;
  
  document.getElementById("munculSectionPembahasanKet").classList.add("hide");
  document.getElementById("munculSectionPembahasanObjek").classList.remove("hide");
})

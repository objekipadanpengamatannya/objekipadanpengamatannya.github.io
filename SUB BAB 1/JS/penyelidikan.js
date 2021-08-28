/*
*******************
*** SETUP VIDEO ***
*******************
*/
const videoPenyelidikan = document.getElementById("videoPenyelidikan");

videoPenyelidikan.onended = function() {
  document.getElementById("qw").classList.add("hide");
  document.getElementById("we").classList.remove("hide");
};

/*
*************************************
*** SETUP PERTANYAAN PENYELIDIKAN ***
*************************************
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

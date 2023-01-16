/*
 *******************
 *** SETUP VIDEO ***
 *******************
 */
const videoPenyelidikan = document.getElementById("videoPenyelidikan");

videoPenyelidikan.onended = function () {
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

btnSatuA.addEventListener('click', function () {
  document.getElementById("salahSatu").classList.remove("hide");
  btnSatuA.style.background = "red";

  btnSatuA.disabled = true;
  btnSatuB.disabled = true;
  btnSatuC.disabled = true;
  btnSatuD.disabled = true;
})
btnSatuB.addEventListener('click', function () {
  document.getElementById("benarSatu").classList.remove("hide");
  document.getElementById("soalDua").classList.remove("hide");
  btnSatuB.style.background = "green";

  btnSatuA.disabled = true;
  btnSatuB.disabled = true;
  btnSatuC.disabled = true;
  btnSatuD.disabled = true;
})
btnSatuC.addEventListener('click', function () {
  document.getElementById("salahSatu").classList.remove("hide");
  btnSatuC.style.background = "red";

  btnSatuA.disabled = true;
  btnSatuB.disabled = true;
  btnSatuC.disabled = true;
  btnSatuD.disabled = true;
})
btnSatuD.addEventListener('click', function () {
  document.getElementById("salahSatu").classList.remove("hide");
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

btnDuaA.addEventListener('click', function () {
  document.getElementById("benarDua").classList.remove("hide");
  document.getElementById("soalTiga").classList.remove("hide");
  btnDuaA.style.background = "green";

  btnDuaA.disabled = true;
  btnDuaB.disabled = true;
  btnDuaC.disabled = true;
  btnDuaD.disabled = true;
})
btnDuaB.addEventListener('click', function () {
  document.getElementById("salahDua").classList.remove("hide");
  btnDuaB.style.background = "red";

  btnDuaA.disabled = true;
  btnDuaB.disabled = true;
  btnDuaC.disabled = true;
  btnDuaD.disabled = true;
})
btnDuaC.addEventListener('click', function () {
  document.getElementById("salahDua").classList.remove("hide");
  btnDuaC.style.background = "red";

  btnDuaA.disabled = true;
  btnDuaB.disabled = true;
  btnDuaC.disabled = true;
  btnDuaD.disabled = true;
})
btnDuaD.addEventListener('click', function () {
  document.getElementById("salahDua").classList.remove("hide");
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

btnTigaA.addEventListener('click', function () {
  document.getElementById("salahTiga").classList.remove("hide");
  btnTigaA.style.background = "red";

  btnTigaA.disabled = true;
  btnTigaB.disabled = true;
  btnTigaC.disabled = true;
  btnTigaD.disabled = true;
})
btnTigaB.addEventListener('click', function () {
  document.getElementById("salahTiga").classList.remove("hide");
  btnTigaB.style.background = "red";

  btnTigaA.disabled = true;
  btnTigaB.disabled = true;
  btnTigaC.disabled = true;
  btnTigaD.disabled = true;

})
btnTigaC.addEventListener('click', function () {
  document.getElementById("benarTiga").classList.remove("hide");
  document.querySelector(".pembahasan span").classList.add("hide");
  document.querySelector(".pembahasan section").classList.remove("hide");
  btnTigaC.style.background = "green";

  btnTigaA.disabled = true;
  btnTigaB.disabled = true;
  btnTigaC.disabled = true;
  btnTigaD.disabled = true;

})
btnTigaD.addEventListener('click', function () {
  document.getElementById("salahTiga").classList.remove("hide");
  btnTigaD.style.background = "red";

  btnTigaA.disabled = true;
  btnTigaB.disabled = true;
  btnTigaC.disabled = true;
  btnTigaD.disabled = true;

})

/*
 **************************
 *** SETUP TOMBOL ULANG ***
 **************************
 */

//  ulang 1

const ulang1 = document.getElementById("ulang1");

ulang1.addEventListener("click", function () {
  btnSatuA.style.background = "";
  btnSatuB.style.background = "";
  btnSatuC.style.background = "";
  btnSatuD.style.background = "";
  document.getElementById("salahSatu").classList.add("hide");

  btnSatuA.disabled = false;
  btnSatuB.disabled = false;
  btnSatuC.disabled = false;
  btnSatuD.disabled = false;
})

//  ulang 2

const ulang2 = document.getElementById("ulang2");

ulang2.addEventListener("click", function () {
  btnDuaA.style.background = "";
  btnDuaB.style.background = "";
  btnDuaC.style.background = "";
  btnDuaD.style.background = "";
  document.getElementById("salahDua").classList.add("hide");

  btnDuaA.disabled = false;
  btnDuaB.disabled = false;
  btnDuaC.disabled = false;
  btnDuaD.disabled = false;
})

//  ulang 3

const ulang3 = document.getElementById("ulang3");

ulang3.addEventListener("click", function () {
  btnTigaA.style.background = "";
  btnTigaB.style.background = "";
  btnTigaC.style.background = "";
  btnTigaD.style.background = "";
  document.getElementById("salahTiga").classList.add("hide");

  btnTigaA.disabled = false;
  btnTigaB.disabled = false;
  btnTigaC.disabled = false;
  btnTigaD.disabled = false;
})
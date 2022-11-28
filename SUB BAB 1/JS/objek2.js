/*
 **********************************
 ***** SETUP SOAL OBJEK 1 *********
 **********************************
 */

// NO 1

const btnSatuA = document.getElementById("btnSatuA");
const btnSatuB = document.getElementById("btnSatuB");
const btnSatuC = document.getElementById("btnSatuC");
const btnSatuD = document.getElementById("btnSatuD");

btnSatuA.addEventListener('click', function () {
  document.getElementById("benarSatu").classList.remove("hide");
  // document.getElementById("soalDua").classList.remove("hide");
  btnSatuA.style.background = "green";

  btnSatuA.disabled = true;
  btnSatuB.disabled = true;
  btnSatuC.disabled = true;
  btnSatuD.disabled = true;
})
btnSatuB.addEventListener('click', function () {
  document.getElementById("salahSatu").classList.remove("hide");
  // document.getElementById("soalDua").classList.remove("hide");
  btnSatuB.style.background = "red";

  btnSatuA.disabled = true;
  btnSatuB.disabled = true;
  btnSatuC.disabled = true;
  btnSatuD.disabled = true;
})
btnSatuC.addEventListener('click', function () {
  document.getElementById("salahSatu").classList.remove("hide");
  // document.getElementById("soalDua").classList.remove("hide");
  btnSatuC.style.background = "red";

  btnSatuA.disabled = true;
  btnSatuB.disabled = true;
  btnSatuC.disabled = true;
  btnSatuD.disabled = true;
})
btnSatuD.addEventListener('click', function () {
  document.getElementById("salahSatu").classList.remove("hide");
  // document.getElementById("soalDua").classList.remove("hide");
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
  document.getElementById("salahDua").classList.remove("hide");
  // document.getElementById("soalTiga").classList.remove("hide");
  btnDuaA.style.background = "green";

  btnDuaA.disabled = true;
  btnDuaB.disabled = true;
  btnDuaC.disabled = true;
  btnDuaD.disabled = true;
})
btnDuaB.addEventListener('click', function () {
  document.getElementById("salahDua").classList.remove("hide");
  // document.getElementById("soalTiga").classList.remove("hide");
  btnDuaB.style.background = "red";

  btnDuaA.disabled = true;
  btnDuaB.disabled = true;
  btnDuaC.disabled = true;
  btnDuaD.disabled = true;
})
btnDuaC.addEventListener('click', function () {
  document.getElementById("salahDua").classList.remove("hide");
  // document.getElementById("soalTiga").classList.remove("hide");
  btnDuaC.style.background = "red";

  btnDuaA.disabled = true;
  btnDuaB.disabled = true;
  btnDuaC.disabled = true;
  btnDuaD.disabled = true;
})
btnDuaD.addEventListener('click', function () {
  document.getElementById("benarDua").classList.remove("hide");
  // document.getElementById("soalTiga").classList.remove("hide");
  btnDuaD.style.background = "green";

  btnDuaA.disabled = true;
  btnDuaB.disabled = true;
  btnDuaC.disabled = true;
  btnDuaD.disabled = true;
})

/*
 **********************************
 ***** SETUP BUTTON OBJEK *********
 **********************************
 */

// Objek Biotik dan Abiotik

const atom = document.querySelector('#atom');
const virus = document.querySelector('#virus');
const bakteri = document.querySelector('#bakteri');
const bumi = document.querySelector('#bumi');
const matahari = document.querySelector('#matahari');
const lautan = document.querySelector('#lautan');

const btnAtom = document.querySelector('#btnAtom');
const btnVirus = document.querySelector('#btnVirus');
const btnBakteri = document.querySelector('#btnBakteri');
const btnBumi = document.querySelector('#btnBumi');
const btnMatahari = document.querySelector('#btnMatahari');
const btnLautan = document.querySelector('#btnLautan');

btnAtom.addEventListener("click", function () {
  atom.classList.remove('hide');
  virus.classList.add('hide');
  bakteri.classList.add('hide');
  bumi.classList.add('hide');
  matahari.classList.add('hide');
  lautan.classList.add('hide');

  btnAtom.classList.add('btn-bgpeach-aktif');
  btnVirus.classList.remove('btn-bgpeach-aktif');
  btnBakteri.classList.remove('btn-bgpeach-aktif');
  btnBumi.classList.remove('btn-bgpeach-aktif');
  btnMatahari.classList.remove('btn-bgpeach-aktif');
  btnLautan.classList.remove('btn-bgpeach-aktif');
})

btnVirus.addEventListener("click", function () {
  virus.classList.remove('hide');
  atom.classList.add('hide');
  bakteri.classList.add('hide');
  bumi.classList.add('hide');
  matahari.classList.add('hide');
  lautan.classList.add('hide');

  btnVirus.classList.add('btn-bgpeach-aktif');
  btnAtom.classList.remove('btn-bgpeach-aktif');
  btnBakteri.classList.remove('btn-bgpeach-aktif');
  btnBumi.classList.remove('btn-bgpeach-aktif');
  btnMatahari.classList.remove('btn-bgpeach-aktif');
  btnLautan.classList.remove('btn-bgpeach-aktif');
})

btnBakteri.addEventListener("click", function () {
  bakteri.classList.remove('hide');
  atom.classList.add('hide');
  virus.classList.add('hide');
  bumi.classList.add('hide');
  matahari.classList.add('hide');
  lautan.classList.add('hide');

  btnBakteri.classList.add('btn-bgpeach-aktif');
  btnAtom.classList.remove('btn-bgpeach-aktif');
  btnVirus.classList.remove('btn-bgpeach-aktif');
  btnBumi.classList.remove('btn-bgpeach-aktif');
  btnMatahari.classList.remove('btn-bgpeach-aktif');
  btnLautan.classList.remove('btn-bgpeach-aktif');
})

btnBumi.addEventListener("click", function () {
  bumi.classList.remove('hide');
  atom.classList.add('hide');
  virus.classList.add('hide');
  bakteri.classList.add('hide');
  matahari.classList.add('hide');
  lautan.classList.add('hide');

  btnBumi.classList.add('btn-bgpeach-aktif');
  btnAtom.classList.remove('btn-bgpeach-aktif');
  btnVirus.classList.remove('btn-bgpeach-aktif');
  btnBakteri.classList.remove('btn-bgpeach-aktif');
  btnMatahari.classList.remove('btn-bgpeach-aktif');
  btnLautan.classList.remove('btn-bgpeach-aktif');
})

btnMatahari.addEventListener("click", function () {
  matahari.classList.remove('hide');
  atom.classList.add('hide');
  virus.classList.add('hide');
  bakteri.classList.add('hide');
  bumi.classList.add('hide');
  lautan.classList.add('hide');


  btnMatahari.classList.add('btn-bgpeach-aktif');
  btnAtom.classList.remove('btn-bgpeach-aktif');
  btnVirus.classList.remove('btn-bgpeach-aktif');
  btnBakteri.classList.remove('btn-bgpeach-aktif');
  btnBumi.classList.remove('btn-bgpeach-aktif');
  btnLautan.classList.remove('btn-bgpeach-aktif');
})

btnLautan.addEventListener("click", function () {
  lautan.classList.remove('hide');
  atom.classList.add('hide');
  virus.classList.add('hide');
  bakteri.classList.add('hide');
  bumi.classList.add('hide');
  matahari.classList.add('hide');

  btnLautan.classList.add('btn-bgpeach-aktif');
  btnAtom.classList.remove('btn-bgpeach-aktif');
  btnVirus.classList.remove('btn-bgpeach-aktif');
  btnBakteri.classList.remove('btn-bgpeach-aktif');
  btnBumi.classList.remove('btn-bgpeach-aktif');
  btnMatahari.classList.remove('btn-bgpeach-aktif');
})
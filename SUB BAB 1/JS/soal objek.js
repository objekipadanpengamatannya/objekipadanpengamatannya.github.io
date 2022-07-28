/*
###########################
##### SETUP SOAL PG #######
###########################
*/

// soal nomor 1
const satuA = document.getElementById("satuA");
const satuB = document.getElementById("satuB");
const satuC = document.getElementById("satuC");
const satuD = document.getElementById("satuD");

satuA.addEventListener('click', function () {
  document.getElementById("salahSatu").classList.remove("hide");
  document.getElementById("soalDua").classList.remove("hide");
  satuA.style.background = "red";

  satuA.disabled = true;
  satuB.disabled = true;
  satuC.disabled = true;
  satuD.disabled = true;
})
satuB.addEventListener('click', function () {
  document.getElementById("salahSatu").classList.remove("hide");
  document.getElementById("soalDua").classList.remove("hide");
  satuB.style.background = "red";

  satuA.disabled = true;
  satuB.disabled = true;
  satuC.disabled = true;
  satuD.disabled = true;
})
satuC.addEventListener('click', function () {
  document.getElementById("salahSatu").classList.remove("hide");
  document.getElementById("soalDua").classList.remove("hide");
  satuC.style.background = "red";

  satuA.disabled = true;
  satuB.disabled = true;
  satuC.disabled = true;
  satuD.disabled = true;
})
satuD.addEventListener('click', function () {
  document.getElementById("benarSatu").classList.remove("hide");
  document.getElementById("soalDua").classList.remove("hide");
  satuD.style.background = "green";

  satuA.disabled = true;
  satuB.disabled = true;
  satuC.disabled = true;
  satuD.disabled = true;
})

// soal nomor 2
const duaA = document.getElementById("duaA");
const duaB = document.getElementById("duaB");
const duaC = document.getElementById("duaC");
const duaD = document.getElementById("duaD");

duaA.addEventListener('click', function () {
  document.getElementById("benarDua").classList.remove("hide");
  document.getElementById("soalTiga").classList.remove("hide");
  duaA.style.background = "green";

  duaA.disabled = true;
  duaB.disabled = true;
  duaC.disabled = true;
  duaD.disabled = true;
})
duaB.addEventListener('click', function () {
  document.getElementById("salahDua").classList.remove("hide");
  document.getElementById("soalTiga").classList.remove("hide");
  duaB.style.background = "red";

  duaA.disabled = true;
  duaB.disabled = true;
  duaC.disabled = true;
  duaD.disabled = true;
})
duaC.addEventListener('click', function () {
  document.getElementById("salahDua").classList.remove("hide");
  document.getElementById("soalTiga").classList.remove("hide");
  duaC.style.background = "red";

  duaA.disabled = true;
  duaB.disabled = true;
  duaC.disabled = true;
  duaD.disabled = true;
})
duaD.addEventListener('click', function () {
  document.getElementById("salahDua").classList.remove("hide");
  document.getElementById("soalTiga").classList.remove("hide");
  duaD.style.background = "red";

  duaA.disabled = true;
  duaB.disabled = true;
  duaC.disabled = true;
  duaD.disabled = true;
})

// soal nomor 3
const tigaA = document.getElementById("tigaA");
const tigaB = document.getElementById("tigaB");
const tigaC = document.getElementById("tigaC");
const tigaD = document.getElementById("tigaD");

tigaA.addEventListener('click', function () {
  document.getElementById("salahTiga").classList.remove("hide");
  document.getElementById("soalEmpat").classList.remove("hide");
  tigaA.style.background = "red";

  tigaA.disabled = true;
  tigaB.disabled = true;
  tigaC.disabled = true;
  tigaD.disabled = true;
})
tigaB.addEventListener('click', function () {
  document.getElementById("salahTiga").classList.remove("hide");
  document.getElementById("soalEmpat").classList.remove("hide");
  tigaB.style.background = "red";

  tigaA.disabled = true;
  tigaB.disabled = true;
  tigaC.disabled = true;
  tigaD.disabled = true;
})
tigaC.addEventListener('click', function () {
  document.getElementById("salahTiga").classList.remove("hide");
  document.getElementById("soalEmpat").classList.remove("hide");
  tigaC.style.background = "red";

  tigaA.disabled = true;
  tigaB.disabled = true;
  tigaC.disabled = true;
  tigaD.disabled = true;
})
tigaD.addEventListener('click', function () {
  document.getElementById("benarTiga").classList.remove("hide");
  document.getElementById("soalEmpat").classList.remove("hide");
  tigaD.style.background = "green";

  tigaA.disabled = true;
  tigaB.disabled = true;
  tigaC.disabled = true;
  tigaD.disabled = true;
})

// soal nomor 4
const empatA = document.getElementById("empatA");
const empatB = document.getElementById("empatB");
const empatC = document.getElementById("empatC");
const empatD = document.getElementById("empatD");

empatA.addEventListener('click', function () {
  document.getElementById("salahEmpat").classList.remove("hide");
  document.getElementById("hal").classList.remove("disable");
  empatA.style.background = "red";

  empatA.disabled = true;
  empatB.disabled = true;
  empatC.disabled = true;
  empatD.disabled = true;
})
empatB.addEventListener('click', function () {
  document.getElementById("salahEmpat").classList.remove("hide");
  document.getElementById("hal").classList.remove("disable");
  empatB.style.background = "red";

  empatA.disabled = true;
  empatB.disabled = true;
  empatC.disabled = true;
  empatD.disabled = true;
})
empatC.addEventListener('click', function () {
  document.getElementById("benarEmpat").classList.remove("hide");
  document.getElementById("hal").classList.remove("disable");
  empatC.style.background = "green";

  empatA.disabled = true;
  empatB.disabled = true;
  empatC.disabled = true;
  empatD.disabled = true;
})
empatD.addEventListener('click', function () {
  document.getElementById("salahEmpat").classList.remove("hide");
  document.getElementById("hal").classList.remove("disable");
  empatD.style.background = "red";

  empatA.disabled = true;
  empatB.disabled = true;
  empatC.disabled = true;
  empatD.disabled = true;
})


// Button Selesai membaca petunjuk
const btnPetunjuk = document.querySelector('#btnPetunjuk');

btnPetunjuk.addEventListener("click", function () {
  document.querySelector('.card-petunjuk').classList.add('hide');
  document.getElementById('soalMuncul').classList.remove('hide');
});
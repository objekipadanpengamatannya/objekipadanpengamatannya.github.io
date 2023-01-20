/*
 **********************************
 *** SETUP TOMBOL PETUNJUK SOAL ***
 **********************************
 */

const btnPetunjuk = document.getElementById("btnPetunjuk");

btnPetunjuk.addEventListener("click", function () {
    document.getElementById("soal").classList.remove("hide");
    btnPetunjuk.classList.add("hide");
})

/*
 **********************************************
 *** SETUP PERTANYAAN SATUAN BAKU DAN TIDAK ***
 **********************************************
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
    btnSatuB.style.background = "red";

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
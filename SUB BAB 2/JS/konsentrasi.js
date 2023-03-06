/*
 ********************************
 *** SETUP TOMBOL KLIK CONTOH ***
 ********************************
 */

//  Setup contoh Satu

let klikDik1 = document.getElementById("klikDik1");
let klikDit1 = document.getElementById("klikDit1");
let klikjaw1 = document.getElementById("klikJaw1");

let dik1 = document.getElementById("dik1");
let dit1 = document.getElementById("dit1");
let jaw1 = document.getElementById("jaw1");

klikDik1.addEventListener('click', function () {
    klikDik1.classList.add("hide");
    dik1.classList.remove("hide");
    klikDit1.classList.remove("hide");
})

klikDit1.addEventListener('click', function () {
    klikDit1.classList.add("hide");
    dit1.classList.remove("hide");
    klikJaw1.classList.remove("hide");
})

klikJaw1.addEventListener('click', function () {
    klikJaw1.classList.add("hide");
    jaw1.classList.remove("hide");
})

//  Setup contoh Dua

let klikDik2 = document.getElementById("klikDik2");
let klikDit2 = document.getElementById("klikDit2");
let klikjaw2 = document.getElementById("klikJaw2");

let dik2 = document.getElementById("dik2");
let dit2 = document.getElementById("dit2");
let jaw2 = document.getElementById("jaw2");

klikDik2.addEventListener('click', function () {
    klikDik2.classList.add("hide");
    dik2.classList.remove("hide");
    klikDit2.classList.remove("hide");
})

klikDit2.addEventListener('click', function () {
    klikDit2.classList.add("hide");
    dit2.classList.remove("hide");
    klikJaw2.classList.remove("hide");
})

klikJaw2.addEventListener('click', function () {
    klikJaw2.classList.add("hide");
    jaw2.classList.remove("hide");
})

/*
 *********************************
 *** SETUP TOMBOL KLIK LATIHAN ***
 *********************************
 */

//  Setup Latihan

// memanggil id dari html
const btnCek = document.getElementById("cek");
const btnReset = document.getElementById("reset");

// memangil function agar berjalan
btnCek.addEventListener('click', diketahui);
btnReset.addEventListener('click', diketahuiReset);

//membuat function
function diketahui() {
    let mTerlarutLat = document.getElementById("mTerlarutLat").value;
    let vTerlarutLat = document.getElementById("vTerlarutLat").value;
    let mTerlarutLatJaw = document.getElementById("mTerlarutLatJaw").value;
    let vTerlarutLatJaw = document.getElementById("vTerlarutLatJaw").value;
    let terlarutLatHasil = document.getElementById("terlarutLatHasil").value;
    let terlarutLatHasilKes = document.getElementById("terlarutLatHasilKes").value;

    if (mTerlarutLat == 50) {
        document.getElementById("mTerlarutLat").style = "border: 3px solid green";
    } else {
        document.getElementById("mTerlarutLat").style = "border: 3px solid red";
    }

    if (vTerlarutLat == 5) {
        document.getElementById("vTerlarutLat").style = "border: 3px solid green";
    } else {
        document.getElementById("vTerlarutLat").style = "border: 3px solid red";
    }

    if (mTerlarutLatJaw == 50) {
        document.getElementById("mTerlarutLatJaw").style = "border: 3px solid green";
    } else {
        document.getElementById("mTerlarutLatJaw").style = "border: 3px solid red";
    }

    if (vTerlarutLatJaw == 5) {
        document.getElementById("vTerlarutLatJaw").style = "border: 3px solid green";
    } else {
        document.getElementById("vTerlarutLatJaw").style = "border: 3px solid red";
    }

    if (terlarutLatHasil == 10) {
        document.getElementById("terlarutLatHasil").style = "border: 3px solid green";
    } else {
        document.getElementById("terlarutLatHasil").style = "border: 3px solid red";
    }

    if (terlarutLatHasilKes == 10) {
        document.getElementById("terlarutLatHasilKes").style = "border: 3px solid green";
    } else {
        document.getElementById("terlarutLatHasilKes").style = "border: 3px solid red";
    }
}

function diketahuiReset() {
    // reset nilai value menjadi kosong
    document.getElementById("mTerlarutLat").value = "";
    document.getElementById("vTerlarutLat").value = "";
    document.getElementById("mTerlarutLatJaw").value = "";
    document.getElementById("vTerlarutLatJaw").value = "";
    document.getElementById("terlarutLatHasil").value = "";
    document.getElementById("terlarutLatHasilKes").value = "";

    // reset border menjadi default
    document.getElementById("mTerlarutLat").style = "";
    document.getElementById("vTerlarutLat").style = "";
    document.getElementById("mTerlarutLatJaw").style = "";
    document.getElementById("vTerlarutLatJaw").style = "";
    document.getElementById("terlarutLatHasil").style = "";
    document.getElementById("terlarutLatHasilKes").style = "";
}
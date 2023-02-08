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


/*
 *********************************
 *** SETUP TOMBOL KLIK LATIHAN ***
 *********************************
 */

//  Setup Latihan

function cekLatihan() {
    var tAwalLat = document.getElementById("tAwalLat");
    var tAkhirLat = document.getElementById("tAkhirLat");
    var selangWaktuLat = document.getElementById("selangWaktuLat");
    var hasilLat = document.getElementById("hasilLat");

    if (tAwalLat == 7) {
        tAwalLat.style.color = "green";
    } else {
        tAwalLat.style.color = "red";
    }

    if (tAkhirLat == 19) {
        tAkhirLat.style.color = "green";
    } else {
        tAkhirLat.style.color = "red";
    }

    if (selangWaktuLat == 6) {
        selangWaktuLat.style.color = "green";
    } else {
        selangWaktuLat.style.color = "red";
    }

    if (hasilLat == 2) {
        hasilLat.style.color = "green";
    } else {
        hasilLat.style.color = "red";
    }
}
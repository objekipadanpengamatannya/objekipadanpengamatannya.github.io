/*
 ********************************
 *** SETUP TOMBOL KLIK CONTOH ***
 ********************************
 */

//  Setup contoh Panjang

let klikDikPan = document.getElementById("klikDikPan");
let klikDitPan = document.getElementById("klikDitPan");
let klikjawPan = document.getElementById("klikJawPan");

let dikPan = document.getElementById("dikPan");
let ditPan = document.getElementById("ditPan");
let jawPan = document.getElementById("jawPan");

klikDikPan.addEventListener('click', function () {
    klikDikPan.classList.add("hide");
    dikPan.classList.remove("hide");
    klikDitPan.classList.remove("hide");
})

klikDitPan.addEventListener('click', function () {
    klikDitPan.classList.add("hide");
    ditPan.classList.remove("hide");
    klikJawPan.classList.remove("hide");
})

klikJawPan.addEventListener('click', function () {
    klikJawPan.classList.add("hide");
    jawPan.classList.remove("hide");
})

//  Setup contoh Massa

let klikDikMas = document.getElementById("klikDikMas");
let klikDitMas = document.getElementById("klikDitMas");
let klikjawMas = document.getElementById("klikJawMas");

let dikMas = document.getElementById("dikMas");
let ditMas = document.getElementById("ditMas");
let jawMas = document.getElementById("jawMas");

klikDikMas.addEventListener('click', function () {
    klikDikMas.classList.add("hide");
    dikMas.classList.remove("hide");
    klikDitMas.classList.remove("hide");
})

klikDitMas.addEventListener('click', function () {
    klikDitMas.classList.add("hide");
    ditMas.classList.remove("hide");
    klikJawMas.classList.remove("hide");
})

klikJawMas.addEventListener('click', function () {
    klikJawMas.classList.add("hide");
    jawMas.classList.remove("hide");
})

//  Setup contoh Waktu

let klikDikWak = document.getElementById("klikDikWak");
let klikDitWak = document.getElementById("klikDitWak");
let klikjawWak = document.getElementById("klikJawWak");

let dikWak = document.getElementById("dikWak");
let ditWak = document.getElementById("ditWak");
let jawWak = document.getElementById("jawWak");

klikDikWak.addEventListener('click', function () {
    klikDikWak.classList.add("hide");
    dikWak.classList.remove("hide");
    klikDitWak.classList.remove("hide");
})

klikDitWak.addEventListener('click', function () {
    klikDitWak.classList.add("hide");
    ditWak.classList.remove("hide");
    klikJawWak.classList.remove("hide");
})

klikJawWak.addEventListener('click', function () {
    klikJawWak.classList.add("hide");
    jawWak.classList.remove("hide");
})

/*
 ****************************
 *** SETUP TOMBOL LATIHAN ***
 ****************************
 */

function cekKonversiPanjang() {
    var convP1 = document.getElementById("convP1").value;
    var convP2 = document.getElementById("convP2").value;
    var convP3 = document.getElementById("convP3").value;

    if (convP1 == 70) {
        document.getElementById("convP1").style = "border: 3px solid green";
    } else {
        document.getElementById("convP1").style = "border: 3px solid red";
    }

    if (convP2 == 700) {
        document.getElementById("convP2").style = "border: 3px solid green";
    } else {
        document.getElementById("convP2").style = "border: 3px solid red";
    }

    if (convP3 == 7000) {
        document.getElementById("convP3").style = "border: 3px solid green";
    } else {
        document.getElementById("convP3").style = "border: 3px solid red";
    }

}

function cekKonversiMassa() {
    var convM1 = document.getElementById("convM1").value;
    var convM2 = document.getElementById("convM2").value;
    var convM3 = document.getElementById("convM3").value;

    if (convM1 == 30) {
        document.getElementById("convM1").style = "border: 3px solid green";
    } else {
        document.getElementById("convM1").style = "border: 3px solid red";
    }

    if (convM2 == 300) {
        document.getElementById("convM2").style = "border: 3px solid green";
    } else {
        document.getElementById("convM2").style = "border: 3px solid red";
    }

    if (convM3 == 3000) {
        document.getElementById("convM3").style = "border: 3px solid green";
    } else {
        document.getElementById("convM3").style = "border: 3px solid red";
    }

}

function cekKonversiWaktu() {
    var convW1 = document.getElementById("convW1").value;
    var convW2 = document.getElementById("convW2").value;

    if (convW1 == 1200) {
        document.getElementById("convW1").style = "border: 3px solid green";
    } else {
        document.getElementById("convW1").style = "border: 3px solid red";
    }

    if (convW2 == 7200) {
        document.getElementById("convW2").style = "border: 3px solid green";
    } else {
        document.getElementById("convW2").style = "border: 3px solid red";
    }
}

// function ulang() {
//     document.getElementById("convP1").value = "";
//     document.getElementById("no2").value = "";
//     document.getElementById("no3").value = "";
// }
/*
 ********************************
 *** SETUP TOMBOL KLIK CONTOH ***
 ********************************
 */

//  Setup contoh 1

let klikDikPan = document.getElementById("klikDikPan");
let klikDitPan = document.getElementById("klikDitPan");
let klikjawPan = document.getElementById("klikJawPan");

let ditPan = document.getElementById("ditPan");
let dikPan = document.getElementById("dikPan");
let jawPan = document.getElementById("jawPan");

klikDikPan.addEventListener('click', function () {
    ditPan.classList.remove("hide");
    klikDikPan.classList.add("hide");
})

klikDitPan.addEventListener('click', function () {
    jawPan.classList.remove("hide");
    klikDitPan.classList.add("hide");
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

    if (convP1 == 10) {
        document.getElementById("convP1").style = "border: 3px solid green";
    } else {
        document.getElementById("convP1").style = "border: 3px solid red";
    }

    if (convP2 == 100) {
        document.getElementById("convP2").style = "border: 3px solid green";
    } else {
        document.getElementById("convP2").style = "border: 3px solid red";
    }

    if (convP3 == 1000) {
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
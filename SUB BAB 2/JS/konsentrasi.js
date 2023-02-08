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
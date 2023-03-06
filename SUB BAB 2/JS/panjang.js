const penggaris = document.querySelector('#penggaris');
const rolMeter = document.querySelector('#rolMeter');
const jangkaSorong = document.querySelector('#jangkaSorong');
const mikrometer = document.querySelector('#mikrometer');

const btnPenggaris = document.querySelector('#btnPenggaris');
const btnRolMeter = document.querySelector('#btnRolMeter');
const btnJangkaSorong = document.querySelector('#btnJangkaSorong');
const btnMikrometer = document.querySelector('#btnMikrometer');

btnPenggaris.addEventListener("click", function () {
    penggaris.classList.remove('hide');
    rolMeter.classList.add('hide');
    jangkaSorong.classList.add('hide');
    mikrometer.classList.add('hide');

    btnPenggaris.classList.add('btn-bgpeach-aktif');
    btnRolMeter.classList.remove('btn-bgpeach-aktif');
    btnJangkaSorong.classList.remove('btn-bgpeach-aktif');
    btnMikrometer.classList.remove('btn-bgpeach-aktif');
})

btnRolMeter.addEventListener("click", function () {
    penggaris.classList.add('hide');
    rolMeter.classList.remove('hide');
    jangkaSorong.classList.add('hide');
    mikrometer.classList.add('hide');

    btnPenggaris.classList.remove('btn-bgpeach-aktif');
    btnRolMeter.classList.add('btn-bgpeach-aktif');
    btnJangkaSorong.classList.remove('btn-bgpeach-aktif');
    btnMikrometer.classList.remove('btn-bgpeach-aktif');
})

btnJangkaSorong.addEventListener("click", function () {
    penggaris.classList.add('hide');
    rolMeter.classList.add('hide');
    jangkaSorong.classList.remove('hide');
    mikrometer.classList.add('hide');

    btnPenggaris.classList.remove('btn-bgpeach-aktif');
    btnRolMeter.classList.remove('btn-bgpeach-aktif');
    btnJangkaSorong.classList.add('btn-bgpeach-aktif');
    btnMikrometer.classList.remove('btn-bgpeach-aktif');
})

btnMikrometer.addEventListener("click", function () {
    penggaris.classList.add('hide');
    rolMeter.classList.add('hide');
    jangkaSorong.classList.add('hide');
    mikrometer.classList.remove('hide');

    btnPenggaris.classList.remove('btn-bgpeach-aktif');
    btnRolMeter.classList.remove('btn-bgpeach-aktif');
    btnJangkaSorong.classList.remove('btn-bgpeach-aktif');
    btnMikrometer.classList.add('btn-bgpeach-aktif');
})

/*
 ********************************
 *** SETUP TOMBOL KLIK CONTOH ***
 ********************************
 */

//  Setup contoh Satu

const klikDik = document.getElementById("klikDikPan");
const klikDit = document.getElementById("klikDitPan");
const klikJawPan = document.getElementById("klikJawPan");

klikDik.addEventListener('click', function () {
    klikDik.classList.add("hide");
    document.getElementById("dikPan").classList.remove("hide");
    document.getElementById("klikDitPan").classList.remove("hide");
})

klikDit.addEventListener('click', function () {
    klikDit.classList.add("hide");
    document.getElementById("ditPan").classList.remove("hide");
    document.getElementById("klikJawPan").classList.remove("hide");
})

klikJawPan.addEventListener('click', function () {
    klikJawPan.classList.add("hide");
    document.getElementById("jawPan").classList.remove("hide");
})
/*
 ********************************
 *** SETUP TOMBOL KLIK CONTOH ***
 ********************************
 */

// Setup contoh Satu

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

// memanggil id dari html
const btnCek = document.getElementById("cek");
const btnReset = document.getElementById("reset");

// memangil function agar berjalan
btnCek.addEventListener('click', diketahui);
btnReset.addEventListener('click', diketahuiReset);

//membuat function
function diketahui() {
    let tAwalJaw = document.getElementById("tAwalLat").value;
    let tAkhirJaw = document.getElementById("tAkhirLat").value;
    let selangWaktuJaw = document.getElementById("selangWaktuLat").value;
    let tAwalJaw2 = document.getElementById("tAwalJaw").value;
    let tAkhirJaw2 = document.getElementById("tAkhirJaw").value;
    let selangWaktuJaw2 = document.getElementById("selangWaktuJaw").value;
    let hasilT = document.getElementById("hasilT").value;
    let selangWaktuJaw3 = document.getElementById("selangWaktuJaw2").value;
    let hasilLat = document.getElementById("hasilLat").value;
    let hasilLatKes = document.getElementById("hasilLatKes").value;

    if (tAwalJaw == 7) {
        document.getElementById("tAwalLat").style.borderColor = "green";
    } else {
        document.getElementById("tAwalLat").style.borderColor = "red";
    }

    if (tAkhirJaw == 19) {
        document.getElementById("tAkhirLat").style.borderColor = "green";
    } else {
        document.getElementById("tAkhirLat").style.borderColor = "red";
    }

    if (selangWaktuJaw == 6) {
        document.getElementById("selangWaktuLat").style.borderColor = "green";
    } else {
        document.getElementById("selangWaktuLat").style.borderColor = "red";
    }

    if (tAwalJaw2 == 7) {
        document.getElementById("tAwalJaw").style.borderColor = "green";
    } else {
        document.getElementById("tAwalJaw").style.borderColor = "red";
    }

    if (tAkhirJaw2 == 19) {
        document.getElementById("tAkhirJaw").style.borderColor = "green";
    } else {
        document.getElementById("tAkhirJaw").style.borderColor = "red";
    }

    if (selangWaktuJaw2 == 6) {
        document.getElementById("selangWaktuJaw").style.borderColor = "green";
    } else {
        document.getElementById("selangWaktuJaw").style.borderColor = "red";
    }

    if (hasilT == 12) {
        document.getElementById("hasilT").style.borderColor = "green";
    } else {
        document.getElementById("hasilT").style.borderColor = "red";
    }

    if (selangWaktuJaw3 == 6) {
        document.getElementById("selangWaktuJaw2").style.borderColor = "green";
    } else {
        document.getElementById("selangWaktuJaw2").style.borderColor = "red";
    }

    if (hasilLat == 2) {
        document.getElementById("hasilLat").style.borderColor = "green";
    } else {
        document.getElementById("hasilLat").style.borderColor = "red";
    }
    if (hasilLatKes == 2) {
        document.getElementById("hasilLatKes").style.borderColor = "green";
    } else {
        document.getElementById("hasilLatKes").style.borderColor = "red";
    }

}

function diketahuiReset() {
    // reset nilai value menjadi kosong
    document.getElementById("tAwalLat").value = "";
    document.getElementById("tAkhirLat").value = "";
    document.getElementById("selangWaktuLat").value = "";
    document.getElementById("tAwalJaw").value = "";
    document.getElementById("tAkhirJaw").value = "";
    document.getElementById("selangWaktuJaw").value = "";
    document.getElementById("hasilT").value = "";
    document.getElementById("selangWaktuJaw2").value = "";
    document.getElementById("hasilLat").value = "";
    document.getElementById("hasilLatKes").value = ""

    // reset border menjadi default
    document.getElementById("tAwalLat").style.borderColor = "";
    document.getElementById("tAkhirLat").style.borderColor = "";
    document.getElementById("selangWaktuLat").style.borderColor = "";
    document.getElementById("tAwalJaw").style.borderColor = "";
    document.getElementById("tAkhirJaw").style.borderColor = "";
    document.getElementById("selangWaktuJaw").style.borderColor = "";
    document.getElementById("hasilT").style.borderColor = "";
    document.getElementById("selangWaktuJaw2").style.borderColor = "";
    document.getElementById("hasilLat").style.borderColor = "";
    document.getElementById("hasilLatKes").style.borderColor = ""

}
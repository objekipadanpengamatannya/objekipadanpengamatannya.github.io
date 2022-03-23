/*
###########################
##### SETUP SOAL PG #######
###########################
*/
const SOAL = [{
    soal: "1. Alat ukur yang digunakan untuk menimbang emas adalah . . . . ",
    pilihan: [
        'A.	Neraca dua lengan',
        'B.	Neraca satu lengan',
        'C.	Timbangan duduk',
        'D.	Neraca ohauss'
    ]
}, {
    soal: "2. Alat ukur yang digunakan untuk mengukur jarak yang agak jauh misalnya lebar jalan, panjang halaman, dan jarak lompatan adalah . . . .",
    pilihan: [
        'A.	Penggaris',
        'B.	Rol Meter',
        'C.	Jangka Sorong',
        'D.	Tali'
    ]
}, {
    soal: "3. Seorang juri lomba lari ingin menggunakan sebuah alat untuk mengukur kecepatan lari dalam lomba tersebut. Alat apa yang cocok untuk digunakan juri tersebut . . . .",
    pilihan: [
        'A.	Jam atom',
        'B.	Jam dinding',
        'C.	Stopwatch',
        'D.	Jam pasir'
    ]
}]

// membuat kunci jawaban
const kunciJawaban = [0, 1, 2]

// deklarasi untuk menambah tombol
let kuisJalan = 0
let skor = 0
let simpanJawaban = []

document.addEventListener("DOMContentLoaded", function (event) {
    setupKuis()
});

function setupKuis() {
    document.getElementById('soal').innerText = SOAL[kuisJalan]['soal']
    document.getElementById('teksPilihan0').innerText = SOAL[kuisJalan]['pilihan'][0]
    document.getElementById('teksPilihan1').innerText = SOAL[kuisJalan]['pilihan'][1]
    document.getElementById('teksPilihan2').innerText = SOAL[kuisJalan]['pilihan'][2]
    document.getElementById('teksPilihan3').innerText = SOAL[kuisJalan]['pilihan'][3]
}

/*
 **************************
 ***** SETUP TOMBOL *****
 **************************
 */

function tombolLanjut() {
    kuisJalan++

    // menjalankan fungsi simpan jawaban
    cekJawaban()

    // sebuah aksi ketika soal sudah selesai
    if (kuisJalan > SOAL.length - 1) {
        kuisSelesai()
    }

    if (kuisJalan == 3) {
        document.getElementById('btnLanjut').innerHTML = "SELESAI";
    }


    resetPilihan()

    //menjalankan fungsi kuis
    setupKuis()
}

function resetPilihan() {
    const pilihan = document.querySelector('input[name="pilihan"]:checked');
    if (pilihan != null) {
        pilihan.checked = false
    }
}

// aksi ketika soal sudah selesai dijawab
function kuisSelesai() {
    nilai();

    if (skor >= 3) {
        document.getElementById('nilai').innerHTML = "ANDA BENAR " + skor + " dari 4";
        document.getElementById('ket').innerHTML = "Silahkan lanjutkan ke aktivitas berikutnya dengan menekan tombol dibawah ini";
        document.getElementById('tombolLanjut').classList.remove('hide');
    } else {
        document.getElementById('nilai').innerHTML = "ANDA BENAR " + skor + " dari 4";
        document.getElementById('ket').innerHTML = "Silahkan baca kembali materi Objek IPA";
        document.getElementById('tombolKembali').classList.remove('hide');
    }

    document.getElementById('soalMuncul').classList.add('hide')
    document.getElementById('soalSelesai').classList.remove('hide')
    return
}

// aksi untuk membuat nilai

function cekJawaban() {
    const jawaban = document.querySelector('input[name="pilihan"]:checked');
    if (jawaban != null) {
        simpanJawaban.push(parseInt(jawaban.getAttribute('data-id')))
        console.log(simpanJawaban)
    } else {
        simpanJawaban.push()
    }
}

function nilai() {
    for (var i = 0; i < simpanJawaban.length; i++) {
        if (simpanJawaban[i] == kunciJawaban[i]) {
            skor += 1
        }
    }
}

// function btnKembali(){
//   kuisJalan--
//   setupKuis()
// }

// Button Selesai membaca petunjuk
const btnPetunjuk = document.querySelector('#btnPetunjuk');

btnPetunjuk.addEventListener("click", function () {
    document.querySelector('.card-petunjuk').classList.add('hide');
    document.getElementById('soalMuncul').classList.remove('hide');
});
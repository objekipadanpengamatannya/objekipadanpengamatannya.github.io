/*
###########################
##### SETUP SOAL PG #######
###########################
*/
const SOAL = [{
    soal: "1. Sepetak sawah berbentuk persegi dengan panjang sisi 50 m. Luas sawah tersebut adalah  . . . . ",
    pilihan: [
        'A.	2.000',
        'B.	2.250',
        'C.	2.500',
        'D.	3.000'
    ]
}, {
    soal: "2. Dina ingin membuat larutan gula dengan cara mencampurkan 20 gram air ke dalam segelas air yang bervolume 125 mL. berapakah konsentrasi larutan gula tersebut dalam g/L  . . . .",
    pilihan: [
        'A.	0,50',
        'B.	0,25',
        'C.	0,16',
        'D.	0,08'
    ]
}, {
    soal: "3. Tanaman Indri awal tinggi tanaman  7 cm. dalam waktu 14 hari, tinggi tanaman Indri menjadi 21 cm, berapa laju pertumbuhan tanaman Indri perhari ?",
    pilihan: [
        'A.	1,3',
        'B.	1,1',
        'C.	1',
        'D.	2'
    ]
}]

// membuat kunci jawaban
const kunciJawaban = [2, 2, 2]

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
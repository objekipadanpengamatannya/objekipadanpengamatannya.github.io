const btnPetSelesai = document.getElementById('btnPetSelesai')
const biodata = document.getElementById('biodata')
const petunjuk = document.getElementById('petunjuk')

btnPetSelesai.addEventListener("click", function () {
    biodata.classList.remove('hide');
    petunjuk.classList.add('hide');
    btnPetSelesai.classList.add('hide');
})

/*
 *********************
 *** SETUP BIODATA ***
 *********************
 */

let mulai = document.querySelector('.lanjut');
let nama = document.getElementById('nama');
let sekolah = document.getElementById('sekolah');
let kelas = document.getElementById('kelas');
mulai.addEventListener('click', function () {
    if (nama.value == "" || sekolah.value == "" || kelas.value == "") {
        alert("Masih ada jawaban kosong")
    } else {
        localStorage.setItem('nama', nama.value)
        localStorage.setItem('sekolah', sekolah.value)
        localStorage.setItem('kelas', kelas.value)
        window.location = "soalnya.html"
    }
})
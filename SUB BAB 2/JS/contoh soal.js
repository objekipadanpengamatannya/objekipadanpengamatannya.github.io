const contohSoal = document.querySelectorAll('#contoh section');

const tombol = document.querySelectorAll('#button button');

tombol[0].addEventListener("click", function () {
    contohSoal[0].classList.remove('hide');
    contohSoal[1].classList.add('hide');
    contohSoal[2].classList.add('hide');
    contohSoal[3].classList.add('hide');

    tombol[0].classList.add('btn-bgpeach-aktif')
    tombol[1].classList.remove('btn-bgpeach-aktif')
    tombol[2].classList.remove('btn-bgpeach-aktif')
    tombol[3].classList.remove('btn-bgpeach-aktif')
})

tombol[1].addEventListener("click", function () {
    contohSoal[0].classList.add('hide');
    contohSoal[1].classList.remove('hide');
    contohSoal[2].classList.add('hide');
    contohSoal[3].classList.add('hide');

    tombol[0].classList.remove('btn-bgpeach-aktif')
    tombol[1].classList.add('btn-bgpeach-aktif')
    tombol[2].classList.remove('btn-bgpeach-aktif')
    tombol[3].classList.remove('btn-bgpeach-aktif')
})

tombol[2].addEventListener("click", function () {
    contohSoal[0].classList.add('hide');
    contohSoal[1].classList.add('hide');
    contohSoal[2].classList.remove('hide');
    contohSoal[3].classList.add('hide');

    tombol[0].classList.remove('btn-bgpeach-aktif')
    tombol[1].classList.remove('btn-bgpeach-aktif')
    tombol[2].classList.add('btn-bgpeach-aktif')
    tombol[3].classList.remove('btn-bgpeach-aktif')
})

tombol[3].addEventListener("click", function () {
    contohSoal[0].classList.add('hide');
    contohSoal[1].classList.add('hide');
    contohSoal[2].classList.add('hide');
    contohSoal[3].classList.remove('hide');

    tombol[0].classList.remove('btn-bgpeach-aktif')
    tombol[1].classList.remove('btn-bgpeach-aktif')
    tombol[2].classList.remove('btn-bgpeach-aktif')
    tombol[3].classList.add('btn-bgpeach-aktif')
})
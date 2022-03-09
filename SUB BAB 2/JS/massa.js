const neracaSamaLengan = document.querySelector('#neracaSamaLengan');
const timbanganDuduk = document.querySelector('#timbanganDuduk');
const neracaOhauss = document.querySelector('#neracaOhauss');

const btnNeracaSamaLengan = document.querySelector('#btnNeracaSamaLengan');
const btnTimbanganDuduk = document.querySelector('#btnTimbanganDuduk');
const btnNeracaOhauss = document.querySelector('#btnNeracaOhauss');

btnNeracaSamaLengan.addEventListener("click", function(){
    neracaSamaLengan.classList.remove('hide');
    timbanganDuduk.classList.add('hide');
    neracaOhauss.classList.add('hide');

    btnNeracaSamaLengan.classList.add('btn-bgpeach-aktif');
    btnTimbanganDuduk.classList.remove('btn-bgpeach-aktif');
    btnNeracaOhauss.classList.remove('btn-bgpeach-aktif');
})

btnTimbanganDuduk.addEventListener("click", function(){
    neracaSamaLengan.classList.add('hide');
    timbanganDuduk.classList.remove('hide');
    neracaOhauss.classList.add('hide');

    btnNeracaSamaLengan.classList.remove('btn-bgpeach-aktif');
    btnTimbanganDuduk.classList.add('btn-bgpeach-aktif');
    btnNeracaOhauss.classList.remove('btn-bgpeach-aktif');
})

btnNeracaOhauss.addEventListener("click", function(){
    neracaSamaLengan.classList.add('hide');
    timbanganDuduk.classList.add('hide');
    neracaOhauss.classList.remove('hide');

    btnNeracaSamaLengan.classList.remove('btn-bgpeach-aktif');
    btnTimbanganDuduk.classList.remove('btn-bgpeach-aktif');
    btnNeracaOhauss.classList.add('btn-bgpeach-aktif');
})
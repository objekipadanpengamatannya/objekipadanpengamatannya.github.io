// awal tombol sidebar
// Dropdown menu
const dropdownBtnSatu = document.querySelector('.dropdownBtnSatu');
const dropdownContainerSatu = document.querySelector('.dropdownContainerSatu');

const dropdownBtnDua = document.querySelector('.dropdownBtnDua');
const dropdownContainerDua = document.querySelector('.dropdownContainerDua');

dropdownBtnSatu.addEventListener('click', function () {
    if (dropdownContainerSatu.style.display === "none") {
        dropdownContainerSatu.style.display = "block";
    } else {
        dropdownContainerSatu.style.display = "none";
    }

    if (dropdownContainerSatu.style.display === "block") {
        dropdownContainerDua.style.display = "none";
    }
});

// const dropdownBtnDua = document.querySelector('.dropdownBtnDua');
// const dropdownContainerDua = document.querySelector('.dropdownContainerDua');

dropdownBtnDua.addEventListener('click', function () {
    if (dropdownContainerDua.style.display === "none") {
        dropdownContainerDua.style.display = "block";
    } else {
        dropdownContainerDua.style.display = "none";
    }

    if (dropdownContainerDua.style.display === "block") {
        dropdownContainerSatu.style.display = "none";
    }
});
// akhir tombol sodebar


// awal tombol burger menu
const burgerMenu = document.querySelector('.burgerMenu');
const aside = document.querySelector('.container-master aside');

burgerMenu.addEventListener('click', function () {
    aside.classList.toggle('kembali');
});
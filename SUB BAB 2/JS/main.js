const btnSatu = document.getElementById('btnSatu');
const btnDua = document.getElementById('btnDua');
const btnTiga = document.getElementById('btnTiga');

btnSatu.addEventListener("click", function(){
    btnSatu.classList.add('btn-aktif');
    btnDua.classList.remove('btn-aktif');
    btnTiga.classList.remove('btn-aktif');

    document.getElementById("sectionSatu").style.display = "block";
    document.getElementById("sectionDua").style.display = "none";
    document.getElementById("sectionTiga").style.display = "none";
})
btnDua.addEventListener("click", function(){
    btnSatu.classList.remove('btn-aktif');
    btnDua.classList.add('btn-aktif');
    btnTiga.classList.remove('btn-aktif');

    document.getElementById("sectionSatu").style.display = "none";
    document.getElementById("sectionDua").style.display = "block";
    document.getElementById("sectionTiga").style.display = "none";
})
btnTiga.addEventListener("click", function(){
    btnSatu.classList.remove('btn-aktif');
    btnDua.classList.remove('btn-aktif');
    btnTiga.classList.add('btn-aktif');

    document.getElementById("sectionSatu").style.display = "none";
    document.getElementById("sectionDua").style.display = "none";
    document.getElementById("sectionTiga").style.display = "block";
})
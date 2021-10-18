/*
**************************
******* SETUP SOAL *******
**************************
*/

const bgSoal = document.querySelectorAll('.wrapper-soal');

let DBSOAL = new XMLHttpRequest();
DBSOAL.onreadystatechange = function (){
    if (DBSOAL.readyState == 4 && DBSOAL.status == 200){
        let data = JSON.parse(this.responseText);
        for (var i = 0; i < data.length; i++) {
        let soal = data[i]["soal"+i]["soal"]
        let a = data[i]["soal"+i]["a"]
        let b = data[i]["soal"+i]["b"]
        let c = data[i]["soal"+i]["c"]
        let d = data[i]["soal"+i]["d"]

        bgSoal[i].innerHTML = `<span>SOAL NO </span> <span class="kuis-no">${i+1}</span>
        
        <p class="soal-kuis" id="soal">${soal}</p>

        <label class="pilihan-kuis" for="pilihan0" id="teksPilihan0">A. ${a}</label>

        <label class="pilihan-kuis" for="pilihan1" id="teksPilihan1">B. ${b}</label>

        <label class="pilihan-kuis" for="pilihan2" id="teksPilihan2">C. ${c}</label>

        <label class="pilihan-kuis" for="pilihan3" id="teksPilihan3">D. ${d}</label>`
        }
    }
}
DBSOAL.open('GET', '../JSON/kuis1.json', true);
DBSOAL.send();

/*
**************************
***** SETUP TOMBOL *****
**************************
*/

let a = 0
const btnLanjut = document.getElementById("btnLanjut");

btnLanjut.addEventListener("click", function(){
    a++
    bgSoal[a].classList.toggle('hide')
    bgSoal[a-1].classList.toggle('hide')
})
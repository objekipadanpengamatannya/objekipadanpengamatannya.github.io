/*
**********************************
***** SETUP BUTTON OBJEK *****
**********************************
*/

const atom = document.querySelector('#atom');
const virus = document.querySelector('#virus');
const bakteri = document.querySelector('#bakteri');
const bumi = document.querySelector('#bumi');
const matahari = document.querySelector('#matahari');
const lautan = document.querySelector('#lautan');

const btnAtom = document.querySelector('#btnAtom');
const btnVirus = document.querySelector('#btnVirus');
const btnBakteri = document.querySelector('#btnBakteri');
const btnBumi = document.querySelector('#btnBumi');
const btnMatahari = document.querySelector('#btnMatahari');
const btnLautan = document.querySelector('#btnLautan');



btnAtom.addEventListener("click", function(){
  atom.classList.remove('hide');
  virus.classList.add('hide');
  bakteri.classList.add('hide');
  bumi.classList.add('hide');
  matahari.classList.add('hide');
  lautan.classList.add('hide');
})

btnVirus.addEventListener("click", function(){
  virus.classList.remove('hide');
  atom.classList.add('hide');
  bakteri.classList.add('hide');
  bumi.classList.add('hide');
  matahari.classList.add('hide');
  lautan.classList.add('hide');

//   btnAtom.classList.remove('btn-bgpeach-aktif');
//   btnVirus.classList.add('btn-bgpeach-aktif');
})

btnBakteri.addEventListener("click", function(){
  bakteri.classList.remove('hide');
  atom.classList.add('hide');
  virus.classList.add('hide');
  bumi.classList.add('hide');
  matahari.classList.add('hide');
  lautan.classList.add('hide');

})

btnBumi.addEventListener("click", function(){
  bumi.classList.remove('hide');
  atom.classList.add('hide');
  virus.classList.add('hide');
  bakteri.classList.add('hide');
  matahari.classList.add('hide');
  lautan.classList.add('hide');

})

btnMatahari.addEventListener("click", function(){
  matahari.classList.remove('hide');
  atom.classList.add('hide');
  virus.classList.add('hide');
  bakteri.classList.add('hide');
  bumi.classList.add('hide');
  lautan.classList.add('hide');

})

btnLautan.addEventListener("click", function(){
  lautan.classList.remove('hide');
  atom.classList.add('hide');
  virus.classList.add('hide');
  bakteri.classList.add('hide');
  bumi.classList.add('hide');
  matahari.classList.add('hide');

})
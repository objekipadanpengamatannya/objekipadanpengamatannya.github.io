
/*
**********************************
***** SETUP PERTANYAAN OBJEK *****
**********************************
*/

// pertanyaan satu

const btnBiotikSatu = document.getElementById("btnBiotikSatu");
const btnAbiotikSatu = document.getElementById("btnAbiotikSatu");

btnBiotikSatu.addEventListener('click', function(){
  document.getElementById("ketSatu").innerHTML = "JAWABAN ANDA BENAR";
  document.getElementById("ketSatu").style.color = "green";
  btnBiotikSatu.classList.add("btn-objek-aktif");
  
  btnBiotikSatu.disabled = true;
  btnAbiotikSatu.disabled = true;

  document.getElementById("munculDua").classList.remove("hide");
})

btnAbiotikSatu.addEventListener('click', function(){
  document.getElementById("ketSatu").innerHTML = "JAWABAN ANDA KURANG TEPAT";
  document.getElementById("ketSatu").style.color = "red";
  btnAbiotikSatu.classList.add("btn-objek-aktif");
  
  btnBiotikSatu.disabled = true;
  btnAbiotikSatu.disabled = true;

  document.getElementById("munculDua").classList.remove("hide");
})

// pertanyaan dua

const btnBiotikDua = document.getElementById("btnBiotikDua");
const btnAbiotikDua = document.getElementById("btnAbiotikDua");

btnBiotikDua.addEventListener('click', function(){
  document.getElementById("ketDua").innerHTML = "JAWABAN ANDA KURANG TEPAT";
  document.getElementById("ketDua").style.color = "red";
  btnBiotikDua.classList.add("btn-objek-aktif");
  
  btnBiotikDua.disabled = true;
  btnAbiotikDua.disabled = true;

  document.getElementById("munculTiga").classList.remove("hide");
})

btnAbiotikDua.addEventListener('click', function(){
  document.getElementById("ketDua").innerHTML = "JAWABAN ANDA BENAR";
  document.getElementById("ketDua").style.color = "green";
  btnAbiotikDua.classList.add("btn-objek-aktif")
  
  btnBiotikDua.disabled = true;
  btnAbiotikDua.disabled = true;

  document.getElementById("munculTiga").classList.remove("hide");
})

//pertanyaan tiga

const btnBiotikTiga = document.getElementById("btnBiotikTiga");
const btnAbiotikTiga = document.getElementById("btnAbiotikTiga");

btnBiotikTiga.addEventListener('click', function(){
  document.getElementById("ketTiga").innerHTML = "JAWABAN ANDA KURANG TEPAT";
  document.getElementById("ketTiga").style.color = "red";
  btnBiotikTiga.classList.add("btn-objek-aktif");
  
  btnBiotikTiga.disabled = true;
  btnAbiotikTiga.disabled = true;

  document.getElementById("munculEmpat").classList.remove("hide");
})

btnAbiotikTiga.addEventListener('click', function(){
  document.getElementById("ketTiga").innerHTML = "JAWABAN ANDA BENAR";
  document.getElementById("ketTiga").style.color = "green";
  btnAbiotikTiga.classList.add("btn-objek-aktif")
  
  btnBiotikTiga.disabled = true;
  btnAbiotikTiga.disabled = true;

  document.getElementById("munculEmpat").classList.remove("hide");
})

//pertanyaan empat

const btnBiotikEmpat = document.getElementById("btnBiotikEmpat");
const btnAbiotikEmpat = document.getElementById("btnAbiotikEmpat");

btnBiotikEmpat.addEventListener('click', function(){
  document.getElementById("ketEmpat").innerHTML = "JAWABAN ANDA BENAR";
  document.getElementById("ketEmpat").style.color = "green";
  btnBiotikEmpat.classList.add("btn-objek-aktif");
  
  btnBiotikEmpat.disabled = true;
  btnAbiotikEmpat.disabled = true;

  document.getElementById("munculLima").classList.remove("hide");
})

btnAbiotikEmpat.addEventListener('click', function(){
  document.getElementById("ketEmpat").innerHTML = "JAWABAN ANDA KURANG TEPAT";
  document.getElementById("ketEmpat").style.color = "red";
  btnAbiotikEmpat.classList.add("btn-objek-aktif");
  
  btnBiotikEmpat.disabled = true;
  btnAbiotikEmpat.disabled = true;

  document.getElementById("munculLima").classList.remove("hide");
})

// pertanyaan lima

const btnBiotikLima = document.getElementById("btnBiotikLima");
const btnAbiotikLima = document.getElementById("btnAbiotikLima");

btnBiotikLima.addEventListener('click', function(){
  document.getElementById("ketLima").innerHTML = "JAWABAN ANDA KURANG TEPAT";
  document.getElementById("ketLima").style.color = "red";
  btnBiotikLima.classList.add("btn-objek-aktif");
  
  btnBiotikLima.disabled = true;
  btnAbiotikLima.disabled = true;
  
  document.getElementById("munculEnam").classList.remove("hide");
})

btnAbiotikLima.addEventListener('click', function(){
  document.getElementById("ketLima").innerHTML = "JAWABAN ANDA BENAR";
  document.getElementById("ketLima").style.color = "green";
  btnAbiotikLima.classList.add("btn-objek-aktif");
  
  btnBiotikLima.disabled = true;
  btnAbiotikLima.disabled = true;
  
  document.getElementById("munculEnam").classList.remove("hide");
})

//pertanyaan enam

const btnBiotikEnam = document.getElementById("btnBiotikEnam");
const btnAbiotikEnam = document.getElementById("btnAbiotikEnam");

btnBiotikEnam.addEventListener('click', function(){
  document.getElementById("ketEnam").innerHTML = "JAWABAN ANDA KURANG TEPAT";
  document.getElementById("ketEnam").style.color = "red";
  btnBiotikEnam.classList.add("btn-objek-aktif");
  
  btnBiotikEnam.disabled = true;
  btnAbiotikEnam.disabled = true;
  
  document.getElementById("munculTujuh").classList.remove("hide");
})

btnAbiotikEnam.addEventListener('click', function(){
  document.getElementById("ketEnam").innerHTML = "JAWABAN ANDA BENAR";
  document.getElementById("ketEnam").style.color = "green";
  btnAbiotikEnam.classList.add("btn-objek-aktif");
  
  btnBiotikEnam.disabled = true;
  btnAbiotikEnam.disabled = true;
  
  document.getElementById("munculTujuh").classList.remove("hide");
})

// pertanyaan tujuh

const btnBiotikTujuh = document.getElementById("btnBiotikTujuh");
const btnAbiotikTujuh = document.getElementById("btnAbiotikTujuh");

btnBiotikTujuh.addEventListener('click', function(){
  document.getElementById("ketTujuh").innerHTML = "JAWABAN ANDA BENAR";
  document.getElementById("ketTujuh").style.color = "green";
  btnBiotikTujuh.classList.add("btn-objek-aktif");
  
  btnBiotikTujuh.disabled = true;
  btnAbiotikTujuh.disabled = true;

  document.getElementById("munculDelapan").classList.remove("hide");
})

btnAbiotikTujuh.addEventListener('click', function(){
  document.getElementById("ketTujuh").innerHTML = "JAWABAN ANDA KURANG TEPAT";
  document.getElementById("ketTujuh").style.color = "red";
  btnAbiotikTujuh.classList.add("btn-objek-aktif");
  
  btnBiotikTujuh.disabled = true;
  btnAbiotikTujuh.disabled = true;

  document.getElementById("munculDelapan").classList.remove("hide");
})

//pertanyaan delapan

const btnBiotikDelapan = document.getElementById("btnBiotikDelapan");
const btnAbiotikDelapan = document.getElementById("btnAbiotikDelapan");

btnBiotikDelapan.addEventListener('click', function(){
  document.getElementById("ketDelapan").innerHTML = "JAWABAN ANDA BENAR";
  document.getElementById("ketDelapan").style.color = "green";
  btnBiotikDelapan.classList.add("btn-objek-aktif");
  
  btnBiotikDelapan.disabled = true;
  btnAbiotikDelapan.disabled = true;

  document.getElementById("munculSembilan").classList.remove("hide");
})

btnAbiotikDelapan.addEventListener('click', function(){
  document.getElementById("ketDelapan").innerHTML = "JAWABAN ANDA KURANG TEPAT";
  document.getElementById("ketDelapan").style.color = "red";
  btnAbiotikDelapan.classList.add("btn-objek-aktif");
  
  btnBiotikDelapan.disabled = true;
  btnAbiotikDelapan.disabled = true;

  document.getElementById("munculSembilan").classList.remove("hide");
})

//pertanyaan sembilan

const btnBiotikSembilan = document.getElementById("btnBiotikSembilan");
const btnAbiotikSembilan = document.getElementById("btnAbiotikSembilan");

btnBiotikSembilan.addEventListener('click', function(){
  document.getElementById("ketSembilan").innerHTML = "JAWABAN ANDA KURANG TEPAT";
  document.getElementById("ketSembilan").style.color = "red";
  btnBiotikSembilan.classList.add("btn-objek-aktif");
  
  btnBiotikSembilan.disabled = true;
  btnAbiotikSembilan.disabled = true;
  
  document.getElementById("munculSepuluh").classList.remove("hide");
})

btnAbiotikSembilan.addEventListener('click', function(){
  document.getElementById("ketSembilan").innerHTML = "JAWABAN ANDA BENAR";
  document.getElementById("ketSembilan").style.color = "green";
  btnAbiotikSembilan.classList.add("btn-objek-aktif");
  
  btnBiotikSembilan.disabled = true;
  btnAbiotikSembilan.disabled = true;
  
  document.getElementById("munculSepuluh").classList.remove("hide");
})

//pertanyaan sepuluh

const btnBiotikSepuluh = document.getElementById("btnBiotikSepuluh");
const btnAbiotikSepuluh= document.getElementById("btnAbiotikSepuluh");

btnBiotikSepuluh.addEventListener('click', function(){
  document.getElementById("ketSepuluh").innerHTML = "JAWABAN ANDA KURANG TEPAT";
  document.getElementById("ketSepuluh").style.color = "red";
  btnBiotikSepuluh.classList.add("btn-objek-aktif");
  
  btnBiotikSepuluh.disabled = true;
  btnAbiotikSepuluh.disabled = true;
  
  document.getElementById("munculSectionPembahasanKet").classList.add("hide");
  document.getElementById("munculSectionPembahasanObjek").classList.remove("hide");
   document.getElementById('halaman').classList.remove("hide");
})

btnAbiotikSepuluh.addEventListener('click', function(){
  document.getElementById("ketSepuluh").innerHTML = "JAWABAN ANDA BENAR";
  document.getElementById("ketSepuluh").style.color = "green";
  btnAbiotikSepuluh.classList.add("btn-objek-aktif");
  
  btnBiotikSepuluh.disabled = true;
  btnAbiotikSepuluh.disabled = true;
  
  document.getElementById("munculSectionPembahasanKet").classList.add("hide");
  document.getElementById("munculSectionPembahasanObjek").classList.remove("hide");
  document.getElementById('halaman').classList.remove("hide");
})
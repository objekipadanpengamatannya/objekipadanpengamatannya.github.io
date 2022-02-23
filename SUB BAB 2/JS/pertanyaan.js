/*
************************
*** SETUP KESIMPULAN ***
************************
*/

function cekKesimpulan() {
  var cek1 = document.getElementById("no1").value.toUpperCase();
  var cek2 = document.getElementById("no2").value.toUpperCase();
  var cek3 = document.getElementById("no3").value.toUpperCase();

  if (cek1 === "PENGUKURAN" ) {
    document.getElementById("satu").innerHTML =" " + cek1;
    document.getElementById("satu").style.color = "green";
    document.getElementById("no1").style.display = "none";
  } else {
    document.getElementById("no1").style.color = "red";
  }

  if (cek2 === "ANGKA") {
    document.getElementById("dua").innerHTML =" " + cek2;
    document.getElementById("dua").style.color = "green";
    document.getElementById("no2").style.display = "none";
  } else if (cek2 === "SATUAN") {
    document.getElementById("dua").innerHTML =" " + cek2;
    document.getElementById("dua").style.color = "green";
    document.getElementById("no2").style.display = "none";
  }
    else {
    document.getElementById("no2").style.color = "red";
  }

  if (cek3 === cek2){
    document.getElementById("no3").style.color = "red";
  } else if (cek3 === "SATUAN"){
    document.getElementById("tiga").innerHTML =" " + cek3;
    document.getElementById("tiga").style.color = "green";
    document.getElementById("no3").style.display = "none";
  } else if (cek3 === "ANGKA") {
    document.getElementById("tiga").innerHTML =" " + cek3;
    document.getElementById("tiga").style.color = "green";
    document.getElementById("no3").style.display = "none";
  } else {
    document.getElementById("no3").style.color = "red";
  }
}

function ulang(){
  document.getElementById("no1").value ="";
  document.getElementById("no2").value ="";
  document.getElementById("no3").value ="";
}
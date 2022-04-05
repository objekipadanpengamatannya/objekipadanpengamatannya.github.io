/*
 *****************************
 *** SETUP TOMBOL PETUNTUK ***
 *****************************
 */

const btnPetunjuk = document.querySelector("#btnPetunjuk")

btnPetunjuk.addEventListener('click', function () {
  document.getElementById("soalMuncul").classList.remove("hide");
  document.getElementById("petunjukHilang").classList.add("hide");
})

/*
 *************************
 *** SETUP CEK JAWABAN ***
 *************************
 */

function cekJawaban() {
  satu = soal.jwb1.value;
  dua = soal.jwb2.value;
  tiga = soal.jwb3.value;
  var score = 0;

  if (satu == "C") {
    document.getElementById("no1").style = "border: 3px solid green";
    score += 5;
  } else if (satu == "c") {
    document.getElementById("no1").style = "border: 3px solid green";
    score += 5;
  } else {
    document.getElementById("no1").style = "border: 3px solid red";
  }

  if (dua == "D") {
    document.getElementById("no2").style = "border: 3px solid green";
    score += 5;
  } else if (dua == "d") {
    document.getElementById("no2").style = "border: 3px solid green";
    score += 5;
  } else {
    document.getElementById("no2").style = "border: 3px solid red";
  }


  if (tiga == "B") {
    document.getElementById("no3").style = "border: 3px solid green";
    score += 5;
  } else if (tiga == "b") {
    document.getElementById("no3").style = "border: 3px solid green";
    score += 5;
  } else {
    document.getElementById("no3").style = "border: 3px solid red";
  }

  // memunculkan button materi selanjutnya
  if (score == 15) {
    document.getElementById("muncul").style.display = "block";
  } else {
    document.getElementById("muncul").style.display = "none";
  }
}

function ulang() {
  document.getElementById("no1").value = "";
  document.getElementById("no2").value = "";
  document.getElementById("no3").value = "";
}

/*
 *******************
 *** SETUP RESET ***
 *******************
 */
function ulang() {
  document.getElementById("ulang").reset();
  document.getElementById("no1").style = "none";
  document.getElementById("no2").style = "none";
  document.getElementById("no3").style = "none";
  document.getElementById("muncul").style.display = "none";
}
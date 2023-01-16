/*
 *******************
 *** SETUP Video ***
 *******************
 */

const videoManfaat = document.getElementById("videoManfaat");

videoManfaat.onended = function () {
  // document.getElementById("qw").classList.add("hide");
  // document.getElementById("we").classList.remove("hide");
  document.getElementById("qw1").classList.add("hide");
  document.getElementById("petunjukHilang").classList.remove("hide");
};

/*
 *****************************
 *** SETUP TOMBOL PETUNTUK ***
 *****************************
 */

const btnPetunjuk = document.getElementById("btnPetunjuk")

btnPetunjuk.addEventListener('click', function () {
  document.getElementById("soalMuncul").classList.remove("hide");
  document.getElementById("btnSelesai").classList.add("hide");
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
    document.getElementById("muncul").classList.remove("hide");
    document.getElementById("we").classList.remove("hide");
    document.getElementById("qw").classList.remove("hide");
  } else {
    // document.getElementById("muncul").style.display = "none";
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
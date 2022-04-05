/*
 ************************
 *** SETUP KESIMPULAN ***
 ************************
 */

function cekKesimpulan1() {
    var cek1 = document.getElementById("no1").value.toUpperCase();
    var cek2 = document.getElementById("no2").value.toUpperCase();

    if (cek1 === "BESARAN") {
        document.getElementById("satu").innerHTML = " " + cek1;
        document.getElementById("satu").style.color = "green";
        document.getElementById("no1").style.display = "none";
    } else {
        document.getElementById("no1").style.color = "red";
    }

    if (cek2 === "BUKAN BESARAN") {
        document.getElementById("dua").innerHTML = " " + cek2;
        document.getElementById("dua").style.color = "green";
        document.getElementById("no2").style.display = "none";
    } else {
        document.getElementById("no2").style.color = "red";
    }
}

function ulang() {
    document.getElementById("no1").value = "";
    document.getElementById("no2").value = "";
}
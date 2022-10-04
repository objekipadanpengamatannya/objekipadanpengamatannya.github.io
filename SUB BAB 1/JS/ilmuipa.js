/*
 *******************
 *** SETUP Video ***
 *******************
 */

const videoIlmu = document.getElementById("videoilmu");

videoIlmu.onended = function () {
    document.getElementById("qw").classList.add("hide");
    document.getElementById("we").classList.remove("hide");
};
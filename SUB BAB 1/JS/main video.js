/*
*************************
*** SETUP VIDEO ***
*************************
*/
const videoPenyelidikan = document.getElementById("videoPenyelidikan");

videoPenyelidikan.onended = function() {
  document.getElementById("qw").classList.add("hide");
  document.getElementById("we").classList.remove("hide");
};

const btnKI = document.getElementById("btnKI")
const btnKD = document.getElementById("btnKD")
const btnIndikator = document.getElementById("btnIndikator")
const btnPeta = document.getElementById("btnPeta")


btnKI.addEventListener("click", function() {
    document.getElementById("ki").style.display = "block";
    document.getElementById("kd").style.display = "none";
    document.getElementById("indikator").style.display = "none";
    document.getElementById("peta").style.display = "none";

    btnKI.classList.add("btn-menu-aktif");
    btnKD.classList.remove("btn-menu-aktif");
    btnIndikator.classList.remove("btn-menu-aktif");
    btnPeta.classList.remove("btn-menu-aktif");
});

btnKD.addEventListener("click", function() {
    document.getElementById("ki").style.display = "none";
    document.getElementById("kd").style.display = "block";
    document.getElementById("indikator").style.display = "none";
    document.getElementById("peta").style.display = "none";

    btnKI.classList.remove("btn-menu-aktif");
    btnKD.classList.add("btn-menu-aktif");
    btnIndikator.classList.remove("btn-menu-aktif");
    btnPeta.classList.remove("btn-menu-aktif");
});

btnIndikator.addEventListener("click", function() {
    document.getElementById("ki").style.display = "none";
    document.getElementById("kd").style.display = "none";
    document.getElementById("indikator").style.display = "block";
    document.getElementById("peta").style.display = "none";

    btnKI.classList.remove("btn-menu-aktif");
    btnKD.classList.remove("btn-menu-aktif");
    btnIndikator.classList.add("btn-menu-aktif");
    btnPeta.classList.remove("btn-menu-aktif");
});

btnPeta.addEventListener("click", function() {
    document.getElementById("ki").style.display = "none";
    document.getElementById("kd").style.display = "none";
    document.getElementById("indikator").style.display = "none";
    document.getElementById("peta").style.display = "block";

    btnKI.classList.remove("btn-menu-aktif");
    btnKD.classList.remove("btn-menu-aktif");
    btnIndikator.classList.remove("btn-menu-aktif");
    btnPeta.classList.add("btn-menu-aktif");
});
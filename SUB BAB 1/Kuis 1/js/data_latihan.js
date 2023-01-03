// // menghubungkan ke database firebase
// const firebaseConfig = {
//     apiKey: "AIzaSyA4QoSZgVemiMHcd3AtQ-geqx8pixXTcW8",
//     authDomain: "db-objekipa-23676.firebaseapp.com",
//     databaseURL: "https://db-objekipa-23676-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "db-objekipa-23676",
//     storageBucket: "db-objekipa-23676.appspot.com",
//     messagingSenderId: "680502357822",
//     appId: "1:680502357822:web:8bf07af91734595cb9066f",
//     measurementId: "G-1F01VHYTEH"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);


let namafix = localStorage.getItem('nama')
let sekolahfix = localStorage.getItem('sekolah')
let kelasfix = localStorage.getItem('kelas')



// -----------------------------------------------------------------------------------------
// mengambil data dan menampilkanya

let dat = new XMLHttpRequest();
dat.onreadystatechange = function () {

    cek = [];
    jwbs = [];
    hasilakhir = 0;
    benarr = 0;
    salahh = 0;

    if (dat.readyState == 4 && dat.status == 200) {
        // tankap apapun responsnya tangkap,lalu diubah ke objeck
        let data = JSON.parse(this.responseText);
        // melihat data 
        // console.log(data);

        // ---------------------------------
        // acak urutan soal
        //random urutan
        for (let x = 0; x < 100; x++) {
            // acak angka dengan batas length.data dan minimum 0
            let angka = Math.floor(Math.random() * data.length) + 0;
            cek.push(angka);
        }
        // membuang angka yang sama
        cek = Array.from(new Set(cek));
        console.log(cek);
        // ---------------------------------
        // ambil data tertentu

        for (let i = 0; i < cek.length; i++) {
            let nilai = cek[i];

            let soaldata = data[nilai]["soal" + nilai]["soal"];
            let jwb0 = data[nilai]["soal" + nilai]["a"];
            let jwb1 = data[nilai]["soal" + nilai]["b"];
            let jwb2 = data[nilai]["soal" + nilai]["c"];
            let jwb3 = data[nilai]["soal" + nilai]["d"];
            let nih = data[nilai]["soal" + nilai]["nih"];
            let bnr = data[nilai]["soal" + nilai]["benar"];

            let jwb = [jwb0, jwb1, jwb2, jwb3, nih];

            jwbs.push(bnr);

            // ---------------------------------
            // rangkai konten soal;
            let bg_pertanyaan = document.createElement('div');
            bg_pertanyaan.setAttribute('class', 'bg_pertanyaan');
            if (i != 0) {
                bg_pertanyaan.className += " hilang";
            }

            let no = document.createElement('div');
            no.setAttribute('class', 'no');

            let soal = document.createElement('h3');
            let text_soal = document.createTextNode('Soal Nomor ');

            let hr = document.createElement('hr');

            let span = document.createElement('span');
            let text_span = document.createTextNode(i + 1);

            span.appendChild(text_span);
            soal.appendChild(text_soal);
            soal.appendChild(span);
            soal.appendChild(hr);
            no.appendChild(soal);
            bg_pertanyaan.appendChild(no);

            // ---------------------------------

            let inti_pertanyaan = document.createElement('div');
            inti_pertanyaan.setAttribute('class', 'inti_pertanyaan');

            let pertanyaannya = document.createElement('div');
            pertanyaannya.setAttribute('class', 'pertanyaannya');

            let new_p = document.createElement('p');
            let text_p = document.createTextNode(soaldata);

            new_p.innerHTML = text_p.textContent;
            // new_p.appendChild(text_p);
            pertanyaannya.appendChild(new_p);
            inti_pertanyaan.appendChild(pertanyaannya);
            bg_pertanyaan.appendChild(inti_pertanyaan);

            // ---------------------------------

            let batas = document.createElement('div');
            batas.setAttribute('class', 'batas');

            inti_pertanyaan.appendChild(batas);
            bg_pertanyaan.appendChild(inti_pertanyaan);

            // ---------------------------------

            let soall = document.createElement('div');
            soall.setAttribute('class', 'soall');

            for (let ii = 0; ii < 4; ii++) {
                let bg_pilihan = document.createElement('label');
                bg_pilihan.setAttribute('class', 'bg_pilihan');

                let input = document.createElement('input');
                input.setAttribute('type', 'radio');
                input.setAttribute('name', 'radio' + i);
                if (ii == 0) {
                    input.setAttribute('value', 'a');
                } else if (ii == 1) {
                    input.setAttribute('value', 'b');
                } else if (ii == 2) {
                    input.setAttribute('value', 'c');
                } else {
                    input.setAttribute('value', 'd');
                }

                let textnya = document.createElement('span');
                textnya.setAttribute('class', 'textnya');

                let nav_pilihan = document.createElement('span');
                nav_pilihan.setAttribute('class', 'nav_pilihan');

                let new_p1 = document.createElement('p');
                let text_p1 = document.createTextNode(jwb[ii]);

                new_p1.appendChild(text_p1);
                textnya.appendChild(nav_pilihan);
                textnya.appendChild(new_p1);
                bg_pilihan.appendChild(input);
                bg_pilihan.appendChild(textnya);
                soall.appendChild(bg_pilihan);
            }

            // ---------------------------------

            inti_pertanyaan.appendChild(soall);
            bg_pertanyaan.appendChild(inti_pertanyaan);

            // ---------------------------------

            let nav_sebelum = document.createElement('div');
            nav_sebelum.setAttribute('class', 'btn prev nav_sebelum');
            if (i == 0) {
                nav_sebelum.className += " disable";
            }

            let new_p2 = document.createElement('p');
            let text_p2 = document.createTextNode('Sebelumnya');

            new_p2.appendChild(text_p2);
            nav_sebelum.appendChild(new_p2);
            inti_pertanyaan.appendChild(nav_sebelum);
            bg_pertanyaan.appendChild(inti_pertanyaan);

            // ---------------------------------

            let nav_selanjut = document.createElement('div');
            nav_selanjut.setAttribute('class', 'btn next nav_selanjut');
            if (i == (cek.length - 1)) {
                nav_selanjut.className += " disable";
            }

            let new_p4 = document.createElement('p');
            let text_p4 = document.createTextNode('Selanjutnya');

            new_p4.appendChild(text_p4);
            nav_selanjut.appendChild(new_p4);
            inti_pertanyaan.appendChild(nav_selanjut);
            bg_pertanyaan.appendChild(inti_pertanyaan);

            // ---------------------------------

            let div_jawaban = document.createElement('div');
            div_jawaban.setAttribute('class', 'pertanyaannya hilang');


            let new_pp = document.createElement('p');
            let text_pp = document.createTextNode("Jawaban  = " + nih);

            new_pp.appendChild(text_pp);
            div_jawaban.appendChild(new_pp);

            inti_pertanyaan.appendChild(div_jawaban);

            // ---------------------------------

            let clear = document.createElement('div');
            clear.setAttribute('class', 'clear');
            inti_pertanyaan.appendChild(clear);
            bg_pertanyaan.appendChild(inti_pertanyaan);

            // letakkan di 
            const bd = document.getElementById('divSoal');
            bd.appendChild(bg_pertanyaan);
        }

        // perintah tombol selanjutnya
        // ---------------------------------

        let bg_pertanyaannya = document.querySelectorAll('.bg_pertanyaan');
        let tmbl_selanjutnya = document.querySelectorAll('.nav_selanjut');
        for (let i = 0; i < tmbl_selanjutnya.length - 1; i++) {
            tmbl_selanjutnya[i].addEventListener('click', function () {

                let bgnya = tmbl_selanjutnya[i].parentElement.parentElement;
                // menghilangkan bg_sekarang
                bgnya.className += " hilang";
                // menampilkan bg_pertanyaan selanjutnya
                bg_pertanyaannya[i + 1].className = bg_pertanyaannya[i + 1].className.replace("hilang", "");
            });

        }

        // ---------------------------------
        // perintah tombol kembali
        let tmbl_sebelumnya = document.querySelectorAll('.nav_sebelum');
        for (let i = 0; i < tmbl_sebelumnya.length; i++) {
            tmbl_sebelumnya[i].addEventListener('click', function () {
                if (i != 0) {
                    let bgnya = tmbl_sebelumnya[i].parentElement.parentElement;
                    bgnya.className += " hilang";
                    // menampilkan bg_pertanyaan selanjutnya
                    bg_pertanyaannya[i - 1].className = bg_pertanyaannya[i - 1].className.replace("hilang", "");
                }
            });
        }

        // ---------------------------------
        // tangkap soall pilihan yang dklik dan beri warna di nav soal
        let soallnya = document.querySelectorAll('.soall');
        let soal_navnya = document.querySelectorAll('.soal_nav');

        for (let i = 0; i < soallnya.length; i++) {
            soallnya[i].addEventListener('click', function () {

                let pilihannya = document.querySelectorAll('.bg_pilihan input');
                for (let j = 0; j < pilihannya.length; j++) {
                    pilihannya[j].addEventListener('click', function () {
                        soal_navnya[i].className = soal_navnya[i].className.replace("belum", " sudah");
                    });
                }


            });
        }

        // ---------------------------------
        // cek jawaban
        let selesai = document.querySelector('.selesai');
        let pil_user = [];
        new_jwb_urut = [];
        new_jwb_urut_no = [];

        selesai.addEventListener('click', function () {
            let sarat = 0;

            for (let t = 0; t < jwbs.length; t++) {
                if ((soal_navnya[t].className.indexOf('sudah') == 10)) {
                    sarat = sarat + 1;
                }
            }

            if (sarat == jwbs.length) {
                // array kunci
                // console.log(jwbs);
                hasilakhir = 0;
                benarr = 0;
                salahh = jwbs.length;
                console.log('jwb' + jwbs.length);

                let pils_soal = document.querySelectorAll('input');


                for (let i = 0; i < jwbs.length; i++) {
                    for (let j = 0; j < pils_soal.length; j++) {

                        // if (j == 0) {

                        // } else {
                        // menonaktifkan pilihan
                        pils_soal[j].setAttribute('disabled', 'true');

                        if (pils_soal[j].attributes.name.nodeValue == 'radio' + i) {
                            if (pils_soal[j].checked == true) {

                                // cek jawaban dengan kunci
                                pil_user.push(pils_soal[j].value);
                                console.log(pils_soal[j])
                                if (pils_soal[j].value == jwbs[i]) {
                                    hasilakhir = hasilakhir + 10;
                                    benarr = benarr + 1;
                                    console.log('benar ' + benarr);
                                } else {
                                    hasilakhir = hasilakhir;
                                }
                                console.log('hasil ' + hasilakhir);
                            }
                        }
                        // }


                    }

                }
                for (let i = 0; i < cek.length; i++) {
                    for (let j = 0; j < cek.length; j++) {
                        if (i == cek[j]) {
                            new_jwb_urut.push(pil_user[j]);
                            new_jwb_urut_no.push(cek[j]);
                        }
                    }
                }
                console.log("jwb_user_urut_no :" + new_jwb_urut_no);
                console.log("jwb_user_urut :" + new_jwb_urut);


                // simpan kedatabase----------
                console.log(namafix);
                console.log(sekolahfix);
                console.log(kelasfix);
                console.log(hasilakhir);
                let waktunya = waktu();
                let harinya = hari();

                createTask(sekolahfix, namafix.toUpperCase(), kelasfix, hasilakhir, waktunya, harinya, new_jwb_urut);

                localStorage.setItem('hasilnya', hasilakhir)
                localStorage.setItem('waktunya', waktunya)
                localStorage.setItem('harinya', harinya)
                setTimeout(function () {
                    window.location = 'hasilnya.html';
                }, 3000)
                // document.querySelector('.container').classList.toggle('hilang');
                // document.querySelector('.hasilnya').classList.toggle('hilang');

            } else {
                alert('Masih Ada Soal Yang Belum Dijawab, Periksa Kembali . . . !');
            }


        });


        // ---------------------------------
        // nav_soal diklik
        let klik_nav_soal = document.querySelectorAll('.soal_nav');
        for (let l = 0; l < klik_nav_soal.length; l++) {
            klik_nav_soal[l].addEventListener('click', function () {
                let pindah_bgsoalnya = document.querySelectorAll('.bg_pertanyaan');
                for (let k = 0; k < pindah_bgsoalnya.length; k++) {

                    if (k == l) {
                        pindah_bgsoalnya[k].className = pindah_bgsoalnya[k].className.replace(" hilang", " ");
                    } else {
                        if (pindah_bgsoalnya[k].className.indexOf('hilang') == -1) {
                            pindah_bgsoalnya[k].className += ' hilang';
                        }
                    }
                }
            });
        }

        MathJax.typeset();
    }

}
dat.open('GET', 'json/data.json', true);
dat.send();








var d = new Date();
var t = d.getTime();
var counter = t;

// ambil jamnya
window.setTimeout("waktu()", 1000);

function waktu() {
    var tanggal = new Date();
    setTimeout("waktu()", 1000);
    return (tanggal.getHours() + ":" + tanggal.getMinutes() + ":" + tanggal.getSeconds());
}

// function harinya
function hari() {
    tanggallengkap = new String();
    namahari = ("Minggu Senin Selasa Rabu Kamis Jumat Sabtu");
    namahari = namahari.split(" ");
    namabulan = ("Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember");
    namabulan = namabulan.split(" ");
    tgl = new Date();
    hari = tgl.getDay();
    tanggal = tgl.getDate();
    bulan = tgl.getMonth();
    tahun = tgl.getFullYear();
    tanggallengkap = namahari[hari] + ", " + tanggal + " " + namabulan[bulan] + " " + tahun;
    return (tanggallengkap);
}

// function menyimpan ke firebase
function createTask(sekolah, nama, kelas, nilai, waktunya, hari, jwb) {
    counter += 1;
    var task = {
        id: counter,
        sekolah: sekolah,
        nama: nama,
        kelas: kelas,
        nilai: nilai,
        waktu: waktunya,
        hari: hari,
        jawabannya: jwb
    }

    let db = firebase.database().ref("kuis1/" + counter);
    db.set(task);
}

//waktu
let lama = Date.now();
let lamawaktu = lama + 1000 * 30 * 60;
let ulang = setInterval(function () {
    let now = new Date().getTime();
    let waktumundur = lamawaktu - now;
    let menit = Math.floor((waktumundur % (1000 * 60 * 60)) / (1000 * 60));
    let detik = Math.floor((waktumundur % (1000 * 60)) / 1000);
    document.getElementById("time").innerHTML = menit + ":" + (detik < 10 ? "0" + detik : detik)
    let pil_user = [];
    new_jwb_urut = [];
    new_jwb_urut_no = [];
    if (waktumundur < 1) {
        clearTimeout(ulang);
        // array kunci
        // console.log(jwbs);
        hasilakhir = 0;
        benarr = 0;
        salahh = jwbs.length;
        console.log('jwb' + jwbs.length);

        let pils_soal = document.querySelectorAll('input');


        for (let i = 0; i < jwbs.length; i++) {
            for (let j = 0; j < pils_soal.length; j++) {

                // if (j == 0) {

                // } else {
                // menonaktifkan pilihan
                pils_soal[j].setAttribute('disabled', 'true');

                if (pils_soal[j].attributes.name.nodeValue == 'radio' + i) {
                    if (pils_soal[j].checked == true) {

                        // cek jawaban dengan kunci
                        pil_user.push(pils_soal[j].value);
                        console.log(pils_soal[j])
                        if (pils_soal[j].value == jwbs[i]) {
                            hasilakhir = hasilakhir + 10;
                            benarr = benarr + 1;
                            console.log('benar ' + benarr);
                        } else {
                            hasilakhir = hasilakhir;
                        }
                        console.log('hasil ' + hasilakhir);
                    }
                }
                // }


            }

        }
        for (let i = 0; i < cek.length; i++) {
            for (let j = 0; j < cek.length; j++) {
                if (i == cek[j]) {
                    new_jwb_urut.push(pil_user[j]);
                    new_jwb_urut_no.push(cek[j]);
                }
            }
        }

        for (let j = 0; j < new_jwb_urut.length; j++) {
            if (new_jwb_urut[j] == undefined) {
                new_jwb_urut[j] = "-"
            }
        }
        console.log("jwb_user_urut_no :" + new_jwb_urut_no);
        console.log("jwb_user_urut :" + new_jwb_urut);


        // simpan kedatabase----------
        console.log(namafix);
        console.log(sekolahfix);
        console.log(kelasfix);
        console.log(hasilakhir);
        let waktunya = waktu();
        let hariini = harinya();

        createTask(sekolahfix, namafix.toUpperCase(), kelasfix, hasilakhir, waktunya, hariini, new_jwb_urut);

        localStorage.setItem('hasilnya', hasilakhir)
        localStorage.setItem('waktunya', waktunya)
        localStorage.setItem('harinya', hariini)
        setTimeout(function () {
            window.location = 'hasilnya.html';
        }, 3000)
        // document.querySelector('.container').classList.toggle('hilang');
        // document.querySelector('.hasilnya').classList.toggle('hilang');


    }

    function harinya() {
        tanggallengkap = new String();
        namahari = ("Minggu Senin Selasa Rabu Kamis Jumat Sabtu");
        namahari = namahari.split(" ");
        namabulan = ("Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember");
        namabulan = namabulan.split(" ");
        tgl = new Date();
        hari = tgl.getDay();
        tanggal = tgl.getDate();
        bulan = tgl.getMonth();
        tahun = tgl.getFullYear();
        tanggallengkap = namahari[hari] + ", " + tanggal + " " + namabulan[bulan] + " " + tahun;
        return (tanggallengkap);
    }
}, 1000)
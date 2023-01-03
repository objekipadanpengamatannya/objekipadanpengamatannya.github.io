const nama = document.querySelector(`[data-input="nama"]`);
const kelas = document.querySelector(`[data-input="kelas"]`);
const masuk = document.querySelector(`[data-input="masuk"]`);

masuk.onclick = () => {
    firebase.database().ref().push({
        'nama': nama.value
    });
}
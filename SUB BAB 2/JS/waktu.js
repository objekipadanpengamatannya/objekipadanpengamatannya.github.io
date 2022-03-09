const pendulum = document.querySelector('#pendulum');
const stopwatch = document.querySelector('#stopwatch');
const atom = document.querySelector('#atom');

const btnPendulum = document.querySelector('#btnPendulum');
const btnStopwatch = document.querySelector('#btnStopwatch');
const btnAtom = document.querySelector('#btnAtom');

btnPendulum.addEventListener("click", function(){
    pendulum.classList.remove('hide');
    stopwatch.classList.add('hide');
    atom.classList.add('hide');

    btnPendulum.classList.add('btn-bgpeach-aktif');
    btnStopwatch.classList.remove('btn-bgpeach-aktif');
    btnAtom.classList.remove('btn-bgpeach-aktif');
})

btnStopwatch.addEventListener("click", function(){
    pendulum.classList.add('hide');
    stopwatch.classList.remove('hide');
    atom.classList.add('hide');

    btnPendulum.classList.remove('btn-bgpeach-aktif');
    btnStopwatch.classList.add('btn-bgpeach-aktif');
    btnAtom.classList.remove('btn-bgpeach-aktif');
})

btnAtom.addEventListener("click", function(){
    pendulum.classList.add('hide');
    stopwatch.classList.add('hide');
    atom.classList.remove('hide');

    btnPendulum.classList.remove('btn-bgpeach-aktif');
    btnStopwatch.classList.remove('btn-bgpeach-aktif');
    btnAtom.classList.add('btn-bgpeach-aktif');
})
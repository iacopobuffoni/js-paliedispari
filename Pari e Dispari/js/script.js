let _SceltaTipo = prompt("Iniziamo ! Scegli Pari o Dispari ?").toLowerCase();
let _SceltaNum = prompt("Adesso scegli un numero da 1 a 5 !");
_SceltaNum = parseInt(_SceltaNum);
let _PariDispari;

function RandomNumber (min, max) {

    return Math.floor(Math.random() * (max - min + 1) ) + min;

}

function PariDispari (num) {

    if (num % 2 == 0) {

        alert("La somma dei numeri è " + _Somma + " , PARI !");
        _PariDispari = "Pari".toLowerCase();

    } else {

        alert("La somma dei numeri è " + _Somma + " , DISPARI !");
        _PariDispari = "Dispari".toLowerCase();

    }

    return _PariDispari;
}

let _SceltaPc = RandomNumber(1, 5);
let _Somma = _SceltaNum + _SceltaPc;
let _Risultato = PariDispari(_Somma);

if (_Risultato == _SceltaTipo) {

    alert("Complimenti ! Hai vinto tu !");

} else {

    alert("Mi dispiace ! Ha vinto il Pc !");

}

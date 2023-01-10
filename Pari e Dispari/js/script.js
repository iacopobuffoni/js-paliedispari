let _SceltaTipo = prompt("Iniziamo ! Scegli Pari o Dispari ?");
let _SceltaNum = prompt("Adesso scegli un numero da 1 a 5 !");
_SceltaNum = parseInt(_SceltaNum);
let _Random;

function RandomNumber(random) {

    _Random = Math.floor(Math.random() (5 - 1)) + 1;
    return _Random;
}

let _SceltaPc = RandomNumber(_Random);
console.log(_SceltaPc);
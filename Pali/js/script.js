let _parola = prompt("Inserisci una parola, verifichiamo che sia palindroma").toLowerCase();


function parolaPalindroma(parola) {

    let _parolaArr = parola.split("");
    let _parolaRev = _parolaArr.reverse();
    let _parolaRevStr = _parolaRev.join("");
    return _parolaRevStr;

}

let _risultato = parolaPalindroma(_parola);

if (_parola == _risultato) {

    console.log("La parola inserita è palidroma");

} else {

    console.log("La parola inserita non è palindroma");

}

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del
// passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste
// regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare
//   centesimi sul prezzo). Questo richiederà un minimo di ricerca.

const userName = prompt("Qual è il tuo nome?");
const kmToGo = parseInt(
  prompt("Bene, " + userName + " e quanti chilometri dovresti fare?")
);
const userAge = prompt("E quanti anni hai, " + userName + "?");

var conferma = confirm(
  "Quindi, " +
    userName +
    " vuoi percorrere " +
    kmToGo +
    "km ed hai " +
    userAge +
    " anni?"
);

//vcalcolo prezzo
const prezzoKm = 0.21;
let x = prezzoBiglietto(kmToGo, prezzoKm);
function prezzoBiglietto(kmToGo, prezzoKm) {
  return kmToGo * prezzoKm;
}

//sconti

const sconto20 = 20;
const sconto40 = 40;

//prezzo finale?

if (conferma == true) {
  alert("Daje, vediamo il tuo biglietto quanto verrebbe a costare...");

  if (userAge < 18) {
    let prezzoFinale = prezzoConSconto().toFixed(2) + "€";
    function prezzoConSconto() {
      return x - sconto20 * (x / 100);
    }
    alert(prezzoFinale + "\nQuesto è il prezzo del tuo biglietto");
  } else if (userAge > 65) {
    let prezzoFinale = prezzoConSconto().toFixed(2) + "€";
    function prezzoConSconto() {
      return x - sconto40 * (x / 100);
    }
    alert(prezzoFinale + "\nQuesto è il prezzo del tuo biglietto");
  }
} else {
  alert("Nooooo ricarica la pagina :(");
}

//debug
// console.log(userName, kmToGo, x, conferma, prezzoFinale);

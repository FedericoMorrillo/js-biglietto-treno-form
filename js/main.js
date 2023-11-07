"use strict";

// prezzo al km
const prezzoAlKm = 0.21;

// funzione che al click prende i valori da input
const btnGenera = document.getElementById("genera"); // bottone con evento on click
btnGenera.addEventListener ("click", function(){

    // valori input
let nominativo = document.getElementById("nominativo").value;
let km = Number( document.getElementById("km").value);
let età = document.getElementById("anni").value;

//prezzo totale
let prezzo = (km * prezzoAlKm).toFixed(2);

// messaggio del console.log
let msg = "Il prezzo del biglietto è di: " + prezzo + "€";

// variabile sconti
const scontoMinori = prezzo / 100 * 20;
const msgScontoMinori = "il prezzo totale è: " + prezzo + "con uno sconto di 20%";
const scontoOver65 = prezzo / 100 * 40;
const msgScontoOver = "il prezzo totale è: " + prezzo + " con uno sconto di 40%";

//condizioni per gli sconti
if (età == "minorenne"){
    prezzo = prezzo - scontoMinori;
    msg = "il prezzo del biglietto è di: " + prezzo + "€ con uno sconto del 20% sul prezzo totale";
} else if (età == "over65"){
    prezzo = prezzo - scontoOver65;
    msg = "il prezzo del biglietto è di: " + prezzo + "€ con uno scondo del 40% sul prezzo totale";
}

//stampa
console.log( "nome e cognome: "+ nominativo +" km da percorrere: "+ km +" fascia d' età: "+ età);
console.log(msg);
});



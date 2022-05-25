/* Snack3
Il software deve chiedere per 5 volte all’utente di inserire un numero. 
Il programma stampa la somma di tutti i numeri inseriti. */

// Creo un contatore
let i = 0;

// Creo la variabile per la somma
let sum = 0;

// Creo un ciclo che prende l'input dell'utente fino a quando non vengono dati 5 numeri
do {
    // Prendo l'input
    const inputNum = parseInt(prompt("Inserisci un numero!"));

    if (!isNaN(inputNum)){
        // Se è un numero, lo aggiungo alla somma e aumento il contatore
        sum += inputNum;
        i++;
    } else {
        // Se non è un numero, mostro un messaggio di errore
        alert("Ho detto un numero!");
    }
} while(i < 5);

// Stampo la somma
console.log(sum);
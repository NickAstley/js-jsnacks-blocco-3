/* Snack1
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50. */

// Creo un array vuoto
const userNums = [];

// Creo una variabile per la somma dei numeri
let sum = 0;

// Creo un ciclo che chiede all'utente numeri fino a quando la loro somma è minore di 50
do {
    // Prendo l'input dell'utente
    const numInput = parseInt(prompt("Inserisci un numero!"));

    // Se non è un NaN, lo aggiungo all'array e alla somma
    if (!isNaN(numInput)) {
        userNums.push(numInput);
        sum += numInput;
    }
    // Stampo la somma
    console.log(sum);
} while (sum < 50);

// Stampo l'array
console.log(userNums.join(", "));
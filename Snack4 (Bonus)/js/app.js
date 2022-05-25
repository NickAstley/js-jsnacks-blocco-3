/* Snack4 (Bonus)
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. 
Interrompi il ciclo appena il nome è stato trovato. */

// Creo l'array con i nomi degli invitati
const guests = ["Andrea", "Luca", "Biagio", "Florian", "Mattia", "Domenico", "Silvia", "Anna", "Anxhela", "Erica"];

// Creo un contatore
let i = 0;

// Creo una variabile che controlla se l'input è presente nell'array
let found = false;

// Prendo l'input dell'utente
const userName = prompt("Inserisci il tuo nome!");

// Creo un ciclo che controlla l'array
do {
    if (guests[i] === userName) {
        // Se trovo l'utente, modifico la booleana
        found = true;
    }
    i++;
} while( i < guests.length && !found)

// Stampo il risultato della ricerca
if (found) {
    alert("Benvenuto alla festa!")
} else {
    alert("Non sei invitato!")
}
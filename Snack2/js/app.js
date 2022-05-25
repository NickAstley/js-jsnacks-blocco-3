/* Snack2
Fai inserire un numero, che chiameremo N, all’utente. 
Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. 
Ogni volta che ne crei uno, stampalo. */

// Prendo l'input dell'utente
let arraysNum = parseInt(prompt("Inserisci un numero!"));

// Creo un ciclo che controlla che non sia un NaN
while(isNaN(arraysNum)) {
    arraysNum = parseInt(prompt("Ho detto un numero!"));
}

// Prendo il div dove stampare gli array
const divGeneratedArrays = document.getElementById("generatedArrays");

// Creo un ciclo che genera N array
for (let i = 0; i < arraysNum; i++) {
    // Creo l'array
    const randomArray = [];

    // Creo un ciclo che riempie l'array con numeri casuali da 0 a 100
    for (let i = 0; i < 10; i++) {
        randomArray[i] = Math.floor(Math.random() * 100 + 1);
    }

    // Stampo l'array
    console.log(randomArray.join(",  "));
    divGeneratedArrays.innerHTML += `<div>` + randomArray.join(",  ") + `</div>`;
}
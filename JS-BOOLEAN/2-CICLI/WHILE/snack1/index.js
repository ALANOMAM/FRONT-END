/*
Snack 1
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
Continua a chiedere i numeri all’utente e
a inserirli nell’array fino a quando la somma degli elementi è minore di 50
*/


let arrayOutput = document.querySelector("#array")
let sommaOutput = document.querySelector("#sum")

let numeri = []
let somma = 0
let n = 0


while(somma < 50){
let numero = Number(prompt("inserisci un numero"))

numeri.push(numero)
somma = somma + numeri[n]

n++
}

arrayOutput.innerHTML = numeri
sommaOutput.innerHTML = somma
console.log(somma)
console.log(numeri)
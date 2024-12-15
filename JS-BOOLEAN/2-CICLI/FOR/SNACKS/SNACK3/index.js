/*
Snack 3:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
Solo se è dispari inseriscilo nell’array.
Stampa a schermo il contenuto dell'array
*/
let oddNumbers = document.querySelector("#odd")
let numbers = []

for(let i =0; i<6 ;i++){
 let number= prompt("inserisci il numero")
 if(!isNaN(number)){
    if(!(number % 2 == 0)){
    numbers.push(number)}
 } else{
    numbers.push(NaN)
 }

}

oddNumbers.innerHTML=numbers
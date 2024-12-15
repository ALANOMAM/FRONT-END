/*
Snack 4:
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/

let sommaOutput = document.querySelector("#sum")
let numero = prompt("dammi un numero a 4 ciffre")
let somma = 0
if(numero.length == 4){
for(let i=0; i<numero.length; i++){
 somma = somma+Number(numero.charAt(i))
}
sommaOutput.innerHTML=somma
}else{
    sommaOutput.innerHTML="inserisci un numero a 4 ciffre"
}

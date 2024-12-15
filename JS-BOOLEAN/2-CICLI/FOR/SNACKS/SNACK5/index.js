
/*
Snack 5:
Stampa il cubo dei primi N numeri,
(partendo da 1, il numero N indicato dall'utente è compreso)
dove N è un numero indicato dall’utente.
*/

let numeroUtente = document.querySelector("#userNum")
let cubo = document.querySelector("#cube")
let risposta =document.querySelector("#answer")

let numero = Number(prompt("inserisci un numero"))
let numeri=[]  
if(!isNaN(numero)){
    for(let i=0 ; i<numero;i++){
        numeri.push(Math.pow((i+1),3))
       }  
}else{
    risposta.innerHTML = "Il dato inserito non è un numero"
}


numeroUtente.innerHTML=numero
cubo.innerHTML=numeri

/*
Snack 2:
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/
let somma = document.querySelector("#addition")

let numbers =[];
let sum =0;
 

for(let i=0 ; i<10 ; i++){
 let number= Number(prompt("inserisci un numero"))
  if( !isNaN(number)){
    numbers.push(number) 
    sum = sum+numbers[i]
  }else{
    prompt("the value inserted is not admited")
  }
  
}

somma.innerHTML = sum



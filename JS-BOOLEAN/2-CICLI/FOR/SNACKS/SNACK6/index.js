 
 /*
 Snack 6:
Calcola la somma e la media dei primi 10 numeri
 */
let somma = document.querySelector("#add")
let mediaNumeri = document.querySelector("#average")

let sum = 0
let numeri =[]

for(let i= 0; i<10; i++ ){
  numeri.push(i+1)  
 sum = sum+numeri[i]    
}
let media = sum/10

somma.innerHTML = sum
mediaNumeri.innerHTML = media


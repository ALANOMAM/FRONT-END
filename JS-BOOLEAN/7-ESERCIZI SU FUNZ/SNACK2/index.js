 /*

Snack 2:
Scrivi una funzione che fonda due array presi come parametri (date per scontato che abbiano lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

 */

let array1 = ["k","l","m"]
let array2 = [5,6,9]
let mixArray = []
 let lunghezzaArray = array1.length // questo solo perchè dobbiamo dare per scontato che i due array hanno la stessa lunghezza.
    
for (i = 0; i < lunghezzaArray; i++) {
    mixArray.push(array1[i], array2[i]);
}
console.log(mixArray)



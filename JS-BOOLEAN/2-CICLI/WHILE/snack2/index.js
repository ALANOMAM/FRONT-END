/*

Crea due array che hanno un numero di elementi diversi. 
Aggiungi elementi all’array che ha meno elementi fino a 
quando ne avrà tanti quanti l’altro. 
(Se iniziate con un array da 3 elementi e l'altro da 5, 
eseguite istruzioni sinchè non ne hanno entrambi 5

*/


// inizializzo il primo array
const array1 = [3,5,1];

// inizializzo il secondo array
const array2 = [1,2,3,4,5,6,7,8,9];

// controllo se il primo è più corto del secondo
// ricordiamoci che il while può non essere eseguito neanche una volta
// se la condizione non si verifica neanche una volta
while (array1.length < array2.length) {
  
    // aggiungi elementi
    array1.push(Math.floor(Math.random() * 100)+ 1)

}

while(array1.length > array2.length) {
    // stessa cosa ma inversa

    array2.push(array1[array2.length]);

}

console.log("Array 1:", array1);
console.log("Array 2:", array2);

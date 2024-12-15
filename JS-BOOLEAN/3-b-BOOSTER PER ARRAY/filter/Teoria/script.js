
// hai un array di numeri da 1 a 5
// crea un nuovo array con i solo i numeri dispari

const numbers = [1,2,3,4,5];
// [1,3,5]

// array nuovo vuoto
let newArray = [];


// possiamo utilizzare il nuovo metodo .filter()
// cicla tutti gli elementi dell'array di partenza
// si aspetta di trovare da qualche parte per ogni elemento un "return true"
// se si trova un return true, inserisce QUELL'ELEMENTO attuale nel nuovo array

newArray = numbers.filter((currentNumber) => {
    
    if(currentNumber % 2 != 0) {
        return true;
    }

    // metodo più veloce:
    // return currentNumber % 2 != 0

})

console.log(newArray)
// considerazioni:
// l'array che ci restituirà il metodo .filter() non potrà mai essere con più elementi rispetto a quello di partenza
// può avere lo stesso numero o inferiore. (di solito inferiore, visto che stiamo filtrando)
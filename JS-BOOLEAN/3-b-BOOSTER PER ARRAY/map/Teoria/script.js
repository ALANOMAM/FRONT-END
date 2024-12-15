
// hai un array di numeri da 1 a 5
// crea un nuovo array con i numeri iniziali elevati al quadrato

const numbers = [1,2,3,4,5];
// [1,4,9,16,25]




// metodo map
// fatto apposta per generare un array MODIFICATO rispetto ad uno di partenza
// il metodo map prende un array
// cicla tutti gli elementi
// restituisce un nuovo array modificando l'elemento attuale come gli indichiamo noi

// quindi dichiaro un nuovo array "newArray"
// dico che il suo contenuto è = al risultato del .map()

// inizializzo l'array come vuoto
let newArray = [];

// ci inserisco il risultato del .map()
newArray = numbers.map(function(currentElement, index) {
    // esegue queste azioni per ogni elemento
    // console.log(currentElement)

    // se io dentro il map() ho un return di un valore
    // prenderò questo valore e lo pusherò in automatico dentro l'array nuovo
    // return currentElement * currentElement;
    return currentElement * currentElement

    // semmai la nostra funzione non avesse da qualche parte un return, ci inserirebbe un valore undefined

})

// in questo caso abbiamo un nuovo array con i valori restituiti
// dal return dentro map
console.log(newArray)

// considerazioni:
// .map() non potrà mai restituire un array con un numero di elementi maggiore o minore
// avranno sempre lo stesso numero di elementi
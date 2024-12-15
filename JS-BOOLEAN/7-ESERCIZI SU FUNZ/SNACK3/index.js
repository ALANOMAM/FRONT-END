/*
Snack 3:
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
Es:
-abbiamo un array così: arrayNumeri = [0, 1, 2, 3, 4, 5, 6]
-La nostra funzione viene dichiarata ad esempio così function tagliaArray(array, posizioneMin, posizioneMax)
-La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “posizioneMin” e “posizioneMax”
Nel nostro caso, se la chiamassimo così tagliaArray(arrayNumeri, 2, 4) ci restituirebbe un array così composto:
[2, 3, 4]

*/

const array = ["a","b","c","d","e","f"]
let posizioneMinima 
let posizioneMassima

function taglio (Array,posizioneMinima ,posizioneMassima){

    let arrayTagliato = Array.slice(posizioneMinima,posizioneMassima+1) // aggiunto "+1" cosi comprende anche l'ultimo valore visto che il metodo "slice" non lo considera.

    console.log(arrayTagliato) 
    
}

//chiamo la funzione passando il valore degli argomenti
taglio(array,1,3)

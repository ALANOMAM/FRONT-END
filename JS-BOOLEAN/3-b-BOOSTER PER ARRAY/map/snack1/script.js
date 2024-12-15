// A partire da un array di stringhe, 
// crea un secondo array formattando le stringhe del primo array 
// in minuscolo e con l’iniziale maiuscola.

const parole = ['pippo', 'PLUTO', 'Paperino', "ToPoLiNo"];
// [‘Pippo’, ‘Pluto’, ‘Paperino’]



const nuoveParole = parole.map(parolaCorrente => {
    
    let newWord = "";

    newWord += parolaCorrente[0].toUpperCase()
    newWord += parolaCorrente.substring(1).toLowerCase()
    
    // console.log(newWord)

    return newWord;
})

console.log(nuoveParole);
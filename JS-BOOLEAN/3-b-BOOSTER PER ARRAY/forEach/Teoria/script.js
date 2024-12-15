
const students = ['Paolo', 'Giulia', 'Marco'];

// come ciclare un array in maniera ancora più veloce

// for(let i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }


// foreach cicla sempre e solo dal primo all'ultimo elemento del nostro array
students.forEach( (currentElement) => {
    console.log(currentElement)
})

// se vogliamo possiamo creare delle funzioni anonime
// (le funzioni anonime sono funzioni senza nome che sono fatte apposta
// per essere utilizzate UNA SOLA VOLTA e poi messe via).
// anzichè quindi 
/*
function (parametro1, parametro2) {
    // azioni
}

*/
// possiamo scrivere
/*

(parametro1, parametro2) => {
    // azioni
}

*/
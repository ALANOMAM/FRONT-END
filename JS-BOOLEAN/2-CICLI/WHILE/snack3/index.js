/*

Inserisci un numero,
 se è pari stampa il numero, 
 se è dispari stampa il numero successivo.

*/

 
let userChoice = prompt("Scegli un numero, oppure digita 'exit'");
// const userChoice = 6;

console.log("user choice", userChoice);


// sinchè la userChoice è diversa da "exit"

while (userChoice != "exit") {

    if ( ! isNaN(userChoice)) { //solo se il testo inserito è un numero

        // convertiamo in numero la scelta dell'utente
        const userNumber = Number(userChoice)

        // facciamo il controllo
        if (userNumber % 2 == 0) { // pari

            console.log(userNumber);
        
        } else { // dispari
        
            console.log(userNumber + 1);
        }

    } else {
        alert("Inserisci un numero");
    }

    userChoice = prompt("Scegli un altro numero, o digita 'exit'")
}

console.log("uscita") 

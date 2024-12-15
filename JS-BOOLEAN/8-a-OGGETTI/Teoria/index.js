

// Creamo un oggetto di tipo "persona"

// persona -> "oggetto"
// nome: "Gabriel", -> proprietà (coppia)
    // nome -> chiave
    // "Gabriel" -> valore
const persona = {
    nome: "Gabriel",
    cognome: "Spanu",
    eta: 27,
};

// aggiungiamo una proprietà al nostro oggetto
// se la chiave indicata è di una proprietà già presente verrà sovrascritta
// altrimenti verrà aggiunta
persona['citta'] = "Usini";  // la notazione a parentesi quadre è uno dei modi in cui si può interagire con un ogetto
persona.altezza = 1.90  // l'altro modo è la notazione a punti. in entrambi i casi aggiungiamo nuove proprietà. 

console.log(persona)
//  la notazione a parentesi quadre ci permette di interagire con le proprietà del nostro oggetto in MODO DINAMICO
// mentre la notazione a punti è in generale piu statica.

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                 
             // OGGETTO CON ARRAY DENTRO
       
 const classe = {
    nome: "Classe 118",
    partenza: "29 Nov 2023",
    alunni: ["Giorgio", "Luca", "Miriam", "Marco"],
    professori: ['Elisabetta', 'Gabriel', 'Daniele', 'Davide'],
}

// primo alunno della classe
console.log(classe.alunni[0])


console.log("------ ogetto con array dentro ------------")

// stampiamo il quarto professore inserito nella lista
console.log(classe.professori[3])

console.log("------- ogetto con array dentro -----------")

// stampiamo tutti i professori del mio oggetto
for (let i = 0; i < classe.professori.length; i++) {

    console.log(classe.professori[i])

}              
            
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                          //ARRAY DI OGGETTI 

const studenti = [
    {
        nome: "Gabriel",
        cognome: "Spanu",
        eta: 28
    },
    {
        nome: "Spongebob",
        cognome: "Squarepants",
        eta: 28
    },
    {
        nome: "Patrick",
        cognome: "Stella",
        eta: 28
    }
]


// stampo il nome dello studente con indice 2 (terzo)
console.log(studenti[2].nome)

console.log("------- array di oggetti -----------")


// stampo tutte le proprietà di ogni studente
for (let i = 0; i < studenti.length; i++) {

    const oggettoAttuale = studenti[i];

// Il ciclo "for(..in..)" è un ciclo for praticamente creato per gli ogetti
//sfrutta la dinamicità della notazione a parentesi quadre per interagire con l'ogetto.
    for (let key in oggettoAttuale) {

        console.log(key + ": " + oggettoAttuale[key])
        
    }

    console.log("------------------")

}                     
            
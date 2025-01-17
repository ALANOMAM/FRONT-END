/*
Sfruttiamo le timing functions per fare il conto alla rovescia per la pausa di questa mattina!
Ogni secondo il nostro countdown dovrà scalare fino alle 11:00 di stamattina!
*/



// memorizzazione elementi html
const secondsElement = document.querySelector("#seconds");
const minutesElement = document.querySelector("#minutes");
const hoursElement = document.querySelector("#hours");
const daysElement = document.querySelector("#days");




// memorizzo la data bersaglio
const finalDate = new Date("18 Feb, 2024 14:47:00");
const finalDateTime = finalDate.getTime();
// finalDateTime: qui abbiamo memorizzato in maniera più semplice (per il computer) 
// la data el'orario prefissato per il countdown

// mi salvo il setInterval in una variabile
// tutto quello che avrà questa variabile è semplicemente l'id del setInterval
const timer = setInterval(updateTimeLeft, 1000);


updateTimeLeft()




function updateTimeLeft() {

    
    // memorizzo il momento attuale in una variabile
    const now = new Date();
    const nowTime = now.getTime();


    // calcoliamo la differenza (in millisecondi) tra l'ora di adesso e la data prefissata
    const timeDifference = finalDateTime - nowTime;
    // console.log(timeDifference)


    if(timeDifference > 0) {

        // dobbiamo in qualche modo utilizzare il % (modulo)
        // questo operatore ci aiuterà a dare un valore massimo ai secondi, minuti, ore ecc
        // permettendoci di lavorare più chiaramente

        // partendo da un valore in millisecondi,
        // devo ottenere di volta in volta:

        // SECONDI
        // il " % 60" fa si che ogni 60 unità ritorna a zero e ricomincia il conto
        const seconds = Math.floor(timeDifference / 1000 % 60).toString().padStart(2, '0'); // la parte da ".toString" fino alla fine ci aiuta solo a scivere 00:00:00 non ha influenza sul calcolo
        // console.log(seconds);

        // MINUTI
        // il " % 60" fa si che ogni 60 unità ritorna a zero e ricomincia il conto
        const minutes = Math.floor(timeDifference / (1000 * 60) % 60).toString().padStart(2, '0');// la parte da ".toString" fino alla fine ci aiuta solo a scivere 00:00:00 non ha influenza sul calcolo
        // console.log(minutes);

        // ORE
        // il " % 24" fa si che ogni 24 unità ritorna a zero e ricomincia il conto
        const hours = Math.floor(timeDifference / (1000 * 60 * 60) % 24).toString().padStart(2, '0'); // la parte da ".toString" fino alla fine ci aiuta solo a scivere 00:00:00 non ha influenza sul calcolo


        // GIORNI
        const days =  Math.floor(timeDifference / (1000 * 60 * 60 * 24))


        // assegnazione dei valori in pagina
        secondsElement.innerText = seconds;
        minutesElement.innerText = minutes;
        hoursElement.innerText = hours;
        daysElement.innerText = days + " giorni,";


        

    } else {
        // se la data è già passata
        document.querySelector("#clock").innerText = "Timer scaduto!";

        // rimuoviamo il setInterval, quindi blocchiamolo, "puliamolo"
        clearInterval(timer);
    }

}
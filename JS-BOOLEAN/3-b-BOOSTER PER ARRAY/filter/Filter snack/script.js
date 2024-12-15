var automobili = [
    { 
        marca: "Fiat", 
        modello: "500", 
        alimentazione: "benzina"
    },
    { 
        marca: "Volkswagen", 
        modello: "Golf", 
        alimentazione: "diesel"
    },
    { 
        marca: "Tesla", 
        modello: "Model S", 
        alimentazione: "elettrico"
    },
    { 
        marca: "Toyota", 
        modello: "Prius", 
        alimentazione: "ibrida"
    },
    { 
        marca: "Renault", 
        modello: "Clio", 
        alimentazione: "gpl"
    },
    { 
        marca: "BMW", 
        modello: "i3", 
        alimentazione: "elettrico"
    },
    { 
        marca: "Audi", 
        modello: "A3", 
        alimentazione: "diesel"
    },
    { 
        marca: "Hyundai", 
        modello: "Kona", 
        alimentazione: "elettrico"
    },
    { marca: 
        "Mercedes-Benz", 
        modello: "GLC", 
        alimentazione: "diesel"
    },
    { 
        marca: "Fiat", 
        modello: "Panda", 
        alimentazione: "metano"
    }
];

/*
Dividi le automobili in 3 array separati: 
nel primo array solo le auto a benzina, 
nel secondo solo le auto a diesel,
 nel terzo il resto delle auto.
 */

// array di macchine a benzina
let benzinCars = [];

// metodo con arrow function
benzinCars = automobili.filter(currentCar => {
    // forma contratta per restituire true o false in base alla condizione
    return currentCar.alimentazione == "benzina";

});
console.log(benzinCars)



// array di macchine a diesel
// qui usiamo il modo tradizionale per la funzione (completamente interscambiabile con la arrow function)
const dieselCars = automobili.filter(function(currentCar) {
    // controllo tradizionale
    if (currentCar.alimentazione == "diesel") {
        return true
    }
})
console.log(dieselCars)



// array di macchine con diversa alimentazione da benzina e diesel
// forma più contratta possibile
// mettiamo in una stessa riga il filter, 
    // il parametro che richiediamo di volta in volta "actualCar" 
    // e il valore da restituire (condizione che ci da true o false)
    // dentro la condizione ricordate che potete utilizzare a piacimento && e ||
const otherCars = automobili.filter( actualCar => actualCar.alimentazione != 'benzina' && actualCar.alimentazione != "diesel");
console.log(otherCars)
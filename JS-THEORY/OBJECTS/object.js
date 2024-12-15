                                   // OGGETTO BASE 

/* 1

   var user = {
username:"alan",
mail:"omamalan@hotmail.it",
years:26,
male:true
   };

console.log(user.mail); // estrarre e stampare una caratteristica del mio oggetto "user"
console.log(user["mail"]);
// i due modi sopra danno lo stesso risultato, 
// la differenza stra qaundo abbiamo a che fare con oggetti dinamici.
// ovvero possiamo avere una funzione che genera degli oggetti, ed è possibile che ogni oggetto sia diveso.
// quindi se ad esempio il primo oggetto ha la caratteristica "mail" e il secondo no  ce l'ha,
// nel primo caso me lo legge tranquillamente, mentre nel secondo caso che non ce diventa problematico.
// il primo console mi darebbe errore, bloccando tutto mentre il secondo console me lo darebbe semplicemente undefined consentendomi di andare avanti cmq


user.years = 22; // modificare la caratteristica "years" del mio oggetto "user"
console.log(user.years);
   
*/


/* 2

const band ={
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

console.log(Object.keys(band)) // this is going to print out "vocals","guitar","bass" ecc which are the keys of our band object.
console.log(Object.values(band)) // this is going to print out all ths names which are the values of our band object.

delete band.drums // when we want to delete a property
console.log(band.hasOwnProperty("drums")) // to check if our band object has a property drums. in this cas we will have "false" as our output because we deleted the drums property.

*/





                                 // OGGETTI CON FUNZIONI COME PARAMETRI 

/* 1
      

        var user = {
     username:"alan",
     mail:"omamalan@hotmail.it",
     years:26,
     male:true,
     getBirthDayYear: function () //possiamo aggiungere delle funzioni che fanno operazione usando i paramentri
     {
return (new Date().getFullYear())-this.years; // the method "this" helps us access the components of our obj when we are inside the function
     }
};
     
     console.log(user.getBirthDayYear());

*/


/* 2

     const brothers = {
        name1 : "alan",
        name2 : "andy",
        age1: 27,
        age2: 24,
       
        older: function(){
       
         if (this.age1>this.age2){
           return "alan is the older brother"
         }
       
         else if(this.age2>this.age1){
       return "andy is the older brother"
         }
       
        }
       
       
       };
       
       console.log(brothers.older())    

*/




                            // OGGETTI CON FUNZIONI, ARRAYS, E ALTRI OGGETTI COME PARAMETRI
  /*

 const utente = {
 
    name: "alan",
    age: 27,
    brothers: ["andy","debora", "giada"],
    
    parents: {
      father: "herve",
      mother: "georgette"
    },
    
    prova : function(){
      return "hello world"
    }
    
    };
    
    console.log( utente.name)
    console.log( utente.age)
    console.log(utente.brothers[2])
    console.log(utente. parents.mother)
    console.log(utente.prova());

*/


                                    // OBJECTS AND IHERITANCE 

/*

const vehicle ={
    wheels: 4,
    engine: function(){
      return "vrooom!"
    }
  };
  
  const truck = Object.create(vehicle) // here i just created an object called "truck" that inherits properties from "vehicle" obj
  truck.doors = 2 //here i just added a parameter to the truck obj
  
  console.log(truck.doors)
  console.log(truck.wheels)
  console.log (truck.engine())
  
  */


  
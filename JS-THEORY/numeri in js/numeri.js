//CONVERSIONE NUMERI
/*
function tutorial(){
 x=54;
 console.log(x.toString());
 console.log(x.toString(10)); // DECIMALE
 console.log(x.toString(2));// BINARIO
 console.log(x.toString(16)); // ESADECIMALE
 console.log(x.toString(8)); //OTTALE
     }
    tutorial();
    */

 //ARRONTANDAMENTI
 /*
 function tutorial(){
    x=67.4;
    console.log(x.toFixed(0)); // toglie tutti i numeri dopo la vitrgola e arrontonda per eccesso.
    console.log(x.toFixed(1)); // solo una cifra dopo la virgola, sempre arrotondando.
    console.log(x.toFixed(2)); // due cifre..
    console.log(Math.round(x));// arrotonda matematicamente. 
    console.log(Math.sqrt(25));
       }
       tutorial();
       */

 // NUMERI CASUALI

 function tutorial(){
   console.log(Math.random()); //genera nymeri casuali tra 0 e 1
   console.log(Math.floor(Math.random()*10)); // con questa sintassi, prendo dei valori random da 0 a 1, li moltiplico per 10 quindi mi darà un range da 1 a 10, poi con la funzione esterna taglio tutti i nemeri dopo la virgola. quindi avrò un range di valori casuali e interi da 1 a 10.  
       }
       tutorial();

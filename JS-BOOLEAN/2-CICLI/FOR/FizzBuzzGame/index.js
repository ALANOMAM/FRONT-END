
/*
Consegna:
Scrivi un programma che stampi in DOM i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. Aggiungere la giua stilizzazione.
*/ 

let grigliaElementi = document.querySelector("#block")

for(let i=1;i<=100;i++){
    //creo i div che mi serviranno per contenere i contenuti, da appendere dopo al block sopra
    const Element = document.createElement("div")

     //qui aggiungo una classe e sistemo lo stile del mio elemento appena creato
     Element.className="square";
     Element.style.color="black";
     Element.style.fontSize="20px";

     

    if(i % 3 == 0 && !(i % 5 == 0)){
    //cambio i contenuti e aggiungo un'altra classe ai mie div creati sopra a seconda del valore di i
        Element.innerHTML="Fizz" 
    //occhio a LASCIARE LO SPAZIO A SINISTRA quando si aggiunge una seconda classe     
        Element.className=" fizzSquare"
     }else if(i % 5 == 0 && !(i % 3 == 0)){
        Element.innerHTML="Buzz"
        Element.className=" buzzSquare"

     } else if(i % 3 == 0 && i % 5 == 0){  
        Element.innerHTML="FizzBuzz"
        Element.className=" fizzBuzzSquare"
     } else{
        Element.innerHTML=i
     }

  // qui appendo i miei div creati sopra al div contenitore con id "block" che ho chiamato "grigliaElementi"
  // andranno all'interno del mio contenitore block.
     grigliaElementi.append(Element)
      
}

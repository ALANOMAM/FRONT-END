/*
Palidroma
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma
(ad esempio, questa funzione potrebbe funzionare così: passandole la parola come parametro, farà i suoi calcoli per capire se è palindroma o meno e ci restituirà true o false in base all'esito)
*/

let parolaOutput = document.querySelector("#word")
let risposta = document.querySelector("#answer")


 let parola = prompt("inserici una parola")

 let array1 =[]
 let array2 =[]
  
   
  
function palidroma(x){

for(let i =0 ;i<x.length;i++){
    
    array1.push(x[i])
      
    }

  /*console.log (array1)*/


    for(let j = x.length-1; j>=0; j-- )  {

        array2.push(x[j])
        
      }

  /*console.log(array2) */ 

  
  for(let m= 0; m<x.length ; m++){
  if(array1[m] === array2[m]){
    return "vero"
  }else{
return "falso"

  }

}

}

let risultato = palidroma(parola)



 parolaOutput.innerHTML= parola
 risposta.innerHTML = risultato


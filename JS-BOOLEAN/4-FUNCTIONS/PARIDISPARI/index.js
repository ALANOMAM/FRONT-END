/*
Pari e Dispari
L’utente sceglie pari o dispari.
Inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Se l'utente ha indovinato l'esito (pari o dispari) della somma ha vinto, altrimenti ha perso.
*/


let userOutput = document.querySelector("#user-number")
let pcOutput = document.querySelector("#pc-number")
let somma = document.querySelector("#sum")
let conslusione = document.querySelector("#conclusion")


let sceltaUser = prompt("scegli pari o dispari")
let numeroUser = Number(prompt("inserisci un numero tra 1 e 5"))

 if(numeroUser >= 1 && numeroUser <= 5){

    function pcRandom(){
        let random = Math.floor((Math.random()*5)+1)
        return random
       }
       
       let numeroComputer = pcRandom()
       
       
      // una funzione può avere più di un return SOLO se tra if
      // altrimenti ne prende solo uno.  
       function pariODispari(a,b){
           
           if((a+b) % 2 == 0){
              return "pari"
           }else{
               return "dispari"
           }
       
       }
       
       let risultato = pariODispari(numeroUser,numeroComputer) 
       
       
       if(risultato === sceltaUser){
           conslusione.innerHTML= "<b style='color:green'>hai vinto</b>"
       } else{
           conslusione.innerHTML= "<b style='color:red'>hai perso</b>"
       }
       
        userOutput.innerHTML= numeroUser
        pcOutput.innerHTML= numeroComputer
        somma.innerHTML= risultato



 }else{
    alert('devi inserire un numero tra 1 e 5, ripropva')
 }



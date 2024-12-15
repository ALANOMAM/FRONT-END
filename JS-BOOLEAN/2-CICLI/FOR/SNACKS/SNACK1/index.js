/*
Snack 1:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/


let primaParola = document.querySelector("#firstWord")
let secondaParola = document.querySelector("#secondWord")
let button = document.querySelector("#btn")

let primoOutput = document.querySelector("#first")
let secondoOutput = document.querySelector("#second")
let risultato = document.querySelector("#result")



button.addEventListener("click", function(){

    if( isNaN(primaParola.value) && isNaN(secondaParola.value)){

        primoOutput.innerHTML=primaParola.value
        secondoOutput.innerHTML=secondaParola.value
        
        if(primaParola.value.length > secondaParola.value.length){
         risultato.innerHTML=primaParola.value
        }else if(primaParola.value.length < secondaParola.value.length){
            risultato.innerHTML=secondaParola.value
        }else{
            risultato.innerHTML= "sono lunghe uguali"
        }
    
    } else{
       risultato.innerHTML = "hai inserito un numero da qualche parte, vogliamo solo parole"
    }

}

)





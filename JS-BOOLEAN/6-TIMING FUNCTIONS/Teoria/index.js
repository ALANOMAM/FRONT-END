/*
Ci sono due principali timing functions, abbiamo "setTimeout" e 
abbiamo "setInterval".

*/


// 1-setTimeout chiamera la funzione print dopo 2000 millisecondi, 
//ovvero dopo 2 secondi SOLO UNA VOLTA

let conto1 = document.querySelector("#count1")

setTimeout(print,2000)

function print(){
    conto1.innerHTML = "<strong> SORPRESA!!! </strong>"
}


//2-setInterval in questo caso, mi fa chiamare la funzione "count" ogni 1000 millisecondi
// ovvero ogni secondo PER SEMPRE finche non viene fermato
let ferma = document.querySelector("#stop")
let conto2 = document.querySelector("#count2")
const countContinuo = setInterval(count,1000) 
let num = 1

function count (){
    conto2.innerHTML=num++
   // console.log(num++)
}

//collego il mio pulsante al commando che ferma il setInterval
ferma.addEventListener("click", function(){
//commando che ferma il setInterval, il commando "clearInterval" ferma quello che prende come argomento
clearInterval(countContinuo) 
 
})
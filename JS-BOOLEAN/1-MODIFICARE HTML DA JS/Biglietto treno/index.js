/* Ci sono tre macro modi in cui si usa spesso javascript
1-PER MODIFICARE E INTERAGIRE COL CODICE HTML
2-PER REAGIRE A EVENTI
3-PER INTERAGIRE CON IL BROWSER(impostare cookies ecc)

In qeusto file vedremo una intro ai primi due scopi di js
*/ 

/* Nel nostro esempio sotto dobbiamo creare una interfaccia che calcoli il prezzo
del biglietto del treno in base ai km 
- 0.21$ al kilomentro
- Se l'utente è minorenne ha 20% di sconto 
- Se è over 65 ha 40% di sconto
- Useremo dei tag input per raccogliere le info del passeggero.
- L'output deve essere fatto in pagina non solo console
*/

/*la parte che collega i mie componenti HTML con JS*/
/*parte input*/
let userId = document.querySelector("#userIdentity")
let age = document.querySelector("#userAge")
let distance = document.querySelector("#userDistance")
let button = document.querySelector("#btn")
/*parte output*/
let prezzo = document.querySelector("#result")
let offerta = document.querySelector("#offer")
let identità = document.querySelector("#identity")

/*qui aggiungo una classe ad  elementi html tramite js*/
age.className="red"
userId.className="red"
distance.className="red"
button.className="red"

/* qui stylizzo un elemento html tramite js */
button.style.color="green"

/*commando che permette di capire tutto quelo che possiamo fare con l'elemento selezionato.questa è solo una curiosità*/
console.dir(button)

/*qui aggiungo un event listener che parte quando clicco il button*/
 button.addEventListener("click",
 function(){
    let fullPrice = distance.value*0.21
    let price;
 
    identità.innerHTML = userId.value 
    if(age.value < 18){
        price = fullPrice - ((20/100) * fullPrice);
        prezzo.innerHTML = price.toFixed(2);
        offerta.innerHTML="Ridotto 20%"

    } else if(age.value > 65){
       price = fullPrice - ((40/100) * fullPrice);
       prezzo.innerHTML = price.toFixed(2);
       offerta.innerHTML="Ridotto 40%"
       
    } else{
      price = fullPrice;
       prezzo.innerHTML = price.toFixed(2);
       offerta.innerHTML="Biglietto standard"
    } 
    
 }
 )
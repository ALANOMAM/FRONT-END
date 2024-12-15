/*
Snack 1:
Scrivi una funzione che accetti una stringa come argomento e la restituisca girata (es. "Ciao" -> "oaiC")
*/
  let parola = prompt("inserisci una parola")

  if(isNaN(parola)){

  let parolaOutput = document.querySelector("#word")
  let reverseParolOutput = document.querySelector("#reverse-word")


  parolaOutput.innerHTML = parola

  function reverse(){

  // array dove salverò ogni lettera della mia parola rovesciata  
  const parolaReverse = []

  // ciclo che riepie il mio array al contrario
    for(let i =parola.length-1 ; i>=0 ; i--){
        parolaReverse.push(parola[i])
    }
   
    // questo mi fa passare da array composto da diverse letter ad una stringa
    let stringParolaReverse = parolaReverse.join("")
    
    reverseParolOutput.innerHTML = stringParolaReverse

    return stringParolaReverse
   
}

// chiamo la funxione reverse appena creata
reverse()

  }else{
    alert('devi inserire una parola')
  }


/* 
Consegna:
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

Wayne Barnett	 Founder & CEO	         wayne-barnett-founder-ceo.jpg
Angela Caroll	 Chief Editor	         angela-caroll-chief-editor.jpg
Walter Gordon	 Office Manager	         walter-gordon-office-manager.jpg
Angela Lopez	 Social Media Manager 	 angela-lopez-social-media-manager.jpg
Scott Estrada	 Developer	             scott-estrada-developer.jpg
Barbara Ramos	 Graphic Designer	     barbara-ramos-graphic-designer.jpg

1-MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

2-MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

3-MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

4-BONUS 1:
Trasformare la stringa foto in una immagine effettiva

5-BONUS 2:
Organizzare i singoli membri in card/schede

*/

let lista = document.querySelector("#list")

let team = [

{
    nome: "wayne Barnet",
    ruolo: "Founder & ceo",
    foto: "img/wayne-barnett-founder-ceo.jpg"
},

{
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "img/angela-caroll-chief-editor.jpg"
},

{
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "img/walter-gordon-office-manager.jpg"
},

{
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "img/angela-lopez-social-media-manager.jpg"
},

{
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "img/scott-estrada-developer.jpg"
},

{
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "img/barbara-ramos-graphic-designer.jpg"
},

]

 //console.log(team[1].foto)

for(let i= 0; i<team.length; i++){
   // console.log(team[i])
    let imagini = `<img src= ${team[i].foto} alt="image"></img>`

    lista.innerHTML += `<div class="grid"> <div> ${imagini}   ${team[i].nome}  <span>${team[i].ruolo}</span> </div> </div>`
}







const box = document.querySelector(".container")
box.addEventListener("mouseover", Hover)

function Hover(e){
box.innerHTML=
`<div class="container">

<div class="display1">   
${e.clientX}
</div>

<div class="display2">
${e.clientY}  
</div>


</div>`
}
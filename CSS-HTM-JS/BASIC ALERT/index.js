
/* CLICK ALERT FOR THE FIRST BUTTON*/
const boxDiv1 = document.querySelector(".box1")
boxDiv1.addEventListener("click", onClick)

function onClick(e){
alert("this is the click alert")
}

/* HOVER ALERT FOR THE SECOND BUTTON*/

const boxDiv2 = document.querySelector(".box2")
boxDiv2.addEventListener("mouseover", onHover)

function onHover(e){
alert("this is the hover alert")
}
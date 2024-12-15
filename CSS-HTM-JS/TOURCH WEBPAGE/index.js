
var btn = document.getElementById("btn")
var light = document.getElementById("light")

function toggleBtn(){
    btn.classList.toggle("active") // this makes sure that the bacground of our toggle switch changes and the position of the circle, when we click on it
   light.classList.toggle("on") // this turs the light on by selecting our class "on" that we created in css.
}
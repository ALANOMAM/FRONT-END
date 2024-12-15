let kgRef = document.getElementById("kg")
let lbRef = document.getElementById("lb")
let ozRef = document.getElementById("oz")

let convertFromKg = () => {
    let kg = kgRef.value;
    lbRef.value = (kg * 2.205).toFixed(2) /* the function "toFixed(2)" rounds the calculations to 2 decimal places*/
    ozRef.value = (kg * 35.274).toFixed(2)
};

let convertFromLb = () => {
    let lb = lbRef.value;
    kgRef.value = (lb/2.205).toFixed(2) /* the function "toFixed(2)" rounds the calculations to 2 decimal places*/
    ozRef.value = (lb * 16).toFixed(2)
};

let convertFromOz = () => {
    let oz = ozRef.value;
    kgRef = (oz/35.274).toFixed(2) /* the function "toFixed(2)" rounds the calculations to 2 decimal places*/
    lbRef = (oz/16).toFixed(2)
};

kgRef.addEventListener("input", convertFromKg )
lbRef.addEventListener("input", convertFromLb )
ozRef.addEventListener("input", convertFromOz)

window.addEventListener("load",convertFromKg)
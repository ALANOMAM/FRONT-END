var hrs = document.getElementById("hrs")
var min = document.getElementById("min")
var sec = document.getElementById("sec")

/* the setInterval wakes sure that whatever is inside update authomatically every few seconds or miliseconds*/

setInterval( ()=>{

/*gives us the time but only updates when we refresh the page*/
var currentTime = new Date();

hrs.innerHTML = currentTime.getHours(); 
min.innerHTML = currentTime.getMinutes();
sec.innerHTML = currentTime.getSeconds();
/*gives us the time but only updates when we refresh the page*/

},1000) /* we set the interval to update every one millisecond*/
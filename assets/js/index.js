//const greet = document.getElementById('greeting');
//console.log(greet)
//greet.addEventListener("click", function(e){
// e.target.style.color="red";
// console.log('am clicked')
//})
const greeting = document.querySelector('.greeting');
greeting.onmouseover = logMouseover;
greeting.onmouseout = logMouseout;


function logMouseover(){
  // greeting.setAttribute('style','display:none')
}
function logMouseout(){
   
}
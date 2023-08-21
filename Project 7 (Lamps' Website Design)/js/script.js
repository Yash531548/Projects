var light=document.getElementById('Light');
var button=document.getElementById('btn');

// button.addEventListener("click",togglebtn();
function togglebtn(){
    light.classList.toggle('lamp-light');
    button.classList.toggle('active');
}
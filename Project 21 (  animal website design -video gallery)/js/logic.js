var playbtn = document.getElementsByClassName("playbtn");
var closebtn = document.getElementById("closebtn");
var videoviewer = document.getElementById("video-viewer");
var pvideo = document.getElementById("pvideo");

closebtn.onclick = function(){
    videoviewer.style.display = "none";
}

function playvideo(file){
    pvideo.src= file;
    videoviewer.style.display = "block";
}
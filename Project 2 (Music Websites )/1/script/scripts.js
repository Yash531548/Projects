var image = document.getElementById("images");
var audio = document.getElementById("Audio");


images.onclick = function () {
    if (audio.paused) {
        audio.play();
        image.src = "/img/pause.png";
    }else {
        audio.pause();
        image.src = "/img/play.png";
    }
}
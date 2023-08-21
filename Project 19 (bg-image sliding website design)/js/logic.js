var imgslide = document.getElementById('img-slider');

var images = new Array(
    "/img/img1.jpg",
    "/img/img2.jpg",
    "/img/img3.jpg",
    "/img/img4.jpg"
)

var len = images.length;
var i= 0;

function slider(){
    if(i > len-1){
        i=0;
    }
    imgslide.src = images[i];
    i++;
    setTimeout('slider()',3000);
}
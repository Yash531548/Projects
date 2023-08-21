let btn = document.getElementsByClassName("btn");
let gallery = document.getElementById('images');


let images = new Array(
    "/Studio8 Img/pic5.jpg",
    "/Studio8 Img/pic6.jpg",
    "/Studio8 Img/pic7.jpg",
    "/Studio8 Img/pic8.jpg"
);

// Two ways 

// for(let i = 0; i<btn.length; i++){
//     btn[i].onclick = function(){
//         gallery.src = images[i];
//     };
// }

for (let i = 0; i < images.length; i++) {
    btn[i].onclick = function () {
        gallery.src = images[i];
    }
} 


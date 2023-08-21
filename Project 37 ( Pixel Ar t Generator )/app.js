const ColorPicker = document.getElementById("Color-picker")

const PixelContainer = document.querySelector(".container")

const Resetbtn = document.querySelector("button")

const PixelSize = document.getElementById("Grid-col-selector")

let size  = PixelSize.value;
let draw = false;
function PixelMaker(size){
    PixelContainer.style.setProperty('--size',size)
    for(let i =0 ; i< size *size ;i++){
        let div = document.createElement("div");
        div.classList.add("pixel");

        div.addEventListener("mouseover",function(){
            if(!draw) return
            div.style.backgroundColor = ColorPicker.value
        })
        div.addEventListener("mousedown",function(){
            div.style.backgroundColor = ColorPicker.value
        })
        PixelContainer.append(div)
    }
}

window.addEventListener("mousedown",function(){
    draw = true;
})

window.addEventListener("mouseup",function(){
    draw = false;
})

function ResetPixel(){
    PixelContainer.innerHTML ="";
    PixelMaker(size);
}

Resetbtn.addEventListener("click",ResetPixel)

PixelSize.addEventListener("keyup",function(){
    size = PixelSize.value;
    ResetPixel();
})
PixelMaker(size)
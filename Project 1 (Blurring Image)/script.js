var text = document.querySelector('.text')
var img = document.querySelector('.image')

let upload = 0;

let num = setInterval(blurr, 35);

function blurr() {
    upload++;
    if (upload > 99) {
        clearInterval(num)
    }
    text.innerText = `${upload}%`
    text.style.opacity = scale(upload, 0, 100, 1, 0)
    img.style.filter = `blur(${scale(upload, 0, 100, 30, 0)}px)`
}
    
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    }
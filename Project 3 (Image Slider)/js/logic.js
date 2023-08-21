const slidecontainer = document.querySelector(".container");
const slideLeft = document.querySelector(".left-side");
const slideRight = document.querySelector(".right-side");
const downButton = document.querySelector(".down-button");
const upButton = document.querySelector(".up-button");
const slidesLength = slideRight.querySelectorAll('div').length;
const music = document.getElementById('Audio');
const music1 = document.getElementById('Audio1');
// In this case length property is used because we need total number of slides

// ${}-> is expression syntax

let SlideIndex = 0;
// multiply with 100 because we need to move whole slide from screen with viewport height
// lenght index start with 0 So to get last slide we need to subtract 1 as for us last sile is (n) but it's (n-1)
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));


// slides
var changeSlide = (direction) => {
    // The clientHeight property returns the viewable height of an element in pixels, including padding, but not the border, scrollbar or margin
    var slideHeight = slidecontainer.clientHeight;
    if (direction == 'up') {
        SlideIndex++;
        if (SlideIndex > slidesLength - 1) {
            SlideIndex = 0;
        }
    }
    else if (direction == 'down') {
        SlideIndex--;
        if (SlideIndex < 0) {
            SlideIndex = slidesLength - 1;
        }
    }
    // To actually moves slide we need to apply transform property
    // To move upward(-)
    slideRight.style.transform = `translateY(-${SlideIndex * slideHeight}px)`
    slideLeft.style.transform = `translateY(${SlideIndex * slideHeight}px)`
    // slideHeight is variable height 
}

//  Music
upButton.onclick = () => {
    if (music.paused) {
        music.play();
    }
    // else if(music.play){
    //     music.pause();
    // }
}
downButton.onclick = function () {
    // if(music.paused){
    //     music.play();
    // }
    // else 
    if (music.play) {
        music.pause();
    }
}


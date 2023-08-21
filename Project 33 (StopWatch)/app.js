const timedisplayer = document.querySelector(".Timer")
const buttons = document.querySelector(".buttons")
let [seconds,minutes,hours] = [0,0,0]


function Timer(){
    let s,m ,h
    seconds++;
    if(seconds == 60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++
        }
    }
    // METHOD 1
    // if(seconds < 10){
    //     s = `0${seconds}`
    // }  
    // else{
    //     s= seconds
    // }
    // METHOD 2
    (seconds<10)? s= `0${seconds}` : s =seconds;
    if(minutes < 10){
        m = `0${minutes}`
    }  
    if(hours < 10){
        h = `0${hours}`
    }  
    
    timedisplayer.innerHTML = `${h}:${m}:${s}`    
}
let watch = null
let time;
function WatchTimer(){
    if(watch!== null){
        clearInterval(time)
    }
    time = setInterval(Timer,1000)
}

function StopTimer(){
    clearInterval(time)
}

function ResetTimer(){
    [seconds,minutes,hours] = [0,0,0]
    timedisplayer.innerHTML = `0${hours}:0${minutes}:0${seconds}`
}
buttons.children[1].addEventListener("click",function(){
    WatchTimer();
})

buttons.children[0].addEventListener("click",function(){
    StopTimer()
})
buttons.children[2].addEventListener("click",function(){
    ResetTimer()
})


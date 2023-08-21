// Elements
const pannelbottom = document.querySelector("#pbtm");
const Timer = document.querySelectorAll(".box");
const playbtn = document.querySelector("button");

// Variables
let Playerscore = 0;

// Function Definations
function ScoreIncreament() {
    Playerscore += 10;
    Timer[2].textContent = Playerscore;
}
function makeBubble() {
    let bubbles = '';

    for (let i = 1; i < 120; i++) {
        bubbles += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`
    }

    pannelbottom.innerHTML = bubbles;
}

function DisplayResult() {
    let PlayAgainbtn = document.createElement("button");
    PlayAgainbtn.innerText = "Play Again"
    let Result =
        `<div class="gameEnd ">
        <h2>GAME OVER</h2>
        <span>Your Score is <span id="score">${Playerscore}</span></span>
        <button id="playGameAgainbtn">Play Again</button>
        </div>`;
    pannelbottom.innerHTML = Result;
    btn = pannelbottom.querySelector("#playGameAgainbtn")
    return btn;
}

function runTime() {
    // let T = Number(Timer[1].textContent);
    let T = 60;
    let TInterval = setInterval(function () {
        if (T > 0) {
            T--;
            Timer[1].textContent = T
        } else {
            clearInterval(TInterval)
            DisplayResult();
            btn.addEventListener("click", () => {
                Playerscore = 0
                runTime()
                PlayGame()
            })
        }
    }, 1000)
}

function MakeHit() {
    randomHit = Math.floor(Math.random() * 10);
    Timer[0].textContent = randomHit;
}

function PlayGame() {
    MakeHit();
    runTime();
    makeBubble();

}
// Event Listener
// use event Bubbling In Below Event rather than appling eventlistener on all bubble apple event on there parent element
pannelbottom.addEventListener("click", function (e) {
    let clickedbubble = Number(e.target.textContent)
    if (clickedbubble === randomHit) {
        ScoreIncreament();
        MakeHit();
        makeBubble();
    }
})

playbtn.addEventListener("click",()=>{
    PlayGame()
})


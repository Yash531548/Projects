const leftbox = document.querySelector(".left")
const rightbox = document.querySelector(".right")
const lists = document.querySelectorAll(".list")

// console.log(leftbox,rightbox);

for (const li of lists) {
    li.addEventListener("dragstart",(e)=>{
        let selected = document.createElement("div");
        selected.classList.add("list")
        selected = e.target
        console.log(selected.nodeType)
        rightbox.addEventListener("dragover",(e)=>{
            e.preventDefault();
        })
        rightbox.addEventListener("drop",(e)=>{
            rightbox.appendChild(selected)
            // such that we can drag the other element
            selected = null;
        })
        
        leftbox.addEventListener("dragover",(e)=>{
            e.preventDefault();
        })
        leftbox.addEventListener("drop",(e)=>{
            leftbox.appendChild(selected)
            // such that we can drag the other element
            selected = null;
        })
    })
}

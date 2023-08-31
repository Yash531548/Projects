const message = document.querySelector(".Status")

function messageOnline(){
    message.textContent = "Internet Connection Available"
    // message.style.cssText = `
    // background-color: rgb(219, 245, 219);
    // color: #033103;
    // box-shadow: 0 0 14px 1px #033103;`
    message.classList.remove("Internet-Not_available")
    message.classList.toggle("Internet-available")
}
function messageOffline(){
    message.textContent = "No Internet Connection "
    // message.style.cssText =`
    // background-color: rgb(248, 221, 216);
    // color: #1a0602;
    // box-shadow: 0 0 14px 1px #701707;`
    message.classList.remove("Internet-available")
    message.classList.toggle("Internet-Not_available")
}

if(window.navigator.onLine){
    messageOnline();
}else{
    messageOffline();
}

window.addEventListener("online",messageOnline)
window.addEventListener("offline",messageOffline)
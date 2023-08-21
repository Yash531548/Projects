var btt = document.getElementById("Scroll_bottom_top"),
    body = document.body,
    docEl =document.documentElement,
    offset = 100,
    scrollpos,docheight;
// It's Return max value from differnet angle
// variation in height for multiple different browser
docheight = Math.max(body.scrollHeight,body.offsetHeight,docEl.scrollHeight,docEl.clientHeight,docEl.offsetHeight);
if(docheight != 'undefined'){
    offset = docheight/4;
}

// add scroll event listener 
window.addEventListener("scroll",function(event){
    //for various browser
    scrollpos = body.scrollTop || docEl.scrollTop; 
    btt.className = (scrollpos > offset) ? "visibile" : "";
})

btt.addEventListener("click",function(event){
    event.preventDefault();
    docEl.scrollTop= 0;
})

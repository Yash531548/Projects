const listbox = document.querySelector("#listEl");
const listEl = document.querySelector(".to_do_list");
// keyup enent when the key is released (store/tell the after key typed)
listbox.addEventListener("keyup", function (event) { 
    // console.log(event);
    if (event.key == "Enter") {
        addList(this.value)
        // here this refer to list , 
        // by empty string we are clearing input text area
        this.value = '';
    }
})


const addList = (list) => {
    let listItem = document.createElement("li");
    // console.log(typeof(list))
    listItem.innerHTML = `
            ${list}
            <ion-icon name="close-circle-outline"></ion-icon>    
            `;
    listItem.querySelector("ion-icon").addEventListener("click",
        function(){
            listItem.remove();           
    })

    listEl.addEventListener("click",function(e){
        e.target.classList.toggle("complete");
    })
    listEl.appendChild(listItem)   
}






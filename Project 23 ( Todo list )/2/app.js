const ItemArray = localStorage.getItem("List") ? JSON.parse(localStorage.getItem("List")): [];

document.querySelector("#listEl").addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        const item = document.querySelector("#listEl")
        createItem(item);
    }
})

function displayItems(){
    let items = "";
    for (let i = 0; i < ItemArray.length; i++) {
        items += `<li>
        <ion-icon name="close-circle-outline" class="delete"></ion-icon>
        ${ItemArray[i]} 
    </li>`                        
    }
    document.querySelector(".to_do_list").innerHTML = items;
    activedeleteListener();
}

function activedeleteListener(){
    let deletebtn =  document.querySelectorAll(".delete");
    deletebtn.forEach((db,i)=>{
        db.addEventListener("click",function(){
            deleteItems(i);
        })
    })
}
function deleteItems(i){
    ItemArray.splice(i,1);
    localStorage.setItem("List",JSON.stringify(ItemArray))
    location.reload();
}

function createItem(item){
    ItemArray.push(item.value);
    // Again make changes to itemarray such that local storage can also update 
    localStorage.setItem("List",JSON.stringify(ItemArray))
    location.reload();// to reload the page 
}


window.onload = function(){
    displayItems();
}
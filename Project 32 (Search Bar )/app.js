/*
 * fetch fake information from API  
 * content.cloneNode copy template for every div which is 1st children of div fromat
 * return object containing information which we want throught map fucntion onto empty array
 * convert all value or input into lowercase to solve case sensitivity problem
 */

const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-container]")
const searchInput = document.querySelector("[data-search]");

let users =[];

searchInput.addEventListener("input", function(e){
  const value = e.target.value.toLowerCase();
  users.forEach(user =>{
    const isVisible = user.name.toLowerCase().includes(value)|| user.email.toLowerCase().includes(value);
    user.Element.classList.toggle("hide",!isVisible)
  })
})

fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {
    users = data.map(user => {
        const card = userCardTemplate.content.cloneNode(true).children[0];
        const header = card.querySelector("[data-header]")
        const body = card.querySelector("[data-body]")
        header.textContent = user.name;
        body.textContent = user.email;
        userCardContainer.append(card);
        return {name: user.name , email: user.email , Element: card}
    });
})
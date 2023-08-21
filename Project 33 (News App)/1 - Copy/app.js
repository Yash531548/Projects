const API_KEY = "93b26d9c410848ee9954cf597de041a3";
const url =`https://newsapi.org/v2/everything?`

window.addEventListener("load",()=> fetchNews("world"))
const logo = document.getElementById("logo")

logo.addEventListener("click",()=>{
    window.location.reload()
})
const date = new Date();
const prevDate =date.getDate() - 1; 
// as this api doesn't have news of present unitl next days
const year = date.getFullYear();
// indexing start from 0 for months
const month = date.getMonth() +1; 

async function fetchNews(query){
    // `q=${query}&` +
    // `from=2023-08-05&` +
    // // 'sortBy=popularity&' +
    // `apiKey=${API_KEY}`;
    const res = await fetch(`${url}q=${query}`+`&from=${year}-0${month}-${prevDate}` +`&apiKey=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles)
}

function bindData(articles){
    const cardTemplate = document.querySelector("[Card-Template]");
    // console.log(cardTemplate);

    const cardContainer = document.querySelector(".Card-Container");
    // Such that while fetching same news doesn't get stack to eaach other
    cardContainer.innerHTML= '';
    articles.forEach(article => {
        // return the news which doesn't have images
        if(!article.urlToImage)return
        const cardclone= cardTemplate.content.cloneNode(true);
        FillInData(cardclone,article);
        cardContainer.appendChild(cardclone)
    });
}

function FillInData(cardclone,article) {
    // console.log(article);
    const newstitle = cardclone.querySelector("#news-title"); 
    const newsDes = cardclone.querySelector("#news-desc"); 
    const newsImg = cardclone.querySelector("#news-Img"); 
    const newsSource = cardclone.querySelector("#news-source");
    
    newsImg.src = article.urlToImage
    newsDes.innerHTML = article.description
    newstitle.innerHTML = article.title;
    
    const date = new Date(article.publishedAt).toLocaleString("en-IN")
    /**Asia/Jakarta is a UTC +07:00 timezone offset where as India Standard Time (IST) is a UTC +5:30 timezone offset. Time difference between Asia/Jakarta and India Standard Time (IST) is 1:30 hours ie., India Standard Time (IST) time is always 1:30 hours behind Asia/Jakarta. */
    // const date = new Date(article.publishedAt).toLocaleString("en-US", {
    //     timeZone: "Asia/Jakarta",
    // });
    newsSource.innerHTML =`${article.source.name}:  ${date} ` 

    cardclone.firstElementChild.addEventListener("click",()=>{
        window.open(article.url,"_blank")
    })
}


/**The line of code you provided seems to be using optional chaining (?.) and the `classList.remove()` method to remove the "active" class from an element with the class `curSelectedNav`.

Here's a breakdown of what this code does:

1. `curSelectedNav`: This variable likely represents a reference to a DOM element in the HTML document.

2. `?.`: The optional chaining operator (?.) is used to safeguard against potential null or undefined values. If `curSelectedNav` is null or undefined, the code following it won't throw an error but will return undefined instead.

3. `classList`: `classList` is a property of DOM elements that provides access to the class attributes of the element as a `DOMTokenList` object.

4. `remove("active")`: This method is used to remove the class name "active" from the class attribute of the `curSelectedNav` element. If the element doesn't have the "active" class, this operation will have no effect.

The purpose of this code is likely to remove the "active" class from a specific navigation element (`curSelectedNav`) if it has the class applied to it. This can be used, for example, when managing active states in navigation menus or tabs, where the "active" class is added to the currently selected or active element and removed from previously active elements when a new one is selected. */
let curSelectedNav = null;

function OnNavItem(id){
    fetchNews(id)
    // console.log(id);
    const navItem =document.getElementById(id);
    // console.log(navItem)
    curSelectedNav?.classList.remove("active");
    curSelectedNav = navItem;
    curSelectedNav.classList.add("active")
}

const sumbitBtn = document.getElementById("newsSubmit")
const newsInput = document.getElementById("newsSearch")


sumbitBtn.addEventListener("click",()=>{
    const Input =  newsInput.value;
    if(!Input)return
    fetchNews(Input);
    Input='';
    curSelectedNav?.classList.remove("active")
    curSelectedNav= null
})

const MenuImg = document.getElementById("menu-Img");

const navbarlinks = document.querySelector(".nav-links");

MenuImg.addEventListener("click",()=>{
    navbarlinks.classList.add("active")
})

const closeMenu = document.getElementById("close-img");
closeMenu.addEventListener("click",()=>{
    navbarlinks.classList.remove("active")
})
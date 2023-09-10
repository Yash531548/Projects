let access_key = 'f5Y2rOeCxmnqQHCXsLBGqNqG5vbwJXtAjckbqKr-ZWA';

let Random_url =`https://api.unsplash.com/photos/random?client_id=${access_key}&count=30`

const gallery = document.querySelector(".Gallery");
const ShowMorebtn = document.querySelector(".Extra-Image")

let  allImages; // This will store all of the images

const getImages=()=>{
    fetch(Random_url).then(Response => Response.json())
    .then(data => {
        allImages = data
        makeImageCard(allImages)
    })
}

const makeImageCard = (data)=>{
    data.forEach((item) => {
        let imgCard = document.createElement('img')
        imgCard.src = item.urls.regular;
        imgCard.className = 'gallery-img'

        gallery.appendChild(imgCard)
    });
}

// getImages()
ShowMorebtn.addEventListener("click",()=>{
    getImages()
})
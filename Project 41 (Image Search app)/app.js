let searchParams = location.search.split('=').pop();

let access_key = 'f5Y2rOeCxmnqQHCXsLBGqNqG5vbwJXtAjckbqKr-ZWA';

let Search_url = `https://api.unsplash.com/search/photos?client_id=${access_key}&query=${searchParams}&per_page=70`

let Random_url =`https://api.unsplash.com/photos/random?client_id=${access_key}&count=30`

const gallery = document.querySelector(".Gallery");
const ShowMorebtn = document.querySelector(".Extra-Image")

let Imageindex = 0;
let  allImages; // This will store all of the images

const getImages=()=>{
    fetch(Random_url).then(Response => Response.json())
    .then(data => {
        allImages = data
        makeImageCard(allImages)
    })
}

const searchImages=()=>{
    fetch(Search_url).then(Response => Response.json())
    .then(data => {
        allImages = data.results
        makeImageCard(allImages)
    })
}

const makeImageCard = (data)=>{
    data.forEach((item,index) => {
        let imgCard = document.createElement('img')
        imgCard.src = item.urls.regular;
        imgCard.className = 'gallery-img'

        gallery.appendChild(imgCard)

        imgCard.addEventListener("click",()=>{
            Imageindex = index;
            popupImage(item)
        })
    });
}

if(searchParams == ''){
    getImages()
    // ShowMorebtn.addEventListener("click",()=>{
    //     getImages()
    // })    
}else{
    searchImages()
    // ShowMorebtn.addEventListener("click",()=>{
    //     searchImages()
    // })        
}


// POPUP
const popupImage = (item) =>{
    const popup = document.querySelector('.image-pop')
    const closeBtn = document.querySelector('.close-btn')
    const downloadBtn = document.querySelector('.download-btn')
    const image = document.querySelector('.Large-img')

    popup.classList.remove("hide")
    downloadBtn.href = item.links.html  // this is direct user to unsplash site where picture is display to download
    // downloadBtn.href = item.links.download // This open image in new tab
    image.src = item.urls.regular

    closeBtn.addEventListener("click",()=>{
        popup.classList.add('hide')
    })
}


// controls

const preImageBtn = document.querySelector('.pre-img')
const nextImageBtn = document.querySelector('.next-img')

preImageBtn.addEventListener("click",()=>{
    if(Imageindex > 0){
        Imageindex--;
        popupImage(allImages[Imageindex])
    }
})

nextImageBtn.addEventListener("click",()=>{
    if(Imageindex < allImages.length -1){
        Imageindex++;
        popupImage(allImages[Imageindex])
    }
})

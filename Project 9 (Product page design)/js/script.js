let productImg = document.getElementById("ProductImg");
let btn = document.getElementsByClassName("btn");

btn[0].onclick =function(){
    productImg.src = "/img/image1.png";
    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
btn[1].onclick =function(){
    productImg.src = "/img/image2.png";
    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
btn[2].onclick =function(){
    productImg.src = "/img/image3.png";
    // FOR REMOVING  AND ADDING ACTIVE CLASS 
    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
const getcolor = () => {
    // Hex code
    const randomnumber = Math.floor(Math.random()*16777212);
    // string in the form of hexadecimal numner 
    const randomcode = "#"+ randomnumber.toString(16);
    // console.log(randomnumber,randomcode)
    document.body.style.backgroundColor = randomcode;
    document.getElementById("Color_code").innerHTML = randomcode;

    // To copy hex code upon click onto clpboard
    navigator.clipboard.writeText(randomcode);
}
// initial call
getcolor();

// Event call
document.getElementById("colorbtn").addEventListener("click", getcolor);

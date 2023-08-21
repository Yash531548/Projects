const passbox = document.getElementById("Passbox");
const length = 10;

const Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const Numbers   = "1234567890"; 
const Symbols   = "!@#$%^&*()[]{}/+?-_><";

const allchar   = Uppercase + lowercase + Numbers + Symbols;
const createpassword = () =>{
    let password = " ";
    password+= Uppercase[Math.floor(Math.random()*Uppercase.length)]
    password+= lowercase[Math.floor(Math.random()*lowercase.length)]
    password+= Numbers[Math.floor(Math.random()*Numbers.length)]
    password+= Symbols[Math.floor(Math.random()*Symbols.length)]
    /*Right now, Only character are generated for password but
    we need 12 character , means we have to rerun the function  */
    
    while(length >= password.length){
        password+= allchar[Math.floor(Math.random()*allchar.length)]
    }
    passbox.value = password;
}

const copypass = ()=>{
    passbox.select();
    document.execCommand("copy");
}
const UpperBox = document.getElementById("Upper_char");
const Lowerbox = document.getElementById("Lower_char");
const SymbolsBox = document.getElementById("Symbols_char");
const NumbercBox = document.getElementById("Numbers_char");
const PassLengthBox = document.getElementById("Pass_length");
const PassDisplayer = document.getElementById("Pass_dis");
const PassBtn = document.getElementById("pass_btn");

const Upperset  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Lowerset  = "abcdefghijklmnopqrstuvwxyz";
const Numberset = "1234567890";
const Ssymbolset  = "!@#$%^&*()[]{}/?><:;";

const randomData = (dataSet)=>{
    return dataSet[Math.floor(Math.random()* dataSet.length)]
}
// console.log(randomData(Upperset))
// console.log(randomData(Lowerset))
// console.log(randomData(Numberset))
// console.log(randomData(Ssymbols))


const PassGenretor = (password = "")=>{
    if(UpperBox.checked){
        password += randomData(Upperset); 
    }
    if(Lowerbox.checked){
        password += randomData(Lowerset); 
    }
    if(NumbercBox.checked){
        password += randomData(Numberset); 
    }
    if(SymbolsBox.checked){
        password += randomData(Ssymbolset); 
    }
    if(password.length < PassLengthBox.value){
        return PassGenretor(password);
    }
    /* As password generator is producing 
    4 character one at a time that means four 10 char its run 3 times which 12 but we want
    10 character*/
    //  that's why we have to trim the string into length user want 
    
    PassDisplayer.innerHTML = password.substring(0,PassLengthBox.value);
}
PassGenretor();

PassBtn.addEventListener("click",
    function (){
        PassGenretor();
    }
);


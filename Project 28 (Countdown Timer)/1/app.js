// Input from User
alert("To Start CountDown, please Enter Details");
const month = prompt("Enter MONTH", 'July');
const day = prompt("Enter DAY", '23')
const  hour= prompt("Enter HOUR", '00')
const minute = prompt("Enter MINUTE", '00')
const year = prompt("Enter YEAR", '2023')
const daytime = prompt("Enter DAYTIME", 'AM OR PM')

/* DUmmy Time 
// const day = "23";
// const month = "july";
// const year = "2023";
// const hour = " 00";
// const minute = "00";
// const daytime = "Am";
*/
const endDate = day + " "+month+ " "+ year +" "+ hour +":"+ minute + " " + daytime; 

// const endDate  = " 22 July 2023 11:36:00 PM";
const InputEl = document.getElementsByTagName("input");
const DateTime = document.getElementById("DateEl");
DateTime.innerHTML = endDate;

function Timecounter(){
    const endtime = new Date(endDate);
    const presenttime = new Date();
    // Result of difference is in millisecends, ms to sec
    const difftime = (endtime - presenttime);
    
    if(difftime < 0 ){
        ColorChange(InputEl)
        return
    }// For not displaying negative value 
    /* Converting Millisecond to given day, hours, minutes, seconds 
    (with separating time from different unit ) 
    1 day = 24 hours
    1 hours = 60 min
    1 min = 60 sec
    1 sec = 1000 ms*/
    const  mssec = difftime/1000;

    InputEl[0].value = Math.floor(mssec/ 3600 / 24);  // day = quotient 
    InputEl[1].value = Math.floor((mssec/ 3600) % 24);// hour = remainder 
    InputEl[2].value = Math.floor((mssec/ 60) % 60);  // hour/minutes  = remainder 
    InputEl[3].value = Math.floor((mssec % 60));      //seconds  = remainder 

    
}
// Initial call
Timecounter();

setInterval(() => {
    Timecounter();
}, 1000);

function ColorChange(input){
    for(let i = 0 ; i < 4 ; i++ ){
        input[i].style.color = 'red';
    }
}
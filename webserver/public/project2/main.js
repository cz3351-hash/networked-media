window.onload = () => {
console.log("page has loaded");

let date=new Date()
date.toLocaleTimeString();
// let oneSpan= document.getElementsByClassName('clock');

let oneSpan=document.getElementsByClassName('clock');
let hSpan= document.getElementsByClassName('hour');
let mSpan= document.getElementsByClassName('minute');
let sSpan= document.getElementsByClassName('second');
let mmSpan=document.getElementsByClassName('month');
let ddSpan=document.getElementsByClassName('day');
let yySpan=document.getElementsByClassName('year');


//setInterval()
//1 param: function/action to be done
//2 param": how much time in ms
setInterval(()=>{
   let date=new Date() //this is what that determines the current time, to SHOW on screen
   let hours=date.getHours();
   let minutes=date.getMinutes();
   let seconds= date.getSeconds();
   let month=date.getMonth();
   let day=date.getDate();
   let year=date.getFullYear();
//    oneSpan[0].innerHTML= hours + ":" + minutes + ":" + seconds;
hSpan[0].innerHTML= hours
mSpan[0].innerHTML= minutes
sSpan[0].innerHTML=seconds 

mmSpan[0].innerHTML=month
ddSpan[0].innerHTML=day
yySpan[0].innerHTML=year

dateSpan[0].innerHTML= month + "/" + day +"/"+year

    // oneSpan[0].innerHTML= date.toLocaleTimeString(); 
   console.log("happens");
},1000)
   oneSpan[0].style.color="white";
//    document.body.style.textAlign="center";


//EVENT ONE
// 1. name of the event we are using
// 2. callbackk/anyonymous fucntion
oneSpan[0].addEventListener("mouseenter",()=>{
    console.log("mouse entered");

  hSpan[0].style.left = Math.random() * (window.innerWidth - 300) + "px";
  hSpan[0].style.top  = Math.random() * (window.innerHeight - 300) + "px";
  mSpan[0].style.left = Math.random() * (window.innerWidth - 250) + "px";
  mSpan[0].style.top  = Math.random() * (window.innerHeight - 250) + "px";
  sSpan[0].style.left = Math.random() * (window.innerWidth - 200) + "px";
  sSpan[0].style.top  = Math.random() * (window.innerHeight - 200) + "px";
})


//EVENT TWO
let dateSpan = document.getElementsByClassName("date");

dateSpan[0].addEventListener("mouseenter", ()=>{
  dateSpan[0].style.opacity = "0";

  setTimeout(()=>{
    dateSpan[0].style.opacity = "1";
  }, 1000);
});


}




//SOME LINES OF CODE THAT I HAVE WORKED ON BUT WAS REPLACED WITH BETTER ALTERNATIVES LATER ON

//to get the date for right this moment
// let date=new Date()
// date.toLocaleTimeString();
// let myClock= document.getElementsByClassName('clock')[0];
// oneSpan[0].innerHTML= date.toLocaleTimeString();

//setInterval()
//1 param: function/action to be done
//2 param": how much time in ms
// setInterval(()=>{
//    let date=new Date() //this is what that determines the current time, to SHOW on screen
//     myClock.innerHTML= date.toLocaleTimeString(); 
//    console.log("happens");

// let hours0 = date.getHours().toString()[0];
//    console.log(hours0);
//     let hours1 = date.getHours().toString()[1];
//    console.log(hours1);

// let minutes0 = date.getMinutes().toString()[0];
//    console.log(minutes0);
//     let minutes1 = date.getMinutes().toString()[1];
//    console.log(minutes1);

// let seconds0 = date.getSeconds().toString()[0];
//    console.log(seconds0);
//     let seconds1 = date.getSeconds().toString()[1];
//    console.log(seconds1);
//    myClock.innerHTML = hours0+ hours1+ ":" + minutes0+ minutes1+ ":"+ seconds0 + seconds1;

// document.getElementsByClassName("hour")[0].innerHTML = hours0 + hours1;
// document.getElementsByClassName("firstcolon")[0].innerHTML = ":";
// document.getElementsByClassName("minute")[0].innerHTML = minutes0 + minutes1;
// document.getElementsByClassName("secondcolon")[0].innerHTML = ":";
// document.getElementsByClassName("second")[0].innerHTML = seconds0 + seconds1;
// },1000)

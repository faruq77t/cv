

let btnac = document.getElementById("ac");
let btnkapat = document.getElementById("kapat");
let divac = document.querySelector(".ic");



btnkapat.addEventListener("click",()=>{
    divac.style.display ="none";
});
btnac.addEventListener("click",()=>{
    divac.style.display ="block";
});



let veri = "faruq";
let veri1 = 1234567890;
let veri2 = true;
let veri3 = ["Elma", "Muz", "Portakal"];
let veri4 = {
    isim : "faruq",
    soyisim : "muhammedoğlu",
    yaş : 25,
}

let veri6 = null;


let string = document.getElementById("string");
let number = document.getElementById("number");
let booleam = document.getElementById("booleam");
let array = document.getElementById("array");
let object = document.getElementById("object");
let undefinedT = document.getElementById("undefined");
let nulll = document.getElementById("nulll");




string.innerText=(typeof veri);
number.innerText=(typeof veri1);
booleam.innerText=(typeof veri2);
array.innerText=(typeof veri3);
object.innerText=(typeof veri4);
undefinedT.innerText=(typeof veri5);
nulll.innerText=("null");








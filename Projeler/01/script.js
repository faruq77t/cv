
let isim = "faruq77t"
let mesaj = "merhaba dünya"
let yas = 25
let elvlim = false;

let ade =document.getElementById("isim")
ade.innerText= `isim ${isim}`

let soz = document.getElementById("mesaj")
soz.innerText= `bu mesaj dir. ${mesaj}`

let yasi = document.getElementById("yasi")
yasi.innerText= `yaş ${yas}`

if(elvlim){
    let evli = document.getElementById("evli")
    evli.innerText=`evlimi sim ? EVET`;
} else{
    let evli = document.getElementById("evli")
    evli.innerText=`evlimi sim ? HAYIR`;
}
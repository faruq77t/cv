let kisi ={
    isim : "Faruk",
    Soyisim : "Muhammedoğlu",
    yas : 25,
    meslek : "Bilgisayar Teknisyeni",
    telefon : "5380264262",

};

let isimi = document.getElementById("isimi");
let Soyisim = document.getElementById("soyisim");
let yas = document.getElementById("yas");
let meslek = document.getElementById("meslek");
let telefon = document.getElementById("telefon");



isimi.innerText=(kisi.isim);
Soyisim.innerText=(kisi.Soyisim);
yas.innerText=(kisi.yas);
meslek.innerText=(kisi.meslek);
telefon.innerText=(kisi.telefon);


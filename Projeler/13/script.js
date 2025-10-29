
function validatePassword(password) {
    const KucukHarflar = /[a-z]/;        
    const BuyukHarfler = /[A-Z]/;         
    const Rakamlar = /[0-9]/;             
    const Ozelkarakterler  = /[!@#$%^&*(),.?":{}|<>]/; 
    const Uzunluk = 8;                  

    const uygunmu = 
        KucukHarflar.test(password) &&    
        BuyukHarfler.test(password) &&    
        Rakamlar.test(password) &&        
        Ozelkarakterler.test(password) &&  
        password.length >= Uzunluk;     

    return uygunmu;
}


const passwordInput = document.getElementById("input"); 
const SifreKapat = document.querySelector(".fa-eye-slash");
const SifreAc = document.querySelector(".fa-eye");

if (passwordInput && SifreKapat && SifreAc) {

    SifreKapat.addEventListener("click", function() {
        passwordInput.type = "text"; 
        SifreKapat.style.display = "none";
        SifreAc.style.display = "inline";
    });

    SifreAc.addEventListener("click", function() {
        passwordInput.type = "password"; 
        SifreAc.style.display = "none";
        SifreKapat.style.display = "inline";
    });


    passwordInput.addEventListener("input", function() {

        const password = passwordInput.value;

        const sartKucuk = document.getElementById("sartKucuk");
        const sartBuyuk = document.getElementById("sartBuyuk");
        const sartRakam = document.getElementById("sartRakam");
        const sartOzelKarakter = document.getElementById("sartÖzelKarakter");
        const sart8karakter = document.getElementById("sart8karakter");

        sartKucuk.style.color = /[a-z]/.test(password) ? "green" : "red";
        sartBuyuk.style.color = /[A-Z]/.test(password) ? "green" : "red";
        sartRakam.style.color = /[0-9]/.test(password) ? "green" : "red";
        sartOzelKarakter.style.color = /[!@#$%^&*(),.?":{}|<>]/.test(password) ? "green" : "red";
        sart8karakter.style.color = password.length >= 8 ? "green" : "red";

    });
}

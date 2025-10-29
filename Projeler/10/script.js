

let btn = document.getElementById("btn");
let input = document.getElementById("input")

let finalnot55 = document.getElementById("finalnot55");
let finalnot60 = document.getElementById("finalnot60");

const hesapla = () => {

    let vize =parseFloat(input.value); 

    if(!isNaN(vize)){

        let Final55 = (55 - (vize * 0.4)) / 0.6;
        let Final60 = (60 - (vize * 0.4)) / 0.6;
        
        finalnot55.innerText= Final55.toFixed(2); 
        finalnot60.innerText= Final60.toFixed(2); 

    }
};

btn.addEventListener("click", hesapla);

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        hesapla();
    }
});

let input = document.getElementById("input");

let buttons = document.getElementById("button");

let saylar = document.getElementById("kutu")


buttons.addEventListener("click", () => {

    let sonuc= "";
    for (let i = 1; i <= input.value; i++) {
        sonuc  += i + " "; 
      }
      saylar.innerText=(sonuc);


    });



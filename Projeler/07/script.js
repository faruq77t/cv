
let siferbu = 1234567;

let input = document.getElementById("input");
let sifre = document.getElementById("sifre");

sifre.innerText=(siferbu);

let buttons = document.querySelectorAll(".ust1, .ust2, .ust3, .ust4, .ust5, .ust6, .ust7, .ust8, .ust9, .ust0");

let okButton = document.querySelector(".ust0k");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      input.value += button.textContent; 
    });
  });


  okButton.addEventListener("click", () => {
    if (input.value === sifre.textContent) {
    sifre.classList.add("sifer2");
    } 
    else {
        location.reload();
    }

    input.value = ""; 
  });

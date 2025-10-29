
let text = document.getElementById("mesaj")

document.getElementById("btn").addEventListener("click", () => {

    let input1 = parseFloat(document.getElementById("input1").value); 
    let input2 = parseFloat(document.getElementById("input2").value); 

    if (isNaN(input1) || isNaN(input2)) {
      document.getElementById("mesaj").innerText = "1.ve 2.sayı girin!";
    } else {
      let toplam = input1 + input2;
      document.getElementById("topla").innerText = toplam;
    }
  });




  let text1 = document.getElementById("mesaj1")

document.getElementById("btn1").addEventListener("click", () => {

    let input11 = parseFloat(document.getElementById("input11").value); 
    let input21 = parseFloat(document.getElementById("input21").value); 

    if (isNaN(input11) || isNaN(input21)) {
      document.getElementById("mesaj1").innerText = "1.ve 2.sayı girin!";
    } else {
      let toplam = input11 * input21;
      document.getElementById("topla1").innerText = toplam;
    }
  });




  let text2 = document.getElementById("mesaj2")

document.getElementById("btn2").addEventListener("click", () => {

    let input12 = parseFloat(document.getElementById("input12").value); 
    let input22 = parseFloat(document.getElementById("input22").value); 

    if (isNaN(input12) || isNaN(input22)) {
      document.getElementById("mesaj2").innerText = "1.ve 2.sayı girin!";
    } else {
      let toplam = input12 / input22;
      document.getElementById("topla2").innerText = (toplam.toFixed(2));
    }
  });
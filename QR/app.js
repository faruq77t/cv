const generateBtn = document.querySelector("form button")
const qrCodeBox = document.querySelector(".qr-code")
const qrinput = document.querySelector("form input")
const qrimage = document.querySelector(".qr-code img")


generateBtn.addEventListener("click" , ()=>{
    let qrValue = qrinput.value;
    if(!qrValue){
        return alert("Lütfen ! bir metin veya url girin?")
    }
    generateBtn.innerText = "QR kod oluşturuluyor..."
    qrimage.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    qrimage.addEventListener("load" , ()=>{
        qrCodeBox.classList.remove("hidden")
        generateBtn.innerText = "QR kod oluştur"
    })
});

qrinput.addEventListener("keyup" , ()=>{
    if(!qrinput.value){
        qrCodeBox.classList.add("hidden")
    }
});
let yazi = "faruk MUHAMMEDOĞLU7"; 

let usttext = document.getElementById("usttext");
usttext.innerText = yazi;

function inputic() {

    const inputicindeki = document.getElementById("inputtam").value;
    let isit = document.getElementById("isit");

    if (inputicindeki === yazi) {
        isit.innerText = "✅Evet";
    } else {
        isit.innerText = "❌Hayır";
    }
}
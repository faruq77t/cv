document.addEventListener("DOMContentLoaded", ()=>{
  const carlar = document.querySelector(".cat");

  const ullar = document.createElement("ul");

  cartdb.forEach(cart =>{
    const Lilar = document.createElement("li");

    Lilar.innerHTML= `
     <a href="${cart.url}" target="_blank">
      <img src="${cart.image}" alt="${cart.aciklama}">
      <h4>${cart.title}</h4>
      <p>${cart.aciklama}.</p>
    </a>
    `;

    ullar.appendChild(Lilar);
  });
  carlar.appendChild(ullar);
});
// JSON verisini yükle
fetch('veri.json')
    .then(response => response.json())
    .then(data => {
        populateCategoryDropdown(data.categories);
    })
    .catch(error => {
        console.error('JSON verisi yüklenirken hata oluştu:', error);
    });

function populateCategoryDropdown(categories) {
    const dropdown = document.getElementById('categoryDropdown');

    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.name;
        option.textContent = category.name;
        dropdown.appendChild(option);
    });
}

function loadSelectedCategory() {
    const selectedCategoryName = document.getElementById('categoryDropdown').value;
    const cardsContainer = document.getElementById('cardsContainer');

    if (selectedCategoryName) {
        fetch('veri.json')
            .then(response => response.json())
            .then(data => {
                const selectedCategory = data.categories.find(category => category.name === selectedCategoryName);
                displayCards(selectedCategory.cards);
            })
            .catch(error => {
                console.error('JSON verisi yüklenirken hata oluştu:', error);
            });
    } else {
        cardsContainer.style.display = 'none';
        cardsContainer.innerHTML = '';
    }
}

function displayCards(cards) {
    const cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.innerHTML = ''; // Önceki kartları temizle

    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';

        const cardImg = document.createElement('img');
        cardImg.src = card.image;
        cardImg.alt = card.title;

        const cardTitle = document.createElement('p');
        cardTitle.textContent = card.title;

        cardElement.appendChild(cardImg);
        cardElement.appendChild(cardTitle);
        cardsContainer.appendChild(cardElement);
    });

    cardsContainer.style.display = 'block';
}

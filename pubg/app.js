// Ürünleri gösteren fonksiyon
function urunleriGoster() {
    const urunContainer = document.getElementById('urunler');
    urunContainer.innerHTML = ''; // Container'ı temizle

    veriler.urunler.forEach(urun => {
        const urunHTML = `
            <div class="urun-kart">
                <div class="urun-id">#${urun.id}</div>
                <img src="${urun.resim}" alt="Ürün Görseli">
                <div class="urun-detay">
                    <div class="fiyat">
                        <div class="durum">Satılık</div>
                        <span>${urun.fiyat}</span>
                    </div>
                </div>
            </div>
        `;

        const kartDiv = document.createElement('div');
        kartDiv.innerHTML = urunHTML;
        const kartElement = kartDiv.firstElementChild;

        // Click event listener ekle
        kartElement.addEventListener('click', () => {
            urunDetayGoster(urun);
        });

        urunContainer.appendChild(kartElement);
    });
}

// Ürün detay popup fonksiyonu
function urunDetayGoster(urun) {
    const popup = document.getElementById('popup');
    const sliderContainer = popup.querySelector('.popup-slider-container');
    const description = popup.querySelector('.popup-description');
    const whatsappDiv = popup.querySelector('.popup-whatsapp');
    
    // Slider resimleri
    sliderContainer.innerHTML = urun.detayResimler
        .map(src => `<img src="${src}" alt="Ürün Detay">`)
        .join('');
    
    // Açıklama
    description.textContent = urun.aciklama;
    
    // WhatsApp butonu ve uyarı notu
    whatsappDiv.innerHTML = `
        <div class="whatsapp-wrapper">
            <div class="whatsapp-warning">
                ⚠️ Uyarı: Satıcı ve alıcı arasındaki her türlü diyalogdan site sahibi sorumlu değildir.
            </div>
            <a href="https://wa.me/${urun.whatsapp}" class="whatsapp-btn" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
                </svg>
                Satıcıyla Konuş
            </a>
        </div>
    `;
    
    // Popup'ı göster
    popup.style.display = 'flex';
    
    let currentSlide = 0;
    
    // Slider kontrolleri
    const prevBtn = popup.querySelector('.prev');
    const nextBtn = popup.querySelector('.next');
    
    function showSlide(index) {
        currentSlide = index;
        sliderContainer.style.transform = `translateX(-${index * 100}%)`;
    }
    
    prevBtn.onclick = () => {
        if (currentSlide > 0) showSlide(currentSlide - 1);
    };
    
    nextBtn.onclick = () => {
        if (currentSlide < urun.detayResimler.length - 1) showSlide(currentSlide + 1);
    };
    
    // Kapatma butonu
    const closeBtn = popup.querySelector('.popup-close');
    closeBtn.onclick = () => {
        popup.style.display = 'none';
    };
    
    // Popup dışına tıklandığında kapat
    popup.onclick = (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    };
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener('DOMContentLoaded', () => {
    console.log('Sayfa yüklendi');
    console.log('Veriler:', veriler);
    urunleriGoster();

    // Pull to refresh özelliği
    let touchstartY = 0;
    let touchendY = 0;
    const threshold = 150; // Yenileme için gereken minimum çekme mesafesi

    document.addEventListener('touchstart', e => {
        touchstartY = e.touches[0].pageY;
    });

    document.addEventListener('touchend', e => {
        touchendY = e.changedTouches[0].pageY;
        checkDirection();
    });

    function checkDirection() {
        const distance = touchendY - touchstartY;
        if (window.scrollY === 0 && distance > threshold) {
            // Sayfayı yenile
            window.location.reload();
        }
    }
});
let participants = [];
let winners = [];

document.getElementById('csvFile').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(event) {
        const csvData = event.target.result;
        participants = csvData.split('\n')
            .map(row => row.trim())
            .filter(row => row.length > 0);
        
        displayParticipants();
    };
    
    reader.readAsText(file);
});

function displayParticipants() {
    const list = document.getElementById('participantsList');
    list.innerHTML = participants
        .map((name, index) => `
            <div class="participant-item">
                <span>${name}</span>
                <button class="delete-btn" onclick="deleteParticipant(${index})">Sil</button>
            </div>
        `)
        .join('');
}

function deleteParticipant(index) {
    participants.splice(index, 1);
    displayParticipants();
}

function displayWinners() {
    const list = document.getElementById('winnersList');
    list.innerHTML = winners
        .map((name, index) => `
            <div class="winner-card">
                <div class="winner-number">${index + 1}. Sıra</div>
                <div class="winner-name">${name}</div>
            </div>
        `)
        .join('');
}

document.getElementById('startDraw').addEventListener('click', async function() {
    if (participants.length === 0) {
        alert('Lütfen önce katılımcıları yükleyin!');
        return;
    }

    const animationArea = document.getElementById('current-participant');
    const button = this;
    button.disabled = true;

    // 3 saniye boyunca rastgele isimler göster
    const startTime = Date.now();
    const animationDuration = 15000; // 3 saniye

    while (Date.now() - startTime < animationDuration) {
        // Rastgele bir katılımcı seç
        const randomIndex = Math.floor(Math.random() * participants.length);
        animationArea.textContent = participants[randomIndex];
        await sleep(100);
    }

    const winnerIndex = Math.floor(Math.random() * participants.length);
    const winner = participants[winnerIndex];
    animationArea.textContent = winner;
    
    fireConfetti();
    playWinnerSounds();
    participants.splice(winnerIndex, 1);
    winners.push(winner);
    
    displayWinners();
    displayParticipants();
    
    button.disabled = false;
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function fireConfetti() {
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFD700'];

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: colors
    });

    confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
    });

    confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
    });

    const duration = 3000;
    const end = Date.now() + duration;
    
    (function frame() {
        colors.forEach(color => {
            confetti({
                particleCount: 1,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: [color],
                ticks: 300
            });
            confetti({
                particleCount: 1,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: [color],
                ticks: 300
            });
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

function playWinnerSounds() {
    const sounds = [
        document.getElementById('applauseSound'),
        document.getElementById('cheerSound'),
        document.getElementById('crowdSound'),
        document.getElementById('stadiumSound')
    ];
    
    // Tüm sesleri durdur ve başa al
    sounds.forEach(sound => {
        sound.pause();
        sound.currentTime = 0;
    });
    
    // Sırayla sesleri çal
    sounds[0].play();
    
    setTimeout(() => {
        sounds[1].play();
    }, 300);

    setTimeout(() => {
        sounds[2].play();
    }, 600);

    setTimeout(() => {
        sounds[3].play();
    }, 900);

    // 10 saniye sonra tüm sesleri durdur
    setTimeout(() => {
        sounds.forEach(sound => {
            sound.pause();
            sound.currentTime = 0;
        });
    }, 10000);
}

// CSS ekleyelim
const style = document.createElement('style');
style.textContent = `
    #animation-area {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
    
    .spinning-name {
        font-size: 18px;
        padding: 5px;
        margin: 2px;
        animation: spinIn 0.2s ease-out;
        text-align: center;
    }
    
    @keyframes spinIn {
        from {
            transform: translateX(-100%) scale(0.5);
            opacity: 0;
        }
        to {
            transform: translateX(0) scale(1);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

document.getElementById('addParticipant').addEventListener('click', function() {
    const input = document.getElementById('manualParticipant');
    const name = input.value.trim();
    
    if (name) {
        participants.push(name);
        displayParticipants();
        input.value = '';
    } else {
        alert('Lütfen bir isim girin!');
    }
});

// Enter tuşu ile de ekleme yapılabilmesi için
document.getElementById('manualParticipant').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('addParticipant').click();
    }
}); 
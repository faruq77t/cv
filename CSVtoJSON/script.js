document.addEventListener('DOMContentLoaded', function() {
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const jsonResult = document.getElementById('jsonResult');
    const resultZone = document.querySelector('.result-zone');
    const copyBtn = document.getElementById('copyBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const themeToggle = document.querySelector('.theme-toggle');

    // Theme toggle
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }

    // Upload button click
    document.querySelector('.upload-btn').addEventListener('click', () => {
        fileInput.click();
    });

    // Drag and drop events
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        const files = e.dataTransfer.files;
        if (files.length) processFile(files[0]);
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length) processFile(e.target.files[0]);
    });

    function showStatus(message, type = 'processing') {
        const statusMsg = document.createElement('div');
        statusMsg.className = `status-message status-${type}`;
        statusMsg.textContent = message;
        document.body.appendChild(statusMsg);
        
        if (type !== 'error') {
            setTimeout(() => statusMsg.remove(), 3000);
        }
        return statusMsg;
    }

    function processFile(file) {
        if (!file.name.endsWith('.csv')) {
            showStatus('Lütfen CSV dosyası seçin!', 'error');
            return;
        }

        const status = showStatus('Dönüştürülüyor...');
        
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const csvData = e.target.result;
                const jsonData = csvToJson(csvData);
                const jsonString = JSON.stringify(jsonData, null, 2);
                
                jsonResult.textContent = jsonString;
                resultZone.style.display = 'block';
                
                status.className = 'status-message status-complete';
                status.textContent = 'Dönüştürme tamamlandı!';
            } catch (error) {
                status.className = 'status-message status-error';
                status.textContent = 'Hata: ' + error.message;
            }
        };
        reader.readAsText(file);
    }

    function csvToJson(csv) {
        const lines = csv.split('\n');
        const result = [];
        const headers = lines[0].split(',').map(header => 
            header.trim().replace(/^[\s"]+|[\s"]+$/g, '')
        );

        for (let i = 1; i < lines.length; i++) {
            if (!lines[i].trim()) continue;
            
            const obj = {};
            const currentLine = lines[i].split(',').map(item => 
                item.trim().replace(/^[\s"]+|[\s"]+$/g, '')
            );

            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentLine[j];
            }
            result.push(obj);
        }
        return result;
    }

    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(jsonResult.textContent)
            .then(() => showStatus('Kopyalandı!', 'complete'))
            .catch(err => showStatus('Kopyalama hatası!', 'error'));
    });

    downloadBtn.addEventListener('click', () => {
        const blob = new Blob([jsonResult.textContent], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'converted.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showStatus('İndirildi!', 'complete');
    });
}); 
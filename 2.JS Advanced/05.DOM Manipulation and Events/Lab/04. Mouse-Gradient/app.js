function attachGradientEvents() {
    const gradient = document.getElementById('gradient')
    gradient.addEventListener('mousemove', (e) => {
        result.textContent = Math.floor(e.offsetX / gradient.clientWidth * 100) + '%';
    });
    const result = document.getElementById('result');
}
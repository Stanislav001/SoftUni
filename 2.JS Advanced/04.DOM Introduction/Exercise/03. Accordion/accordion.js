function toggle() {
    let buttonElement = document.querySelector('.button');
    let contentElement = document.getElementById('extra');
    buttonElement.textContent = buttonElement.textContent == 'More' ? 'Less' : 'More';
    contentElement.style.display = contentElement.style.display == 'block' ? 'none' : 'block';
}
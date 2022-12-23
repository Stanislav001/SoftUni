function addItem() {
    let [text, value] = document.querySelectorAll('input[type="text"]');
    let select = document.getElementById('menu');
    var option = document.createElement('option');

    if (text.value != '' && value.value != '') {
        option.value = value.value;
        option.textContent = text.value;

        select.appendChild(option);
    }

    text.value = '';
    value.value = '';
}
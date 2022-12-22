function extractText(e) {
    const elements = document.getElementsByTagName('ul');
    let resultArea = document.getElementById('result');

    for (const element of elements) {
        resultArea.textContent += element.textContent
    }
}
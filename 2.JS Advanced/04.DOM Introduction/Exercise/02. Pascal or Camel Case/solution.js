function solve() {
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let resultElement = document.getElementById('result');
  let result = '';
  if (convention == 'Camel Case') {
    result = text.toLowerCase().split(' ').map((x, i) => i == 0 ? x : x[0].toUpperCase() + x.slice(1)).join('');
  } else if (convention == 'Pascal Case') {
    result = text.toLowerCase().split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join('');
  } else {
    result = 'Error!';
  }
  resultElement.textContent = result;
}
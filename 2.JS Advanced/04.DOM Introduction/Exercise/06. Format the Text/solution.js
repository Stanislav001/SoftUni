function solve() {
  const userInput = document.getElementById('input').value;
  const result = document.getElementById('output');

  const sentences = userInput.split('.').filter(x => x !== '');

 while(sentences.length > 0) {
  const currentSentence =sentences.splice(0, 3).join(' ') + '.';
  let currentParagraph = document.createElement('p');
  
  currentParagraph.textContent = currentSentence;
  result.appendChild(currentParagraph);
 }
}
function search() {
   let townsElements = Array.from(document.querySelectorAll('#towns li'));
   let searched = document.getElementById('searchText').value;
   let counter = 0;
   townsElements.forEach(t => {t.style.fontWeight = 'normal', t.style.textDecoration = 'none'});
   for (const town of townsElements) {
      if (town.textContent.includes(searched)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         counter++;
      }
   }
   document.getElementById('result').textContent = `${counter} matches found`;
}
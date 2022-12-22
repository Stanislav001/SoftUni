function solve() {
   const products = Array.from(document.getElementsByClassName('add-product'));
   products.forEach(p => p.addEventListener('click', addItem));

   const checkout = document.querySelector('.checkout');
   checkout.addEventListener('click', checkOut);

   const textarea = document.querySelector('textarea');
   const productsName = [];
   let sum = 0;

   function addItem(event) {
      let productName = event.target.parentNode.previousElementSibling.firstElementChild.textContent;
      let productPrice = event.target.parentNode.nextElementSibling.textContent;

      if (!productsName.includes(productName)) {
         productsName.push(productName);
      }

      textarea.value += `Added ${productName} for ${productPrice} to the cart.\n`;
      sum += Number(productPrice);
   }

   function checkOut() {
      textarea.value += `You bought ${productsName.join(', ')} for ${sum.toFixed(2)}.`
      products.forEach(p => p.removeEventListener('click', addItem));
      checkout.removeEventListener('click', checkOut);
   }
}
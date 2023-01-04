window.addEventListener("load", solve);

function solve() {
  const input = {
    make: document.getElementById('make'),
    model: document.getElementById('model'),
    year: document.getElementById('year'),
    fuel: document.getElementById('fuel'),
    originalCost: document.getElementById('original-cost'),
    sellingPrice: document.getElementById('selling-price'),
  };

  const cars = {
    availableCars: document.getElementById('table-body'),
    soldCars: document.getElementById('cars-list'),
  }

  document.getElementById('publish').addEventListener('click', publish);
  const profitText = document.getElementById('profit');
  let profit = 0;

  function publish(event) {
    event.preventDefault();

    // read input fields
    const make = input.make.value;
    const model = input.model.value;
    const year = input.year.value;
    const fuel = input.fuel.value;
    const originalCost = Number(input.originalCost.value);
    const sellingPrice = Number(input.sellingPrice.value);

    // validate input
    if (!make || !model || !year || !fuel || !originalCost || !sellingPrice || originalCost > sellingPrice) {
      return;
    }

    // create tr item
    const tr = document.createElement('tr');
    tr.className = 'row';
    tr.innerHTML = `
          <td>${make}</td>
          <td>${model}</td>
          <td>${year}</td>
          <td>${fuel}</td>
          <td>${originalCost}</td>
          <td>${sellingPrice}</td>
          <td>
              <button class="action-btn edit">Edit</button>
              <button class="action-btn sell">Sell</button>
          </td>`;

    // add functionality to buttons
    const editBtn = tr.querySelector('.edit');
    editBtn.addEventListener('click', edit);
    const sellBBtn = tr.querySelector('.sell');
    sellBBtn.addEventListener('click', sell);

    cars.availableCars.appendChild(tr);

    // clear input fields
    input.make.value = '';
    input.model.value = '';
    input.year.value = '';
    input.fuel.value = '';
    input.originalCost.value = '';
    input.sellingPrice.value = '';

    function edit() {
      input.make.value = make;
      input.model.value = model;
      input.year.value = year;
      input.fuel.value = fuel;
      input.originalCost.value = originalCost;
      input.sellingPrice.value = sellingPrice;

      tr.remove();
    }

    function sell() {
      tr.remove();

      let diff = sellingPrice - originalCost;

      const li = document.createElement('li');
      li.className = 'each-list';
      li.innerHTML = `
              <span>${make} ${model}</span>
              <span>${year}</span>
              <span>${diff}</span>
          `;

      profit += (diff);

      cars.soldCars.appendChild(li);

      profitText.textContent = profit.toFixed(2);
    }
  }
}
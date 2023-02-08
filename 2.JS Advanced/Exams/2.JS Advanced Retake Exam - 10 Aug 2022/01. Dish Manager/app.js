window.addEventListener("load", solve);

function solve() {
  const ageElement = document.getElementById('age');
  const descriptionElement = document.getElementById('task');
  const lastNameElement = document.getElementById('last-name');
  const firstNameElement = document.getElementById('first-name');
  const genderSelectElement = document.getElementById('genderSelect');

  const clearButton = document.getElementById('clear-btn');
  const submitButton = document.getElementById('form-btn');
  const finishedList = document.getElementById('finished');
  const counter = document.getElementById('progress-count');
  const inProgressList = document.getElementById('in-progress');

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const firstNameValue = firstNameElement.value;
    const lastNameValue = lastNameElement.value;
    const ageValue = ageElement.value;
    const genderValue = genderSelectElement.value;
    const descriptionValue = descriptionElement.value;

    if (!firstNameValue || !lastNameValue || !ageValue || !descriptionValue) {
      return;
    }

    const liElement = document.createElement('li');
    liElement.className = 'each-line';

    liElement.innerHTML = `
      <article>
        <h4>${firstNameValue} ${lastNameValue}</h4>
        <p>${genderValue}, ${ageValue}</p>
        <p>${descriptionValue}</p>
      </article>
      <button class="edit-btn">Edit</button>
      <button class="complete-btn">Mark as complete</button>
    `;

    inProgressList.appendChild(liElement);

    ageElement.value = '';
    lastNameElement.value = '';
    firstNameElement.value = '';
    descriptionElement.value = '';
    genderSelectElement.selectedIndex = 0;

    counter.textContent = Number(counter.textContent) + 1;

    const editButton = liElement.querySelector('.edit-btn');
    const completeButton = liElement.querySelector('.complete-btn');

    editButton.addEventListener('click', (e) => {
      e.preventDefault();

      firstNameElement.value = firstNameValue;
      lastNameElement.value = lastNameValue;
      ageElement.value = ageValue;
      genderSelectElement.value = genderValue;
      descriptionElement.value = descriptionValue;

      counter.textContent = Number(counter.textContent) - 1;
      liElement.remove();
    });

    completeButton.addEventListener('click', (e) => {
      e.preventDefault();

      liElement.remove();

      const completeLiElement = document.createElement('li');
      completeLiElement.className = 'each-line';

      completeLiElement.innerHTML = `
      <article>
        <h4>${firstNameValue} ${lastNameValue}</h4>
        <p>${genderValue}, ${ageValue}</p>
        <p>${descriptionValue}</p>
      </article>
    `;

      finishedList.appendChild(completeLiElement);
      counter.textContent = Number(counter.textContent) - 1;
    });

    clearButton.addEventListener('click', (e) => {
      e.preventDefault();

      while (finishedList.firstChild) {
        finishedList.removeChild(finishedList.firstChild);
      }
    });
  });
}
window.addEventListener("load", solve);

function solve() {
  const submitFormButton = document.getElementById('form-btn');

  let firstNameElement = document.getElementById('first-name');
  let lastNameElement = document.getElementById('last-name');
  let ageElement = document.getElementById('age');
  let genderElement = document.getElementById('genderSelect');
  let descriptionElement = document.getElementById('task');
  let listOfFinishingElement = document.getElementById('finished');
  let listInProgressElement = document.getElementById('in-progress');
  let progressCountElement = document.getElementById('progress-count');

  let liElement = document.createElement('li');

  submitFormButton.addEventListener(('click'), (e) => {
    e.preventDefault();
    if (!firstNameElement.value || !lastNameElement.value || !ageElement.value || !descriptionElement.value) {
      return
    }
    createPost();
    resetFieldValues();
  });

  function createPost() {
    liElement.classList.add('each-line');

    let editButton = document.createElement('button');
    let completeButton = document.createElement('button');

    let articleElement = document.createElement('article');
    let name = document.createElement('h4');
    let maleAndAge = document.createElement('p');
    let description = document.createElement('p');

    editButton.classList.add('edit-btn');
    completeButton.classList.add('complete-btn');

    name.textContent = `${firstNameElement.value} ${lastNameElement.value}`;
    maleAndAge.textContent = `${genderElement.value}, ${ageElement.value}`;
    description.textContent = descriptionElement.value;
    editButton.innerText = 'Edit';
    completeButton.innerText = 'Mark as complete';

    articleElement.appendChild(name);
    articleElement.appendChild(maleAndAge);
    articleElement.appendChild(description);

    liElement.appendChild(articleElement);
    liElement.appendChild(editButton);
    liElement.appendChild(completeButton);

    listInProgressElement.appendChild(liElement);
    progressCountElement.textContent = Number(progressCountElement.textContent) + 1;

    editButton.addEventListener(('click'), (e) => {
      liElement.replaceChildren();
      editButton.remove();
      completeButton.remove();

      const fullName = name.textContent.split(' ');
      firstNameElement.value = fullName[0];
      lastNameElement.value = fullName[1];

      const maleAndAgeValues = maleAndAge.textContent.split(', ');
      genderElement.value = maleAndAgeValues[0];
      ageElement.value = maleAndAgeValues[1];
      descriptionElement.value = description.textContent;
      progressCountElement.textContent = Number(progressCountElement.textContent) - 1;
    });

    completeButton.addEventListener(('click'), (e) => {
      listOfFinishingElement.appendChild(liElement);

      editButton.remove();
      completeButton.remove();

      let clearButton = document.getElementById('clear-btn');
      clearButton.addEventListener(('click'), (e) => {
        listOfFinishingElement.replaceChildren();
        clearButton.remove();
      })

      progressCountElement.textContent = Number(progressCountElement.textContent) - 1;
    });
  }

  function resetFieldValues() {
    firstNameElement.value = '';
    lastNameElement.value = '';
    ageElement.value = '';
    genderElement.selectedIndex = 0;
    descriptionElement.value = '';
  }
}


window.addEventListener('load', solution);

function solution() {
  const fnameElement = document.getElementById('fname');
  const emailElement = document.getElementById('email');
  const phoneElement = document.getElementById('phone');
  const addressElement = document.getElementById('address');
  const postalCodeElement = document.getElementById('code');
  const infoPreviewList = document.getElementById('infoPreview');

  const submitButton = document.getElementById('submitBTN');
  const editButton = document.getElementById('editBTN');
  const continueButton = document.getElementById('continueBTN');

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const fullNameValue = fnameElement.value;
    const emailValue = emailElement.value;
    const phoneValue = phoneElement.value;
    const addressValue = addressElement.value;
    const postalCodeValue = postalCodeElement.value;

    if (!fullNameValue || !emailValue) {
      return;
    }

    infoPreviewList.innerHTML = `
      <li>Full Name: ${fullNameValue}</li>
      <li>Email: ${emailValue}</li>
      <li>Phone Number: ${phoneValue}</li>
      <li>Address: ${addressValue}</li>
      <li>Postal Code: ${postalCodeValue}</li>
    `;

    //* Disabled buttons
    submitButton.disabled = true;
    editButton.disabled = false;
    continueButton.disabled = false;

    //* Reset form values
    fnameElement.value = '';
    emailElement.value = '';
    phoneElement.value = '';
    addressElement.value = '';
    postalCodeElement.value = '';


    editButton.addEventListener('click', (e) => {
      e.preventDefault();
      infoPreviewList.innerHTML = '';

      fnameElement.value = fullNameValue;
      emailElement.value = emailValue;
      phoneElement.value = phoneValue;
      addressElement.value = addressValue;
      postalCodeElement.value = postalCodeValue;

      submitButton.disabled = false;
      editButton.disabled = true;
      continueButton.disabled = true;
    });

    continueButton.addEventListener('click', (e) => {
      e.preventDefault();

      const blockElement = document.getElementById('block');
      blockElement.innerHTML = `<h3>Thank you for your reservation!</h3>`;
    });
  });
}
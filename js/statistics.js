//1. Event (click and enter) for adding a number (form-group)
let counter = 1;
let addBtn = document.getElementById('add-input');
const inputsContainer = document.querySelector('.inputs-container');

//2. Change the label, for, id atributes for every form group
function ordinalSuffixGenerator(number) {
  const reversedArray = number.toString().split('').reverse();

  if (reversedArray[1] != '1') {
    // Number is in the teens
    switch (reversedArray[0]) {
      case '1':
        return 'st';
      case '2':
        return 'nd';
      case '3':
        return 'rd';
    }
  }

  return 'th';
}

function inputGenerator(counter) {
  const inputContainer = document.createElement('div');
  inputContainer.classList.add('form-group');
  inputContainer.innerHTML = `<div>
                  <input id="input-id-${counter}" class="stat-input" type="number" />
                </div>
                <label for="input-id-${counter}">${counter}${ordinalSuffixGenerator(
    counter
  )}</label>`;
  inputsContainer.appendChild(inputContainer);
  document.getElementById(`input-id-${counter}`).focus();
}

inputsContainer.addEventListener('keyup', function (event) {
  if (event.target.classList.contains('stat-input')) {
    if (event.keyCode === 13) {
      event.preventDefault();
      addBtn.click();
    }
  }
});

addBtn.addEventListener('click', function () {
  counter += 1;
  inputGenerator(counter);
});

//3. Display every number in ascendent order
//4. Calculate mean, median and mode

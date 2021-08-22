//1. Event (click and enter) for adding a number (form-group)
//2. Change the label, for, id atributes for every form group
//3. Calculate mean, median and mode
//4. Display every number in ascendent order

// 1 - 2 Dealing with Inputs
let counter = 1;
let addBtn = document.getElementById('add-input');
const inputsContainer = document.querySelector('.inputs-container');

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

// 3 - 4 Calculations and displaying info

//Initializing obj to not repeat inputs
const filledInput = {};

//outputs
const meanOutput = document.getElementById('mean');
const medianOutput = document.getElementById('median');
const modeOutput = document.getElementById('mode');
const outputsContainer = document.querySelector('.outputs-container');

inputsContainer.addEventListener('change', function (event) {
  //Capture users input
  let currentValue = Number(event.target.value);
  if (event.target.classList.contains('stat-input')) {
    if (currentValue || currentValue === 0) {
      //Using an object for the dataset instead of pushing currentValue
      //we avoid saving numbers for the same input
      filledInput[event.target.id] = currentValue;
      const filledInputValues = Object.values(filledInput);

      //Displaying results
      meanOutput.innerHTML = `Mean👉 ${mean(filledInputValues)}`;
      medianOutput.innerHTML = `Median👉 ${median(filledInputValues)}`;
      modeOutput.innerHTML = `Mode👉 ${mode(filledInputValues)}`;

      //Displaying sorted inputs
      outputsContainer.innerHTML = '';
      const sortedInputs = filledInputValues.sort((a, b) => a - b);
      sortedInputs.forEach(function (sortedValue) {
        outputsContainer.innerHTML += `<span class="output">${sortedValue} - </span>`;
      });
    }
  }
});

//Mean
function mean(dataSet) {
  const totalNumbers = dataSet.length;
  const sumOfNumbers = dataSet.reduce((acum, currentValue) => {
    return acum + currentValue;
  });
  return (sumOfNumbers / totalNumbers).toFixed(2);
}

//Median
function median(dataSet) {
  const totalNumbers = dataSet.length;
  const halfIndex = Math.floor(totalNumbers / 2);
  //Sort numbers in ascendent order
  const sortedDataSet = dataSet.sort((a, b) => a - b);
  //Check dataSet size
  if (totalNumbers % 2 === 0) {
    return mean([sortedDataSet[halfIndex], sortedDataSet[halfIndex - 1]]);
  } else {
    return sortedDataSet[halfIndex];
  }
}

//Mode
function mode(dataSet) {
  const dataSetObj = {};
  dataSet.forEach(function (num) {
    dataSetObj[num] || dataSetObj[num] === 0
      ? (dataSetObj[num] += 1)
      : (dataSetObj[num] = 1);
  });
  const dataSetEntries = Object.entries(dataSetObj);
  const sortedDataSetEntries = dataSetEntries.sort(function (aArr, bArr) {
    return aArr[1] - bArr[1];
  });
  return Number(sortedDataSetEntries[sortedDataSetEntries.length - 1][0]);
}

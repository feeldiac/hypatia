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

//3. Calculate mean, median and mode
//Mean
const nums = [1, 2, 3, 4, 5, 6, 5, 1, 5, 5, 5, 5];

function mean(dataSet) {
  const totalNumbers = dataSet.length;
  const sumOfNumbers = dataSet.reduce((acum, currentValue) => {
    return acum + currentValue;
  });
  return sumOfNumbers / totalNumbers;
}
console.log(nums);
// console.log(mean(nums));

//Median
function median(dataSet) {
  const totalNumbers = dataSet.length;
  const halfIndex = Math.floor(totalNumbers / 2);
  //Sort numbers in ascendent order
  const sortedDataSet = dataSet.sort((a, b) => a - b);
  console.log(sortedDataSet);
  //Check dataSet size
  if (totalNumbers % 2 === 0) {
    return mean([sortedDataSet[halfIndex], sortedDataSet[halfIndex - 1]]);
  } else {
    return sortedDataSet[halfIndex];
  }
}
// console.log(median(nums));

//Mode
function mode(dataSet) {
  const dataSetObj = {};
  dataSet.forEach(function (num) {
    dataSetObj[num] ? (dataSetObj[num] += 1) : (dataSetObj[num] = 1);
  });
  const dataSetEntries = Object.entries(dataSetObj);
  const sortedDataSetEntries = dataSetEntries.sort(function (aArr, bArr) {
    return aArr[1] - bArr[1];
  });
  return Number(sortedDataSetEntries[sortedDataSetEntries.length - 1][0]);
}

// console.log(mode(nums), typeof mode(nums));

//4. Display every number in ascendent order

//      Square's code
const squareSide = document.getElementById('square-side');
const squarePerimeterBtn = document.getElementById('square-perimeter');
const squareAreaBtn = document.getElementById('square-area');

function squarePerimeter(side) {
  return side * 4;
}

function squareArea(side) {
  return Math.pow(side, 2);
}

squarePerimeterBtn.addEventListener('click', function () {
  const perimeter = squarePerimeter(parseFloat(squareSide.value));
  modalTitle.innerHTML = 'Square';
  modalMsg.innerHTML = `The perimeter of the square is: ${perimeter} units`;
});

squareAreaBtn.addEventListener('click', function () {
  const area = squareArea(parseFloat(squareSide.value));
  modalTitle.innerHTML = 'Square';
  modalMsg.innerHTML = `The area of the square is: ${area} units`;
});

//      Triangle's code
const triangleSideA = document.getElementById('triangle-sideA');
const triangleSideB = document.getElementById('triangle-sideB');
const triangleSideC = document.getElementById('triangle-sideC');
const trianglePerimeterBtn = document.getElementById('triangle-perimeter');
const triangleAreaBtn = document.getElementById('triangle-area');

function trianglePerimeter(side1, side2, side3) {
  return side1 + side2 + side3;
}

function triangleArea(side1, side2, side3) {
  //Heron's Formula
  const sp = trianglePerimeter(side1, side2, side3) * 0.5;
  return Math.sqrt(sp * (sp - side1) * (sp - side2) * (sp - side3));
}

trianglePerimeterBtn.addEventListener('click', function () {
  const perimeter = trianglePerimeter(
    parseFloat(triangleSideA.value),
    parseFloat(triangleSideB.value),
    parseFloat(triangleSideC.value)
  );
  modalTitle.innerHTML = 'Triangle';
  modalMsg.innerHTML = `The perimeter of the triangle is: ${perimeter} units`;
});

triangleAreaBtn.addEventListener('click', function () {
  const area = triangleArea(
    parseFloat(triangleSideA.value),
    parseFloat(triangleSideB.value),
    parseFloat(triangleSideC.value)
  );
  modalTitle.innerHTML = 'Triangle';
  modalMsg.innerHTML = `The area of the triangle is: ${area} units`;
});

//      Circle's code
const circleRadius = document.getElementById('circle-radius');
const circlePerimeterBtn = document.getElementById('circle-perimeter');
const circleAreaBtn = document.getElementById('circle-area');

//Diameter
function circleDiameter(radius) {
  return radius * 2;
}

//Pi
const PI = Math.PI;

//Circumference
function circlePerimeter(radius) {
  return parseFloat((circleDiameter(radius) * PI).toFixed(4));
}

//Area
function circleArea(radius) {
  return Math.round(Math.pow(radius, 2) * PI);
}

circlePerimeterBtn.addEventListener('click', function () {
  const perimeter = circlePerimeter(parseFloat(circleRadius.value));
  modalTitle.innerHTML = 'Circle';
  modalMsg.innerHTML = `The perimeter of the circle is: ${perimeter} units`;
});

circleAreaBtn.addEventListener('click', function () {
  const area = circleArea(parseFloat(circleRadius.value));
  modalTitle.innerHTML = 'Circle';
  modalMsg.innerHTML = `The area of the circle is: ${area} units`;
});

//      Rectangle's code
const rectangleSideA = document.getElementById('rectangle-sideA');
const rectangleSideB = document.getElementById('rectangle-sideB');
const rectanglePerimeterBtn = document.getElementById('rectangle-perimeter');
const rectangleAreaBtn = document.getElementById('rectangle-area');

function rectanglePerimeter(side1, side2) {
  return 2 * (side1 + side2);
}

function rectangleArea(side1, side2) {
  return side1 * side2;
}

rectanglePerimeterBtn.addEventListener('click', function () {
  const perimeter = rectanglePerimeter(
    parseFloat(rectangleSideA.value),
    parseFloat(rectangleSideB.value)
  );
  modalTitle.innerHTML = 'Rectangle';
  modalMsg.innerHTML = `The perimeter of the rectangle is: ${perimeter} units`;
});

rectangleAreaBtn.addEventListener('click', function () {
  const area = rectangleArea(
    parseFloat(rectangleSideA.value),
    parseFloat(rectangleSideB.value)
  );
  modalTitle.innerHTML = 'Rectangle';
  modalMsg.innerHTML = `The area of the rectangle is: ${area} units`;
});

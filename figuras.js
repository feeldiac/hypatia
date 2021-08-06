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
  console.log(squarePerimeter(parseFloat(squareSide.value)));
});

squareAreaBtn.addEventListener('click', function () {
  console.log(squareArea(parseFloat(squareSide.value)));
});

//      Triangle's code
console.group('Triangles');
function trianglePerimeter(side1, side2, base) {
  return side1 + side2 + base;
}

function triangleArea(base, height) {
  return base * height * 0.5;
}
console.groupEnd();

//      Circle's code
console.group('Circles');

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
console.groupEnd();

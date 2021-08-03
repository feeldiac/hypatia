//Square's code
console.group('Squares');

// const squareSide = 5;
// console.log(`The square's sides are ${squareSide} cm long`);

function squarePerimeter(side) {
  return side * 4;
}

// console.log(`The perimeter of the square is: ${squarePerimeter} cm`);

function squareArea(side) {
  return Math.pow(side, 2);
}

// console.log(`The area of the square is: ${squareArea} cm^2`);

console.groupEnd();

//Triangle's code
console.group('Triangles');

// const triangleSide1 = 6;
// const triangleSide2 = 6;
// const triangleBase = 4;
// console.log(
//   `The sides of the triangle are: ${triangleSide1} cm, ${triangleSide2} cm and ${triangleBase} cm`
// );

// const triangleHeight = 5.5;
// console.log(`The height of the triangle is: ${triangleHeight} cm`);

function trianglePerimeter(side1, side2, base) {
  return side1 + side2 + base;
}

// console.log(`The perimeter of the triangle is: ${trianglePerimeter} cm`);

function triangleArea(base, height) {
  return base * height * 0.5;
}
// console.log(`The area of the triangle is: ${triangleArea} cm^2`);
console.groupEnd();

//Circle's code
console.group('Circles');

//Radius
// const circleRadius = 4;
// console.log(`The radius of the circle is: ${circleRadius} cm`);

//Diameter
function circleDiameter(radius) {
  return radius * 2;
}

// console.log(`The diameter of the circle is: ${circleDiameter} cm`);

//Pi
const PI = Math.PI;
console.log(`Pi es: ${PI}`);

//Circumference
function circlePerimeter(radius) {
  return parseFloat((circleDiameter(radius) * PI).toFixed(4));
}

// console.log(`The perimeter of the circle is: ${circlePerimeter} cm`);

//Area
function circleArea(radius) {
  return Math.round(Math.pow(radius, 2) * PI);
}

// console.log(`The area of the circle is: ${circleArea} cm^2`);

console.groupEnd();

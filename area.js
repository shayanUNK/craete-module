//Export presentation => Show area of ​​square
function squareArea(length, width) {
  return length * width;
}

//Export presentation => Show area of rectangle
function RectangleArea(length, width) {
  return length * width;
}

//Export presentation => Show area of triangle
function triangleArea(height, rule) {
  return (height * rule) / 2;
}

export { squareArea, RectangleArea, triangleArea };

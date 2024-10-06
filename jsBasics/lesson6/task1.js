function areaRectangleDeclaration(width, height) {
  return width * height;
}
console.log(areaRectangleDeclaration(5, 10));

const areaRectangleExpression = function (width, height) {
  return width * height;
};
console.log(areaRectangleExpression(5, 10));

const areaRectangleArrow = (width, height) => width * height;
console.log(areaRectangleArrow(5, 10));

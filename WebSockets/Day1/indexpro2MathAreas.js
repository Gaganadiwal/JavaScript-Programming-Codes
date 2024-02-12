
    function calRectangleArea(length, width) {
    return length * width;
}


function calCircleArea(radius) {
    return Math.PI * radius * radius;
}


function calSquareArea(side) {
    return side * side;
}


function calTriangleArea(base, height) { 
    return 0.5 * base * height;
}


let rectangleArea = calRectangleArea(5, 10);
console.log("Area of Rectangle:", rectangleArea);

let circleArea = calCircleArea(5);
console.log("Area of Circle:", circleArea);

let squareArea = calSquareArea(5);
console.log("Area of Square:", squareArea);

let triangleArea = calTriangleArea(5, 10);
console.log("Area of Triangle:", triangleArea);

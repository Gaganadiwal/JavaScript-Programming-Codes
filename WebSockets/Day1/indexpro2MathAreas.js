<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        
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

    </script>
</body>
</html>
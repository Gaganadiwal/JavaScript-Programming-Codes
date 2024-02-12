function checkEvenOrOdd(number) {
    if(number % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}


var number = 5;
var result = checkEvenOrOdd(number);
console.log(number + " is " + result);

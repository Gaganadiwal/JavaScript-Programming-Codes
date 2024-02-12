function sumOfDigits(number) {
    var sum = 0;
    while(number) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

// Example usage:
var number = 1234;
var sum = sumOfDigits(number);
console.log("Sum of digits of " + number + " is: " + sum);

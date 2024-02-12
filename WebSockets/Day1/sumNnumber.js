function sumOfNumbers(numbers) {
    var sum = 0;
    for(var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}


var numbers = [1, 2, 3, 4, 5];
var sum = sumOfNumbers(numbers);
console.log("Sum of numbers: " + sum);

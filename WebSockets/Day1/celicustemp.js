function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

var celsius = 30;
var fahrenheit = celsiusToFahrenheit(celsius);
console.log(celsius + "°C is equal to " + fahrenheit + "°F");

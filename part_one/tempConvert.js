/* 
Convert a temperature from F to C.

Convert it to fahrenheit and output "NN°C is NN°F".
*/

var farTemp = 99,
    rawCelsiusTemp = (farTemp - 32)*5/9,
    celsiusTemp;

var celsiusTemp = Math.round( rawCelsiusTemp*100 )/100;

console.log(celsiusTemp + "˚C is " + farTemp + "˚F");
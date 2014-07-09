// ##tempConvert.js
// Convert a temperature from F to C. 
// Convert it to fahrenheit and output "NN°C is NN°F".

function isTemperature(fahrenheit){
	//Convert a temperature
	//Deduct 32, then multiply by 5, then divide by 9
  var minusF = fahrenheit - 32;
  var multiplyF = minusF * 5;
  var divideF = multiplyF/9;
  var celsius = Math.floor(divideF);
	//console.log "*C is *F"
  console.log(celsius + "C is " + fahrenheit + "F.");
}

isTemperature(212)
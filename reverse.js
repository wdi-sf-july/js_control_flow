// ##reverse.js
// Write a program that will take a hardcoded string, 
// and console log the reverse it. Use a for loop


function reverse(inputString) {
  //jump back to front throughout inputString, while working
  //through loop.
  for (var array = [], i = 1; i <= inputString.length; i++) {
    //store letters into array
    array.push(inputString.charAt(inputString.length - i));

  }
  //join array into a new reversed string
  var newString = array.join('');
  console.log("The reverse of " + "\'" + inputString + "\'" + 
  	          " is " + "\'" +newString + ".\'");

}

reverse("building")
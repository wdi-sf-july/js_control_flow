// Take an input like:
// thing = "cat"
// count = "5"
// ```
// and output the pluralized form
//  of the word like "5 cats" or "1 dog"..

function isPlural(thing, count) {
  //singular if less than one
	if (count < 2) {
		console.log("There is " + count + " " + thing + ".");
	}
  //plural else
	else {
		console.log("There are " + count + " " + thing + "s.");
  }
}
isPlural("cat", 5)
isPlural("dog", 1)
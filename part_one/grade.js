/* 
Output the following letter
  grade from a variable with 
  with a test score. Display 
  either "A", "B", "C", "D", 
  or "F", for an score that
  is an integer between 0 and 
  100. Try and use a `switch`
  statement.
*/

var score = 79;

if (score >= 90 ) {
  console.log("A", score);
} else if (score >= 80) {
  console.log("B", score);
} else if (score >= 70) {
  console.log("C", score);
} else if (score >= 60) {
  console.log("D", score);
} else {
  console.log("F", score);
}

// or use the following


var rawScore = 59;
var score = Math.floor(rawScore / 10);

switch(score) {
  case 10:
    console.log("A", rawScore);
    break;
  case 9:
    console.log("A", rawScore);
    break;
  case 8:
    console.log("B", rawScore);
    break;
  case 7:
    console.log("C", rawScore);
    break;
  case 6:
    console.log("D", rawScore);
    break;
  default:
    console.log("F", rawScore);
}
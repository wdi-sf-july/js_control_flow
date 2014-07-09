/* 
  Hardcode an array of words. 
  Have a variable maxLength, 
  push words that are less 
  than the maxLength into a 
  new array, and console.log 
  that.
*/

var myWords = [
                "sun",
                "Mercury",
                "Venus",
                "Earth",
                "Mars",
                "Saturn",
                "Uranus",
                "Neptune",
                "planet", 
                "continent", 
                "country", 
                "state",
                "city"
              ],
    maxLength = 4;

var filteredList = [];

for (var i = 0, currentWord; i < myWords.length; i++) {
  currentWord = myWords[i];

  if (currentWord.length < maxLength) {
    filteredList.push(currentWord);
  }
};

console.log("The filteredList is: ", filteredList);
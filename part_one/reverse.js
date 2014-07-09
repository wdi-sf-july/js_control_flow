// take input word
var inputWord = "foofaraw";
// declare output word
var outputWord = "";

for (var i = 0; i < inputWord.length; i++) {
  outputWord = inputWord[i] + outputWord; 
};

console.log("The input word is: ", inputWord);
console.log("The reversed word is: ",  outputWord)
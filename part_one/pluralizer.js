/*
Take an input like

```
thing = "cat"
count = "5"
``
*/

var count = "5",
  thing = "cat",
  pluralChar = "";
  
if ( parseInt(count) > 1 ){
  pluralChar = "s";
}

console.log(count + " " + thing + pluralChar);
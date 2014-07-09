var products = require("../products.json");


/*
check out the products
  console.log("The products are: ", products)

check out the items
  console.log("The products.items are: ", products.items)

*/

/*

1.) The `kind` of results you're are 
      dealing  are `shopping#product`.
      Go through the `items` and find 
      all results that have `kind` of 
      `shopping#product`. How many are 
      there? Where else is this count 
      information stored in the search 
      results?
*/


var items = products['items'],
    count = 0;

for (var i = 0, currentItem; i < items.length; i++) {
  currentItem = items[i];
  
  if (currentItem.kind === "shopping#product") {
    count += 1;
  }

};

console.log("There are", count, "items with kind shopping#product");







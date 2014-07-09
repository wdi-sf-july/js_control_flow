var data = require("./products.json")

// The `kind` of results you're are dealing  are 
// `shopping#products`. Go through the `items` and find all 
// results that have `kind` of `shopping#product`. How many 
// are there? Where else is this count information stored 
// in the search results?

var countProduct = 0;
var allItems = data["items"];


for (var i = 0; i < allItems.length; i++) {
     var currentItem = allItems[i];
     if (currentItem["kind"] === "shopping#product") {
      countProduct += 1;
     }
}
console.log(countProduct);

// ANSWER:
// I ran my code to receive 25 instances of 'shopping#product'
// with the 'kind' in 'items.' This information is also available
// in 'itemsPerPage' and 'currentItemCount,' as there are only
// 25 products shown per page.'




// Find all items with a `backorder` availability 
// in `inventories`.

var allItems = data["items"];

for (var i = 0; i < allItems.length; i++) {
  if (allItems[i]["product"]["inventories"][0]["availability"] 
      === "backorder") {
    console.log(allItems[i]["product"]["title"]);
  }
}





// Find all items with more than one image link.

var allItems = data["items"]

for (var i = 0; i < allItems.length; i++) {
  if (allItems[i]["product"]["images"].length > 1) {
    console.log(allItems[i]["product"]["title"]);
  }
}





// Find all `canon` products in the items (careful 
// with case sensitivity).

var allItems = data["items"];

for (var i = 0; i < allItems.length; i++) {
  if (allItems[i]["product"]["brand"] === "Canon")
    console.log(allItems[i]["product"]["title"]);
  }  
}





// Find all `items` that have **product** **author** 
// **name** of "eBay" and are brand "Canon".

var allItems = data["items"];

for (var i = 0; i < allItems.length; i++) {
  if ((allItems[i]["product"]["brand"] === "Canon") &&
     (allItems[i]["product"]["author"]["name"].indexOf("eBay") !== -1)) {
     console.log(allItems[i]["product"]["title"]);
  }
}



// Print all the products with their **brand**, 
// **price**, and a **image link**

var allItems = data["items"];

for (var i = 0; i < allItems.length; i++) {
  brand = allItems[i]["product"]["brand"];
  price = allItems[i]["product"]["inventories"][0]["price"];
  imageLink = allItems[i]["product"]["images"][0]["link"];
  console.log("Brand: " + brand + " Price: $" +  price + " Image Link: " + imageLink);
}


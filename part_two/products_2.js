var products = require("../products.json");


/* 
  2.) Find all items with a 
  `backorder` availability in 
  `inventories`.
*/


var items = products['items'],
    count = 0,
    availableProducts = [],
    inventories,
    isAdded;

for (var i = 0, currentItem; i < items.length; i++) {
  currentItem = items[i];
  inventories = currentItem.product.inventories;
  isAdded = false;
  for (var j = 0, inventory; j < inventories.length && !isAdded; j++) {
    inventory = inventories[j];
    if ( inventory.availability === "inStock") {
      availableProducts.push(currentItem);
      isAdded = true;
    }
  };

};

console.log("There are", availableProducts.length, "products in availableProducts");
console.log("The products are:")

for (var i = 0; i < availableProducts.length; i++) {
  console.log("\t", availableProducts[i].product.title)
};

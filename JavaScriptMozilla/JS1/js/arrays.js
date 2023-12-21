

let shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
let random = ["tree", 795, [0, 1, 2]];

// Acceso a arrays
console.log(shopping);
console.log(`0: ${shopping[0]}, 1: ${shopping[1]}, 2: ${shopping[2]}, 3: ${shopping[3]}, 4: ${shopping[4]}`);
console.log(random);
console.log(`0: ${random[0]}, 1: ${random[1]}, 2: ${random[2]}`);
console.log(`2.0: ${random[2][0]}, 2.1: ${random[2][1]}, 2.2: ${random[2][2]}`);

// Longitud de array
console.log(`Longitud del array shopping: ${shopping.length}`);

// División de una cadena por un separador
let myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
let myArray = myData.split(',');
console.log(myArray);


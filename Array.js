let array = new Array(5);
console.log(array);

array = new Array(5);
console.log(array.fill(3 , 0 , 3));
console.log(array.fill(12)); // fill array with specified value

array =  Array.of(7 , 3 , 'meet');
console.log(array);

array = [39, 12 ,23 ];
let newArray = Array.from(array , value => value + 2); // map a new array with a custom function
console.log(newArray);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
array = [1, 11 ,66 , 22 ];
console.log(array.find(val => val >= 12)); // only returns first element that satisfies the condition

var inventory = [
    {name : 'banana' , quantity: 3},
    {name : 'apple' , quantity: 8},
    {name : 'orange' , quantity: 14}
];

function findFruit(fruit) {
    return fruit.quantity > 5;
}

console.log(inventory.find(val => val.name ==='banana'));
console.log(inventory.find(findFruit));
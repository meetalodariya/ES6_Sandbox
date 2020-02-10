//spread is used to extract individual elements from an array
let arr = [1 , 2 , 4 ,2];
console.log(Math.max(...arr)); //use of spread operator
console.log(Math.min(...arr)); //use of spread operator


//Rest operator is used to aggregate numbers into an array
function array (...arr) {
    console.log(...arr); // use of rest operator (used to merge elements in an array)
//    arr.forEach(value => console.log(value));
}

array([1 ,2 ,4, 2]);
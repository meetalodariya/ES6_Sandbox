//SETS
//sets are like arrays but only unique values can be stored

let set = new Set([1, 2, 5, 6, 1]);

console.log(set);
set.add(3);
console.log(set);
set.delete(5);
console.log(set);

for (val of set){
    console.log(val);
}
console.log(set.has(1));

set.clear();
console.log(set);

/////////////////////////////////////////////////////////////////////////////
//WEAK SET
let obj1 = {a:1};
let obj2 = {b:2};
let obj3 = {c : 6};
let weakSet = new WeakSet([obj2,obj1,obj3]);
console.log(weakSet.has(obj1));
weakSet.delete(obj1);
console.log(weakSet.has(obj1));
let cardAce = {
    name : 'Ace of Spades',
    numbers: 4
};

let cardKing = {
    name: 'King of Clubs',
    numbers: 1
};

let map = new Map();
map.set('ac' , cardAce);
map.set('kc' , cardKing);
console.log(map.get('ac'));

for (let key of map){
    console.log(key);
}

/////////////////////////////////////
//WEAK MAP

let weakMap = new WeakMap();
let key1 = {a:1};
let key2 = {b:4};

weakMap.set(key1,cardAce);
weakMap.set(key2,cardKing);

console.log(weakMap.get(key1));

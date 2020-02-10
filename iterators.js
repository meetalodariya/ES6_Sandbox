//ITERATORS
let array = [1, 2 , 4 ,5 , 23 , 11];

 let iter = array[Symbol.iterator]();

 console.log(iter.next());
 console.log(iter.next());
 console.log(iter.next());
 console.log(iter.next());
 console.log(iter.next());
 console.log(iter.next());
 console.log(iter.next());

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WE CAN MODIFY BEHAVIOUR OF ITERATORS BY DEFINING A FUNCTION WHICH RETURNS MODIFIED OBJECT

let array2 = [1, 2 , 4 ,5 , 23 , 11];

array2[Symbol.iterator] = function () {
    return{
        next: function () {
            return{
                done: false,
                value: 10

            }
        }
    }
};

let iter2 = array2[Symbol.iterator]();

console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());

// EXAMPLE 2:

let array3 = [1, 2 , 4 ,5 , 23 , 11];

array3[Symbol.iterator] = function () {
    let nextVal = 10;
    return{
        next: function () {
            nextVal++;
            return{
                done: nextVal >17 ? true : false,
                value: nextVal
            }
        }
    }
};

for (let ele of array3){
    console.log(ele);
}
console.log(array3);   // Base array doesnt change. only behaviour of iterator(ele in for loop) will get changed.

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CUSTOM ITERABLE OBJECT

let obj ={
    name: 'meet',
    hobbies : ['exploring perfumes','programming','music'],
    [Symbol.iterator]: function () {
        let i = 0;
        let hobbies = this.hobbies;
        return{
            next: function () {
                let value = hobbies[i];
                i++;
                return{
                    done: i > hobbies.length? true : false,
                    value : value
                };
            }
            };
}
};
for (let hobby of obj){
    console.log(hobby);
}
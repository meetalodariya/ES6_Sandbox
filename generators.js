// GENERATORS
// objects with generators
//generators return an iterator

let obj = {
    [Symbol.iterator]: gen
};
function* gen (){
    yield 1;
    yield 2;
}
for(let element of obj){
    console.log(element)
}
////////////////////////////////////////////////////////////////////////////////////////////////////
// basic itera

function *gen() {
    try {
        //usually these details are fetched from server
        yield 'user data';
        yield 'house data';
        yield 'account data';
        yield 'purchase data';
    }
    catch (e) {
        console.log('Error: ');
    }
}
let itr = gen();
console.log(itr.next());
console.log(itr.next());
console.log(itr.throw('something went wrong'));
console.log(itr.next());


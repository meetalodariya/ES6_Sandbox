//OBJECTS
//merge two objects into one

var obj1 = {
    a: 1
};

var obj2 ={
    b: 3
};

var obj3 = Object.assign(obj1,obj2);
//console.log(obj3);
/////////////////////////////////////////
class Obj1  {
    constructor(){
        this.a = 1 ;
    }
}

class Obj2 {
    constructor() {
        this.b = 2;
    }
}
let obj_1 = new Obj1();
let obj_2 = new Obj2();
let obj_3 = Object.assign(obj_1 , obj_2);
//console.log(obj_3);

//////////////////////////////////////////////////////////////////////////////////////////////////////
//change the prototype of an object

let person = {
    name : 'meet'
};
let instructor = {
    name : 'pradip'
};

Object.setPrototypeOf(person , instructor);
console.log(instructor.isPrototypeOf(person));
console.log(Object.prototype.isPrototypeOf(instructor));
console.log(Object.prototype);
console.log(instructor);
console.log(person.__proto__);

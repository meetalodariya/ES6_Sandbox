//Extension of built-in classes (built in class extens
//if you want to modify each value of array then we have to create a class that extends (eg.Array) built in classes
// then we can access their functionalities
class convArray extends Array{
    convert()
    {
        let arr = [];
        this.forEach(value => arr.push('converted '+value))
        return arr;
    }
}

let  classArray = new convArray();
for(let i = 1; i <=10; i++){
    classArray.push(i);
}

console.log(classArray.convert());

////////////////////////////////////////////////////////////////////////////////////////////////////////
//this works like same
function convert(convArr){
    let arr = [];
    convArr.forEach(value => arr.push('converted '+value));
    return arr;
}

let  numberArray = new Array();
for(let i = 1; i <=10; i++){
numberArray.push(i);
}


console.log(convert(numberArray));

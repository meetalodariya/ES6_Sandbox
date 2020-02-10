// PROMISES
//promise provides async way to execute a function
//it is handled by resolve and reject
let promise  = new Promise(function (resolve,reject) {
    //resolve and reject are used to indicate a result of a server call
    // if call is successful then we pass data in resolve otherwise we pass an error message in reject
    setTimeout(function () {
        reject('failed');
        resolve('done' );
    },1000)
});

/*promise.then(
    function (value) {
        console.log('resolve ' + value);
    }
    ,
    function (error) {
        console.log('reject '+error);
    }
);*/
////////////////////////////////////////////////////////////////////////////////////////////////////////
//CHAINED PROMISES
//functions are used instead of variables to pass arguments (seconds in this case)
//in each callback ,  seconds value passed to waitAsec function

function waitAsec(seconds) {
 return new Promise(function (resolve,reject) {
     if (seconds > 1){
         reject('failed');
     }
     else
     {
     setTimeout(function () {
         seconds++;
         resolve(seconds);
     } ,1000);
     }
 });
}

/*waitAsec(0)
    .then(waitAsec)
    .then(waitAsec)
    .then(function (sec) {
    console.log(sec);
    })
    .catch(function (err) {
        console.log(err);
    });*/
////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promise.all and .race

let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('success');
    },1000)
}) ;
let promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('success2!!');
    },500)
}) ;

Promise.all([promise1,promise2])
    .then(function (succ) {
        console.log(succ);
    } )
    .catch(function (err) {
    console.log(err);
    });
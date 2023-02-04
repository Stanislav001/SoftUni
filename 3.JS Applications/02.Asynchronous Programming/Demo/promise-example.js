//* Promise is a object

//* States of promises
// 1. Pending -> operation still running, we don`t have result, we wait for result
// 2. Fulfilled -> operation finished, the result is available
// 3. Failed -> operation failed, result is a error

let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve('Just Married...');
        } else {
            reject('Sorry it`s me');
        }
    }, 3000);
});

promise.then((result) => {
    console.log(result);
});

promise.catch((error) => {
    console.log(error);
});
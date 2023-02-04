let alwaysResolvingPromise = Promise.resolve('Yes');
let alwaysRejectPromise = Promise.reject('No')

alwaysResolvingPromise
    .then(res => console.log(res))
    .catch(err => console.log('Never used!'))
    .finally(() => console.log('finally'));

alwaysRejectPromise.catch((err) => console.log(err));

let multiplePromises = Promise.all([
    alwaysResolvingPromise,
    Promise.resolve('Yes again'),
    //alwaysRejectPromise,
]);

multiplePromises.then(res => {
    console.log(res);
});
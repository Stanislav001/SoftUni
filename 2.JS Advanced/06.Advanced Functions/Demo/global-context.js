//* Global context
function random() {
    console.log(this); //* [In browser -> window context | In node -> global context]
    return Math.random();
}

//* Object context
let obj = {
    name: 'Peter',
    greed() {
        random(); //* global invocation
        console.log(`Hello! My name is ${this.name}`);
    },
}
obj.greed(); //* method invocation

let greed = obj.greed; //* copy function by reference
greed(); //* global invocation

//* Dom element -> execute this is browser
//element.addEventListener('click', function () {
//  console.log(this); //* -> this is the element e.currentTarget === this
//});

// Nested functions
function a() {
    function b() {
        function c() {
            function d() {
                console.log(this); //* this will be global
            }
            d();
        }
        c();
    }
    b();
}
a();
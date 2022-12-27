function solution(number) {
    function add(newNumber) {
        return Number(number) + Number(newNumber);
    };
    return add;
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
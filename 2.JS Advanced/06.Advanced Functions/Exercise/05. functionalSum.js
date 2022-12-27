function functionalSum(n) {
    const inner = function (a) {
        n += a;
        return inner;
    }

    inner.valueOf = function () {
        return n;
    }

    return inner;
}

console.log(Number(functionalSum(1)));
console.log(Number(functionalSum(1)(6)(-3)));
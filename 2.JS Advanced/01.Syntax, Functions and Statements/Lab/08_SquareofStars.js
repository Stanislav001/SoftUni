function Solve(input = 5) {
    for (let i = 0; i < input; i++) {
        let arr = new Array();
        for (j = 0; j < input; j++) {
            arr.push('*');
        }
        console.log(arr.join(' '));
    }
}

Solve(7);
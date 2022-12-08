function solve(number) {
    function displayItem(number) {
        let sequence = []
        for (let i = 1; i <= number; i++) {
            sequence.push(number)
        }
        return sequence.join(" ")
    }

    for (let i = 1; i <= number; i++) {
        console.log(displayItem(i))
    }
}

solve(3);
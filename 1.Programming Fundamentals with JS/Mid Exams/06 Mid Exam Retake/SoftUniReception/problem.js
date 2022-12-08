function solve(input) {
    let peoples = input.pop();
    let result = 0;
    let answerPerHour = 0;

    for (const currentWorker of input) {
        answerPerHour += Number(currentWorker);
    }

    while (peoples > 0) {
        peoples -= answerPerHour;
        result++;

        if (result % 4 === 0) {
            result++;
        }
    }
    console.log(`Time needed: ${result}h.`);
}

solve(['5', '6', '4', '20']);
solve(['1','2','3','45']);
solve(['3','2','5','40']);
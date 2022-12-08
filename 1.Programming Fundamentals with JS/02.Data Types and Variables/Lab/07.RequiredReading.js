function solve(pageNumbers, pagesReadIn1Hour, numOfDays) {
    const totalTime = pageNumbers / pagesReadIn1Hour;
    const result = totalTime / numOfDays;
    console.log(result);
}

solve(212, 20, 2);
solve(432, 15, 4);
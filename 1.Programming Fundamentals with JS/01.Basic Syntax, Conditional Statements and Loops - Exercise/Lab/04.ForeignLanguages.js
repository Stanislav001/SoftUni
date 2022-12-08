function solve(input) {
    let result = '';
    if (input === 'USA' || input === 'England') {
        result = 'English';
    } else if (input === 'Spain' || input === 'Argentina' || input === 'Mexico') {
        result = 'Spanish';
    } else {
        console.log('unknown');
    }
    console.log(result);
}

solve('USA');
solve('Germany');
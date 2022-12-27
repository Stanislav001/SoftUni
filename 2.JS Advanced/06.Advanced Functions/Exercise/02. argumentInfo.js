function argumentInfo() {
    const params = Array.from(Array.from(arguments));

    const types = {};
    for (const arg of params) {
        const type = typeof arg;
        console.log(`${typeof arg}: ${arg}`);

        if (types[type] === undefined) {
            types[type] = 0;
        }

        types[type]++;
    }

    const result = Object.entries(types).sort((a, b) => b[1] - a[1]);

    for (const [type, count] of result) {
        console.log(`${type} = ${count}`);
    }
}

argumentInfo(1, 2, 3);
argumentInfo('a', 'b', 'c');
argumentInfo('cat', 42, function () { console.log('Hello world!'); });
argumentInfo(12, 'b', 'c');
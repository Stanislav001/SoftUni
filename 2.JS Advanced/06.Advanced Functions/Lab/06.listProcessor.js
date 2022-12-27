function listProcessor(input) {
    let result = [];

    function add(string) {
        result.push(string);
    }

    function remove(string) {
        result = result.filter(e => e != string);
    }

    function print() {
        console.log(result.join(','));
    }

    for (const element of input) {
        const [command, value] = element.split(' ');
        switch (command) {
            case 'add':
                add(value);
                break;
            case 'remove':
                remove(value);
                break;
            case 'print':
                print();
                break;
        }
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print'])
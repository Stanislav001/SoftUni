function solve(text, searchText) {
    const splitText = text.split(' ');
    const searchTextArray = splitText.filter(x => x === searchText);
    console.log(searchTextArray.length);
}

solve('This is a word and it also is a sentence', 'is');
solve('softuni is great place for learning new programming languages', 'softuni');
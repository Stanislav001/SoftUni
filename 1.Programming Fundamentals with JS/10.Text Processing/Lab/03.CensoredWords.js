function solve(text, word) {

    let replaced = '*'.repeat(word.length);
    const result = text.replace(word, replaced);
    console.log(result);
}

solve('A small sentence with some words', 'small');
solve('Find the hidden word', 'hidden');
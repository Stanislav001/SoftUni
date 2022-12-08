function solve(str) {
    str.match(/#[a-zA-Z]+/g).forEach(x => { console.log(x.slice(1)) })
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
console.log('----');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');
function solve(radius, height) {
    const volume = 1 / 3 * Math.PI * radius * radius * height;
    const area = Math.PI * radius * (radius + Math.sqrt(radius * radius + height * height))
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

solve(3, 5);
console.log('---');
solve(3.3, 7.8);
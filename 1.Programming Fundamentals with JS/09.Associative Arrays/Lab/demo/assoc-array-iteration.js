let phoneBook = {
    pesho: '0921883211',
    gosho: '0993218321',
    ivan: '0838931231',
    dragan: '0838931231',
};

let phoneBookEntries = Object.entries(phoneBook);

for (const kvp of phoneBookEntries) {
    const name = kvp[0];
    const phone = kvp[1];
    console.log(name, phone);
}

console.log('---');
// shorter version
for (const kvp of Object.entries(phoneBook)) {
    const [name, phone] = kvp;
    console.log(name, phone);
}

console.log('---');
// event shorter version
for (const [name, phone] of Object.entries(phoneBook)) {
    console.log(name, phone);
}
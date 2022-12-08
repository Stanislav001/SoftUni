let phoneBook = {
    pesho: '0921883211',
    gosho: '0993218321',
    ivan: '0838931231',
    dragan: '0838931231',
};

// Convert associative array to array
let phoneBookEntries = Object.entries(phoneBook);

// Sort the array
phoneBookEntries.sort((kvpA, kvpB) => {
    kvpA[0].localeCompare(kvpB[0]);
});

// Sort the array: shorter version 
// phoneBookEntries.sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(kvpB));


// Optional: convert back to associative array
let sortedPhoneBook = Object.fromEntries(phoneBookEntries);
console.log(sortedPhoneBook);
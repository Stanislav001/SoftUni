let phoneBook = {
    pesho: '0921883211',
    gosho: '0993218321',
    ivan: '0838931231',
}

// Check if there is an entry
if (phoneBook.hasOwnProperty('pesho')) {
    console.log('Entry found!');
}

if (phoneBook['pesho']) {
    console.log('Entry found!');
}

// Demove enries
delete phoneBook['pesho'];
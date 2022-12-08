let phoneBook ={
    pesho: '0921883211',
    gosho: '0993218321',
    ivan: '0838931231',
}

for (const name in phoneBook) {
    console.log(name, phoneBook[name]);
}
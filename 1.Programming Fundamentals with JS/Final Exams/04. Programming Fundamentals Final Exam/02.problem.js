function solve(input) {
    const patternBarcode = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
    const patternDigit = /\d/;

    input.shift();

    input.forEach(barcode => {
        if (patternBarcode.test(barcode)) {
            const productGroup = [...barcode]
                .filter(char => patternDigit.test(char))
                .join('');

            if (productGroup.length > 0) {
                console.log(`Product group: ${productGroup}`);
            } else {
                console.log(`Product group: 00`);
            }
        } else {
            console.log('Invalid barcode');
        }
    });
}
solve(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]);
function solve(input) {
    let text = input.shift();
    let regex = /([?<=#|\|])([a-zA-Z ]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1/g;;

    let result = text.matchAll(regex);
    let totalCalories = 0;
    for (let element of result) {
        const separator = element[1];
        const [name, date, calories] = element[0].substring(1).split(separator);
        totalCalories += Number(calories);
    }
    let resultOfDays = Math.ceil((totalCalories / 2000).toFixed(0));
    console.log(`You have food to last you for: ${resultOfDays} days!`);

    result = text.matchAll(regex);
    for (const element of result) {
        const separator = element[1];
        const [name, date, calories] = element[0].substring(1).split(separator);
        console.log(`Item: ${name}, Best before: ${date}, Nutrition: ${calories}`);
    }
}

solve(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
console.log('---');
solve(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
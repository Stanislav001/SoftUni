function maxSequence(arr) {
  let result = [];
  let maxCount = 0;
  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    let count = 0;
    let currentResult = [];
    let elementToCompare = arr[i];

    for (let j = i; j < arrLength; j++) {
      let element = arr[j];

      if (element === elementToCompare) {
        count++;
        currentResult.push(element);
      } else {
        break;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      result = currentResult;
    }
  }
  console.log(result.join(' '));
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequence([4, 4, 4, 4]);
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);
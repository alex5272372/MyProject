function askNumber(message, num) {
    while (num !== null && (isNaN(num) || num == 0 || num != parseInt(num)))
        num = prompt(`Input ${message} number`, '1');
    return +num;
}

function askNumbers() {
    let numbersObject = {first: null, second: null, iterator: null};
    for (curNum in numbersObject)
        if ((numbersObject[curNum] = askNumber(curNum)) === null) return {cancel: true};
    return numbersObject;
}

function fibonacci(numbersObject, iterator) {
    if (iterator === 1)
        return numbersObject.first;
    else if (iterator === 2)
        return numbersObject.second;
    else if (Math.abs(iterator) < 2)
        return iterator;
    else
        return fibonacci(numbersObject, iterator - Math.sign(iterator)) + fibonacci(numbersObject, iterator - Math.sign(iterator) * 2);
}

let numbersObject = askNumbers();
if (!numbersObject.cancel)
    alert(`${numbersObject.iterator} fibonacci = ${fibonacci(numbersObject, numbersObject.iterator)}`);
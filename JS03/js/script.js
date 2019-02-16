function askNumber() {
    let num;
    do {
        num = prompt('Input number', '');
    } while (num !== null && (isNaN(num) || num <= 1 || num != parseInt(num)));
    return num;
}

function factorial(currentNumber, currentFactorial = 1) {
    currentFactorial *= currentNumber;

    if (currentNumber != 1) {
        return factorial(currentNumber - 1, currentFactorial);
    } else {
        return currentFactorial;
    }
}

let num = askNumber();
if (num !== null) {
    alert(`${num}! = ${factorial(num)}`);
}
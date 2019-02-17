function askNumber(num) {
    while (num !== null && (isNaN(num) || num == 0 || num != parseInt(num)))
        num = prompt('Input number', '');
    return num;
}

function fibonacci(num) {
    return Math.abs(num) < 2 ? num : fibonacci(num - Math.sign(num)) + fibonacci(num - Math.sign(num) * 2);
}

let num = askNumber();
if (num !== null) alert(`${num} fibonacci = ${fibonacci(num)}`);
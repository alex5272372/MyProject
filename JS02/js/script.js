let m;
do {
    m = prompt('Input first number', '');
} while (m !== null && (isNaN(m) || m <= 1 || m != parseInt(m)));
let n = null;
while (m !== null) {
    n = prompt(`First number is ${m}, input second number`, '');
    if (n === null || !isNaN(n) && +n > +m && n == parseInt(n)) {
        break;
    }
}
let simpleNumbers = [2];
for (let i = 3; n !== null && i <= n; i++) {
    let isSimle = true;
    for (let num of simpleNumbers) {
        if (num > parseInt(i ** .5) + 1) {
            break;
        } else if (i % num === 0) {
            isSimle = false;
            break;
        }
    }
    if (isSimle) {
        simpleNumbers.push(i);
        if (i >= m) {
            console.log(i);
        }
    }
}
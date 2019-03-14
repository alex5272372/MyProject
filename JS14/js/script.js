/* stage:
0 - пустой дисплей или результат вычисления
1 - ввод первого числа
2 - введена операция
3 - ввод второго числа*/
function Calculator() {
    const calc = {
        stage: 0,
        firstNumber: '',
        secondNumber: '',
        operation: '',
        memoryNumber: 0,
        memoryRead: false,
        compute: () => {
            if(calc.operation === '+') calc.firstNumber = +calc.firstNumber + +calc.secondNumber;
            if(calc.operation === '-') calc.firstNumber = calc.firstNumber - calc.secondNumber;
            if(calc.operation === '*') calc.firstNumber = calc.firstNumber * calc.secondNumber;
            if(calc.operation === '/') calc.firstNumber = calc.firstNumber / calc.secondNumber;
        },
        executeCommand: (key) => {
            switch (key) {
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                case '.':
                    if (calc.stage === 0) {
                        calc.firstNumber = '';
                        calc.stage = 1;
                    }
                    if (calc.stage === 1) calc.firstNumber += key;
                    if (calc.stage === 2) {
                        calc.secondNumber = '';
                        calc.stage = 3;
                    }
                    if (calc.stage === 3) calc.secondNumber += key;
                    break;

                case '+':
                case '-':
                case '*':
                case '/':
                    if(calc.stage === 3) calc.compute();
                    calc.stage = 2;
                    calc.operation = key;
                    break;

                case '=':
                    calc.compute();
                    calc.stage = 0;
                    break;

                case 'C':
                    calc.stage = 0;
                    calc.firstNumber = '';
                    calc.secondNumber = '';
                    calc.operation = '';
                    break;

                case 'm+':
                    calc.memoryRead = false;
                    calc.memoryNumber += calc.stage === 3 ? +calc.secondNumber : +calc.firstNumber;
                    break;

                case 'm-':
                    calc.memoryRead = false;
                    calc.memoryNumber -= calc.stage === 3 ? calc.secondNumber : calc.firstNumber;
                    break;

                case 'mrc':
                    if(calc.memoryRead) calc.memoryNumber = 0;
                    else {
                        calc.memoryRead = true;
                        if(calc.stage === 3) calc.secondNumber = calc.memoryNumber;
                        else calc.firstNumber = calc.memoryNumber;
                    }
                    break;
            }
        }
    };

    return calc;
}
const calc = new Calculator;

const memoryElement = document.createElement('div');
memoryElement.style.position = 'absolute';
memoryElement.style.zIndex = '1';
memoryElement.style.left = '5px';
memoryElement.textContent = 'm';

const displayCalculator = () => {
    displayElement = document.getElementsByClassName('display')[0];
    displayInputElement = displayElement.getElementsByTagName('input')[0];
    displayInputElement.value = calc.stage === 3 ? calc.secondNumber : calc.firstNumber;

    if(calc.memoryNumber) displayElement.insertBefore(memoryElement, displayInputElement);
    else displayElement.removeChild(memoryElement);
};

document.getElementsByClassName('keys')[0].onclick = (event) => {
    if(!event.target.classList.contains('button')) return;
    calc.executeCommand(event.target.value);
    displayCalculator();
};

document.body.onkeypress = (event) => {
    calc.executeCommand(event.key === 'Enter' ? '=' : event.key);
    displayCalculator();
};
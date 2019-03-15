const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const clearBtn = document.getElementById('clearBtn');

const hoursArrow = document.getElementById('hoursArrow');
const minutesArrow = document.getElementById('minutesArrow');
const secondsArrow = document.getElementById('secondsArrow');
const msSpan = document.getElementById('msSpan');

let time = 0;
let timerId;
const testTimer = false; // В тестовом режиме работает в 1000 раз быстрее

const displayTimer = function(newTime) {
    let speed = testTimer ? 1 : 1000;

    msSpan.textContent = testTimer ? '000' : 'ms: ' + ('00' + (newTime - time) % 1000).slice(-3);
    secondsArrow.style.transform = `rotate(${parseInt((newTime - time) / speed) % 60 * 6}deg)`;
    minutesArrow.style.transform = `rotate(${(newTime - time) / speed / 60 % 60 * 6}deg)`;
    hoursArrow.style.transform = `rotate(${(newTime - time) / speed / 60 / 60 % 12 * 30}deg)`;
};

const updateTimer = function () {
    displayTimer(Date.now());
    timerId = setTimeout(updateTimer, 7);

};

const startTimer = function (event) {
    startBtn.hidden = true;

    pauseBtn.hidden = false;
    time = Date.now() - time;
    updateTimer();

};

const pauseTimer = function (event) {
    startBtn.hidden = false;

    pauseBtn.hidden = true;
    clearTimeout(timerId);
    time = Date.now() - time;
};

const clearTimer = function (event) {
    startBtn.hidden = false;

    pauseBtn.hidden = true;
    clearTimeout(timerId);
    time = 0;
    displayTimer(0);
};

startBtn.onclick = startTimer;
pauseBtn.onclick = pauseTimer;
clearBtn.onclick = clearTimer;

class Unit {
    constructor(maxPos) {
        this.left = parseInt(Math.random() * maxPos);
        this.top = parseInt(Math.random() * maxPos);
        this.rotate = parseInt(Math.random() * 4);
    }
    makeStep(maxPos) {
        if (this.rotate === 0 && this.left > 0
        || this.rotate === 1 && this.top > 0
        || this.rotate === 2 && this.left < maxPos
        || this.rotate === 3 && this.top < maxPos) {
            if (this.rotate === 0) this.left--;
            if (this.rotate === 1) this.top--;
            if (this.rotate === 2) this.left++;
            if (this.rotate === 3) this.top++;
            return true;
        } else {
            return false;
        }
    }
}
class Tank extends Unit {
    constructor(maxPos) {
        super(maxPos);
        this.step = parseInt(Math.random() * maxPos);
    }
    makeStep(maxPos) {
        if (this.step && super.makeStep(maxPos)) {
            this.step--;
        } else {
            this.rotate = parseInt(Math.random() * 4);
            this.step = parseInt(Math.random() * maxPos);
        }
    }
}
class MyTank extends Unit {
    constructor(maxPos) {
        super(maxPos);
        this.pressed = [];
    }
    makeStep(maxPos) {
        if (this.pressed.length) super.makeStep(maxPos);
    }
    addKey(keyCode) {
        if (keyCode === 32) {
            // fire

        } else if (keyCode >= 37 && keyCode <= 40 && this.pressed.indexOf(keyCode) === -1) {
            this.pressed.unshift(keyCode);
            this.rotate = this.pressed[0] - 37;
        }
    }
    removeKey(keyCode) {
        let index = this.pressed.indexOf(keyCode);
        if (keyCode >= 37 && keyCode <= 40 && index !== -1) {
            this.pressed.splice(index, 1);
            if (this.pressed.length) this.rotate = this.pressed[0] - 37;
        }
    }
}
class Board {
    constructor(maxPos, tanksCount) {
        this.myTank = new MyTank(maxPos);
        this.time = 0;
        this.maxPos = maxPos;
        this.tanks = [];

        for (let i = 0; i < tanksCount; i++) {
            this.tanks.push(new Tank(maxPos));

            let tankElement = document.createElement('img');
            tankElement.setAttribute('src', 'img/tank.png');
            tankElement.setAttribute('alt', `tank${i + 1}`);
            tankElement.className = 'tankImg';
            boardSection.append(tankElement);
        }

        boardSection.style.width = (maxPos + 26).toString() + 'px';
        boardSection.style.height = (maxPos + 26).toString() + 'px';
    }
    displayTanks() {
        myTankImg.style.left = this.myTank.left.toString() + 'px';
        myTankImg.style.top = this.myTank.top.toString() + 'px';
        myTankImg.style.transform = `rotate(${this.myTank.rotate * 90}deg)`;

        let tankElements = document.getElementsByClassName('tankImg');
        this.tanks.forEach((value, index) => {
            tankElements[index].style.left = value.left.toString() + 'px';
            tankElements[index].style.top = value.top.toString() + 'px';
            tankElements[index].style.transform = `rotate(${value.rotate * 90}deg)`;
        });
    }
    makeStep() {
        this.myTank.makeStep(this.maxPos);
        this.tanks.forEach(value => value.makeStep(this.maxPos));
        this.displayTanks(this.maxPos);
        this.time += .025;
        timeSpan.textContent = parseInt(this.time) + ' s';
    }
}

let board = new Board(574, 4);
board.displayTanks();

let timerId;
startButton.onclick = function() {
    timerId = setInterval(function() {
        board.makeStep(board.maxPos);
    }, 25);

    startButton.disabled = true;
    stopButton.disabled = false;
};
stopButton.onclick = function() {
    clearInterval(timerId);

    startButton.disabled = false;
    stopButton.disabled = true;
};
document.body.onkeydown = function(event) {
    board.myTank.addKey(event.keyCode);
};
document.body.onkeyup = function (event) {
    board.myTank.removeKey(event.keyCode);
};
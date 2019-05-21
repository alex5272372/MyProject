const maxPos = 574;

class Unit {
    constructor() {
        this.left = parseInt(Math.random() * maxPos);
        this.top = parseInt(Math.random() * maxPos);
        this.rotate = parseInt(Math.random() * 4);
    }
    makeStep() {
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
    constructor() {
        super();
        this.step = parseInt(Math.random() * maxPos);
    }
    makeStep() {
        if (this.step && super.makeStep()) {
            this.step--;
        } else {
            this.rotate = parseInt(Math.random() * 4);
            this.step = parseInt(Math.random() * maxPos);
        }
    }
}
class MyTank extends Unit {
    constructor() {
        super();
        this.pressed = [];
    }
    makeStep() {
        if (this.pressed.length) super.makeStep();
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
    constructor() {
        this.myTank = new MyTank();
        this.tank1 = new Tank();
        this.tank2 = new Tank();
        this.tank3 = new Tank();
        this.tank4 = new Tank();
        this.time = 0;
    }
    displayTanks() {
        myTankImg.style.left = this.myTank.left.toString() + 'px';
        myTankImg.style.top = this.myTank.top.toString() + 'px';
        myTankImg.style.transform = `rotate(${this.myTank.rotate * 90}deg)`;
        tank1Img.style.left = this.tank1.left.toString() + 'px';
        tank1Img.style.top = this.tank1.top.toString() + 'px';
        tank1Img.style.transform = `rotate(${this.tank1.rotate * 90}deg)`;
        tank2Img.style.left = this.tank2.left.toString() + 'px';
        tank2Img.style.top = this.tank2.top.toString() + 'px';
        tank2Img.style.transform = `rotate(${this.tank2.rotate * 90}deg)`;
        tank3Img.style.left = this.tank3.left.toString() + 'px';
        tank3Img.style.top = this.tank3.top.toString() + 'px';
        tank3Img.style.transform = `rotate(${this.tank3.rotate * 90}deg)`;
        tank4Img.style.left = this.tank4.left.toString() + 'px';
        tank4Img.style.top = this.tank4.top.toString() + 'px';
        tank4Img.style.transform = `rotate(${this.tank4.rotate * 90}deg)`;
    }
    makeStep() {
        this.myTank.makeStep();
        this.tank1.makeStep();
        this.tank2.makeStep();
        this.tank3.makeStep();
        this.tank4.makeStep();
        this.displayTanks();
        this.time += .025;
        timeSpan.textContent = parseInt(this.time) + ' s';
    }
}

let board = new Board();
board.displayTanks();

let timerId;
startButton.onclick = function() {
    timerId = setInterval(function() {
        board.makeStep();
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
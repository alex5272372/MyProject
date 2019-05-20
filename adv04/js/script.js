const maxPos = 574;

class Unit {
    constructor() {
        this.left = parseInt(Math.random() * maxPos);
        this.top = parseInt(Math.random() * maxPos);
        this.rotate = parseInt(Math.random() * 4);
    }
    makeStep() {
        if (this.rotate === 0 && this.top > 0
        || this.rotate === 1 && this.left < maxPos
        || this.rotate === 2 && this.top < maxPos
        || this.rotate === 3 && this.left > 0) {
            if (this.rotate === 0) this.top--;
            if (this.rotate === 1) this.left++;
            if (this.rotate === 2) this.top++;
            if (this.rotate === 3) this.left--;
            return true;
        } else {
            this.rotate = parseInt(Math.random() * 4);
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
            this.step = parseInt(Math.random() * maxPos);
        }
    }
}
class MyTank extends Unit {
    constructor() {
        super();
        this.go = false;
    }
    makeStep() {
        if (this.go) super.makeStep();
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
  console.dir(event.keyCode);
    if (event.keyCode === 32) {
        // fire

    } else if (event.keyCode === 37) {
        board.myTank.go = true;
        board.myTank.rotate = 3;

    } else if (event.keyCode === 38) {
        board.myTank.go = true;
        board.myTank.rotate = 0;

    } else if (event.keyCode === 39) {
        board.myTank.go = true;
        board.myTank.rotate = 1;

    } else if (event.keyCode === 40) {
        board.myTank.go = true;
        board.myTank.rotate = 2;
    }
};
document.body.onkeyup = function (event) {
    if (event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40) {
        board.myTank.go = false;
    }
};
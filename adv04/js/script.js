class Unit {
    constructor(maxPos, left = null, top = null, rotate = null) {
        this.left = left === null ? parseInt(Math.random() * maxPos) : left;
        this.top = top === null ? parseInt(Math.random() * maxPos) : top;
        this.rotate = rotate === null ? parseInt(Math.random() * 4) : rotate;
    }
    makeStep(maxPos, step = 1) {
        if (this.rotate === 0 && this.left >= step
        || this.rotate === 1 && this.top >= step
        || this.rotate === 2 && this.left <= maxPos - step
        || this.rotate === 3 && this.top <= maxPos - step) {
            if (this.rotate === 0) this.left -= step;
            if (this.rotate === 1) this.top -= step;
            if (this.rotate === 2) this.left += step;
            if (this.rotate === 3) this.top += step;
            return true;
        } else {
            return false;
        }
    }
}
class Bullet extends Unit {
    constructor(left, top, rotate) {
        super(0, left, top, rotate);
    }
    makeStep(maxPos) {
        return super.makeStep(maxPos - Bullet.WIDTH, 4);
    }
    static WIDTH = 4;
}
class Tank extends Unit {
    constructor(maxPos) {
        super(maxPos - Tank.WIDTH);
        this.step = parseInt(Math.random() * maxPos / 2);
        this.bullets = [];
        this.charge = 0;
        this.destroy = 0;
    }
    makeStep(maxPos) {
        if (this.destroy) {
            if (this.destroy < 40) {
                this.destroy++;
            } else {
                this.destroy = 0;
                this.left = parseInt(Math.random() * (maxPos - Tank.WIDTH));
                this.top = parseInt(Math.random() * (maxPos - Tank.WIDTH));
                this.rotate = parseInt(Math.random() * 4);
            }
        } else {
            if (this.step && super.makeStep(maxPos - Tank.WIDTH)) {
                this.step--;
            } else {
                this.rotate = parseInt(Math.random() * 4);
                this.step = parseInt(Math.random() * maxPos / 2);
            }
            this.bullets.forEach((bullet, index, arr) => {
                if (!bullet.makeStep(maxPos)) arr.splice(index, 1);
            });
            if (this.charge === Tank.CHARGE_STEP) {
                let offsetCenter = Tank.WIDTH / 2 - Bullet.WIDTH / 2;
                let offsetFull = Tank.WIDTH - Bullet.WIDTH;
                if (this.rotate === 0) this.bullets.push(new Bullet(this.left, this.top + offsetCenter, this.rotate));
                if (this.rotate === 1) this.bullets.push(new Bullet(this.left + offsetCenter, this.top, this.rotate));
                if (this.rotate === 2) this.bullets.push(new Bullet(this.left + offsetFull, this.top + offsetCenter, this.rotate));
                if (this.rotate === 3) this.bullets.push(new Bullet(this.left + offsetCenter, this.top + offsetFull, this.rotate));
                this.charge = 0;
            } else if (Math.random() < .5) {
                this.charge++;
            }
        }
    }
    static WIDTH = 26;
    static CHARGE_STEP = 60;
}
class MyTank extends Unit {
    constructor(maxPos) {
        super(maxPos - MyTank.WIDTH);
        this.pressed = [];
        this.bullets = [];
        this.charge = 0;
        this.destroy = 0;
    }
    makeStep(maxPos) {
        if (this.destroy) {
            if (this.destroy < 40) {
                this.destroy++;
            } else {
                this.destroy = 0;
                this.left = parseInt(Math.random() * (maxPos - MyTank.WIDTH));
                this.top = parseInt(Math.random() * (maxPos - MyTank.WIDTH));
                this.rotate = parseInt(Math.random() * 4);
            }
        } else {
            if (this.pressed.length) super.makeStep(maxPos - MyTank.WIDTH);
            this.bullets.forEach((bullet, index, arr) => {
                if (!bullet.makeStep(maxPos)) arr.splice(index, 1);
            });
            if (this.charge < MyTank.CHARGE_STEP) this.charge++;
        }
    }
    addKey(keyCode) {
        if (keyCode === 32 && this.charge === MyTank.CHARGE_STEP) {
            let offsetCenter = MyTank.WIDTH / 2 - Bullet.WIDTH / 2;
            let offsetFull = MyTank.WIDTH - Bullet.WIDTH;
            if (this.rotate === 0) this.bullets.push(new Bullet(this.left, this.top + offsetCenter, this.rotate));
            if (this.rotate === 1) this.bullets.push(new Bullet(this.left + offsetCenter, this.top, this.rotate));
            if (this.rotate === 2) this.bullets.push(new Bullet(this.left + offsetFull, this.top + offsetCenter, this.rotate));
            if (this.rotate === 3) this.bullets.push(new Bullet(this.left + offsetCenter, this.top + offsetFull, this.rotate));
            this.charge = 0;

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
    static WIDTH = 26;
    static CHARGE_STEP = 40;
}
class Board {
    constructor(maxPos, tanksCount) {
        this.myTank = new MyTank(maxPos);
        this.maxPos = maxPos;
        this.tanks = [];
        this.time = 0;
        this.tankDestroyed = 0;
        this.myTankDestroyed = 0;

        for (let i = 0; i < tanksCount; i++) {
            this.tanks.push(new Tank(maxPos));

            let tankElement = document.createElement('img');
            tankElement.setAttribute('src', 'img/tank.png');
            tankElement.setAttribute('alt', `tank${i + 1}`);
            tankElement.className = 'tankImg';
            boardSection.append(tankElement);
        }

        boardSection.style.width = (maxPos).toString() + 'px';
        boardSection.style.height = (maxPos).toString() + 'px';
    }
    displayTanks() {
        let bulletElements = document.getElementsByClassName('bullet');
        [].forEach.call(bulletElements, element => element.remove());

        if (this.myTank.destroy) {
            myTankImg.src = 'img/bang.png';
        } else {
            myTankImg.src = 'img/myTank.png';
        }
        myTankImg.style.left = this.myTank.left.toString() + 'px';
        myTankImg.style.top = this.myTank.top.toString() + 'px';
        myTankImg.style.transform = `rotate(${this.myTank.rotate * 90}deg)`;

        this.myTank.bullets.forEach(bullet => {
            let bulletElement = document.createElement('div');
            bulletElement.className = 'bullet';
            bulletElement.style.left = bullet.left.toString() + 'px';
            bulletElement.style.top = bullet.top.toString() + 'px';
            boardSection.append(bulletElement);
        });

        let tankElements = document.getElementsByClassName('tankImg');
        this.tanks.forEach((tank, index) => {
            if (tank.destroy) {
                tankElements[index].src = 'img/bang.png';
            } else {
                tankElements[index].src = 'img/tank.png';
            }
            tankElements[index].style.left = tank.left.toString() + 'px';
            tankElements[index].style.top = tank.top.toString() + 'px';
            tankElements[index].style.transform = `rotate(${tank.rotate * 90}deg)`;
            tank.bullets.forEach(bullet => {
                let bulletElement = document.createElement('div');
                bulletElement.className = 'bullet';
                bulletElement.style.left = bullet.left.toString() + 'px';
                bulletElement.style.top = bullet.top.toString() + 'px';
                boardSection.append(bulletElement);
            });
        });
    }
    makeStep() {
        this.myTank.makeStep(this.maxPos);

        if (!this.myTank.destroy && this.tanks.some(tank =>
            tank.bullets.some(bullet =>
                bullet.left > this.myTank.left - Bullet.WIDTH
                && bullet.left < this.myTank.left + MyTank.WIDTH + Bullet.WIDTH
                && bullet.top > this.myTank.top - Bullet.WIDTH
                && bullet.top < this.myTank.top + MyTank.WIDTH + Bullet.WIDTH))) {
            this.myTank.destroy++;
            this.myTankDestroyed++;
        }

        this.tanks.forEach(tank => {
            tank.makeStep(this.maxPos);

            if (!tank.destroy && this.myTank.bullets.some(bullet =>
                    bullet.left > tank.left - Bullet.WIDTH
                    && bullet.left < tank.left + Tank.WIDTH + Bullet.WIDTH
                    && bullet.top > tank.top - Bullet.WIDTH
                    && bullet.top < tank.top + Tank.WIDTH + Bullet.WIDTH)) {
                tank.destroy++;
                this.tankDestroyed++;
            }
        });
        this.displayTanks(this.maxPos);
        this.time += .025;
        timeSpan.textContent = parseInt(this.time) + ' s';
        tankSpan.textContent = this.tankDestroyed.toString();
        myTankSpan.textContent = this.myTankDestroyed.toString();
    }
}

let board = new Board(600, 10);
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
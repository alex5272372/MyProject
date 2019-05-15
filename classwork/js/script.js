class Cell {
    constructor() {
        // '' for empty, 'X' - player X, 'O' - player O
        this.value = '';
    }
    fill(player) {
        this.value = player;
    }
    clear() {
        this.value = '';
    }
}


class Board {
    constructor() {
        this.board = [
            [new Cell(), new Cell(), new Cell()],
            [new Cell(), new Cell(), new Cell()],
            [new Cell(), new Cell(), new Cell()]
        ];
        this.currentPlayer = 'X';
    }
    showBoard() {
        return this.board.map((item)=>{
            return item.map((cell)=>{
                return cell.value;
            })
        })
    }
    turn(x,y) {
        // TODO: rewrite with try catch
        if(this.board[y][x].value) {
            return false
        }
        if (this.currentPlayer === 'X') {
            this.board[y][x].fill(this.currentPlayer);
            this.currentPlayer = 'O';
        } else {
            this.board[y][x].fill(this.currentPlayer);
            this.currentPlayer = 'X';
        }
        console.table(this.showBoard());
    }

    gameOver() {
        return ['X','O'].some(curV => this.board.some(curS => curS.every(curE => curE.value === curV))
        || this.board.some((curS, indS) => this.board.every(curE => curE[indS].value === curV))
        || this.board.every((curE, indE) => this.board[indE][indE].value === curV)
        || this.board.every((curE, indE) => this.board[indE][2 - indE].value === curV))
    }
}

const board = new Board();

board.turn(1,1); // X
board.turn(2,1); // O
board.turn(0,2); // X
board.turn(1,0); // O
board.turn(2,0); // X
board.turn(1,2); // O

console.log(board.gameOver());
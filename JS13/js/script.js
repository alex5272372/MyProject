function Miner() {
    const minerObj = {
        boardSize: 0,
        board: [],
        flagsCount: 0,
        minesCount: 0,
        gameBegin: false,
        gameOver: false
    };

    // Запрос размера поля, по умолчанию 8
    while (minerObj.boardSize !== null && (isNaN(minerObj.boardSize) || minerObj.boardSize < 3 || minerObj.boardSize != parseInt(minerObj.boardSize)))
        minerObj.boardSize = prompt('Введите размер поля', '8');
    if(minerObj.boardSize === null) minerObj.boardSize = 8;

    // Заполнение поля значениями по умолчанию
    for(let row = 0; row < minerObj.boardSize; row++) {
        let rowArr = [];

        for(let col = 0; col < minerObj.boardSize; col++) {
            rowArr.push({
                closed: true,
                flag: false,
                mine: false,
                minesCount: 0
            })
        }
        minerObj.board.push(rowArr);
    }

    // Заполнение поля минами
    for(let mine = 0; mine < minerObj.boardSize ** 2 / 6; mine++) {

    }

    return minerObj;
}

const displayMiner = function(minerObj) {
    for(let row = 0; row < minerObj.boardSize; row++) {
        let rowElement = document.createElement('tr');

        for(let col = 0; col < minerObj.boardSize; col++) {
            let colElement = document.createElement('td');

            if(minerObj.board[row][col].closed && !minerObj.gameOver) {
                colElement.style.backgroundColor = 'lightgrey';
                if(minerObj.board[row][col].flag) {
                    colElement.className = 'flag';
                    colElement.textContent = String.fromCharCode(9873);
                }
            } else if(minerObj.board[row][col].mine) {
                colElement.textContent = String.fromCharCode(9733);
            }

            rowElement.appendChild(colElement);
        }
        boardTable.appendChild(rowElement);
    }
};

let miner = new Miner;
miner.board[0][0].flag = true;
miner.board[0][1].closed = false;
miner.board[0][1].mine = true;
miner.board[0][2].mine = true;
displayMiner(miner);
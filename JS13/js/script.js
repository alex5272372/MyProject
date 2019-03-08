let miner, boardTable;

function Miner() {
    const minerObj = {
        boardSize: sizeInput.value,
        board: [],
        flagsCount: 0,
        minesCount: parseInt(sizeInput.value ** 2 / 6),
        gameOver: false
    };

    // Заполнение поля начальными значениями
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

    // Заполнение поля минами и числами
    for(let mine = 0; mine < minerObj.minesCount; mine++) {
        let row, col;
        do{
            row = parseInt(Math.random() * minerObj.boardSize);
            col = parseInt(Math.random() * minerObj.boardSize);
        } while(minerObj.board[row][col].mine);
        minerObj.board[row][col].mine = true;

        if(row > 0 && col > 0) minerObj.board[row - 1][col - 1].minesCount++;
        if(row < minerObj.boardSize - 1 && col < minerObj.boardSize - 1) minerObj.board[row + 1][col + 1].minesCount++;
        if(row > 0) minerObj.board[row - 1][col].minesCount++;
        if(row < minerObj.boardSize - 1) minerObj.board[row + 1][col].minesCount++;
        if(col > 0) minerObj.board[row][col - 1].minesCount++;
        if(col < minerObj.boardSize - 1) minerObj.board[row][col + 1].minesCount++;
        if(row > 0 && col < minerObj.boardSize - 1) minerObj.board[row - 1][col + 1].minesCount++;
        if(row < minerObj.boardSize - 1 && col > 0) minerObj.board[row + 1][col - 1].minesCount++;
    }

    return minerObj;
}

const displayMiner = function() {
    gameInfo.textContent = `${String.fromCharCode(9873)}: ${miner.flagsCount} / ${String.fromCharCode(9733)}: ${miner.minesCount}`;
    let rowElements = boardTable.getElementsByTagName('tr');

    for(let row = 0; row < miner.boardSize; row++) {
        let colElements = rowElements[row].getElementsByTagName('td');
        for(let col = 0; col < miner.boardSize; col++) {

            if(miner.board[row][col].closed && !miner.gameOver) {
                if(miner.board[row][col].flag) {
                    colElements[col].className = 'flag';
                    colElements[col].textContent = String.fromCharCode(9873);
                } else {
                    colElements[col].className = 'closed'
                    colElements[col].textContent = '';
                }
            } else {
                colElements[col].className = 'opened';
                if (miner.board[row][col].mine) colElements[col].textContent = String.fromCharCode(9733);
                else colElements[col].textContent = miner.board[row][col].minesCount;
            }
        }
    }
};

const startGame = function() {
    startGroup.hidden = true;
    gameGroup.hidden = false;

    miner = new Miner;
    //miner.gameOver = true;

    // Отображение поля
    boardTable = document.createElement('table');
    for(let row = 0; row < miner.boardSize; row++) {
        let rowElement = document.createElement('tr');
        for(let col = 0; col < miner.boardSize; col++) {
            let colElement = document.createElement('td');
            colElement.minerRow = row;
            colElement.minerCol = col;
            rowElement.appendChild(colElement);
        }
        boardTable.appendChild(rowElement);
    }

    boardTable.onclick = openCell;
    boardTable.ondblclick = openCells;
    boardTable.oncontextmenu = setFlag;
    document.body.appendChild(boardTable);

    displayMiner();
};

const restartGame = function () {
    startGroup.hidden = false;
    gameGroup.hidden = true;
    document.body.removeChild(boardTable);
};

const openCellStep = function(row, col, step = false) {
    miner.board[row][col].closed = false;

    if(!step) {
        if(row > 0 && col > 0) openCellStep(row - 1, col - 1, true);
        if(row < miner.boardSize - 1 && col < miner.boardSize - 1) openCellStep(row + 1, col + 1, true);
        if(row > 0) openCellStep(row - 1, col, true);
        if(row < miner.boardSize - 1) openCellStep(row + 1, col, true);
        if(col > 0) openCellStep(row, col - 1, true);
        if(col < miner.boardSize - 1) openCellStep(row, col + 1, true);
        if(row > 0 && col < miner.boardSize - 1) openCellStep(row - 1, col + 1, true);
        if(row < miner.boardSize - 1 && col > 0) openCellStep(row + 1, col - 1, true);
    }
};

const openCell = function (event) {
    if(miner.gameOver) return;
    let row = event.target.minerRow;
    let col = event.target.minerCol;
    if(!miner.board[row][col].closed) return;

    if(miner.board[row][col].mine) miner.gameOver = true;
    openCellStep(row, col, !!(miner.board[row][col].minesCount));
    displayMiner();
};

const openCells = function (event) {
    if(miner.gameOver) return;
    let row = event.target.minerRow;
    let col = event.target.minerCol;
    if(miner.board[row][col].closed) return;
    let flagsCount = 0;

    if(row > 0 && col > 0 && miner.board[row - 1][col - 1].flag) flagsCount++;
    if(row < miner.boardSize - 1 && col < miner.boardSize - 1 && miner.board[row + 1][col + 1].flag) flagsCount++;
    if(row > 0 && miner.board[row - 1][col].flag) flagsCount++;
    if(row < miner.boardSize - 1 && miner.board[row + 1][col].flag) flagsCount++;
    if(col > 0 && miner.board[row][col - 1].flag) flagsCount++;
    if(col < miner.boardSize - 1 && miner.board[row][col + 1].flag) flagsCount++;
    if(row > 0 && col < miner.boardSize - 1 && miner.board[row - 1][col + 1].flag) flagsCount++;
    if(row < miner.boardSize - 1 && col > 0 && miner.board[row + 1][col - 1].flag) flagsCount++;

    if(miner.board[row][col].minesCount === flagsCount) openCellStep(row, col);
    displayMiner();
};

const setFlag = function (event) {
    if(miner.gameOver) return;
    let minerCell = miner.board[event.target.minerRow][event.target.minerCol];

    if(minerCell.closed) if(minerCell.flag) {
        minerCell.flag = false;
        miner.flagsCount -= 1;
    } else {
        minerCell.flag = true;
        miner.flagsCount += 1;
    }
    displayMiner();
};
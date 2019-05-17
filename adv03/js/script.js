function createBoard() {
    let tableElement = document.createElement('table');
    tableElement.className = 'table';
    document.body.prepend(tableElement);

    for (let row = 1; row <= 30; row++) {
        let trElement = document.createElement('tr');
        tableElement.append(trElement);

        for (let col = 1; col <= 30; col++) {
            let tdElement = document.createElement('td');
            tdElement.className = 'cell';
            trElement.append(tdElement);
        }
    }

    tableElement.addEventListener('click', function (event) {
        event.target.classList.toggle('cell-black');
    });
    document.body.addEventListener('click', function (event) {
        if (event.target === document.body) {
            document.getElementsByClassName('table')[0].classList.toggle('table-black');
        }
    });
}

createBoard();
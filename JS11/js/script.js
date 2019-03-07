function askNumber(num) {
    while (num !== null && (isNaN(num) || num <= 0 || num != parseInt(num)))
        num = prompt('Input count of list items', '1');
    return num;
}
function askString(num, str = '') {
    while (str !== null && !str.length)
        str = prompt(`Input value of list item ${num}`, '');
    return str;
}

(function addList() {
    let itemsNum = askNumber();
    if(itemsNum === null) return;
    let listItemsArr = [];

    for(let itemIndex = 0; itemIndex < itemsNum; itemIndex++) {
        let itemValue = askString(itemIndex + 1);
        if(itemValue === null) return;
        listItemsArr.push(itemValue);
    }

    const listElem = document.createElement('ul');
    listElem.innerHTML = listItemsArr.map((value) => `<li>${value}</li>`).join('');
    document.body.appendChild(listElem);
    const timerElem = document.createElement('p');
    timerElem.textContent = '10';
    document.body.appendChild(timerElem);

    let timerId = setInterval(() => timerElem.textContent -= 1, 1000);
    setTimeout(() => {
        clearInterval(timerId);
        document.body.removeChild(listElem);
        document.body.removeChild(timerElem);
    }, 10000);
}());
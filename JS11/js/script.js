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

    for(itemIndex = 0; itemIndex < itemsNum; itemIndex++) {
        itemValue = askString(itemIndex + 1);
        if(itemValue === null) return;
        listItemsArr.push(itemValue);
    }

    const timerElem = document.getElementById('timer');
    timerElem.hidden = false;
    const listElem = document.createElement('ul');
    listElem.innerHTML = listItemsArr.map((value) => `<li>${value}</li>`).join('');
    document.body.insertBefore(listElem, timerElem);

    let timerId = setInterval(() => timerElem.textContent -= 1, 1000);
    setTimeout(() => {
        clearInterval(timerId);
        document.body.removeChild(listElem);
        timerElem.hidden = true;
    }, 10000);
}());
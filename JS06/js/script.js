function askString(message, str) {
    while (str !== null && str.length === 0)
        str = prompt(`Input ${message}`, '');
    return str;
}

function askStrings() {
    let stringsObject = {firstName: null, lastName: null};
    for (let curNum in stringsObject)
        if ((stringsObject[curNum] = askString(curNum)) === null) return {cancel: true};
    return stringsObject;
}

function createNewUser() {
    let stringsObject = askStrings();
}

createNewUser();
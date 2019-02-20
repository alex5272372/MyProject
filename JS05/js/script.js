function cloneObject(anyObject) {
    let newObj = {};

    for (property in anyObject)
        if (typeof anyObject[property] === "object" && anyObject[property] !== null)
            newObj[property] = cloneObject(anyObject[property]);
        else newObj[property] = anyObject[property];

    return newObj;
}

// Пример использования
let anyObject = {
    firstName: 'Alexey',
    lastName: 'Nikolaenko',
    age: [30,33,36,39],
    experience: {
        html: 'ok',
        css: 2,
        js: {
            cycles: 'yes',
            obj: true
        },
        java: null
    }
}

let newObj = cloneObject(anyObject);
console.log('Clone of object:', newObj);
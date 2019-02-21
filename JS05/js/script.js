/*function cloneObject(anyObject) {
    let newObj = {};

    for (let property in anyObject)
        if (typeof anyObject[property] === "object" && anyObject[property] !== null)
            newObj[property] = cloneObject(anyObject[property]);
        else newObj[property] = anyObject[property];

    return newObj;
}*/

function myAssign(target, ...sources) {
    sources.forEach(source => {
        Object.defineProperties(target, Object.keys(source).reduce((descriptors, key) => {
            descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
            return descriptors;
        }, {}));
    });
    return target;
}

// Пример использования
let anyObject = {
    firstName: 'Alexey',
    lastName: 'Nikolaenko',
    age: [30,33,36,39],
    experience: {
        begin: new Date(),
        years: 2,
        js: {
            cycles: 'yes',
            obj: true
        },
        java: null
    }
}

//let newObj = cloneObject(anyObject);
let newObj = myAssign({}, anyObject);
console.log('Clone of object:', newObj);
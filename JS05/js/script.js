function cloneObject(anyObject) {
    newObject = {};

    for (property in anyObject)
        if (typeof anyObject[property]) = "object" && anyObject[property] !== null)
            newObject[property] = anyObject[property];
        else newObject[property] = cloneObject(anyObject[property]);

    return newObject;
}

let anyObject = {
    firstName: 'Alexey',
    lastName: 'Nikolaenko',
    age: 39,
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

newObj = cloneObject(anyObject);
delete anyObject;
console.log(newObj);
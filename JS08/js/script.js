function findInField(filterVal, keyword, fieldName) {
    let pointIndex = fieldName.indexOf('.');

    if(pointIndex === -1)
        if(Array.isArray(filterVal[fieldName])) return filterVal[fieldName].some((fVal) =>
            fVal.toLowerCase().indexOf(keyword) !== -1);
        else return filterVal[fieldName].toLowerCase().indexOf(keyword) !== -1;
    else return findInField(filterVal[fieldName.substring(0, pointIndex)], keyword, fieldName.substring(pointIndex + 1));
}

function filterCollection(filterArr, keywords, findAll, ...rest) {
    let keywordsArr = keywords.toLowerCase().split(' ');

    return filterArr.filter((filterVal) => {
        if(findAll) return keywordsArr.every((keyword) =>
            rest.some((fieldName) => findInField(filterVal, keyword, fieldName)));
        else return keywordsArr.some((keyword) =>
            rest.some((fieldName) => findInField(filterVal, keyword, fieldName)));
    });
}

let vehicles = [{
    name: 'Toyota',
    description: 'Toyota Motor Corporation',
    contentType: {name: 'car'},
    locales: {name: ['en_US'], description: 'Unated States'}
}, {
    name: 'Mazda',
    description: 'Toyota Motor Corporation',
    contentType: {name: 'car'},
    locales: {name: ['ru_US'], description: 'Unated States'}
}];
console.log('Result:', filterCollection(vehicles, 'en_US Toyota', true,
    'name', 'description', 'contentType.name', 'locales.name', 'locales.description'));
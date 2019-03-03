function excludeBy(mainArr, subArr, fieldName) {
    return mainArr.filter((mainVal) => !subArr.some((subVal) => mainVal[fieldName] === subVal[fieldName]));
}

const users = [{name: "Ivan", surname: "Ivanov", gender: "male", age: 30},
    {name: "Nata", surname: "Grozenko", gender: "female", age: 32},
    {name: "Anna", surname: "Ivanova", gender: "female", age: 22},
    {name: "Alex", surname: "Popov", gender: "male", age: 19}];
const subUsers = [{name: "Ivan", surname: "Ivanov", gender: "male", age: 30},
    {name: "Anna", surname: "Ivanova", gender: "female", age: 22}];

console.log('Result:', excludeBy(users, subUsers, 'surname'));
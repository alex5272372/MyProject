// let str = prompt('Enter string', '');
// for (let i = 0; i < str.length; i++) {
//     console.log(str.charAt(i));
// }

// let name = prompt("Enter your name");
// for (let i = 0; i < name.length; i++) {
//     if (i % 2) console.log(name[i]);
// }

// const storage = {
//     cheese: 4,
//     beef: 18,
//     water: 100,
//     chocolate: 0,
//     milk: 13,
//     blackTea: 2,
//     greenTea: 1,
//     coffe: 0
// };
//
// let userString = prompt('Enter your list', 'milk,chokolate,coffe,water') + ',';
// while (userString !== '') {
//     let item = userString.slice(0, userString.indexOf(','));
//     let count = storage[item] ? storage[item] : `There is no ${item} on storage`;
//     console.log(`${item}: ${count}`);
//     userString = userString.substring(userString.indexOf(',') + 1);
// }

const days = {
    0: 'sunday',
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday',
};

let ourDate = new Date();

let userNumber = prompt('Enter count of days', '2');
ourDate.setDate(ourDate.getDate() - userNumber);
console.log(days[ourDate.getDay()]);


/*
let array = new Array('1', 1, 'null', {}, [1, 2]);
let oldLength = array.length;
let newLength = array.push(12);

if (oldLength < newLength) {
    console.log('Operation success');
} else {
    console.log('Operation oo');
}*/

/*
let from = ['1', 1, 'null', {}, [1, 2], 'gogi'];
let to = [];
let length = from.length;
*/

/*for (let i = 0; i < length; i++) {
    let temp = from.pop();
    to.push(temp);
}*/

/*from.forEach((elem, index, array) => {
    to.push(elem);
});*/

/*
let to = from.map((elem, index, array) => {
    return elem;
});

console.log(to);*/

let storage = ['cheese', 'beef', 'milk', 'chocolate', 'water', 'Walter'];
//storage.forEach((elem) => {console.log(elem)});
let userChoise = prompt('Enter item to replace:', 'milk');
let index = storage.indexOf(userChoise);

while (storage.indexOf(userChoise) === -1) {
    userChoise = prompt('Enter item to replace AGAIN:', 'milk');
    index = storage.indexOf(userChoise);
}
let userReplace = prompt('Enter new items', 'NEWmilk, NEWwater, NEWWalter');
let newItemsToStorage = userReplace.split(', ');
storage.splice(index, 1, ...newItemsToStorage);
alert(`New storage ${storage}`);
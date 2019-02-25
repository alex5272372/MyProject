function askDate(str = '') {
    while (!(str.length === 10 && str[2] === '.' && str[5] === '.'))
        str = prompt(`Введите дату рождения в формате дд.мм.гггг`, str);
    return str;
}

let zodiacMap = new Map([
    ['0101', 'Козерог'],
    ['0121', 'Водолей'],
    ['0221', 'Рыбы'],
    ['0321', 'Овен'],
    ['0421', 'Телец'],
    ['0521', 'Близнецы'],
    ['0622', 'Рак'],
    ['0723', 'Лев'],
    ['0824', 'Дева'],
    ['0924', 'Весы'],
    ['1024', 'Скорпион'],
    ['1123', 'Стрелец'],
    ['1222', 'Козерог']
]);

let birthdayString = askDate();
let zodiacString;
zodiacMap.forEach((value, key) => {
    if (birthdayString.substr(3, 2) + birthdayString.substr(0, 2) >= key)
        zodiacString = value;
});
alert(`Ваш знак зодиака: ${zodiacString}`);

//let birthdayDate = new Date();
function askDate(str = '') {
    while (!(str.length === 10 && str[2] === '.' && str[5] === '.'))
        str = prompt(`Введите дату рождения в формате дд.мм.гггг`, str);
    return str;
}

let birthday = askDate().split('.');
let birthdayDate = new Date(birthday[2] + '-' + birthday[1] + '-' + birthday[0]);
alert(`Вам ${parseInt((Date.now() - birthdayDate.getTime()) / 1000 / 60 / 60 / 24 / 365.25)} лет!`);

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
let chinArr = ['Крыса','Бык','Тигр','Кролик','Дракон','Змея','Лошадь','Коза','Обезьяна','Петух','Собака','Свинья'];

let zodiacString;
zodiacMap.forEach((value, key) => {
    if (birthday[1] + birthday[0] >= key) zodiacString = value;
});
alert(`Ваш знак зодиака ${zodiacString}, по китайскому календарю вы ${chinArr[(birthday[2] - 4) % 12]}`);
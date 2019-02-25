function askDate(str = '') {
    while (!(str.length === 10 && str[2] === '.' && str[5] === '.'))
        str = prompt(`Введите дату рождения в формате дд.мм.гггг`, str);
    return str;
}

birthday = askDate();
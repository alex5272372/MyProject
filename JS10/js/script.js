function deadLineInfo(speedArr, backLogArr, deadLineDate) {
    let speedSum = speedArr.reduce((accumulator, currentValue) => accumulator + currentValue);
    let backLogSum = backLogArr.reduce((accumulator, currentValue) => accumulator + currentValue);

    let nowDate = new Date();
    nowDate.setHours(
        deadLineDate.getHours(),
        deadLineDate.getMinutes(),
        deadLineDate.getSeconds(),
        deadLineDate.getMilliseconds()
    );
    while(backLogSum > 0 && nowDate.getTime() < deadLineDate.getTime()) {
        if(nowDate.getDay() !== 0 && nowDate.getDay() !== 6) backLogSum -= speedSum;
        nowDate.setTime(nowDate.getTime() + 1000 * 60 * 60 * 24);
    }
    alert(backLogSum > 0 ?
        `Команде разработчиков придется потратить дополнительно ${Math.ceil(backLogSum / speedSum * 8)} часов после дедлайна, чтобы выполнить все задачи в беклоге.`
        : `Все задачи будут успешно выполнены за ${(deadLineDate.getTime() - nowDate.getTime()) / 1000 / 60 / 60 / 24} дней до наступления дедлайна!`);
}
deadLineInfo([5, 3], [8, 8, 8, 3], new Date('2019-03-04'));
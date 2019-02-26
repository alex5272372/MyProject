function deadLineInfo(speedArr, backLogArr, deadLineDate) {
    let afterHours = 0, beforeDays = 0;

    alert(afterHours !== 0 ?
        `Команде разработчиков придется потратить дополнительно ${afterHours} часов после дедлайна, чтобы выполнить все задачи в беклоге.`
        : `Все задачи будут успешно выполнены за ${beforeDays} дней до наступления дедлайна!`)
}

let mySpeedArr = [54, 87, 60, 93];
let myBackLogArr = [128, 200, 46, 540, 38, 160, 220, 853];
deadLineInfo(mySpeedArr, myBackLogArr, new Date('2019-03-08'));
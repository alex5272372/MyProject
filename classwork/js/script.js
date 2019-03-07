const packMan = document.querySelector(".packman-wrapper"); //для удобства обращения записываем в константу объект, в котором содержатся вся информация об елементе с классом packman-wrapper в верстке.

document.addEventListener('keydown',(event)=>{ //функции, которая будет выполнятся каждый раз при указанном событии, можно определить аргумент. Назвать аргумент можно как угодно, но в нем будет содержаться ОБЪЕКТ СОБЫТИЯ. Это джаваскриптовый объект, в котором содержится тонна информации о событии в браузере которое произошло, включая нужные нам сведения о том какая кнопка клавиатуры была нажата.
    let top = packMan.style.top; //записываем в переменную top значение свойства top елемента-обертки пэкмэна. Оно приходит в виде строки в которйо написано число с приставкой 'px'
    let curTop = Number(top.slice(0, top.indexOf("px"))); //С помощью метода slice() получаем нужную нам часть строки, а именно от 0-го символа до 'px'
    let left = packMan.style.left; //записываем в переменную top значение свойства left елемента-обертки пэкмэна. Оно приходит в виде строки в которйо написано число с приставкой 'px'
    let curLeft = Number(left.slice(0, left.indexOf("px"))); //С помощью метода slice() получаем нужную нам часть строки, а именно от 0-го символа до 'px'

    switch (event.keyCode) {
        case 40: //40 - стрелка вниз. по этому к текущему значению свойства top пэкмэна, нужно добавить 50, и перезаписать значение свойства top для его обновления
            packMan.style.transform = 'rotate(90deg)';
            packMan.style.top = `${curTop+50}px`; //с помощью шаблоной строки складываем числа до нажатия + 50 после их суммы дописывает "рх"
            console.dir(packMan.style.top);
            break;
        case 38: //38 - стрелка вверх. по этому ОТ текущего значения top нужно отнимать 50
            packMan.style.transform = 'rotate(-90deg)';
            packMan.style.top = `${curTop-50}px`;
            console.dir(packMan.style.top);
            break;
        case 37: //37 - стрелка влево. От текущего значения left отнимает 50
            packMan.style.transform = 'rotate(180deg)';
            packMan.style.left = `${curLeft-50}px`;
            console.dir(packMan.style.top);
            break;
        case 39: //39 - стрелка вправо. К текущему значению left добавляем 50
            packMan.style.transform = 'rotate(0deg)';
            packMan.style.left = `${curLeft+50}px`;
            console.dir(packMan.style.top);
            break;
    }
});

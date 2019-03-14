const mailStorage = [
    {
        subject: "Hello world",
        from: "gogidoe@somemail.nothing",
        to: "lolabola@ui.ux",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
    {
        subject: "How could you?!",
        from: "ladyboss@somemail.nothing",
        to: "ingeneer@nomail.here",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
    {
        subject: "Acces denied",
        from: "info@cornhub.com",
        to: "gogidoe@somemail.nothing",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    }
];

/*получаем заранее созданный элемент, внутри которого будет размещаться список писем*/
const wrapper = document.getElementById("mailWrapper");
/*глобальная переменная, где хранится ИНДЕКС письма у которого открыт текст. Это значит что постучавшись по жтому инжексу в mailStorage мы получим данные письма, у которого сейчас открыт текст
* ДЛя чего на это? Для того, чтобы выполнять некий toggle текста и держать открытым текст только одного письма.*/
let currentShowEmail = 1;

/*Функция, которая отвечает за отображения списка писем.
* В ней происходит все что связано с получением писем из хранилища и приведению их к виду,
* готовому для внедрения в документ и собственно внедрение в документ*/
const showEmailList = () => {
    const fragment = document.createDocumentFragment(); //создает фрагмент документа. Это наш "пакет АТБ" в котором мы переносим "яблоки" из одной "корзины" в другую. некая болванка, в которую можно забрасывать ДОМ ноды, которые потом будут одним скопом вставлены в документ. ВАЖНО - в документ попадет ТОЛЬКО СОЖЕРЖИМОЕ фрагмента, сам фрагмент в HTML не попадет.

    /*Для того, чтобы показать список писем нужно для каждого письма в хранилище выполнить одни и те же действия. По этому используем метод массива forEach()
    * Определяем аргумент elem для того, чтобы иметь доступ к каждому письму на каждой итерации*/
    mailStorage.forEach((elem) => {
        /*СТРУКТУРА ВИДА ПИСЬМА*/
        const emailItem = document.createElement("div"); //создаем айтем письма для разметки. Некий айтем, в котором и будет лежать информация по письму
        const subject = document.createElement("h4"); //создаем заголовок, текст которого это тема письма
        const from = document.createElement("p"); //создаем абзац, текстом которого будет отправитель
        const to = document.createElement("p"); //создаем образ, текстом которого будет получатель
        const text = document.createElement("a"); //создаем ссылку, текстом которой будет текст письма. Это можно было сделать и абзацем, но для отработки переопределения стандартного браузерного поведения. В контексте данного кода получилось выполнить требования без переопределения, но для продвинутого задания все-таки потребюуется это сделать
        text.hidden = true; //у каждого тэга есть атрибут hidden, соответственно у каждой ДОМ ноды есть такое свойство, которое отвечает за этот атрибут. Присваивая true мы прячем от глаз пользователя этот елемент. ВАЖНО - при этом елемент видно в разметке. Таких случаев лучше избегать. Считается что в большинстве случаев есл ипользователь не должен что-то вдиеть, то и в разметке это елемента быть не должно.

        /*добавляем созданные елементы во фрагмент документа*/
        emailItem.appendChild(subject);
        emailItem.appendChild(from);
        emailItem.appendChild(to);
        emailItem.appendChild(text);

        /*Присваиваем сожержимое каждому елементу из созданных в соответствии с полями объекта из хранилища*/
        subject.textContent = elem.subject;
        from.textContent = elem.from;
        to.textContent = elem.to;
        text.textContent = elem.text;

        /*ОБРАБОТЧИК СОБЫТИЙ
        * в данном случае нам нужно "слушать" каждый клик по письму и открывать или прятать его текст*/
        emailItem.onclick = (event) => {
            /*так как клик по тексту имеет категорически другой функционал, то нам нужно отслеживать на что именно внутри письма пользователь нажал*/
            if(event.target !== text) { //ПРОВЕРКА - если пользователь нажал не на текст, то будет полняться код ниже
                /*в первую очередь хорошо было бы убедиться, не нажал ли пользователь на письмо с УЖЕ ОТКРЫТЫМ текстом
                * для этого нам нужно сравнить тот елемент по которому нажал пользователь
                * с елементом, который мы получим из разметки, обратившись по записанному индексу ко всем дочерним елементам wrapper'а
                * wrapper.children[currentShowEmail]  - обращаемся к wrapper'у, у него есть свойство children, которое возвращает HTML коллекцию
                * всех дочерних елементов. По этому смело дописываем обращение по индексу текущего елемента с открытым текстом в квадратных скобках
                * event.currentTarget - свойство currentTarget соержит себе елемент, на обработчике которого было поймано событие
                * Сравниваем их*/
                if (wrapper.children[currentShowEmail] === event.currentTarget) {
                    text.hidden = !text.hidden; //если текущий елемент соткрытым текстом и письмо на которое нажал пользователь совпадают, нам нужно спрятать текст
                } else {
                    /*противном случае нужно закрыть текст там, где он открыт и открыть на том письме, по на которое нажал пользователь*/

                    wrapper.children[currentShowEmail].getElementsByTagName("a")[0].hidden = true; //случимся к всем дочерним елементам wrapper'а, получаем по индексу тот, у которого открыт текст, на нем вызываем поиск елемент по тегу ссылки, добавляем [0] т.к. нужен первый елемент это будет текст письма. Скриываем его с помощью hidden - true

                    event.currentTarget.getElementsByTagName("a")[0].hidden = false; //таким же способм стучимся уже к тексту письма на которое нажал пользователь (event.currentTarget) и доем ему появиться с помощью hidden = false

                    /*теперь нужно перезаписать значение индекса письма с открытым текстом
                    * для этого нужно вызвать метод массива на HTML-коллекции
                    * [] - у кого заимствуем метод? У массива. пустой массив обладает всеми методами массива
                    * .indexOf - какой метод заимствуем
                    * .call - само заимствование, в аргументы которому передаем
                    *     1 - объект для которого мы все это затеяли и в котором нужно будет осуществить поиск
                    *     2 - аргументы метода, который заимствуем */
                    currentShowEmail = [].indexOf.call(wrapper.children, event.currentTarget);

                    /*АЛЬТЕРНАТИВНЫЙ СПОСОБ ПОЛУЧИТЬ ИНДЕКС ПИСЬМА НА КОТОРОЕ НАЖАЛ ПОЛЬЗОВАТЕЛЬ
                    * в  JavaScript есть метод, который делает массив из массиво-подобных структур
                    * Array.from(collection), где collection - это наша массивоподобная структура
                    * таким образом тот же код может выглядить так:
                    * currentShowEmail = Array.from(wrapper.children).indexOf(event.currentTarget)*/
                }
            } else { //в противном случае пользователь нажал на текст и нам нужно вывести модальное окно
                showModal(event.currentTarget); //аргументом в модальное окно передаем то письмо на которое нажал пользователь т.к. информацию отображать нуждно именно по нему. В РЕАЛЬНОЙ ЖИЗНИ вы сюда передавали бы либо айдишку этого письма, либо JS объект из хранилища. Тут это сделано только потому что в целях экономии времени мы позволили всей нужной информмации храниться изначально в дом нода, просто пользователь ее не всю сразу видит.
            }

        };

        /*После этого добавляем письмо во фрагмент*/
        fragment.appendChild(emailItem);
    });

    /*После выполнения цикла фрагмент будет иметь в себе весь список писем, по этому можем смело его интегрировать в document*/
    wrapper.appendChild(fragment);
};

/*Это функция, которая отвечает за отображение модального окна с полной информацией о письме*/
const showModal = (email) => {
    const modalWrapper = document.createElement("div"); //создаем "внешний" блок, который будет залит полупрозрачным фоном для создания эффекта затемнения
    modalWrapper.className = "modal-wrapper"; //присваиваем заранее отрпеделенные стили, где УЖЕ указано как эта область должна выглядеть
    const clone = email.cloneNode(); //так как ДОМ нода штука динамическа нам нужно ее склонировать, чтобы она не пропала из разметки при открытии модального окна
    clone.innerHTML = email.innerHTML; //склонируется только "обертка", все вложенные елементы не будут склонированы, по этому клонируем их руками.
    clone.className = "modal"; //ноде с полной информацией о письме новые стили которые заранее написаны, по этому достаточно присовить только название класса
    modalWrapper.appendChild(clone); //добавляем клон информации о письме с новыми стилями в дочерние елементы modalWrapper'а

    /*по клику на в любое место кроме информации о письме модальное окно должно закрываться так как вокруг самой информации о письме есть modalWrapper мы отслеживаем клик по нему*/
    modalWrapper.onclick = (event) => {
        /*но в таком случае окно закроется и при клике на любой из сложенных елементов. нас это не устраивает.
        * по этому мы удаляем modalWrapper из разметки только тогда, когда event.target , т.е. елемент на который фактически было нажато является этим самым modalWrapper'ом*/
        if(event.target === modalWrapper) {
            modalWrapper.remove();
        }
    };

    /*добавляем в разметку наш modalWrapper со всеми его дочерними елементами перед елементом wrapper в котором лежит список писем*/
    document.body.insertBefore(modalWrapper, wrapper);
};

showEmailList();

const mailBtn = document.getElementById('newMailBtn');
const createNewMail = () => {
    const modalWindow = document.createElement('div');
    modalWindow.className = 'new-mail-modal';
    modalWindow.appendChild(document.createElement('input'));
    modalWindow.appendChild(document.createElement('input')).setAttribute('type', 'email');
    modalWindow.appendChild(document.createElement('input')).setAttribute('type', 'textarea');
    document.body.appendChild(modalWindow);
};

mailBtn.onclick = createNewMail;
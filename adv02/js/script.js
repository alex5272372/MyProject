/**
 * Класс, объекты которого описывают параметры гамбургера.
 *
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 * @throws {HamburgerException}  При неправильном использовании
 */
class HamburgerItem {
    constructor(price, calories, name = '') {
        this.price = price;
        this.calories = calories;
        this.name = name;
    }
}

class Hamburger {
    constructor(size, stuffing) {
        try {
            this._toppings = [];
            if (size instanceof HamburgerItem) {
                this._size = size;
            } else {
                throw new HamburgerException('Параметр size должен быть объектом');
            }
            if (stuffing instanceof HamburgerItem) {
                this._stuffing = stuffing;
            } else {
                throw new HamburgerException('Параметр stuffing должен быть объектом');
            }
        } catch (e) {
            if (e instanceof HamburgerException) {
                console.error(e.toString());
            } else {
                throw e;
            }
        }
    }

    /* Размеры, виды начинок и добавок */
    static SIZE_SMALL = new HamburgerItem(50, 20);
    static SIZE_LARGE = new HamburgerItem(100, 40);
    static STUFFING_CHEESE = new HamburgerItem(10, 20);
    static STUFFING_SALAD = new HamburgerItem(20, 5);
    static STUFFING_POTATO = new HamburgerItem(15, 10);
    static TOPPING_MAYO = new HamburgerItem(50, 20, 'майонез');
    static TOPPING_SPICE = new HamburgerItem(50, 20, 'приправа');

    /**
     * Добавить добавку к гамбургеру. Можно добавить несколько
     * добавок, при условии, что они разные.
     *
     * @param topping     Тип добавки
     * @throws {HamburgerException}  При неправильном использовании
     */
    addTopping(topping) {
        try {
            if (this._toppings.indexOf(topping) === -1) {
                this._toppings.push(topping);
            } else {
                throw new HamburgerException(`Добавка ${topping.name} уже в гамбургере`);
            }
        } catch (e) {
            if (e instanceof HamburgerException) {
                console.error(e.toString());
            } else {
                throw e;
            }
        }
    };

    /**
     * Убрать добавку, при условии, что она ранее была
     * добавлена.
     *
     * @param topping   Тип добавки
     * @throws {HamburgerException}  При неправильном использовании
     */
    removeTopping(topping) {
        try {
            let index = this._toppings.indexOf(topping);
            if (index !== -1) {
                this._toppings.splice(index, 1);
            } else {
                throw new HamburgerException(`Добавки ${topping.name} нету в гамбургере`);
            }
        } catch (e) {
            if (e instanceof HamburgerException) {
                console.error(e.toString());
            } else {
                throw e;
            }
        }
    };

    /**
     * Получить список добавок.
     *
     * @return {Array} Массив добавленных добавок, содержит константы
     *                 Hamburger.TOPPING_*
     */
    getToppings() {
        return this._toppings;
    };

    /**
     * Узнать размер гамбургера
     */
    getSize() {
        return this._size;
    };

    /**
     * Узнать начинку гамбургера
     */
    getStuffing() {
        return this._stuffing;
    };

    /**
     * Узнать цену гамбургера
     * @return {Number} Цена в тугриках
     */
    calculatePrice() {
        return this._toppings.reduce((prevVal, curVal) => prevVal + curVal.price, this._size.price + this._stuffing.price);
    };

    /**
     * Узнать калорийность
     * @return {Number} Калорийность в калориях
     */
    calculateCalories() {
        return this._toppings.reduce((prevVal, curVal) => prevVal + curVal.calories, this._size.calories + this._stuffing.calories);
    };
}

/**
 * Представляет информацию об ошибке в ходе работы с гамбургером.
 * Подробности хранятся в свойстве message.
 * @constructor
 */
class HamburgerException extends Error {
    constructor(message) {
        super(message);
        this.name = "HamburgerError";
    }
}

// маленький гамбургер с начинкой из сыра
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// спросим сколько там калорий
console.log("Calories: %f", hamburger.calculateCalories());
// сколько стоит
console.log("Price: %f", hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_SPICE);
// А сколько теперь стоит?
console.log("Price with sauce: %f", hamburger.calculatePrice());
// Проверить, большой ли гамбургер?
console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log("Have %d toppings", hamburger.getToppings().length); // 1
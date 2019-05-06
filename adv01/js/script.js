/**
 * Класс, объекты которого описывают параметры гамбургера.
 *
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 * @throws {HamburgerException}  При неправильном использовании
 */
function Hamburger(size, stuffing) {
    this._toppings = [];
    this._size = size;
    this._stuffing = stuffing;
}

/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = {
    price: 50,
    calories: 20
};
Hamburger.SIZE_LARGE = {
    price: 100,
    calories: 40
};
Hamburger.STUFFING_CHEESE = {
    price: 10,
    calories: 20
};
Hamburger.STUFFING_SALAD = {
    price: 20,
    calories: 5
};
Hamburger.STUFFING_POTATO = {
    price: 15,
    calories: 10
};
Hamburger.TOPPING_MAYO = {
    price: 20,
    calories: 5
};
Hamburger.TOPPING_SPICE = {
    price: 15,
    calories: 0
};

/**
 * Добавить добавку к гамбургеру. Можно добавить несколько
 * добавок, при условии, что они разные.
 *
 * @param topping     Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.addTopping = function (topping) {
    if (this._toppings.indexOf(topping) === -1) this._toppings.push(topping);
};

/**
 * Убрать добавку, при условии, что она ранее была
 * добавлена.
 *
 * @param topping   Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.removeTopping = function (topping) {
    let index = this._toppings.indexOf(topping);
    if (index !== -1) this._toppings.splice(index, 1);
};

/**
 * Получить список добавок.
 *
 * @return {Array} Массив добавленных добавок, содержит константы
 *                 Hamburger.TOPPING_*
 */
Hamburger.prototype.getToppings = function () {
    return this._toppings;
};

/**
 * Узнать размер гамбургера
 */
Hamburger.prototype.getSize = function () {
    return this._size;
};

/**
 * Узнать начинку гамбургера
 */
Hamburger.prototype.getStuffing = function () {
    return this._stuffing;
};

/**
 * Узнать цену гамбургера
 * @return {Number} Цена в тугриках
 */
Hamburger.prototype.calculatePrice = function () {
    return this._toppings.reduce((prevVal, curVal) => prevVal + curVal.price, this._size.price + this._stuffing.price);
};

/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Hamburger.prototype.calculateCalories = function () {
    return this._toppings.reduce((prevVal, curVal) => prevVal + curVal.calories, this._size.calories + this._stuffing.calories);
};

/**
 * Представляет информацию об ошибке в ходе работы с гамбургером.
 * Подробности хранятся в свойстве message.
 * @constructor
 */
function HamburgerException () {

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
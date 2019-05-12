/*
function Deck(n) {
    this.amount = n;
    const amounts = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'].reverse();
    const suits = ['s','c','d','h'];

    const deckTemplate = (new Array(n))
        .fill('')
        .map((item, i) => `${amounts[i % (n / 4)]}${suits[parseInt(i / (n / 4))]}`);
    let deck = [...deckTemplate];

    this.takeOne = () => deck.shift();
    this.getDeck = () => deck;

    const getRandom = max => Math.floor(Math.random() * max);
    this.shuffle = () => {
        let tempDeck = [...deckTemplate];
        deck = [];
        while (tempDeck.length) {
            const index = getRandom(tempDeck.length);
            const item = tempDeck.splice(index, 1)[0];
            deck.push(item);
        }
        return true;
    }
}

testDeck = new Deck(52);
testDeck.shuffle();
console.log(testDeck.getDeck());
*/

/*
function Burger(meat, sauce) {
    this.lookAtMeat = () => meat;
    this.findSauce = () => sauce;
}

Burger.prototype.basePrice = 10;
Burger.prototype.meatTypes = {
    chicken: 5,
    beef: 8,
    pork: 7,
    fish: 7,
    veggie: 5
};
Burger.prototype.sauceTypes = {
    bbq: 3,
    curry: 4,
    chile: 3.5,
    mustard: 5,
    mayo: 3,
    cheese: 4
};

Burger.prototype.price = function () {
    return this.basePrice + this.meatTypes[this.lookAtMeat()] + this.sauceTypes[this.findSauce()];
};
*/

class Burger {
    constructor(meat, sauce) {
        this.meat = meat;
        this.sauce = sauce;
    }

    basePrice = 10;
    meatTypes = {
        chicken: 5,
        beef: 8,
        pork: 7,
        fish: 7,
        veggie: 5
    };
    sauceTypes = {
        bbq: 3,
        curry: 4,
        chile: 3.5,
        mustard: 5,
        mayo: 3,
        cheese: 4
    };

    lookAtMeat() {
        return this.meat;
    }
    findSauce() {
        return this.sauce;
    }

    get price() {
        return this.basePrice + this.meatTypes[this.lookAtMeat()] + this.sauceTypes[this.findSauce()];
    }
}

const testBurger = new Burger('chicken', 'cheese');
console.log(testBurger.price);
const SIZE_SMALL = {
    name: 'SIZE_SMALL',
    price: 15,
    cal: 250,
};

const SIZE_LARGE = {
    name: 'SIZE_LARGE',
    price: 25,
    cal: 340,
};

const STUFFING_CHEASE = {
    name: 'STUFFING_CHEASE',
    price: 4,
    cal: 25,
};

const STUFFING_SALAD = {
    name: 'STUFFING_SALAD',
    price: 5,
    cal: 5,
};

const STUFFING_BEEF = {
    name: 'STUFFING_BEEF',
    price: 10,
    cal: 50,
};

function validation(sizeToValidate, stuffingToValidate) {
    while (sizeToValidate === undefined || stuffingToValidate === undefined) {
        sizeToValidate = prompt("Enter correct size", "");
        stuffingToValidate = prompt("Enter correct stuffing", "");
    }
    return {
        size: sizeToValidate,
        stuffing: stuffingToValidate
    }
}

function getCaloriesAndPrice({size, stuffing}) {
    let resPrice = 0;
    let resCallories = 0;

    switch (size) {
        case SIZE_LARGE.name:
            resPrice += SIZE_LARGE.price;
            resCallories += SIZE_LARGE.cal;
            break;
        case SIZE_SMALL.name:
            resPrice += SIZE_SMALL.price;
            resCallories += SIZE_SMALL.cal;
            break;
    }
    switch (stuffing) {
        case STUFFING_CHEASE.name:
            resPrice += STUFFING_CHEASE.price;
            resCallories += STUFFING_CHEASE.cal;
            break;
        case STUFFING_SALAD.name:
            resPrice += STUFFING_SALAD.price;
            resCallories += STUFFING_SALAD.cal;
            break;
        case STUFFING_BEEF.name:
            resPrice += STUFFING_BEEF.price;
            resCallories += STUFFING_BEEF.cal;
            break;
    }

    return `Total calories: ${resCallories}
    Total price: ${resPrice}`;
}

function getBurgerPrice() {
    let size = prompt("Enter size", "SIZE_SMALL");
    let stuffing = prompt("Enter stuffing", "STUFFING_CHEASE");
    let correctSizeStuffing = validation(size, stuffing);

    return getCaloriesAndPrice(correctSizeStuffing);
}

alert(getBurgerPrice());
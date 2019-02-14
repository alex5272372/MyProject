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

function getBurgerPrice(size, stuffing) {
    let resPrice = 0;
    let resCallories = 0;

    while (size === undefined || stuffing === undefined) {
        size = prompt("Enter correct size", "");
        stuffing = prompt("Enter correct stuffing", "");
    }

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

alert(
    getBurgerPrice(
        prompt("Enter size", "SIZE_SMALL"),
        prompt("Enter stuffing", "STUFFING_CHEASE")
    )
);
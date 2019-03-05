/*
//mouseOver.addEventListener('mouseover', () => {alert('asd')});

function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

// elem.onclick = () => {
//     elem.style.backgroundColor = `rgb(${getRandomArbitrary(0,255)},${getRandomArbitrary(0,255)},${getRandomArbitrary(0,255)})`
// };

const elem = document.getElementsByClassName('change-color-block')[2];
const button = document.getElementById('changeColorBtn');
// button.addEventListener('click', () => {
//     elem.style.backgroundColor = `rgb(${getRandomArbitrary(0,255)},${getRandomArbitrary(0,255)},${getRandomArbitrary(0,255)})`;
// });
const input = document.getElementById('inputColor');

button.onclick = () => {
    elem.style.backgroundColor = input.value;
};*/

const packMan = document.querySelector('.packman-top');
document.addEventListener('keydown', (event) => {
switch (event.keyCode) {
    case 37:
        console.log('qq');
        packMan.offsetLeft.value -= 10;
        break;
    case 38:
        packMan.offsetTop.value -= 10;
        break;
    case 39:
        packMan.offsetLeft.value += 10;
        break;
    case 40:
        packMan.offsetLeft.value += 10;
        break;
}
});

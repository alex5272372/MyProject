let colorSheme;

const displayColorScheme = function () {
    const wrapElement = document.getElementsByClassName('wrap')[0];
    const asideElement = document.getElementsByClassName('aside-menu')[0];
    const imgElement = document.getElementsByClassName('img-border')[0];

    if(colorSheme) {
        wrapElement.style.backgroundColor = 'yellow';
        asideElement.style.backgroundColor = 'lightblue';
        imgElement.style.backgroundColor = 'lightgreen';
    } else {
        wrapElement.style.backgroundColor = '';
        asideElement.style.backgroundColor = '';
        imgElement.style.backgroundColor = '';
    }
};

const changeColorScheme = function () {
    colorSheme = Number(!colorSheme);
    localStorage.setItem('colorSheme', colorSheme);
    displayColorScheme();
};

const ready = function () {
    colorSheme = Number(localStorage.getItem('colorSheme'));
    displayColorScheme();
};

document.addEventListener('DOMContentLoaded', ready);
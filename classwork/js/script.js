//let elementsByTagName = document.getElementsByTagName('div');
//let elementsByClassName = document.getElementsByClassName('class-name2');
//let elementById = document.getElementById('container');
//let element = document.querySelector('.class-name2');
//console.dir(element);

let elementsByClassName = document.getElementsByClassName('training-list');
for(let i = 0; i < elementsByClassName.length; i++) {
    if(elementsByClassName[i].innerHTML === 'list-element 5') {
        elementsByClassName[i].innerHTML = 'qqqqqqqqqqqqqqq';
    }
}
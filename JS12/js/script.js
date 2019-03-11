const drawCircles = function () {
    const hideCircle = function (event) {
        event.target.style.borderColor = 'transparent';
    };

    const drawCirclesWithParams = function () {
        //diameterWrap.hidden = true;
        document.body.removeChild(diameterWrap);

        for(let row = 0; row < 10; row++) {
            let rowElement = document.createElement('div');

            for(let col = 0; col < 10; col++) {
                let colElement = document.createElement('div');
                colElement.style.display = 'inline-block';
                colElement.style.border = `${diameterInput.value / 2}px solid rgb(${parseInt(Math.random() * 256)},${parseInt(Math.random() * 256)},${parseInt(Math.random() * 256)})`;
                colElement.style.borderRadius = '50%';
                rowElement.appendChild(colElement);
            }
            document.body.appendChild(rowElement);
        }
        document.body.onclick = hideCircle;
    };

    //draw.hidden = true;
    document.body.removeChild(draw);

    const diameterWrap = document.createElement('div');
    const diameterTitle = document.createTextNode('Диаметр круга: ');
    diameterWrap.appendChild(diameterTitle);

    const diameterInput = document.createElement('input');
    diameterInput.value = '50';
    diameterWrap.appendChild(diameterInput);

    const drawWithParams = document.createElement('button');
    drawWithParams.textContent = 'Нарисовать';
    drawWithParams.onclick = drawCirclesWithParams;
    diameterWrap.appendChild(drawWithParams);
    document.body.appendChild(diameterWrap);
};
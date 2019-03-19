const draw = $('#draw');

draw.click(function () {
    const $body = $('body');
    draw.remove();

    const drawCirclesWithParams = function () {
        diameterWrap.remove();

        for(let row = 0; row < 10; row++) {
            let rowElement = $('<div>');

            for(let col = 0; col < 10; col++) {
                rowElement.append($('<div>').css({
                    'display': 'inline-block',
                    'border': `${diameterInput.val() / 2}px solid rgb(${parseInt(Math.random() * 256)},${parseInt(Math.random() * 256)},${parseInt(Math.random() * 256)})`,
                    'borderRadius': '50%'
                }));
            }
            $body.append(rowElement);
        }
        $body.click(function () {
            $(event.target).fadeTo('slow', 0);
        });
    };

    const diameterWrap = $('<div>', {text: 'Диаметр круга: '});
    const diameterInput = $('<input>', {value: '50'});

    diameterWrap.append(diameterInput);
    diameterWrap.append($('<button>', {
        text: 'Нарисовать',
        click: drawCirclesWithParams
    }));

    $body.prepend(diameterWrap);
});

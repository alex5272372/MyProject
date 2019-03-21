$(document).ready(function () {
    const $html = $('html');

    $('body').prepend($('<p>')
        .css({
            'font-family': 'Arial, sans-serif',
            'font-size': '25px',
            'text-transform': 'uppercase',
            'font-weight': 'bold'
        })
        .append($('<a>', {href: '#clockAnchor', text: 'сlock'})
            .click(function () {
                $html.animate({scrollTop: $('#clockAnchor').offset().top}, 1000);
            })
        )
        .append($('<a>', {href: '#treeAnchor', text: 'tree'})
            .css({'margin-left': '50px'})
            .click(function () {
                $html.animate({scrollTop: $('#treeAnchor').offset().top}, 1000);
            })
        )
        .append($('<a>', {href: '#waterAnchor', text: 'water'})
            .css({'margin-left': '50px'})
            .click(function () {
                $html.animate({scrollTop: $('#waterAnchor').offset().top}, 1000);
            })
        )
    );
    $('.main.bg.clock + .main.text').after($('<button>', {
        text: 'Изменить видимость',
        click: function () {
            $('.main.bg.clock').slideToggle(500);
            $('.main.bg.clock + .main.text').slideToggle(500);
            $html.animate({scrollTop: $('#clockAnchor').offset().top}, 500);
        }
    }));

    $('.main.bg.clock').before($('<div>', {id: 'clockAnchor'}));
    $('.main.bg.tree').before($('<div>', {id: 'treeAnchor'}));
    $('.main.bg.water').before($('<div>', {id: 'waterAnchor'}));

    $(window).scroll(function () {
        if($html.scrollTop() > $(window).height()) {
            if($('button').is('#homeBtn')) return;

            $('body').prepend($('<button>', {
                id: 'homeBtn',
                text: 'Наверх',
                click: function () {
                    $html.animate({scrollTop: 0}, 1000);
                }
            }).css({
                'position': 'fixed',
                'right': '0',
                'bottom': '0'
            }));

        } else if($('button').is('#homeBtn'))
            $('#homeBtn').remove();
    });
});
let serviceTab;
let workTab;
let peopleTab;
let workMore = 1;
let gridMore = 0;

const displayServiceTab = function () {
    $(`.service-tab:not(:eq(${serviceTab}))`).removeClass('active-service');
    $(`.service-content:not(:eq(${serviceTab}))`).hide();
    $(`.service-tab:eq(${serviceTab})`).addClass('active-service');
    $(`.service-content:eq(${serviceTab})`).show();
};

const displayWorkTab = function () {
    $(`.work-tab:not(:eq(${workTab}))`).removeClass('active-work');
    $(`.work-tab:eq(${workTab})`).addClass('active-work');
    if(workTab) {
        $(`.work-img:not(.cat${workTab})`).hide();
        $(`.cat${workTab}`).show();
        $('.work-button').hide();
    } else {
        $(`.work-img:lt(${workMore * 12})`).show();
        $(`.work-img:gt(${workMore * 12 - 1})`).hide();
        if (workMore === 3) $('.work-button').hide();
        else $('.work-button').show();
    }
};

const displayPeopleTab = function (newPeopleTab = null) {
    let $peopleTab = $('.people-tab');
    let $peopleTabBg = $('.people-tab-bg');

    if(newPeopleTab !== null) {
        if(newPeopleTab === peopleTab) return;

        $peopleTabBg.eq(peopleTab).hide();
        $peopleTab.eq(peopleTab)
        .removeClass('people-active')
        .animate({
            top: '12px',
            left: `${peopleTab * 100 + 40}px`,
            width: '60px',
            height: '60px'
        });

        peopleTab = newPeopleTab;
        localStorage.setItem('peopleTab', peopleTab);
    }

    $('.people-info').hide().eq(peopleTab).show();
    $peopleTabBg.eq(peopleTab).show();

    $peopleTab.eq(peopleTab)
    .addClass('people-active')
    .animate({
        top: '-200px',
        left: '148px',
        width: '144px',
        height: '144px'
    });
};

const displayRandomImages = function () {
    let randomIndex = 0;

    $(`.grid-item:not(:lt(${gridMore * 8}),.grid0,.grid-item--height2)`).each(function (index, elem) {
        $(elem).css({
            backgroundImage: `url("https://loremflickr.com/372/260?random=${++randomIndex + gridMore * 18}")`
        })
    });
    $(`.grid-item:not(:lt(${gridMore * 8})).grid-item--height2`).each(function (index, elem) {
        $(elem).css({
            backgroundImage: `url("https://loremflickr.com/372/370?random=${++randomIndex + gridMore * 18}")`
        })
    });
    $(`.grid-item:not(:lt(${gridMore * 8})) .grid0-item:not(.grid0-item--width2)`).each(function (index, elem) {
        $(elem).css({
            backgroundImage: `url("https://loremflickr.com/120/95?random=${++randomIndex + gridMore * 18}")`
        })
    });
    $(`.grid-item:not(:lt(${gridMore * 8})) .grid0-item--width2`).each(function (index, elem) {
        $(elem).css({
            backgroundImage: `url("https://loremflickr.com/183/170?random=${++randomIndex + gridMore * 18}")`
        })
    });
};

const gridItemMouseEnter = function (event) {
    $(event.currentTarget).append($('<div>')
        .addClass('grid-hover')
        .append($('<div>')
            .addClass('grid-hover-button')
            .append($('<i>')
                .addClass('fas')
                .addClass('fa-search')))
        .append($('<div>')
            .addClass('grid-hover-button')
            .append($('<i>')
                .addClass('fas')
                .addClass('fa-expand-arrows-alt'))));
};

const gridItemMouseLeave = function (event) {
    $(event.currentTarget).find('.grid-hover').remove();
};

const displayGridItems = function () {
    let $grid = $('.grid');

    for(let itemIndex = 1; itemIndex <= 8; itemIndex++) {
        let $elem = $('<div>').addClass('grid-item');
        if(itemIndex !== 3) $elem.mouseenter(gridItemMouseEnter).mouseleave(gridItemMouseLeave);

        if(itemIndex === 2 || itemIndex === 6) $elem.addClass('grid-item--height2');
        else if(itemIndex === 3) {
            $elem.addClass(`grid0`);

            for(let itemIndex1 = 1; itemIndex1 <= 11; itemIndex1++) {
                let $elem1 = $('<div>').addClass(`grid0-item`);
                $elem1.mouseenter(gridItemMouseEnter).mouseleave(gridItemMouseLeave);

                if(itemIndex1 === 1 || itemIndex1 === 2) $elem1.addClass(`grid0-item--width2`);
                if(itemIndex1 !== 2 && itemIndex1 !== 5 && itemIndex1 !== 8 && itemIndex1 !== 11)
                    $elem1.css({marginRight: '6px'});
                $elem.append($elem1).masonry('appended', $elem1);
            }
        }
        $grid.append($elem).masonry('appended', $elem);
    }
    displayRandomImages();
};

const ready = function () {
    serviceTab = Number(localStorage.getItem('serviceTab'));
    displayServiceTab();

    $('.service-tabs').click(function (event) {
        serviceTab = $(event.target).index();
        localStorage.setItem('serviceTab', serviceTab);
        displayServiceTab();
    });

    $('.loader-boxes').hide();
    workTab = Number(localStorage.getItem('workTab'));
    displayWorkTab();

    $('.work-tabs').click(function (event) {
        workTab = $(event.target).index();
        localStorage.setItem('workTab', workTab);
        workMore = 1;
        displayWorkTab();
    });

    let workImg = $('.work-img');

    workImg.mouseenter(function (event) {
        $(event.currentTarget).append($('<div>')
            .addClass('work-hover')
            .append($('<div>')
                .append($('<a href="#">')
                    .addClass('work-hover-button')
                    .append($('<i>')
                        .addClass('fas')
                        .addClass('fa-link')
                    )
                )
                .append($('<a href="#">')
                    .addClass('work-hover-button')
                    .append($('<i>')
                        .addClass('fas')
                        .addClass('fa-search')
                    )
                )
            )
            .append($('<p>creative design</p>').addClass('work-hover-p1'))
            .append($('<p>Web Design</p>').addClass('work-hover-p2'))
        );
    });

    workImg.mouseleave(function (event) {
        $(event.currentTarget).find('.work-hover').remove();
    });

    $('.work-button').click(function (event) {
        event.preventDefault();
        $('.work .loader-boxes').show();
        setTimeout(function () {
            $('.work .loader-boxes').hide();
            workMore++;
            displayWorkTab();
        }, 2000)
    });

    peopleTab  = Number(localStorage.getItem('peopleTab'));
    displayPeopleTab();

    $('.people-tab').click(function (event) {
        displayPeopleTab($('.people-tab').index(event.target));
    });
    $('.people-left').click(function () {
        if(peopleTab > 0) displayPeopleTab(peopleTab - 1);
    });
    $('.people-right').click(function () {
        if(peopleTab < 3) displayPeopleTab(peopleTab + 1);
    });

    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 372,
        gutter: 20
    });

    $('.grid0').masonry({
        itemSelector: '.grid0-item',
        columnWidth: 57,
        gutter: 6
    });
    displayRandomImages();

    $('.grid-button').click(function (event) {
        event.preventDefault();
        $('.grid-loader .loader-boxes').show();
        setTimeout(function () {
            $('.grid-loader .loader-boxes').hide();
            gridMore++;
            displayGridItems();
        }, 2000)
    });

    let gridItem = $('.grid-item:not(.grid0),.grid0-item');
    gridItem.mouseenter(gridItemMouseEnter);
    gridItem.mouseleave(gridItemMouseLeave);
};

document.addEventListener('DOMContentLoaded', ready);
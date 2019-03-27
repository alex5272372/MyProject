let serviceTab;
let workTab;
let workMore = 1;
let peopleTab;

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
};

document.addEventListener('DOMContentLoaded', ready);
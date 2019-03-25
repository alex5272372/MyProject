let serviceTab;
let workTab;

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
    } else $('.work-img').show();
};

const ready = function () {
    serviceTab = Number(localStorage.getItem('serviceTab'));
    displayServiceTab();

    $('.service-tabs').click(function (event) {
        serviceTab = $(event.target).index();
        localStorage.setItem('serviceTab', serviceTab);
        displayServiceTab();
    });

    workTab = Number(localStorage.getItem('workTab'));
    displayWorkTab();

    $('.work-tabs').click(function (event) {
        workTab = $(event.target).index();
        localStorage.setItem('workTab', workTab);
        displayWorkTab();
    });
};

document.addEventListener('DOMContentLoaded', ready);
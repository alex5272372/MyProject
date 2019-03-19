const mailStorage = [
    {
        subject: "Hello world",
        from: "gogidoe@somemail.nothing",
        to: "lolabola@ui.ux",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
    {
        subject: "How could you?!",
        from: "ladyboss@somemail.nothing",
        to: "ingeneer@nomail.here",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
    {
        subject: "Acces denied",
        from: "info@cornhub.com",
        to: "gogidoe@somemail.nothing",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    }
];

const $mailWrapper = $('#mailWrapper');

const createMailItem = (emailFromStorage, showText) => {
    const $mailSliderItem = $('<div>');
    const $mailItem = $('<div/>', {class: 'mail-item'});
    const text = showText ? `<p class="mail-item-text">${emailFromStorage.text}</p>` : '';

    $mailItem.append(
        `<h4 class="mail-item-subject">${emailFromStorage.subject}</h4>
            <p class="mail-item-from">${emailFromStorage.from}</p>
            <p class="mail-item-to">${emailFromStorage.to}</p>
            ${text}`);
    $mailSliderItem.append($mailItem);
    return $mailSliderItem;
};

const showEmailList = () => {
    const $documentFragment = $(document.createDocumentFragment());

    mailStorage.forEach((email) => {
        const $mailItem = createMailItem(email,false).find(':first');

        $mailItem.click((event) => {
            const itemIndex = $(event.currentTarget).index();
            let itemText = $(`.mail-item:eq(${itemIndex}) > .mail-item-text`)[0];

            if(itemText) {
                itemText.remove();

            } else {
                $('.mail-item > .mail-item-text').remove();
                itemText = $('<p/>', {
                    class: 'mail-item-text',
                    text: mailStorage[itemIndex].text
                });
                $(event.currentTarget).append(itemText);
            };
        });
        $documentFragment.append($mailItem);
    });

    $mailWrapper.append($documentFragment);
};

showEmailList();

$(document).ready(function(){
    $('#mailWrapper').slick({
        variableHeight: true,
        arrows: true,
        dots: true
    });
});
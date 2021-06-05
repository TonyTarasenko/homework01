const zero = 0;
const first = 1;

$('.square-outside').click((e) => {
    const clickedBtn = $(e.target);
    switch(clickedBtn.data('target')){
    case 'btn-plus':
        clickedBtn.prev('.square-inside').text((i, value) => {
            let val = Number(value);
            return ++val;
        });
        break;
    case 'btn-minus':
        if(clickedBtn.next('.square-inside').text() <= zero) {
            alert('Zero is the min value');
            return;
        }
        clickedBtn.next('.square-inside').text((i, value) => {
            let val = Number(value);
            return --val;
        });
    }
});

$('.colors-item').click((e) => {
    const colors = [
        'rgb(255, 0, 0)',
        'rgb(139, 0, 0)',
        'rgb(0, 255, 0)',
        'rgb(128, 128, 0)',
        'rgb(0, 0, 255)',
        'rgb(128, 0, 128)',
        'rgb(160, 82, 45)'
    ];
    const currentElement = $(e.target);
    const color = currentElement.css('background-color');
    for(let i = 0; i < colors.length; i++) {
        if(color === colors[i]) {
            currentElement.css('background-color', colors[i + first]);
            break;
        } else if(color === colors[colors.length - first]) {
            currentElement.css('background-color', colors[zero]);
            break;
        }
    }
    currentElement.insertAfter($('.colors > div:last-of-type'));
});

$('#create-tabs').submit((event) => {
    event.preventDefault();

    const tabValue = $('#tab').val();
    const contentValue = $('#content').val();

    if (tabValue && contentValue) {
        $('#create-tabs').after('<section>');

        $('section:first-of-type')
            .append(`<button class="button-content"data-target="${tabValue}"> ${tabValue}</button>`);
        $('section:first-of-type')
            .append(`<div class="content" id="${tabValue}"> ${contentValue} </div>`);

    } else alert('Form is empty');

    $('form').trigger('reset');

    const firstIsActive = $('section:last-of-type > div');
    $('.content').removeClass('is-active');
    $(firstIsActive).addClass('is-active');

    $('.button-content').click(function(){
        const target = $(this).data('target');

        $('.content').removeClass('is-active');
        $(`#${target}`).addClass('is-active');
    });
});

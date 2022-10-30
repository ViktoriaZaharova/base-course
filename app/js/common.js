$('.go_to').click(function (e) {
    e.preventDefault();
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length !== 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
    }
    return false;
});

// модальные окна (несколько)
$(function () {
    let overlay = $('.overlay'),
        open_modal = $('.open_modal'),
        close = $('.modal__close, .overlay'),
        modal = $('.modal__div');

    open_modal.on('click',function (event) {
        event.preventDefault();

        modal.css('display', 'none').animate({
            opacity: 0,
            top: '45%'
        }, 200);

        let div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.on('click', function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end

// accordeon
function accordeon() {
    var panel = $('.panel_heading');

    if (panel.hasClass('in')) {
        $('.in').find('.block_hover').slideDown();
    }

    $('.panel_heading .block_title').on('click', function () {
        $(this).parent().toggleClass('in').find('.block_hover').slideToggle();
    });
}

accordeon();

$('.programs').each(function () {
    if ($(this).find('.program-box').length > 1) {
        $(this).find('.program-box').slice(1).hide();
    }
});

// show list all
$('.link-toggle').on('click', function(e){
    e.preventDefault();

    var
        $this = $(this),
        content = $(this).parent().find('.program-box');


    if(!$this.hasClass('trigger')){
        $this.addClass('trigger');
        $this.html('Скрыть программу всех ступеней');

        content.css('display', 'flex');
    } else {
        $this.removeClass('trigger');
        $this.html('Показать программу всех ступеней');

        content.slice(1).css('display', 'none');
    }
});
// show list all
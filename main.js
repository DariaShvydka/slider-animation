function makeSlide(url, className) {
    return (`
    <div class='slider__item ${className || ''}'>
        <img class='slider__item--image' alt='' src='${url}'>
    </div>
`)
};

var images = ['images/boy_1.png', 'images/boy_2.png'];

function slider() {
    const slidesCount = 3;
    let image = 0
    for (let i = 0; i < slidesCount; i++) {
        $('.slider__item--container').append(makeSlide(images[+image]))
        image = !(image)
    };
    $('.button__right').on('click', () => {
        $('.slider__item').last().addClass('move-right');
        window.setTimeout(function() {
            $('.slider__item--container').prepend(makeSlide(images[+image], 'move-left abs'))
            image = !(+image)
            window.setTimeout(function() {
                $('.slider__item:eq( 1 ), .slider__item:eq( 2 )').css({right: "187px"});
                $('.slider__item').first().removeClass('move-left')
                $('.slider__item').first().removeClass('abs')
                $('.slider__item').last().remove()
                $('.slider__item:eq( 1 ), .slider__item:eq( 2 )').animate({right: "0px"}, 500, function() {
                    $('.slider__item').css({'right': ''})
                });
            }, 200)
        }, 100)
    })
    $('.button__left').on('click', () => {
        $('.slider__item').first().addClass('move-left');
        window.setTimeout(function() {
            $('.slider__item--container').append(makeSlide(images[+image], 'move-right abs'))
            image = !(+image)
            window.setTimeout(function() {
                console.log($('.slider__item:eq( 1 ), .slider__item:eq( 2 )'));
                $('.slider__item:eq( 1 ), .slider__item:eq( 2 )').css({left: "187px"});
                $('.slider__item').last().removeClass('move-right abs')
                $('.slider__item').first().remove()
                $('.slider__item:eq( 0 ), .slider__item:eq( 1 )').animate({left: "0px"}, 500, function() {
                    $('.slider__item').css({'left': ''})
                });
            }, 200)
        }, 100)
    })
}

$(document).ready(slider);
function inSection(section = $('.page__section, .header, .footer')) {
    if (
        $(window).height() + $(window).scrollTop() > section.offset().top && 
        $(window).scrollTop() < section.offset().top + section.height()
    ) {
        return true;
    } else {
        return false;
    }
}

function Slider(section = $('.page__section')) {
    this.state = false;
    this.slider = section.find('.slider');

    this.count = 0;
    setInterval( () => {
        if(this.state) {
            if (this.count === 0) {
                this.getItem(1).item.css('order', 'unset');
                this.slider.scrollLeft(0);
                this.slider.animate({
                    scrollLeft: this.getItem(1).position - this.slider.position().left
                });
                this.count = 1;
            } else if (this.count > 0) {
                this.getItem(1).item.css('order', '-1');
                this.slider.scrollLeft(0);
                this.slider.animate({
                    scrollLeft: this.getItem(0).position - this.slider.position().left
                });
                this.count = 0;
            }
        }
    }, 2800);
}
Slider.prototype.getItem = function(index) {
    let item = this.slider.find('.slider__item[data-slide-to=\''+index+'\'');
    let itemIndex = Number(item.prop('data-slide-to'));
    let position = item.position().left;

    return {item, itemIndex, position}
}

let header = $('.header');
let footer = $('.footer');

let animSections = $('.anim-section');
let textShowAnim = $('.text-show-anim');
let footerArrowAnim = $('.footer__arrow-anim');

let headerSlider = new Slider(header);
let footerSlider = new Slider(footer);

$(window).on('load scroll', ev => {
    if ( inSection(header)) {
        headerSlider.state = true;
        header.find(textShowAnim).addClass('--show');
    } else {
        headerSlider.state = false;
        header.find(textShowAnim).removeClass('--show');
    }
    
    if ( inSection(footer) ) {
        footer.find(textShowAnim).addClass('--show');
        footerArrowAnim.addClass('--show');
    } else {
        footer.find(textShowAnim).removeClass('--show');
        footerArrowAnim.removeClass('--show');
    }

    animSections.each( (i, section) => {
        section = $(section);

        if ( inSection(section)) {
            section.find(textShowAnim).addClass('--show');
        } else {
            section.find(textShowAnim).removeClass('--show');
        }
    });
});

$(' .records__descrs').on('click', ev => {
    $('.records__play-btn-wrapper').css({
        height: '173.5px',
        transition: '1s ease-in-out',
        opacity: '1'
    })
})
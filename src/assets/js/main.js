function inSection(section) {
    let sectionPosStart = section.position().top;
    let sectionPosEnd = section.position().top + section.height();
    if (
        $(window).scrollTop() >= sectionPosStart - $(window).height()+200
    ) {
        return true;
    }
    else {
        return false;
    }
}

// Items slide
{
    let item =  $('.header__descr-item');
    let gap = $('.header__descr-wrapper').css('column-gap');

    let count = 0;
    let state = true;

    $(item[0]).on('mouseover', ev => {
        state = false;
    });

    $(item[0]).on('mouseleave', ev => {
        state = true;
    });

    setInterval( () => {
        if(state) {
            if (count === 0) {
                item.css('left', `calc(-100% - ${gap})`);
                count+=1;
            }
            else if (count === 1) {
                item.css('left', '0px');
                count=0;
            }
        }
    }, 2800);

    $(item[1]).on('mouseover', ev => {
        item.css('left', '0px');
    });
}

// Header text anim
{
    let text = $('.header__text-anim');
    let section = $('.header');

    $(window).on('scroll load', ev => {
        if (inSection(section) ) {
            text.addClass('--show');
        }
    });
}

// Youllget text anim
{
    let text = $('.youllget__text-anim');
    let section = $('.youllget');

    $(window).on('scroll', ev => {
        if (inSection(section) ) {
            text.addClass('--show');
        }
    });
}

// Results text anim
{
    let text = $('.results__text-anim');
    let section = $('.results');

    $(window).on('scroll', ev => {
        if (inSection(section) ) {
            text.addClass('--show');
        }
    });
}

// Pricaapp bg anim
{
    let bg = $('.priceapp__bg-anim');
    let text = $('.priceapp__text-anim')
    let section = $('.priceapp');

    $(window).on('scroll', ev => {
        if (inSection(section) ) {
            bg.addClass('--anim');
            text.addClass('--show');
        }
    });
}

// Products text anim
{
    let text = $('.products__text-anim')
    let section = $('.products');

    $(window).on('scroll', ev => {
        if (inSection(section) ) {
            text.addClass('--show');
        }
    });
}

// Program text anim
{
    let text = $('.program__text-anim')
    let section = $('.program');

    $(window).on('scroll', ev => {
        if (inSection(section) ) {
            text.addClass('--show');
        }
    });
}

// Records text anim
{
    let text = $('.records__text-anim')
    let section = $('.records');

    $(window).on('scroll', ev => {
        if (inSection(section) ) {
            text.addClass('--show');
        }
    });
}

// Trening text anim
{
    let text = $('.trening__text-anim')
    let section = $('.trening');

    $(window).on('scroll', ev => {
        if (inSection(section) ) {
            text.addClass('--show');
        }
    });
}

// Footer text anim
{
    let text = $('.footer__text-anim')
    let section = $('.footer');

    $(window).on('scroll', ev => {
        if (inSection(section) ) {
            text.addClass('--show');
        }
    });
}

// Footer arrow anim
{
    let text = $('.footer__arrow-anim')
    let section = $('.footer');

    $(window).on('scroll', ev => {
        if (inSection(section) ) {
            text.addClass('--show');
        }
    });
}

// Footer form wrapper slide
{
    let item =  $('.footer__form-item');
    let gap = $('.footer__form-list').css('column-gap');

    let count = 0;
    let state = true;

    $(item[1]).on('mouseover', ev => {
        state = false;
    });

    $(item[1]).on('mouseleave', ev => {
        state = true;
    });

    setInterval( () => {
        if(state) {
            if (count === 0) {
                item.css('left', `calc(-100% - ${gap})`);
                count+=1;
            }
            else if (count === 1) {
                item.css('left', '0px');
                count=0;
            }
        }
    }, 2800);

    $(item[0]).on('mouseover', ev => {
        item.css('left', `calc(-100% - ${gap})`);
    })
}
{
    let item =  $('.header__descr-item');
    let gap = $('.header__descr').css('column-gap');

    let state = 0;

    setInterval( () => {
        if (state === 0) {
            item.css('left', `calc(-100% - ${gap})`);
            state+=1;
        }
        else if (state === 1) {
            item.css('left', '0px');
            state=0;
        }
    }, 3800)
}

{
    let item = $('.header__title, .header__descr');
    let itemSpan = item.children('span');

    setTimeout( () => {
        item.css('top', '0');
        itemSpan.css('opacity', '100');
    }, 2000);

    
}
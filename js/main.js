"use strict";

function inSection() {
  var section = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('.page__section, .header, .footer');
  if ($(window).height() + $(window).scrollTop() > section.offset().top && $(window).scrollTop() < section.offset().top + section.height()) {
    return true;
  } else {
    return false;
  }
}
function Slider() {
  var _this = this;
  var section = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('.page__section');
  this.state = false;
  this.slider = section.find('.slider');
  this.count = 0;
  setInterval(function () {
    if (_this.state) {
      if (_this.count === 0) {
        _this.getItem(1).item.css('order', 'unset');
        _this.slider.scrollLeft(0);
        _this.slider.animate({
          scrollLeft: _this.getItem(1).position - _this.slider.position().left
        });
        _this.count = 1;
      } else if (_this.count > 0) {
        _this.getItem(1).item.css('order', '-1');
        _this.slider.scrollLeft(0);
        _this.slider.animate({
          scrollLeft: _this.getItem(0).position - _this.slider.position().left
        });
        _this.count = 0;
      }
    }
  }, 2800);
}
Slider.prototype.getItem = function (index) {
  var item = this.slider.find('.slider__item[data-slide-to=\'' + index + '\'');
  var itemIndex = Number(item.prop('data-slide-to'));
  var position = item.position().left;
  return {
    item: item,
    itemIndex: itemIndex,
    position: position
  };
};
var header = $('.header');
var footer = $('.footer');
var animSections = $('.anim-section');
var textShowAnim = $('.text-show-anim');
var footerArrowAnim = $('.footer__arrow-anim');
var headerSlider = new Slider(header);
var footerSlider = new Slider(footer);
$(window).on('load scroll', function (ev) {
  if (inSection(header)) {
    headerSlider.state = true;
    header.find(textShowAnim).addClass('--show');
  } else {
    headerSlider.state = false;
    header.find(textShowAnim).removeClass('--show');
  }
  if (inSection(footer)) {
    footer.find(textShowAnim).addClass('--show');
    footerArrowAnim.addClass('--show');
  } else {
    footer.find(textShowAnim).removeClass('--show');
    footerArrowAnim.removeClass('--show');
  }
  animSections.each(function (i, section) {
    section = $(section);
    if (inSection(section)) {
      section.find(textShowAnim).addClass('--show');
    } else {
      section.find(textShowAnim).removeClass('--show');
    }
  });
});
$(' .records__descrs').on('click', function (ev) {
  $('.records__play-btn-wrapper').css({
    height: '173.5px',
    transition: '1s ease-in-out',
    opacity: '1'
  });
});
//# sourceMappingURL=main.js.map

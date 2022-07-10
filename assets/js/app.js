$(function () {
  // Nav toggleon mobile
  let navToggle = $('#navToggle');
  let nav = $('#nav');

  navToggle.on('click', function (event) {
    event.preventDefault();

    $('body').toggleClass('show-nav');
    $(this).toggleClass('active');
    nav.toggleClass('show');
  });

  $(window).on('resize', function () {
    $('body').removeClass('show-nav');
    navToggle.removeClass('active');
    nav.removeClass('show');
  });

  let intro = $('#intro');
  let header = $('#header');
  let introHeight = intro.innerHeight();
  let headerHeight = header.innerHeight();
  let scrollTop = $(window).scrollTop();

  //   Header class on scroll

  headerScroll();

  $(window).on('scroll  resize', function () {
    headerScroll();
  });

  function headerScroll() {
    introHeight = intro.innerHeight();
    headerHeight = header.innerHeight();

    let scrollTop = $(this).scrollTop();

    if (scrollTop >= introHeight - headerHeight) {
      header.addClass('header--dark');
    } else {
      header.removeClass('header--dark');
    }
  }

  //   Smooth Scroll to sections

  $('[data-scroll]').on('click', function (event) {
    event.preventDefault();

    let scrollEl = $(this).data('scroll');
    let scrollElPositon = $(scrollEl).offset().top;

    $('body').removeClass('show-nav');
    navToggle.removeClass('active');
    nav.removeClass('show');

    $('html, body').animate(
      {
        scrollTop: scrollElPositon - headerHeight,
      },
      500
    );
  });

  //   Scroll spy

  let windowHeight = $(window).height();

  crollSpy(scrollTop);

  $(window).on('scroll', function () {
    scrollTop = $(this).scrollTop();

    crollSpy(scrollTop);
  });

  function crollSpy(scrollTop) {
    $('[data-scrollspy]').each(function () {
      let $this = $(this);
      let sectionId = $this.data('scrollspy');
      let sectionOffset = $this.offset().top;
      sectionOffset = sectionOffset - windowHeight * 0.33333;

      if (scrollTop >= sectionOffset) {
        $('#nav [data-scroll]').removeClass('active');

        $('#nav [data-scroll="' + sectionId + '"]').addClass('active');
      }

      if (scrollTop == 0) {
        $('#nav [data-scroll]').removeClass('active');
      }
    });
  }

  //   Modals

  $('[data-modal]').on('click', function (event) {
    event.preventDefault();

    let modal = $(this).data('modal');

    $('body').addClass('no-scroll');
    $(modal).addClass('show');

    setTimeout(function () {
      $(modal).find('.modal__content').css({
        transform: 'scale(1)',
        opacity: '1',
      });
    });
  });

  $('[data-modal-close]').on('click', function (event) {
    event.preventDefault();
    let modal = $(this).parents('.modal');

    modalClose(modal);
  });

  $('.modal').on('click', function () {
    let modal = $(this);

    modalClose(modal);
  });

  $('.modal__content').on('click', function (event) {
    event.stopPropagation();
  });

  function modalClose(modal) {
    modal.find('.modal__content').css({
      transform: 'scale(0.5)',
      opacity: '0',
    });

    setTimeout(function () {
      $('body').removeClass('no-scroll');
      modal.removeClass('show');
    }, 200);
  }

  //   Slick slider https://kenwheeler.github.io/slick/

  let introSlider = $('#introSlider');

  introSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpedd: 4000,
    speed: 500,
  });

  $('#introSliderNext').on('click', function () {
    introSlider.slick('slickPrev');
  });

  $('#introSliderPrev').on('click', function () {
    introSlider.slick('slickNext');
  });

  //   ReviewsSlider
  let reviewsSlider = $('#reviewsSlider');

  reviewsSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,

    speed: 500,
  });

  //   AOS https://github.com/michalsnik/aos
  AOS.init({
    disable: 'mobile',
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 80,
    delay: 0,
    duration: 700,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
  });
});

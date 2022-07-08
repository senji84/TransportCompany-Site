$(function () {
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
});

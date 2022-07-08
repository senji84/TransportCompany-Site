$(function () {
  let intro = $('#intro');
  let header = $('#header');

  headerScroll();

  $(window).on('scroll resize', function () {
    headerScroll();
  });

  function headerScroll() {
    let introHeight = intro.innerHeight();
    let headerHeight = header.innerHeight();

    let scrollTop = $(this).scrollTop();

    if (scrollTop >= introHeight - headerHeight) {
      header.addClass('header--dark');
    } else {
      header.removeClass('header--dark');
    }
  }
});

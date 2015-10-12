$(window).scroll(function(){
console.log('hi')
  var wScroll = $(this).scrollTop();

  // Landing Elements
  if(wScroll > $('.sma-bilder').offset().top - ($(window).height() / 1)) {

    $('.sma-bilder').each(function(i){

      setTimeout(function(){
        $('.sma-bilder').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });

  }


});

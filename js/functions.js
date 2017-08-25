$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.bg-m').css({
    'transform' : 'translate(0px, '+ wScroll /70 +'%)'
  });

  $('.bg-c').css({
    'transform' : 'translate(0px, '+ wScroll /4 +'%)'
  });
    
  $('.bg-a-1').css({
    'transform' : 'translate(0px, -'+ wScroll /60 +'%)'
  });  
  
  $('.bg-a-2').css({
    'transform' : 'translate(0px, -'+ wScroll /10 +'%)'
  });

  $('.img-gc').css({
    'transform' : 'translate(0px, -'+ wScroll /150 +'%)'
  });
    
  $('.img-fp1').css({
    'transform' : 'translate(0px, -'+ wScroll /180 +'%)'
  });
    
});

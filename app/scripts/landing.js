$(document).ready(function() {
  $('h1').click(function() {
    $(this).fadeOut('slow');
  });

  $('.hero-content h3').click(function(){
    var subText = $(this).text();
    $(this).text(subText + "!");
  });

  var onHoverAction = function(e) {
    console.log('Hover action triggered.');
    $(this).animate({'margin-top':'10px'});
  };

  var offHoverAction = function(e) {
    console.log('Off-hover action triggered.');
    $(this).animate({'margin-top':'0'});
  };

  $('.selling-points .point').hover(onHoverAction, offHoverAction);
  $('.selling-points .point').click(function() {
    $(this).children('p').css('font-size', '24px');
  });

  $('.hero-content h3').hover(function() {
    $(this).css("color", "red");
  }, function() {
    $(this).css("color", "white");
  });

});
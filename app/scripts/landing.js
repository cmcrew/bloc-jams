$(document).ready(function() {
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
});
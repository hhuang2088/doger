$(document).ready(function() {
  var counter = 0;
  $('#counter').html(counter.toString());
  $('#slider').click(function() {

    $.get("http://dogecoinerme.appspot.com/oneclick.jsp?uid=sol&domain=block.io", function(data) {
      counter = parseInt(data.trim(), 10);
      $('#counter').html(counter.toString());
      $('#plus').css({visibility: 'visible'});
      if(counter>=1) {
        $('#icon').animate({marginLeft:"0px"}, 200);
        $('#slider').css({backgroundColor:"rgb(0, 255, 0)"});
        $('#icon').css({pointerEvents:"auto"});
      } else {
        $('#icon').animate({marginLeft:'38px'}, 200);
        $('#slider').css({backgroundColor:"grey"});
        $('#icon').css({pointerEvents:"none"});
      }
    });
    
  });
  $('#icon').click(function() {
    counter -= 2;
    $('#counter').html(counter.toString());
  });
  $('#plus').click(function() {
    $('#counter').html(counter.toString());
  });
})
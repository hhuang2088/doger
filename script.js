$(document).ready(function() {
  var counter = 0;
  $('#counter').html(counter.toString());
  $('#slider').click(function() {
    counter += 1;
    $.get("http://dogecoinerme.appspot.com/oneclick.jsp", function(data) {
      alert(data.trim);
    }
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
  $('#icon').click(function() {
    counter -= 2;
    $('#counter').html(counter.toString());
  });
  $('#plus').click(function() {
    $('#counter').html(counter.toString());
  });
  // $.get({
  //   url: "http://dogecoinerme.appspot.com/total",
  //   data: {
  //     uid: "sol",
  //     domain: "block.io"
  //   },
  //   success: success,
  //   dataType: jsp
  // });

  // $.post({
  //   url: "http://dogecoinerme.appspot.com/oneclick",
  //   data: {
  //     uid: "sol",
  //     domain: "sochain"
  //   },
  //   success: success,
  //   dataType: json
  // });
})
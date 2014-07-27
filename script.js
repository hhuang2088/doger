$(document).ready(function() {
  var counter = 0;
  $('#icon').draggable = false;
  $('#doge_icon').draggable = false;
  $('#counter').html(counter.toString());
  $('#slider').click(function() {
    $('#plus').css({visibility: 'visible'});
    $('#slider').css({backgroundColor:"green"});
    $('#icon').animate({marginLeft:"0px"}, 200);
    counter += 1;
    $('#counter').html(counter.toString());
  });
  // $.get({
  //   url: "sochain.com"
  //   data: data,
  //   success: success,
  //   dataType: json
  // });

  // $.post({
  //   url: "sochain.com",
  //   data: data,
  //   success: success,
  //   dataType: json
  // });
})
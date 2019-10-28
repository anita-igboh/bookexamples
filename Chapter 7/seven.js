// $('li[id!="one"]').hide().delay(500).fadeIn(1400); // semi-colon indicates end of chaining - can be writen on separate lines
// $('li:first-child').addClass('next');
// $('li.priority').addClass('highlight');




// $(document).ready(function(){

// });


$(document).ready(function(){
$(function() {
    $('li').on('click', function() {
      $(this).animate({
        opacity: 0.0,
        paddingLeft: '+=80'
      }, 500, function() {
        $(this).remove();
      });
    });
  });
});




// //The addClass() method adds one or more class names to the selected elements.

// $(function() {
//   $('.hide').hide();
// });

$(function() {
  $('#add').click(function() {
    $('#thirdText').addClass('hide');
    alert('ok!')
  });
});

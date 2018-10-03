jQuery(function($){

$( "a.toggle-button" ).click(function() {
  $( this ).toggleClass( "active-icon" );
  return false
});


$( "a.toggle-location" ).click(function() {
  $( "a.toggle-location" ).removeClass( "active-location" );
  $( this ).addClass( "active-location" );
  return false
});


$( ".btn-group button" ).click(function() {
  $( this ).addClass( "btn-primary" );
  return false
});

$('#otherForm').hide();

  $('#other').click(function(){
    $('#otherForm').show();
  });
  
  $('.industry').click(function(){
    $('#otherForm').hide();
  });

});

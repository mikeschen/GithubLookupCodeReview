var lookUp = require('./../js/lookup.js').lookUp;

$(document).ready(function(){
  $('#userFind').click(function(){
    var inputUsername = $('#user').val();
    var newUser = new lookUp(inputUsername);
    $.get(newUser.findUser(), function(response) {
    	$('.showUser').prepend("<h3>The repos for " + inputUsername + " are :</h3><hr>");
    	for (var i=0; i<response.length; i++) {
        $('.showName').append("<h4>" + response[i].name + "</h4><br>" + response[i].description + "<br><hr>");
	    }
    }).fail(function(error) {
      $('.showUser').text(error.responseJSON.message);
    });
    $('.showUser').empty();
    $('.showName').empty();
  });
});
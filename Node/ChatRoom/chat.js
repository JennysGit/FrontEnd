$(function(){
	var user = "Jenny";
	$('#sendMsg').click(function(event) {
		var msg = $('#message').val();
		if(msg != ""){
			var htmlMsg = getMessageHtml(msg);
			$('#user-msg').append(htmlMsg);
			$('#message').val('');
		}
		
	});

});

function getMessageHtml(msg){
	var html = '<div class="user-message">' + msg+ '</div>';
	return html;
}
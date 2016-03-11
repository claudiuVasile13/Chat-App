$(document).ready(function() {
	$('#users').hover(
		function() {
			$('#users').css("overflow-y", "auto");
		},
		function() {
			$('#users').css("overflow-y", "hidden");
		}
	);
	$('#rooms').hover(
		function() {
			$('#rooms').css("overflow-y", "auto");
		},
		function() {
			$('#rooms').css("overflow-y", "hidden");
		}
	);
	$('#chat-messages').hover(
		function() {
			$('#chat-messages').css("overflow-y", "auto");
		},
		function() {
			$('#chat-messages').css("overflow-y", "hidden");
		}
	);
});

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
});

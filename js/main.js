var popcorn;

$(document).ready( function() {

	$("#watchVideo").click( function() {
		
		$("#ipadImage").fadeOut("slow", function() {
			$('.carousel').carousel(0);
			$('.carousel').carousel('pause');
		});

		$("#videoTrailer")[0].play();
	});

	$("#videoTrailer").bind("ended", function() {

		$("#ipadImage").fadeIn("slow", function() {
			$('.carousel').carousel('cycle');
		});
	});

	$('.carousel').carousel();

});

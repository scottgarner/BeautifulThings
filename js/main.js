var popcorn;

$(document).ready( function() {

	$("#watchVideo").click( function() {
		$("#ipadImage").fadeOut("slow", function() {
			popcorn.play(0);
			$('.carousel').carousel(0);
			$('.carousel').carousel('pause');
			
		});
	});

	popcorn = Popcorn("#videoTrailer");

	popcorn.on("ended", function() {
		
		$("#ipadImage").fadeIn("slow", function() {
			$('.carousel').carousel('cycle');
		});

	});

	$('.carousel').carousel();

});

var popcorn;

$(document).ready( function() {

	$("#watchVideo").click( function() {
		$("#ipadImage").fadeOut("slow", function() {
			popcorn.play();
		});
	});

	popcorn = Popcorn("#videoTrailer");

	popcorn.on("playing", function() {
		$("#ipadVideo").show();
	});
	popcorn.on("ended", function() {
		
		$("#ipadVideo").fadeOut("slow", function() {
			$('.carousel').carousel(0);
			$("#ipadImage").fadeIn();
		});

	});

	$('.carousel').carousel();

});

var popcorn;

$(document).ready( function() {

	$("#watchVideo").click( function() {
		$("#coverImage").fadeOut("slow", function() {
			popcorn.play(0);
		});
	});

	popcorn = Popcorn("#videoTrailer");

	popcorn.on("playing", function() {
		$("#ipadVideo").show();
	});
	popcorn.on("ended", function() {
		
		$("#ipadVideo").fadeOut("slow", function() {
			$("#coverImage").fadeIn();
		});

	});

});

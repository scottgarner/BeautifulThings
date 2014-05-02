var popcorn;

$(document).ready( function() {

	$("#watchVideo").click( function() {
		$("#ipadImage").fadeOut("slow", function() {
			popcorn.play();
			$('.carousel').carousel('pause');
			$('.carousel').carousel(0);
		});
	});

	popcorn = Popcorn("#videoTrailer");

	popcorn.on("playing", function() {
		$("#ipadVideo").show();
	});
	popcorn.on("ended", function() {
		
		$("#ipadVideo").fadeOut("slow", function() {
			$('.carousel').carousel('cycle');
			$("#ipadImage").fadeIn();
		});

	});

	$('.carousel').carousel();

});

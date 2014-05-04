var popcorn;

$(document).ready( function() {

	$("#watchVideo").click( function() {
		$("#ipadImage").fadeOut("slow", function() {
			$("#ipadVideo").show();
			popcorn.play(0);
			$('.carousel').carousel(0);
			$('.carousel').carousel('pause');
			
		});
	});

	popcorn = Popcorn("#videoTrailer");

	popcorn.on("ended", function() {
		
		$("#ipadImage").fadeIn("slow", function() {
			$("#ipadVideo").hide();
			$('.carousel').carousel('cycle');
		});

	});

	$('.carousel').carousel();

});

$(document).ready(function() {
	
	
	$(".liner").hide(); // to hide everything on the page, until the box is clicked

	$(".box").animate({
		width: "130px",   
		height: "70px",
		opacity: 0.5
	}, 2000, function() {
		$(".box").animate({
		width: "100px",   
		height: "40px",
		}, 50)
	});

// click box to reveal page, slide the box up and make the headings and paragraphs visible
	$(".box").click(function() {
		$(".liner").show();
		$(".box").slideUp(1000, function() {
			$("h1, h2, h3").css("color","black", 20000);
			$("#f-para p").css("color","black", 20000);
		});
	});

// hide overlay text when mouse hovers over picture, overlay appears again when mouse leaves the picture
	$(".image1").on("mouseenter", function() {
	$("h4").fadeOut(1000);
	});

	$(".image1").on("mouseleave", function() {
	$("h4").fadeIn(500);
	});

// change color of last 2 paragraphs of text by hovering over the text
	$(".paragraph").hover(function() {
		$(".paragraph p").css("color","red");
	});

// slide the 2nd picture to the right then slideup to remove from screen, changing the above text back to original color
	$(".image2").click(function() {
		$(".image2").animate(
		{'margin-left':'1000px'}, 5000,
		function(){
			$(".image2").slideUp('fast')
			$(".paragraph p").css("color","black")
		});
	});	

});

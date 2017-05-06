$(document).ready(function() {
	
	
	$(".liner").hide();

	$(".box").animate({
		width: "130px",  // see note at bottom 
		height: "70px",
		opacity: 0.5
	}, 2000, function() {
		$(".box").animate({
		width: "100px",   
		height: "40px",
		}, 50)
	});

	$(".box").click(function() {
		$(".liner").show();
		$(".box").slideUp(1000, function() {
			$("h1, h2, h3").css("color","black", 20000);
			$("#f-para p").css("color","black", 20000);
		});
	});

	$(".image1").on("mouseenter", function() {
	$("h4").fadeOut(1000);
	});

	$(".image1").on("mouseleave", function() {
	$("h4").fadeIn(500);
	});

	$(".paragraph").hover(function() {
		$(".paragraph p").css("color","red");
	});

	$(".image2").click(function() {
		$(".image2").animate(
		{'margin-left':'1000px'}, 5000,
		function(){
			$(".image2").slideUp('fast')
			$(".paragraph p").css("color","black")
		});

	});	
});



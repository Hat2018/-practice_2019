$(document).ready(function() { 
						   
	var slides = $(".slider_one .slides").children(".slide_one"); 
	var width = $(".slider_one .slides").width(); 
	var i = slides.length; 
	var offset = i * width;
	i--; 
	$(".slider_one .slides").css('width',offset); 
	
	offset = 0; 
	$("body .slider_one .next").click(function(){	
		if (offset < width * i) {	
			offset += width; 
			$(".slider_one .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); 
		}
		
	});


	$("body .slider_one .prev").click(function(){	
		if (offset > 0) { 
			offset -= width; 
			$(".slider_one .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); 
		}
	});

});
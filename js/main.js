$(document).ready(function() {

	$(document).on("scroll",stars);
	$(window).resize(function () {
    	stars();
	});
});

function stars(event){
	var scrollPos = $(document).scrollTop();
	var scrollPosHalf = scrollPos/2;
	var scrollPosQuarter = scrollPos/4;
	var bodyWidth = $("body").width();
	var stars = $(".stars");
	if ( bodyWidth > 700){
		var bodyHeight = $(".desktop").height();
		stars.css("top",scrollPosQuarter).css("height",bodyHeight-scrollPosQuarter);
	}
	else{
		var bodyHeight = $(".mobile").height();
		console.log("less than 700");
		stars.css("top",0).css("height",bodyHeight);
	}


}

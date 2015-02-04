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
	if ( bodyWidth > 730){
		var bodyHeight = $(".desktop").height();
		stars.css("top",scrollPosQuarter).css("height",bodyHeight-scrollPosQuarter);
	}
	else{
		var bodyHeight = $(".mobile").height();
		stars.css("top",0).css("height",bodyHeight);
	}


}

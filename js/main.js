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
	if ( bodyWidth > 700){
		var bodyHeight = $(".desktop").height();
	}
	else{
		var bodyHeight = $(".mobile").height();
	}
	var stars = $(".stars");
	stars.css("top",scrollPosQuarter).css("height",bodyHeight-scrollPosQuarter);

}

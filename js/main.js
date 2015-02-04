$(document).ready(function() {

	$(document).on("scroll",stars);
	// $(document).on("scroll",console);

});

function stars(event){
	var scrollPos = $(document).scrollTop();
	var scrollPosHalf = scrollPos/2;
	var scrollPosQuarter = scrollPos/4;
	var bodyHeight = $(".testing").height();
	var stars = $(".stars");
	stars.css("top",scrollPosQuarter).css("height",bodyHeight-scrollPosQuarter);
	var console = $(".console");
	console.css("height",bodyHeight);

}

function console(event){

}
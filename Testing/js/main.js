$(document).ready(function() {
	$(".stars").css("height",$("body").height());
	// $(document).on("scroll",stars);
	// $(window).resize(function () {
 //    	stars();
	// });
});

function stars(event){
	var scrollPos = $(document).scrollTop()
	var scrollPosHalf = scrollPos/2
	var scrollPosQuarter = scrollPos/4
	var bodyWidth = $("body").width()
	var bodyHeight = 2000
	var stars = $(".stars")
	var video = $(".video")
	// video.css("height",0.5625*bodyWidth*0.8).css("width",bodyWidth*0.8)
	stars.css("top",scrollPosQuarter).css("height",bodyHeight-scrollPosQuarter)


	// if ( bodyWidth > 730){
	// 	var bodyHeight = $(".desktop").height();
	// 	stars.css("top",scrollPosQuarter).css("height",bodyHeight-scrollPosQuarter);
	// }
	// else{
	// 	var bodyHeight = $(".mobile").height();
	// 	stars.css("top",0).css("height",bodyHeight);
	// }


}

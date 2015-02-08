$(document).ready(function() {
	$(".stars").css("height",$("body").height());
	// var tid =setInterval(cycle2,3000);
	var last = -1
	// var firstTick = setTimeout(function(){
	// 	change1(last+1,last+2)
	// },2000)
	var ticker = setInterval(function(){
		last++;
		next = last + 1;
		last = (last %8);
		next = (next %8);
		change2(last+1,next+1);
		console.log(last + " " + next);
		setTimeout(function(){
			change1(last+1,next+1)
		},3000)
	},6000)
	$(document).on("scroll",stars);
	$(window).resize(function () {
    	stars();
	});
});

function stars(event){
	var scrollPos = $(document).scrollTop()
	var scrollPosHalf = scrollPos/2;
	var scrollPosQuarter = scrollPos/4;
	var bodyWidth = $("body").width();
	var bodyHeight = $("body").height();
	var stars = $(".stars");
	var video = $(".video");
	video.css("height",0.5625*bodyWidth*0.8).css("width",bodyWidth*0.8)
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

function cycle2(){
	var last;
	var next = Math.floor(Math.random()*5)+1;
	if(next === last){
		next += 1;
	}
	if (next === 7){
		next = 1
	}
	change2(last,next);
}

function change1(last,next){
	var image = $(".circle1 img:nth-child("+next+")");
	var last_image = $(".circle1 img:nth-child("+last+")")
	last_image.fadeOut(1500,function(){
		last_image.removeClass("show").css("display","none")
		image.fadeIn(1500,function(){
			image.addClass("show");
		})
	})
}
function change2(last,next){
	var image = $(".circle2 img:nth-child("+next+")");
	var last_image = $(".circle2 img:nth-child("+last+")")
	last_image.fadeOut(1500,function(){
		last_image.removeClass("show").css("display","none")
		image.fadeIn(1500,function(){
			image.addClass("show");
		})
	})
}
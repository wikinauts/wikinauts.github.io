(function() {

    // Only supported in IE8+
    if ($.browser.msie && parseInt($.browser.version) < 8) return;
    
    //variable configuration
    var fps = 30;
    
    // How often should stars be added?  Every 10 frames by default.  Greater => fewer stars
    var addNewStarsEveryNFrames = 10;

    // How many stars should be added each time?  Greater => more stars, more processor intensive
    var newStarsToAdd = 3;

    // Controls the speed; 0.7 provides a nice speed
    var speedControl = 0.7;

    // -------------------------------
    // -------------------------------
    // -------------------------------
    
    // Holder variables
    var stars = [];
    var additionCounter = 0;
    
    // The star creator function
    function createStar(curX, curY) {

        // How unique should each star be?  These values specify max unique speed
        var maxSpeedOffset = 2;

        // How big should the stars be?
        var minSize = 5;
        var maxSize = 10;

        var sizePercent = Math.random();
        var size = Math.floor(sizePercent * (maxSize - minSize) + minSize);
        var opacity = 0.3 + Math.random() * 0.7;
        if ($.browser.msie && parseInt($.browser.version) < 10) //disable transparency on old IE to make rendering easier
            opacity = undefined;
        var color = '#C2C2C2';

        // Create a unique speed offset, so each star travels at a unique rate
        var speedOffset = Math.floor(Math.random() * maxSpeedOffset);

        var star = $('<div>').text(' ').css({
            position: 'absolute',
            left: curX,
            top: curY,
            zIndex: 100000,
            width: size,
            height: size,
            opacity: opacity,
            borderRadius: size / 2,
            '-moz-border-radius': size / 2,
            '-webkit-border-radius': size / 2,
            backgroundColor: color
        }).appendTo('body');

        var starObj = {
            size: size,
            sizePercent: sizePercent,
            homeX: curX,
            curX: curX,
            curY: curY,
            star: star,
            uniqueSpeedOffset: speedOffset
        };
        stars.push(starObj);

        return starObj;
    }
    
    // Track where the mouse is, so we can move stars away from it
    var mouseX = -200;
    var mouseY = -200;
    var $w = $(window);
    $(document).mousemove(function(e) {
        mouseX = e.pageX - $w.scrollLeft();
        mouseY = e.pageY - $w.scrollTop();
    });
    
    //define the initial conditions a star entering the scene
    function onEnterFrame() {
        // Update existing stars
        var winH = $w.height(); //height of window
        var winW = $(window).width();
        for (var i = stars.length - 1; i > -1; i--)
        {
            var starObj = stars[i];
            var star = starObj.star;
            var speed = 2 + (1 - starObj.sizePercent) * 5 + starObj.uniqueSpeedOffset; // bigger = slower to fall
            speed *= speedControl; // apply the speed control
            var curY = starObj.curY;
            var curX = starObj.curX;
            var newY = curY; //here update the y-position
            var newX = curX + speed; //update the new x-position

            // If we're close to the mouse, force out of the way
            var mouseXDist = Math.abs(mouseX - newX);
            var mouseYDist = Math.abs(mouseY - newY);
            var influenceArea = 150;
            if (mouseXDist < influenceArea && mouseYDist < influenceArea) {
                var maxForce = 10;
                var dist = Math.sqrt(mouseXDist * mouseXDist + mouseYDist * mouseYDist);
                if (dist < influenceArea) {
                    var influence = maxForce * (1 - (dist / influenceArea));
                    if (mouseY > newY) {
                        newY -= influence;
                        if (mouseX < newX) starObj.homeX += influence;
                        else starObj.homeX -= influence;
                    }
                    else newY += influence;
                }
            }

            starObj.curY = newY;
            starObj.curX = newX;
            star.css({
                top: newY,
                left: newX
            });

            // Destroy star if it has gone out of view by 100
            if ((newY > 1500) || (newX > winW - 10)) {
                star.remove();
                starObj.star = null;
                stars.splice(i, 1);
            }
        }

        // Add any new stars
        if (++additionCounter % addNewStarsEveryNFrames == 0) {
            additionCounter = 0;

			//stars will spawn on the left
            var xx = 0;
            for (var i = 0; i < newStarsToAdd; i++) {
                var curX = xx;
                var curY = 1600 * Math.random();
                createStar(curX, curY);
            }
        }
    }

    // Start the animation based on the requested frames per second
    setInterval(onEnterFrame, 1000 / fps);
	
	// Add easy support for a toggle button
	$('#toggleSnow').click(function(){
        newStarsToAdd = (newStarsToAdd==0) ? 3 : 0;
    });

})();
    
    
    
    
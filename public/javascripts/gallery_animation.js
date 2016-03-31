// Show enlarged image when thumbnail is clicked
$(document).ready(function() {
    $(".img-box .image").click(function() {

        var img = getImage(this);

        showImage(img);

        $(".img-display").css({"opacity": "1", "z-index": "10"});
        $("nav").css("opacity", "0");
        $("nav").hide();
    }); 
});

// Hide enlarged image when clicking somewhere on the screen
$(document).ready(function() {
    $(".img-display").click(function() {
        $(".img-display").css({"opacity": "0", "z-index": "-1"});
        $("nav").css("opacity", "1");
        $("nav").show();
    });
});

// Listener for resizing: Make the enlarged image resize with the screen
$(document).ready(function() {
    $(window).resize(function() {
        if ($(".img-display").css("opacity") == 0) {
            return;
        }
        else {
            var img = new Image();
            img.src = $(".img-display").find("img").attr("src");
            showImage(img);
        }
    });
});

// Get image source
var getImage = function(element) {
    var img = new Image();
    img.src = $(element).attr("data-image");
    return img;
}

// Displays image to screen
var showImage = function(img) {
    
    var imgContainer = $(".img-big-container");
    var imgDiv = $(".img-big-container").find("img");
    var leftButton = $("#left-nav");
    var rightButton = $("#right-nav");
    var scale = 1;
    var buttonGap = 10;
    
    imgContainer.css({"width": "", "height": "", "max-width": "", "max-height": ""});
    imgDiv.removeAttr("src");
    
    while(scale * img.height > 0.95 * $("body").height() || scale * img.width + 2*(leftButton.width() + buttonGap) > 0.95 * $("body").width()) {
        scale -= 0.05;
    }

    imgContainer.css({"height": scale * img.height, "width": scale * img.width});
    imgDiv.attr("src", img.src);
    imgDiv.css("max-width", "100%");

    leftButton.css({"left": imgContainer.offset().left - leftButton.width() - buttonGap});
    rightButton.css({"left": imgContainer.offset().left + imgContainer.width() + buttonGap})
}
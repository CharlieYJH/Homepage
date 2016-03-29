$(document).ready(function() {
    $(".img-box .image").click(function() {
        var img = getImage(this);
        showImage(img);
        $(".img-display").css({"opacity": "1", "z-index": "10"});
        $("#navbar").css("opacity", "0");
    }); 
});

$(document).ready(function() {
    $(".img-display").click(function() {
        $(".img-display").css({"opacity": "0", "z-index": "-1"});
        $("#navbar").css("opacity", "1");
    });
});

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
    var scale = 1;
    
    imgContainer.css({"width": "", "height": "", "max-width": "", "max-height": ""});
    imgDiv.removeAttr("src");
    
    while(scale * img.height > 0.95 * $("body").height() || scale * img.width > 0.95 * $("body").width()) {
        scale -= 0.05;
    }

    imgContainer.css({"height": scale * img.height, "width": scale * img.width});
    imgDiv.attr("src", img.src);
    imgDiv.css("max-width", "100%");
}
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

var getImage = function(element) {
    var url = $(element).css("background-image");
    var img = new Image();
    img.src = /^url\(\"(.*)\"\)$/.exec(url)[1];
    return img;
}

var showImage = function(img) {
    var imgContainer = $(".img-big-container");
    var imgDiv = $(".img-big-container").find("img");
    
    imgContainer.css({"width": "", "height": "", "max-width": "", "max-height": ""});
    imgDiv.removeAttr("src");
    
    if (img.width > img.height) {
        if (img.width < $("body").width() * 0.6)
            imgContainer.css({"width": img.width});
        else {
            imgContainer.css({"width": "60%"});
        }
        imgDiv.attr("src", img.src);
        imgDiv.css("max-width", "100%");
        imgContainer.css("height", imgDiv.height());
    }
    
    else {
        if (img.height < $("body").height() * 0.9)
            imgContainer.css({"height": img.height});
        else {
            imgContainer.css({"height": "90%"});
        }
        imgDiv.attr("src", img.src);
        imgDiv.css("max-height", "100%");
        imgContainer.css("width", imgDiv.width());
    }
}
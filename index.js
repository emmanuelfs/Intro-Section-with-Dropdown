$(".menu-button").click(() => {
    $(".menu").toggleClass("menu-translate");
    $(".menu-button").toggleClass("menu-translate-button");
    $(".menu-button").toggleClass("visible");
    $(".menu-button").toggleClass("invisible");
});
$("#features").click(() => {
    $(".features-ul").toggleClass("ul-active");
    $("#features .down-arrow").toggleClass("transform-rotate");
    if ($(".company").hasClass("ul-active")) {
        $(".company").toggleClass("ul-active");
        $("#company .down-arrow").toggleClass("transform-rotate");
    }
});
$("#company").click(() => {
    $(".company").toggleClass("ul-active");
    $("#company .down-arrow").toggleClass("transform-rotate");
    if ($(".features-ul").hasClass("ul-active")) {
        $(".features-ul").toggleClass("ul-active");
        $("#features .down-arrow").toggleClass("transform-rotate");
    }
});
$("main").click(() => {
    if ($(".company").hasClass("ul-active")) {
        $(".company").toggleClass("ul-active");
    }
    if ($(".features-ul").hasClass("ul-active")) {
        $(".features-ul").toggleClass("ul-active");
    }
})

if ($(window).width() > 700) {
    $(".splash-image img").attr("src", "images/image-hero-desktop.png")
}
if ($(window).width() <= 700) {
    $(".splash-image img").attr("src", "images/image-hero-mobile.png")
}


$(window).resize(() => {
    let width = $(window).width();
    if (width > 700) {
        $(".splash-image img").attr("src", "images/image-hero-desktop.png")
    }
    if ($(window).width() <= 700) {
        $(".splash-image img").attr("src", "images/image-hero-mobile.png")
    }
});

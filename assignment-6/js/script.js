$(document).ready(function () {
    
    $('.accordian h3').click(function () {
        var panel = $(this).next('.accordian-panel');
        
        if (panel.is(':visible')) {
            panel.slideUp();
        } else {
            $('.accordian-panel').slideUp();
            panel.slideDown();
        }
    });

    
    $(".tab-button").click(function () {
    
        $(".tab-button, .tab-content").removeClass("active");

    
        $(this).addClass("active");

    
        var target = $(this).data("target");

    
        $("#" + target).addClass("active");
    });
});
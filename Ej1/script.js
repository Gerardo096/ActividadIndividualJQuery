$(document).ready(function() {
    $("p").hover(function() {


        $(this).css("color", "white");
        $(this).animate({ right: '60px' });

    }, function() {

        $(this).animate({ right: '60px' });
        $(this).css("color", "black");
    });
});
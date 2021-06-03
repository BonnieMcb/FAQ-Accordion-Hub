$(document).ready(function() {
    $(".question").click(function() {
        $(this).siblings("div").toggleClass("answer-shown");

    });

});
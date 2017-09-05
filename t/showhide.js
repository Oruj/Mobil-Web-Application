$(".single").ready(function () {

    $(".event , .location  , .weather , .game , .chat").hide();

    $(".bu1").click(function () {
        $(".main").show();
        $(".event , .location  , .weather , .game , .chat").hide();
    });

    $(".bu2").click(function () {

        $(".event").show();
        $(".main , .location  , .weather  , .game , .chat").hide();
    });

    $(".bu3").click(function () {

        $(".weather").show();
        $(".main ,.location ,.event ,.game , .chat").hide();
    });

    $(".bu4").click(function () {
        $(".location").show();
        $(".main , .event , .weather  , .game , .chat").hide();
    });

    $(".bu5").click(function () {
        $(".game").show();
        $(".main  , .location  , .weather  , .event , .chat").hide();
    });

    $(".bu6").click(function () {
        $(".chat").show();
        $(".main  , .location  , .weather  , .event , .game").hide();
    });
});

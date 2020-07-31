$(document).ready(function () {
    function showText() {
        $(".text-center-welcome").text("Welcome!").hide();
    $(".text-center-name").text("My name is Joseph Baca.").hide();

    $(".text-center-welcome").fadeIn(3000);
    $(".text-center-name").fadeIn(4000);
};
showText();
});

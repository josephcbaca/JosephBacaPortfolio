$('.flip').hover(function () {
    $(this).find('.card').toggleClass('darkened-image');
});

$("#copy-text").on("click", function () {

    copyToClipBoard("josephcbaca@gmail.com");
});

const copyToClipBoard = (str) =>
{
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
};
$('.flip').hover(function () {
    $(this).find('.card').toggleClass('darkened-image');
});

$("#copy-text").on("click", function (event) {
    event.preventDefault();

    let emailText = "josephcbaca@gmail.com"
    
    emailText.select();
    // copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    document.execCommand("copy");
})

// function myFunction() {
//   /* Get the text field */
//   let copyText = document.getElementById("myInput");

//   /* Select the text field */
//   copyText.select();
//   copyText.setSelectionRange(0, 99999); /*For mobile devices*/

//   /* Copy the text inside the text field */
//   document.execCommand("copy");

//   /* Alert the copied text */
//   alert("Copied the text: " + copyText.value);
// }
$(function() {
    $('#BookGridItem').click(function () {
        $('#BookPopUp').show("fast");
    });

    $('#BookPopUpClose').click(function () {
        $('#BookPopUp').hide("fast");
    });

    $('#TicketGridItem').click(function () {
        $('#TicketPopUp').show("fast");
    });

    $('#TicketPopUpClose').click(function () {
        $('#TicketPopUp').hide("fast");
    });

    $('#MudGridItem').click(function () {
        $('#MudPopUp').show("fast");
    });

    $('#MudPopUpClose').click(function () {
        $('#MudPopUp').hide("fast");
    });

     $('#RescueGridItem').click(function () {
        $('#RescuePopUp').show("fast");
    });

    $('#RescuePopUpClose').click(function () {
        $('#RescuePopUp').hide("fast");
    });

    // When the user clicks anywhere outside of the modal, close it
    $(window).click(function(event) {
        //let book = document.getElementById("BookPopUp");
        if (event.target == document.getElementById("BookPopUp")) {
            $('#BookPopUp').hide("fast");
        }
        else if (event.target == document.getElementById("TicketPopUp")) {
            $('#TicketPopUp').hide("fast");
        }
        else if (event.target == document.getElementById("MudPopUp")) {
            $('#MudPopUp').hide("fast");
        }
        else if (event.target == document.getElementById("RescuePopUp")) {
            $('#RescuePopUp').hide("fast");
        }
    });
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}
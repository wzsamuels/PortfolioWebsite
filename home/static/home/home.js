$(function() {
    $('#BookGridItem').click(function () {
        $('#BookPopUp').show("fast");
    });

    $('#BookPopUpClose').click(function () {
        $('#BookPopUp').hide("fast");
    });

    $('#FilmterGridItem').click(function () {
        $('#FilmterPopUp').show("fast");
    });

    $('#FilmterPopUpClose').click(function () {
        $('#FilmterPopUp').hide("fast");
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

    $('#DataStructuresGridItem').click(function () {
        $('#DataStructuresPopUp').show("fast");
    });

    $('#DataStructuresPopUpClose').click(function () {
        $('#DataStructuresPopUp').hide("fast");
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
        else if (event.target == document.getElementById("FilmterPopUp")) {
            $('#FilmterPopUp').hide("fast");
        }
        else if (event.target == document.getElementById("DataStructuresPopUp")) {
            $('#DataStructuresPopUp').hide("fast");
        }
    });
});

var slideIndex = [1,1,1,1];
var slideId = ["slideshow-slide-mud", "slideshow-slide-ticket", "slideshow-slide-rescue", "slideshow-slide-filmter"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

// Displays
function showSlides(n, no) {
    let i;
    const x = document.getElementsByClassName(slideId[no]);

    if (n > x.length) {
        slideIndex[no] = 1
    }
    if (n < 1) {
        slideIndex[no] = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no]-1].style.display = "block";
}
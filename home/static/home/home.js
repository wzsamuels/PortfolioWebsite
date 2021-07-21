$(function() {
    $('#BookGridItem').click(function () {
        $('#BookPopUp').show();
    });

    $('#BookPopUpClose').click(function () {
        $('#BookPopUp').hide();
    });

    $('#FilmterGridItem').click(function () {
        $('#FilmterPopUp').show();
    });

    $('#FilmterPopUpClose').click(function () {
        $('#FilmterPopUp').hide();
    });

    $('#TicketGridItem').click(function () {
        $('#TicketPopUp').show();
    });

    $('#TicketPopUpClose').click(function () {
        $('#TicketPopUp').hide();
    });

    $('#MudGridItem').click(function () {
        $('#MudPopUp').show();
    });

    $('#MudPopUpClose').click(function () {
        $('#MudPopUp').hide();
    });

    $('#RescueGridItem').click(function () {
        $('#RescuePopUp').show();
    });

    $('#RescuePopUpClose').click(function () {
        $('#RescuePopUp').hide();
    });

    $('#DataStructuresGridItem').click(function () {
        $('#DataStructuresPopUp').show();
    });

    $('#DataStructuresPopUpClose').click(function () {
        $('#DataStructuresPopUp').hide();
    });

    // When the user clicks anywhere outside of the modal, close it
    $(window).click(function(event) {
        //let book = document.getElementById("BookPopUp");
        if (event.target == document.getElementById("BookPopUp")) {
            $('#BookPopUp').hide();
        }
        else if (event.target == document.getElementById("TicketPopUp")) {
            $('#TicketPopUp').hide();
        }
        else if (event.target == document.getElementById("MudPopUp")) {
            $('#MudPopUp').hide();
        }
        else if (event.target == document.getElementById("RescuePopUp")) {
            $('#RescuePopUp').hide();
        }
        else if (event.target == document.getElementById("FilmterPopUp")) {
            $('#FilmterPopUp').hide();
        }
        else if (event.target == document.getElementById("DataStructuresPopUp")) {
            $('#DataStructuresPopUp').hide();
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
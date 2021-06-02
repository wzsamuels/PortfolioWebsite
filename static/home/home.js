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


    // When the user clicks anywhere outside of the modal, close it
    $(window).click(function(event) {
        let book = document.getElementById("BookPopUp");
        if (event.target == book) {
            $('#BookPopUp').hide("fast");
        }
    });
});
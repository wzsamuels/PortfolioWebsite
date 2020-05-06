$(function() {
    $('#AddBookOpen').click(function(){
        $('#BookForm').show();
    });
    
    $('#AddBookClose').click(function(){
        $('#BookForm').hide();
    });

    $('#AddAuthorOpen').click(function(){
        $('#AuthorForm').show();
    });

    $('#AddAuthorClose').click(function(){
        $('#AuthorForm').hide();
    });
    
    $('#UpdateAuthorOpen').click(function(){
        $('#AuthorUpdate').show();
    });
    
    $('#UpdateAuthorClose').click(function(){
        $('#AuthorUpdate').hide();
    });

    $('#UpdateBookOpen').click(function(){
        $('#BookUpdate').show();
    });
    $('#UpdateBookClose').click(function(){
        $('#BookUpdate').hide();
    });

    $('#TitleSort').click(function(){
        $('#SortByTitle').show();
        $('#SortByAuthor').hide();
    });
    
    $('#AuthorSort').click(function(){
        $('#SortByAuthor').show();
        $('#SortByTitle').hide();
    });  

    function bookSearch() {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("BookSearchInput");
        if(input) {
            filter = input.value.toUpperCase();
        }
        ul = document.getElementById("bookList");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            if( document.getElementById("SearchByTitle").checked ) {
                a = li[i].getElementsByTagName("a")[0];
        }
            else {
                a = li[i].getElementsByTagName("a")[1];
        }
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }

    $('#SearchByTitle').click(bookSearch);
    $('#SearchByAuthor').click(bookSearch);
    
    $('#BookSearchInput').keyup(bookSearch);
    
    // When the user clicks anywhere outside of the modal, close it    
    $(window).click(function(event) {
        let bookForm = document.getElementById("BookForm");
        let authorForm = document.getElementById("AuthorForm");
        if (event.target == authorForm) {
            authorForm.style.display = "none";
        }
        if (event.target == bookForm) {
            bookForm.style.display = "none";
        }
    });

    $( ".datepicker" ).datepicker();

    $('#SortByAuthor').hide();
});

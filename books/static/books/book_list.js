$(function() {

    // Functions for showing and hiding Add Book modal window.
    $('#AddBookOpen').click(function(){
        $('#BookForm').show();
    });
    
    $('#AddBookClose').click(function(){
        $('#BookForm').hide();
    });

    // Functions for showing and hiding Add Author modal window.
    $('#AddAuthorOpen').click(function(){
        $('#AuthorForm').show();
    });

    $('#AddAuthorClose').click(function(){
        $('#AuthorForm').hide();
    });

    // Functions for showing and hiding Update Author modal window.
    $('#UpdateAuthorOpen').click(function(){
        $('#AuthorUpdate').show();
    });
    
    $('#UpdateAuthorClose').click(function(){
        $('#AuthorUpdate').hide();
    });

    // Functions for showing and hiding Update Book modal window.
    $('#UpdateBookOpen').click(function(){
        $('#BookUpdate').show();
    });
    $('#UpdateBookClose').click(function(){
        $('#BookUpdate').hide();
    });

    // Functions for showing and hiding Delete Book modal window.
    $('#DeleteBookOpen').click(function(){
        $('#BookDelete').show();
    });
    $('#DeleteBookClose').click(function(){
        $('#BookDelete').hide();
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
        let input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("BookSearchInput");
        if(input) {
            filter = input.value.toUpperCase();
        }
        ul = document.getElementById("bookList");
        li = ul.getElementsByTagName("li");
        let results = 0;
        for (i = 0; i < li.length; i++) {
            if( document.getElementById("SearchByTitle").checked ) {
                a = li[i].getElementsByTagName("a")[0];
            }
            else {
                a = li[i].getElementsByTagName("span")[0];
            }
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
                results++;
            } else {
                li[i].style.display = "none";
            }
        }
        if(results === 0) {
            ul.appendChild(Object.assign(document.createElement('li'), {innerText: "No results found."}));
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

    //$( ".datepicker" ).datepicker();

    // By default books are sorted by title, not author
    $('#SortByAuthor').hide();
});

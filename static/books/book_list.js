function titleSort() {
    document.getElementById("SortByTitle").style.display = "block";
    document.getElementById("SortByAuthor").style.display = "none";
}

function authorSort() {
    document.getElementById("SortByTitle").style.display = "none";
    document.getElementById("SortByAuthor").style.display = "block";
}

function openBookForm() {
    document.getElementById("BookForm").style.display = "block";
}

function closeBookForm() {
    document.getElementById("BookForm").style.display = "none";
}

function openAuthorForm() {
    document.getElementById("AuthorForm").style.display = "block";
}

function closeAuthorForm() {
    document.getElementById("AuthorForm").style.display = "none";
}

function openAuthorUpdate() {
    document.getElementById("AuthorUpdate").style.display = "block";
}

function closeAuthorUpdate() {
    document.getElementById("AuthorUpdate").style.display = "none";
}

function openBookUpdate() {
    document.getElementById("BookUpdate").style.display = "block";
}

function closeBookUpdate() {
    document.getElementById("BookUpdate").style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    let bookForm = document.getElementById("BookForm");
    let authorForm = document.getElementById("AuthorForm");
    if (event.target == authorForm) {
        authorForm.style.display = "none";
    }
    if (event.target == bookForm) {
        bookForm.style.display = "none";
    }
}

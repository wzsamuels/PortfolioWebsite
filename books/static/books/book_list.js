document.getElementById("BookList").classList.add('active');
document.getElementById("SortByAuthor").style.display = "none";
    
function titleSort() {
    document.getElementById("SortByTitle").style.display = "block";
    document.getElementById("SortByAuthor").style.display = "none";
}

function authorSort() {
    document.getElementById("SortByTitle").style.display = "none";
    document.getElementById("SortByAuthor").style.display = "block";
}

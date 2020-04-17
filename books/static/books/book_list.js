function openFormRight() {
    document.getElementById("right-form").style.display = "block";
}

function closeFormRight() {
    document.getElementById("right-form").style.display = "none";
}

function openFormLeft() {
    document.getElementById("left-form").style.display = "block";
}

function closeFormLeft() {
    document.getElementById("left-form").style.display = "none";
}
    
function titleSort() {
    document.getElementById("SortByTitle").style.display = "block";
    document.getElementById("SortByAuthor").style.display = "none";
}

function authorSort() {
    document.getElementById("SortByTitle").style.display = "none";
    document.getElementById("SortByAuthor").style.display = "block";
}

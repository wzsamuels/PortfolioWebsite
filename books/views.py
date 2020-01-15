from django.shortcuts import render
from django.views.generic import DetailView, ListView
from books.models import Author, Book

# Create your views here.

class IndexView(ListView):
    template_name = 'books/index.html'
    def get_queryset(self):
    	return Book.objects.all()

class AuthorView(DetailView):
    model = Author
    template_name = 'books/author_detail.html'

class BookView(DetailView):
    model = Book
    template_name = 'books/book_detail.html'

from django.shortcuts import render
from django.views.generic import DetailView, ListView
from django.views.generic.edit import ModelFormMixin, CreateView, UpdateView
from books.models import Author, Book
from books.forms import BookForm

# Create your views here.

class AuthorList(ListView):
    template_name = 'books/author_list.html'
    def get_queryset(self):
       	return Author.objects.all()

class AuthorView(DetailView):
    model = Author
    template_name = 'books/author_detail.html'

class AuthorCreate(CreateView):
    model = Author
    fields = ['last_name', 'first_name']

class AuthorUpdate(UpdateView):
    model = Author
    fields = ['last_name', 'first_name']
    template_name_suffix = '_update_form'

class BookList(ListView):
    template_name = 'books/book_list.html'
    def get_queryset(self):
    	return Book.objects.all()

class BookView(DetailView):
    model = Book
    template_name = 'books/book_detail.html'

class BookEdit(CreateView):
    model = Book
    fields = ['title', 'authors']

class BookUpdate(UpdateView):
    model = Book
    fields = ['title', 'authors']
    template_name_suffix = '_update_form'

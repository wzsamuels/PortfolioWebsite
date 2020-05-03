from django.core import serializers
from django.shortcuts import render
from django.views.generic import DetailView, ListView, TemplateView
from django.views.generic.edit import ModelFormMixin, CreateView, UpdateView
from django.forms import modelformset_factory
from books.models import Author, Book
from books.forms import BookForm, AuthorForm

class AuthorDetail(DetailView):
    model = Author
    template_name = 'books/author_detail.html'

class AuthorUpdate(UpdateView):
    model = Author
    fields = ['last_name', 'first_name']
    template_name_suffix = '_update_form'

def BookIndex(request, slug=None):
    #BookFormSet = modelformset_factory(Book, fields=('title', 'authors'))

    if request.method == 'POST':
        if 'book_button' in request.POST:
            BookFormSet = BookForm(request.POST)
            AuthorFormSet = AuthorForm()
            if BookFormSet.is_valid():
                BookFormSet.save()
        if 'update_book_button' in request.POST:
            book = Book.objects.get(slug=slug)
            BookUpdateForm = BookForm(request.POST, instance=book)
            BookFormSet = BookForm()
            AuthorFormSet = AuthorForm()
            if BookUpdateForm.is_valid():
                BookUpdateForm.save()
        #formset = BookFormSet(request.POST, request.FILES)
        if 'author_button' in request.POST:
            AuthorFormSet = AuthorForm(request.POST)
            BookFormSet = BookForm()
            if AuthorFormSet.is_valid():
                AuthorFormSet.save()
       
    else:
        BookFormSet = BookForm()
        AuthorFormSet = AuthorForm()

    #context = super().get_context_data(**kwargs)
    context = {}    
    context["author_form"] = AuthorFormSet
    context["book_form"] = BookFormSet
    
    if slug:
        book = Book.objects.get(slug=slug)
        context["book_update_form"] = BookForm(instance=book)
        context["object"] = book
        #context["form"] = BookForm(initial={'title' : book.title, 'authors' : Author.objects.filter(books__title=book.title) })
        return render(request, 'books/book_detail.html', context)
    else:
        context["book_list"] = Book.objects.all()
        context["author_list"] = Author.objects.all()        
        return render(request, 'books/index.html', context)

class BookDetail(DetailView):
    model = Book
    template_name = 'books/book_detail.html'

class BookUpdate(UpdateView):
    model = Book
    fields = ['title', 'authors']
    template_name_suffix = '_update_form'

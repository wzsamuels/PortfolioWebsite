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

# The one view that handles everything for the Books app. More complicated than having
# separate views for each type of functionality, but it allows for the user to add Book
# and Author objects from every web page belonging to Books.
    
def BookIndex(request, name=None, slug=None):

    # Handle form submissions
    if request.method == 'POST':
        # Add a Book
        if 'book_button' in request.POST:
            BookFormSet = BookForm(request.POST)
            AuthorFormSet = AuthorForm()
            if BookFormSet.is_valid():
                BookFormSet.save()
        # Update an existing Book
        if 'update_book_button' in request.POST:
            book = Book.objects.get( slug=slug )
            BookUpdateForm = BookForm( request.POST, instance=book )
            BookFormSet = BookForm()
            AuthorFormSet = AuthorForm()
            if BookUpdateForm.is_valid():
                BookUpdateForm.save()
        # Add an Author
        if 'author_button' in request.POST:
            AuthorFormSet = AuthorForm( request.POST )
            BookFormSet = BookForm()
            if AuthorFormSet.is_valid():
                AuthorFormSet.save()
        # Update an existing Author
        if 'author_update_button' in request.POST:
            author = Author.objects.get( slug=slug )
            author_update_form = Author( request.POST, instance=author )
            BookFormSet = BookForm()
            AuthorFormSet = AuthorForm()
            if author_update_form.is_valid():
                author_update_form.save()
    # Otherwise the forms are blank
    else:
        BookFormSet = BookForm()
        AuthorFormSet = AuthorForm()

    #context = super().get_context_data(**kwargs)
    context = {}    
    context["author_form"] = AuthorFormSet
    context["book_form"] = BookFormSet

    # If the url has a slug value, it's either a detail page for an author or book
    if slug:
        if request.path_info.startswith( '/books/authors/' ):
            author = Author.objects.get(slug=slug)
            context["author_update_form"] = AuthorForm( instance=author )
            context["object"] = author
            return render( request, 'books/author_detail.html', context )
        else:
            context["test"] = request.path_info
            book = Book.objects.get(slug=slug)
            context["book_update_form"] = BookForm( instance=book )
            context["object"] = book
            #context["form"] = BookForm(initial={'title' : book.title, 'authors' : Author.objects.filter(books__title=book.title) })
            return render( request, 'books/book_detail.html', context )
    # Otherwise its the page that lists all Books and Authors
    else:
        context["book_list"] = Book.objects.all()
        context["author_list"] = Author.objects.all()        
        return render( request, 'books/index.html', context )

class BookDetail(DetailView):
    model = Book
    template_name = 'books/book_detail.html'

class BookUpdate(UpdateView):
    model = Book
    fields = ['title', 'authors']
    template_name_suffix = '_update_form'

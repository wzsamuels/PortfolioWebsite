from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.views.generic import DetailView
from django.views.generic.edit import UpdateView
from books.forms import BookForm, AuthorForm
from books.models import Author, Book


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

def book_index(request, name=None, slug=None):
    book_form_set = BookForm()
    author_form_set = AuthorForm()

    # Handle form submissions
    if request.method == 'POST':
        # Add a Book
        if 'book_button' in request.POST:
            book_form_set = BookForm(request.POST)
            if book_form_set.is_valid():
                book_form_set.save()
        # Update an existing Book
        if 'update_book_button' in request.POST:
            book = Book.objects.get(slug=slug)
            book_update_form = BookForm(request.POST, instance=book)
            if book_update_form.is_valid():
                book_update_form.save()
        # Add an Author
        if 'author_button' in request.POST:
            author_form_set = AuthorForm(request.POST)
            if author_form_set.is_valid():
                author_form_set.save()
        # Update an existing Author
        if 'author_update_button' in request.POST:
            author = Author.objects.get(slug=slug)
            author_update_form = AuthorForm(request.POST, instance=author)
            if author_update_form.is_valid():
                author_update_form.save()
        # Delete Book
        if 'delete_book_button' in request.POST:
            deleted_book = Book.objects.get(slug=slug)
            deleted_book.delete()
            return HttpResponseRedirect("/books/")

    # context = super().get_context_data(**kwargs)
    context = {"author_form": author_form_set, "book_form": book_form_set}

    # If the url has a slug value, it's either a detail page for an author or book
    if slug:
        if request.path_info.startswith('/books/authors/'):
            author = Author.objects.get(slug=slug)
            context["author_update_form"] = AuthorForm(instance=author)
            context["object"] = author
            return render(request, 'books/author_detail.html', context)
        else:
            context["test"] = request.path_info
            book = Book.objects.get(slug=slug)
            context["book_update_form"] = BookForm(instance=book)
            context["object"] = book
            return render(request, 'books/book_detail.html', context)

    # Otherwise its the index page that lists all Books and Authors
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


def book_intro(request):
    return render(request, 'books/intro.html')

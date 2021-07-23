import re

from django.contrib.auth.models import User
from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.generic import TemplateView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from books.forms import BookForm
from books.models import Book, Collection
from rest_framework import serializers, viewsets, generics
from books.serializers import BookSerializer
import requests

from books.wikiGet import wiki_get


def home(request):
    tmpl_vars = {'form': BookForm()}
    return render(request, 'books/index.html', tmpl_vars)


@method_decorator(ensure_csrf_cookie, name='dispatch')
class BookCollection(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
"""
    def perform_create(self, serializer):
        serializer.is_valid()
        session = requests.Session()
        title = serializer.validated_data['title']
        image_url = wiki_get(title)
        serializer.save(cover=image_url)
"""


@method_decorator(ensure_csrf_cookie, name='dispatch')
class BookElement(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


# The one view that handles everything for the Books app. More complicated than having
# separate views for each type of functionality, but it allows for the user to add Book
# and Author objects from every web page belonging to Books.


def book_index(request, name=None, slug=None):
    book_form_set = BookForm()

    if request.user.is_authenticated:
        user = request.user
    else:
        user = User.objects.get(username="Guest")

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

        # Delete Book
        if 'delete_book_button' in request.POST:
            deleted_book = Book.objects.get(slug=slug)
            deleted_book.delete()
            return HttpResponseRedirect("/books/")

    context = {"book_form": book_form_set}

    # If the url has a slug value, it's either a detail page for an author or book
    if slug:
        """
        if request.path_info.startswith('/books/authors/'):
            author = Author.objects.get(slug=slug)
            context["author_update_form"] = AuthorForm(instance=author)
            context["object"] = author
            return render(request, 'books/author_detail.html', context)
        """

        context["test"] = request.path_info
        book = Book.objects.get(slug=slug)
        context["book_update_form"] = BookForm(instance=book)
        context["object"] = book
        return render(request, 'books/book_detail.html', context)

    # Otherwise its the index page that lists all Books and Authors
    else:
        context["book_list"] = Book.objects.all()
        return render(request, 'books/index.html', context)
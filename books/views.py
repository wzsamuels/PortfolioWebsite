from django.core import serializers
from django.shortcuts import render
from django.views.generic import DetailView, ListView, TemplateView
from django.views.generic.edit import ModelFormMixin, CreateView, UpdateView
from django.forms import modelformset_factory
from books.models import Author, Book
from books.forms import BookForm, AuthorForm

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
    model = Book
    paginate_by = 10
    #template_name = 'books/book_list.html'
    #def get_queryset(self):
    #	return Book.objects.all()

#class BookView(DetailView):
class BookView(TemplateView):
    #model = Book
    #template_name = 'books/book_detail.html'
    template_name = 'books/book_list.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["book_list"] = Book.objects.all()
        context["author_list"] = Author.objects.all()
        #data = Book.objects.all()
        #context["book_json"] = serializers.serialize('json', data)
        return context

#class BookEdit(CreateView):
#    model = Book
#    fields = ['title', 'authors']

def create_book(request):
    #BookFormSet = modelformset_factory(Book, fields=('title', 'authors'))

    if request.method == 'POST':
        if 'book_button' in request.POST:
            BookFormSet = BookForm(request.POST)
            AuthorFormSet = AuthorForm()
            if BookFormSet.is_valid():
                BookFormSet.save()
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
    context["book_list"] = Book.objects.all()
    context["author_list"] = Author.objects.all()
    context["book_form"] = BookFormSet
    context["author_form"] = AuthorFormSet
    return render(request, 'books/book_list.html', context)

class BookUpdate(UpdateView):
    model = Book
    fields = ['title', 'authors']
    template_name_suffix = '_update_form'

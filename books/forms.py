from django.forms import ModelForm
from django import forms
from books.models import Author, Book

class AuthorForm(ModelForm):
    class Meta:
        model = Author
        fields = ['last_name', 'first_name']

class BookForm(ModelForm):
    class Meta:
        model = Book
        fields = ['title', 'authors'] #'__all__'

    def __init__(self, *args, **kwargs):
        super(BookForm, self).__init__(*args, **kwargs)
        self.fields['authors'].widget.attrs.update({'class' : 'selector'})
#class BookForm(forms.Form):
 #   title = forms.CharField(label='title', max_length=100)
  #  authors = forms.ModelMultipleChoiceField(queryset=Author.objects.all())

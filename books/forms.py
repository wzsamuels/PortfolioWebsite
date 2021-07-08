from django.forms import ModelForm, CharField, Textarea, TextInput
from django import forms
from books.models import Author, Book


class AuthorForm(ModelForm):
    class Meta:
        model = Author
        fields = ['last_name', 'first_name']

    def __init__(self, *args, **kwargs):
        super(AuthorForm, self).__init__(*args, **kwargs)
        #self.fields['last_name'].widget.attrs.update({'class' : 'bookFormInput'})
        #self.fields['first_name'].widget.attrs.update({'class' : 'bookFormInput'})


class BookForm(ModelForm):
    class Meta:
        model = Book
        fields = ['title', 'authors', 'published', 'summary'] #'__all__'

    def __init__(self, *args, **kwargs):
        super(BookForm, self).__init__(*args, **kwargs)
        self.fields['authors'].widget.attrs.update({'class' : 'selector'})
        self.fields['title'].widget.attrs.update({'class' : 'bookFormInput'})
#class BookForm(forms.Form):
 #   title = forms.CharField(label='title', max_length=100)
  #  authors = forms.ModelMultipleChoiceField(queryset=Author.objects.all())

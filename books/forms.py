from django.forms import ModelForm
from django import forms
from books.models import Author, Book

class AuthorForm(ModelForm):
	class Meta:
		model = Author
		fields = ['last_name', 'first_name']

class BookForm(ModelForm):
	#auto_id=False
	class Meta:
		model = Book
		fields = ['title', 'authors'] #'__all__'
#class BookForm(forms.Form):
 #   title = forms.CharField(label='title', max_length=100)
  #  authors = forms.ModelMultipleChoiceField(queryset=Author.objects.all())

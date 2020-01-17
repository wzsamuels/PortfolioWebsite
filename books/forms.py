from django.forms import ModelForm
from books.models import Author, Book

class AuthorForm(ModelForm):
	class Meta:
		model = Author
		fields = '__all__'

class BookForm(ModelForm):
	#auto_id=False
	class Meta:
		model = Book
		fields = '__all__'
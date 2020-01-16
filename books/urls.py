from django.urls import path
from . import views

app_name = 'books'
urlpatterns = [
	path('', views.IndexView.as_view(), name = 'index'),
	path('add_book.html', views.BookEdit.as_view(), name = 'add_book'),
	path('books/<slug:slug>/', views.BookView.as_view(), name='book_detail'),
	path('author/<slug:slug>/', views.AuthorView.as_view(), name='author_detail'),
]
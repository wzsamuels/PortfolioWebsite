from django.urls import path
from . import views

app_name = 'books'
urlpatterns = [
	path('', views.BookList.as_view(), name = 'index'),
	path('authors/author_list.html', views.AuthorList.as_view(), name = 'author_list'),
	path('books/add_book.html', views.BookEdit.as_view(), name = 'add_book'),
	path('authors/add_author', views.AuthorCreate.as_view(), name = 'create_author'),
	path('books/<slug:slug>/', views.BookView.as_view(), name='book_detail'),
	path('books/<slug:slug>/update', views.BookUpdate.as_view(), name='book_update'),
	path('authors/<slug:slug>/', views.AuthorView.as_view(), name='author_detail'),
	path('authors/<slug:slug>/update', views.AuthorUpdate.as_view(), name='author_update'),
]
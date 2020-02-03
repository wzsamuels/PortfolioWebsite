from django.urls import path
from . import views

app_name = 'books'
urlpatterns = [
	#path('', views.BookView.as_view(), name = 'book_list'),
    path('', views.create_book, name = 'book_list'),
	path('authors/', views.AuthorList.as_view(), name = 'author_list'),
	path('add_book', views.BookView.as_view(), name = 'add_book'),
	path('authors/add_author', views.AuthorCreate.as_view(), name = 'create_author'),
	path('<slug:slug>/', views.BookView.as_view(), name='book_detail'),
	path('<slug:slug>/update', views.BookUpdate.as_view(), name='book_update'),
	path('authors/<slug:slug>/', views.AuthorView.as_view(), name='author_detail'),
	path('authors/<slug:slug>/update', views.AuthorUpdate.as_view(), name='author_update'),
]

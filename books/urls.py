from django.urls import path
from . import views

app_name = 'books'
urlpatterns = [
	path('books/<slug:slug>/', views.BookView.as_view(), name='book_detail'),
	path('', views.IndexView.as_view(), name = 'index'),
	path('author/<slug:slug>/', views.AuthorView.as_view(), name='author_detail'),
]
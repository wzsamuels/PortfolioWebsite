from django.urls import path
from . import views

app_name = 'books'
urlpatterns = [
    path('', views.BookIndex, name = 'index'),
    path('<slug:slug>/', views.BookIndex, name='book_detail'),
    path('authors/<slug:slug>/', views.BookIndex, name='author_detail'),
]

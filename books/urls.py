from django.urls import path
from . import views

app_name = 'books'
urlpatterns = [
    path('', views.book_index, name='index'),
    path('<slug:slug>/', views.book_index, name='book_detail'),
    path('authors/<slug:slug>/', views.book_index, name='author_detail'),
]

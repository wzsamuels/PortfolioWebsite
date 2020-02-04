from django.urls import path
from . import views

app_name = 'books'
urlpatterns = [
    #path('', views.BookView.as_view(), name = 'book_list'),
    path('', views.BookIndex, name = 'index'),
    path('<slug:slug>/', views.BookDetail.as_view(), name='book_detail'),
    path('<slug:slug>/update', views.BookUpdate.as_view(), name='book_update'),
    path('authors/<slug:slug>/', views.AuthorDetail.as_view(), name='author_detail'),
    path('authors/<slug:slug>/update', views.AuthorUpdate.as_view(), name='author_update'),
]

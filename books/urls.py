from django.urls import path
from django.views.generic import TemplateView
from rest_framework import routers
from . import views

app_name = 'books'
urlpatterns = [
    path('', views.book_index),
    path('<slug:slug>/', views.book_index, name='book_detail'),
    path('api/books/', views.BookCollection.as_view()),
    path('api/books/<int:pk>', views.BookElement.as_view),
]

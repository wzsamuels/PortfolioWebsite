from django.urls import path
from django.views.generic import TemplateView
from rest_framework import routers
from . import views

app_name = 'books'
urlpatterns = [
    #path('', views.book_index, name='index'),
    path('', TemplateView.as_view(template_name="books/react_index.html")),
    path('<slug:slug>/', views.book_index, name='book_detail'),
    path('authors/<slug:slug>/', views.book_index, name='author_detail'),
    path('api/v2/books/', views.book_collection),
    path('api/v2/books/<int:pk>', views.book_element),
]

router = routers.DefaultRouter()
router.register('api/v1/books', views.BookViewSet)

urlpatterns += router.urls

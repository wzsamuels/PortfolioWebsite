from django.urls import path
from . import views

app_name = 'books'
urlpatterns = [
	path('', views.IndexView.as_view(), name = 'index'),
	path('<int:pk>/', views.BookView.as_view(), name='title'),
]
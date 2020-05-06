from django.urls import path
from . import views

app_name = 'home'
urlpatterns = [
    path('', views.home_index, name = 'home_index'),
    path('/college/', views.college_index, name='college_index'),
]

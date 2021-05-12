from django.urls import path
from . import views

app_name = 'home'
urlpatterns = [
    path('', views.home_index, name='home_index'),
    path('c/', views.c_index, name='c_index'),
    path('college/', views.college_index, name='college_index'),
    path('c_sharp/yam.html', views.yam_view, name='yam_view'),
]

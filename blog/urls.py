from django.urls import path
from rest_framework import routers
from blog import views

app_name = 'blog'
urlpatterns = [
    path('', views.react_home),
    path('api/posts/', views.PostCollection.as_view()),
    path('api/posts/<int:pk>', views.PostMember.as_view()),
]
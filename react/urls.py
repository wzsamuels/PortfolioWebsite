from django.urls import path
from django.views.generic import TemplateView
from rest_framework import routers
from . import views

urlpatterns = [
    path('', TemplateView.as_view(template_name='react/hello_webpack.html'))
]

router = routers.DefaultRouter()
router.register('api/employees', views.EmployeeViewSet)

urlpatterns += router.urls
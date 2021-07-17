from django.contrib.auth.decorators import login_required
from django.shortcuts import render

# Create your views here.
# make sure this view is only accessible on login
from django.utils.decorators import method_decorator
from django.views.generic import TemplateView
from rest_framework import serializers, viewsets
from .models import Employee


class EmployeeSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(
        read_only=True,
        default=serializers.CurrentUserDefault()
    )
    department = serializers.ChoiceField(choices=Employee.DEPARTMENT_CHOICES)

    class Meta:
        model = Employee
        fields = ('id', 'user', 'name', 'department', 'salary')


class EmployeeViewSet(viewsets.ModelViewSet):
    serializer_class = EmployeeSerializer
    queryset = Employee.objects.all()

    def get_queryset(self):
        # filter queryset based on logged in user
        return self.request.user.employees.all()

    def perform_create(self, serializer):
        # ensure current user is correctly populated on new objects
        serializer.save(user=self.request.user)

@method_decorator(login_required, name='dispatch')
class EmployeeView(TemplateView):
    # our hybrid template, shown above
    template_name = 'myapp/employee_home.html'

    def get_context_data(self, **kwargs):
        # passing the department choices to the template in the context
        return {
            'department_choices': [{
                'id': c[0],
                'name': c[1]
            } for c in Employee.DEPARTMENT_CHOICES],
        }
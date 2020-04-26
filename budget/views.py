from django.shortcuts import render
from budget.models import Transaction

def BudgetIndex(request):
    return render(request, 'budget/index.html')

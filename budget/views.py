from django.shortcuts import render
from budget.models import Transaction

def BudgetIndex(request):
	context = {}
	context["transaction_list"] = Transaction.objects.all()
	return render(request, 'budget/index.html', context)

from django.shortcuts import render
from budget.models import Transaction
from budget.forms import TransactionForm

def BudgetIndex(request):
	if request.method == 'POST':
		TransactionFormSet = TransactionForm(request.POST)
		if TransactionFormSet.is_valid():
			TransactionFormSet.save()
	else:
		TransactionFormSet = TransactionForm()
		
	context = {}
	context["transaction_list"] = Transaction.objects.all()
	context["transaction_form"] = TransactionFormSet
	return render(request, 'budget/index.html', context)
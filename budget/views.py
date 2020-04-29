from django.shortcuts import render
from budget.models import Transaction
from budget.forms import TransactionForm

def BudgetIndex(request):
    if request.method == 'POST':
        #TransactionFormSet = TransactionForm(request.POST)
        form = TransactionForm(request.POST)
        if form.is_valid():
            trans = Transaction( amount=form.cleaned_data['amount'],
                                 date=form.cleaned_data['date'],
                                 transType = form.cleaned_data['transType'])
            trans.save()
            
	    #TransactionFormSet.save()
    else:
        form = TransactionForm()
            
    context = {}
    context["transaction_list"] = Transaction.objects.all()
    context["transaction_form"] = form
    return render(request, 'budget/index.html', context)

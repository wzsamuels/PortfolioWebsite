from django.shortcuts import render
from budget.models import Transaction, Budget
from budget.forms import TransactionForm
from django.contrib.auth.models import User

def BudgetIndex(request):
    if request.user.is_authenticated:
        user = request.user
    else:
        user = User.objects.get(username="Guest")
        
    if request.method == 'POST':
        #TransactionFormSet = TransactionForm(request.POST)
        form = TransactionForm(request.POST)
        if form.is_valid():
            trans = Transaction( amount=form.cleaned_data['amount'],
                                 date=form.cleaned_data['date'],
                                 #transType = form.cleaned_data['transType'],
                                 budget = Budget.objects.get(user=user))
            trans.save()
    else:
        form = TransactionForm()
            
    context = {}
    #context["transaction_list"] = Transaction.objects.all()
    if request.user.is_authenticated:
        context["budget"] = Budget.objects.get(user=user)
        context["transaction_list"] = Transaction.objects.filter(budget__user=user)
    else:
        context["budget"] = Budget.objects.get(user=user)
        context["transaction_list"] = Transaction.objects.filter(budget__user=user)
    context["transaction_form"] = form
    return render(request, 'budget/index.html', context)

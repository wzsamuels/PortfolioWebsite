from django.forms import ModelForm
from django import forms
from budget.models import Transaction

#class TransactionForm(ModelForm):
#    class Meta:
#        model = Transaction
#        fields = ['amount', 'date', 'transType']

class TransactionForm(forms.Form):
    amount = forms.DecimalField(decimal_places = 2)
    date = forms.DateField(widget=forms.SelectDateWidget)
    transType = forms.ChoiceField(choices=Transaction.TYPE_CHOICES)

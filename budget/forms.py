from django.forms import ModelForm
from django import forms
from budget.models import Transaction

class TransactionForm(ModelForm):
	class Meta:
		model = Transaction
		fields = ['amount', 'date', 'transType']
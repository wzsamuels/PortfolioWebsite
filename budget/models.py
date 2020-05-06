from django.db import models
from datetime import date
from django.contrib.auth.models import User

# Create your models here.

# A User's Budget. Every Budget needs a User.
class Budget(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    amount = models.DecimalField(decimal_places=2, max_digits=13)

# A single transaction
class Transaction(models.Model):
    amount = models.DecimalField(decimal_places=2, max_digits=13)
    date = models.DateField(default=date.today)
    budget = models.ForeignKey('Budget', on_delete=models.CASCADE, null=True)
    WITHDRAWAL = 'WD'
    DEPOSIT = "DP"
    TYPE_CHOICES = [ 
    	(WITHDRAWAL, 'Withdrawal'),
    	(DEPOSIT, 'Deposit'),
	]
    #transType = models.CharField(
    #	max_length=2,
    #	choices=TYPE_CHOICES,
    #	default=WITHDRAWAL
    #)

    class Meta:
        ordering = ['date']

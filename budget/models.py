from django.db import models
from datetime import date

# Create your models here.

class Transaction(models.Model):
    amount = models.DecimalField(decimal_places=2, max_digits=20)
    date = models.DateField(default=date.today)
    WITHDRAWAL = 'WD'
    DEPOSIT = "DP"
    TYPE_CHOICES = [ 
    	(WITHDRAWAL, 'Withdrawal'),
    	(DEPOSIT, 'Deposit'),
	]
    transType = models.CharField(
    	max_length=2,
    	choices=TYPE_CHOICES,
    	default=WITHDRAWAL
    )

    class Meta:
        ordering = ['date']

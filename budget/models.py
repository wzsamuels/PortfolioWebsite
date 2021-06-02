from django.db import models
from datetime import date
from django.contrib.auth.models import User


# A User's Budget. Every Budget needs a User.
class Budget(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    amount = models.DecimalField(decimal_places=2, max_digits=13)


# A single transaction in a budget
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

    class Meta:
        ordering = ['date']

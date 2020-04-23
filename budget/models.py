from django.db import models

# Create your models here.

class Transaction(models.Model):
	amount = models.DecimalField(max_digits=14, decimal_places=2)

	DEPOSIT = 'DP'
	WITHDRAWAL = "WD"
	TYPE_CHOICES = [
		(DEPOSIT, 'Deposit'),
		(WITHDRAWAL, 'Withdrawal'),
	]

	type = models.CharField(max_length=10, choices=TYPE_CHOICES)
	description = models.CharField(max_length=20, blank=True)
	date = models.DateField()
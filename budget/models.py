from django.db import models

# Create your models here.

class Transaction(models.Model):
    amount = models.DecimalField(decimal_places=2, max_digits=20)
    

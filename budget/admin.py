from django.contrib import admin

# Register your models here.

from .models import Transaction, Budget

admin.site.register(Budget)
admin.site.register(Transaction)

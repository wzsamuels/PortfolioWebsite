from django.db import models

# Create your models here.

class Author(models.Model):
    last_name = models.CharField(max_length=200)
    first_name = models.CharField(max_length=200)

    class Meta:
        ordering = ["-last_name"]

    def __str__(self):
        return self.last_name + ", " + self.first_name

class Book(models.Model):
    title = models.CharField(max_length=100)
    authors = models.ManyToManyField('Author', related_name='books')
    year_published = models.IntegerField(default=0)
    summary = models.TextField()

    # class Meta:
      #  order_with_respect_to = 'authors'
    
    def __str__(self):
        return self.title

from django.db import models
from django.utils.text import slugify
from django.urls import reverse

# Create your models here.

class Author(models.Model):
    last_name = models.CharField(max_length=200)
    first_name = models.CharField(max_length=200)
    slug = models.SlugField(null=False, unique=True)

    #class Meta:
     #   ordering = ["-last_name"]

    def __str__(self):
        return self.last_name + ", " + self.first_name

    def get_absolute_url(self):
        return reverse('books:author_detail', kwargs={'slug': self.slug})

    def save(self, *args, **kwargs): # new
        if not self.slug:
            self.slug = slugify(self.last_name + self.first_name)
        return super().save(*args, **kwargs)

class Book(models.Model):
    title = models.CharField(max_length=100)
    authors = models.ManyToManyField('Author', related_name='books')
    year_published = models.IntegerField(default=0)
    summary = models.TextField()
    slug = models.SlugField(null=False, unique=True)

    # class Meta:
      #  order_with_respect_to = 'authors'
    
    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('books:book_detail', kwargs={'slug': self.slug})

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        return super().save(*args, **kwargs)
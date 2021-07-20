from rest_framework import serializers
from .models import Book
"""
class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ('id', 'last_name', 'first_name', 'slug')

"""

class BookSerializer(serializers.ModelSerializer):

    class Meta:
        model = Book
        fields = ('id', 'title', 'authors', 'published', 'summary', 'slug', 'collection')
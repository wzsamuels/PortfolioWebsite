from django.contrib.auth.models import User
from rest_framework import serializers
from blog.models import Post


class PostSerializer(serializers.ModelSerializer):
    author = serializers.SlugRelatedField(
        queryset=User.objects.all(), slug_field='username', required=False
    )

    class Meta:
        model = Post
        fields = ('id', 'author', 'title', 'text', 'created', 'updated')

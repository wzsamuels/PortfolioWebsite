from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework import generics
from blog.models import Post
from blog.serializers import PostSerializer
from blog.forms import PostForm


def home(request):
    tmpl_vars = {'form': PostForm()}
    return render(request, 'blog/index.html', tmpl_vars)


@method_decorator(ensure_csrf_cookie, name='dispatch')
class PostCollection(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def perform_create(self, serializer):
        if self.request.user.is_authenticated:
            user = self.request.user
        else:
            user = User.objects.get(username="Guest")

        serializer.is_valid()
        serializer.save(author=user)


@method_decorator(ensure_csrf_cookie, name='dispatch')
class PostMember(generics.RetrieveDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer



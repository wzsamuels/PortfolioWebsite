from django import forms
from blog.models import Post


class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        # exclude = ['author', 'updated', 'created', ]
        fields = ['text', 'title']
        widgets = {
            'text': forms.Textarea(
                attrs={'id': 'post-text', 'required': True, 'placeholder': 'Say something...',
                       'class': 'form-control', 'style': 'height: 6em;'}
            ),
            'title': forms.TextInput(
                attrs={'id': 'post-title', 'required': True, 'placeholder': 'Say something...',
                       'class': 'form-control'}
            ),
        }
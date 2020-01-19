from django.shortcuts import render

# Create your views here.

from django.shortcuts import render


def home_index(request):
    #a_list = Article.objects.filter(pub_date__year=year)
    #context = {'year': year, 'article_list': a_list}
    return render(request, 'home/index.html')


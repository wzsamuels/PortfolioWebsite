from django.shortcuts import render

def home_index(request):
    return render(request, 'home/index.html')

def college_index(request):
    return render(request, 'home/college.html')

def c_index(request):
    return render(request, 'home/c_index.html')

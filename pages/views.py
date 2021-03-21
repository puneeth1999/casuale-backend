from django.shortcuts import render
from django.http import request, response, HttpResponse
from casualedjango.settings import BASE_DIR
# Create your views here.
def index_view(request):
    print(BASE_DIR)
    # return render(request, 'pages/index.html')
    # return HttpResponse("Working...")
    return render(request, 'pages/oneStepLogin.html')
def contact_view(request):
    return render(request, 'pages/contactus.html')
def login_view(request):
    return render(request, 'pages/login.html')
def signup_view(request):
    return render(request, 'pages/signup.html')
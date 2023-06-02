from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse
from django.contrib.auth import authenticate,login, logout
from django.contrib.auth.forms import UserCreationForm
from .forms import CustomUserCreationForm
# Create your views here.


def index(request):
    return render(request, 'expenses/index.html')

def login(request):
    message = ''
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            #login(request, user)
            return HttpResponseRedirect(reverse('main'))
        else:
            return render(request, 'expenses/login.html', {'message': 'Invalid credentials'})
    return render(request, 'expenses/login.html', {'message': message})


def signup(request):
    if request.method == 'POST':
        """username = request.POST['username']
        password1 = request.POST['password1']
        password2 = request.POST['password2']
        """
        form = CustomUserCreationForm(request.POST)
        print(form)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse('index'))  # Redirect to a success page
    else:
        form = CustomUserCreationForm()
    return render(request, 'expenses/signup.html', {
        'form': form})

def logout_view(request):
    logout(request)
    return render(request,"expenses/login.html",{
        "message": "Logged out",
    })

def main(request):
    """if not request.user.is_authenticated:
         return HttpResponseRedirect(reverse("login"))"""
    return render(request, 'expenses/main.html')

def gl(request):
    return render(request, 'expenses/gl.html')
def cf(request):
    return render(request, 'expenses/cf.html')
def d(request):
    return render(request, 'expenses/d.html')
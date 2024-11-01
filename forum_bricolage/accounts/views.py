from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, get_user_model, logout
from django.contrib.auth.forms import UserCreationForm


def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            # Add error message if needed
            print("Authentication failed")
    
    return render(request, 'base.html')


def register_view(request):
    if request.method == 'POST':
        User = get_user_model()
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        
        try:
            user = User.objects.create_user(username=username, email=email, password=password)
            login(request, user)
            return redirect('home')
        except Exception as e:
            print(f"Registration error: {e}")
    
    return render(request, 'base.html')


def logout_view(request):
    logout(request)
    return redirect('home')
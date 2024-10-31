from django.shortcuts import render

def home(request):
    return render(request, 'index.html')  # Assurez-vous d'avoir un template 'home.html' dans le dossier 'templates/home'
from django.urls import path
from . import views  # Assurez-vous que vous avez défini des vues dans views.py

urlpatterns = [
    path('', views.home, name='home'),  # Remplacez 'home' par le nom de la vue que vous avez définie
]

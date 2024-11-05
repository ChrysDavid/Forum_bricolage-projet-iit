from django.contrib import admin

# Register your models here.
from .models import Publication  # Remplacez Publication par vos autres modèles si nécessaire

admin.site.register(Publication)

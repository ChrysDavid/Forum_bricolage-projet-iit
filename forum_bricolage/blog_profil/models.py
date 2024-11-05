from django.db import models
from django.contrib.auth.models import User

class Publication(models.Model):
    title = models.CharField(max_length=100)
    tag = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)  # Associe l'auteur à un utilisateur

    def __str__(self):
        return self.title

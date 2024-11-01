from django.urls import path
from .views import a_propos, contact_view

urlpatterns = [
    path('a_propos/', a_propos, name='a_propos'),
    path('contact/', contact_view, name='contact'),
]
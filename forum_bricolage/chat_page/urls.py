from django.urls import path
from .views import chat_page

urlpatterns = [
    path('chat_page/', chat_page, name='chat_page'),
]
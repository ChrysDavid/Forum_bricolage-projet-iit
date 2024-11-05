from django.urls import path
from .views import a_propos, contact_view, admin_page_view

urlpatterns = [
    path('a_propos/', a_propos, name='a_propos'),
    path('contact/', contact_view, name='contact'),
    path('admin_page/', admin_page_view, name='admin_page'),
]
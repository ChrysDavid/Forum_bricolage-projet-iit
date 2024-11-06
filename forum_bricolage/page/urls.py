from django.urls import path
from .views import home, a_propos, contact_view, notifiation_page, post_detail

urlpatterns = [
    path('', home, name='home'),
    path('post/<int:id>/', post_detail, name='post_detail'),
    path('a_propos/', a_propos, name='a_propos'),
    path('contact/', contact_view, name='contact'),
    path('notifiation/', notifiation_page, name='notifiation'),
]
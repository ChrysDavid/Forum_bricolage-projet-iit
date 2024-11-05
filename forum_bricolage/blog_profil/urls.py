from django.urls import path
from .views import add_publication, admin_page, edit_publication, delete_publication

urlpatterns = [
    path('admin/', admin_page, name='admin_page'),
    path('add_publication/', add_publication, name='add_publication'),
    path('edit/<int:id>/', edit_publication, name='edit_publication'),
    path('delete/<int:id>/', delete_publication, name='delete_publication'),
]
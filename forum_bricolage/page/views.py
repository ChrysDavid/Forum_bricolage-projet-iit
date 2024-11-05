from django.shortcuts import render


# Create your views here.
def a_propos(request):
    return render(request, 'a_propos.html')


def contact_view(request):
    return render(request, 'contact.html')


def admin_page_view(request):
    return render(request, 'admin.html')
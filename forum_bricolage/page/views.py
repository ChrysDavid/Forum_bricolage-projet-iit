from django.shortcuts import render, get_object_or_404
from blog_profil.models import Publication


def home(request):
    posts = Publication.objects.all()
    return render(request, 'index.html', {'posts': posts})


def a_propos(request):
    return render(request, 'a_propos.html')


def contact_view(request):
    return render(request, 'contact.html')


def notifiation_page(request):
    return render(request, 'notification.html')


def post_detail(request, id):
    post = get_object_or_404(Publication, id=id)
    return render(request, 'post_detail.html', {'post': post})

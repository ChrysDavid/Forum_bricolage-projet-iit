from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages  # Pour les messages de confirmation
from .forms import PublicationForm
from .models import Publication

# Create your views here.
def admin_page(request):
    # Filtrer les publications par auteur (l'utilisateur connecté)
    publications = Publication.objects.filter(author=request.user)  # Affiche seulement les publications de l'utilisateur connecté
    return render(request, 'admin.html', {'publications': publications})


def add_publication(request):
    if request.method == 'POST':
        form = PublicationForm(request.POST, request.FILES)
        if form.is_valid():
            publication = form.save(commit=False)
            publication.author = request.user  # Associer la publication à l'utilisateur connecté
            publication.save()
            messages.success(request, 'Publication ajoutée avec succès!')  # Message de succès
            return redirect('admin_page')
    else:
        form = PublicationForm()
    return render(request, 'admin_detail_publication.html', {'form': form})


def edit_publication(request, id):
    publication = get_object_or_404(Publication, id=id, author=request.user)  # Vérifier que l'utilisateur est l'auteur
    if request.method == 'POST':
        form = PublicationForm(request.POST, request.FILES, instance=publication)
        if form.is_valid():
            form.save()
            messages.success(request, 'Publication modifiée avec succès!')  # Message de succès
            return redirect('admin_page')  # Rediriger vers la page admin après la modification
    else:
        form = PublicationForm(instance=publication)
    return render(request, 'admin_detail_publication.html', {'form': form, 'publication': publication})


def delete_publication(request, id):
    publication = get_object_or_404(Publication, id=id, author=request.user)  # Vérifie que l'utilisateur est l'auteur
    
    if request.method == 'POST':
        publication.delete()  # Supprime la publication de la base de données
        messages.success(request, 'Publication supprimée avec succès!')  # Message de succès
        return redirect('admin_page')  # Redirige vers la page admin après suppression

    return render(request, 'admin_confirm_delete.html', {'publication': publication})  # Page de confirmation

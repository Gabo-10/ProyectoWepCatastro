from django.shortcuts import render
from inspeccion.models import Post, Categoria

# Create your views here.

def inspeccion(request):

    posts=Post.objects.all()
    return render(request, "inspeccion/inspeccion.html", {"posts": posts})

def categoria(request, categoria_id):
    
    categoria=Categoria.objects.get(id=categoria_id)
    posts=Post.objects.filter(categorias=categoria)
    return render(request, "inspeccion/categoria.html", {'categoria':categoria, "posts": posts})

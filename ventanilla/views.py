from django.shortcuts import render
from .models import Producto


# Create your views here.

def ventanilla(request):
    
    productos=Producto.objects.all()

    return render(request, "ventanilla/ventanilla.html", {"productos":productos})
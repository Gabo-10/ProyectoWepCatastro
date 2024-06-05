from django.shortcuts import render
from cartografias.models import Cartografia

# Create your views here.

def cartografias(request):
    
    cartografias=Cartografia.objects.all()
    return render(request, "cartografias/cartografias.html", {"cartografias": cartografias})
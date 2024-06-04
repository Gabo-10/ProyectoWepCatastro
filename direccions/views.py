from django.shortcuts import render
from direccions.models import Direccion

# Create your views here.

def direccions(request):
    
    direccions=Direccion.objects.all()
    return render(request, "direccions/direccions.html", {"direccions": direccions})
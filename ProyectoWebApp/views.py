from django.shortcuts import render, HttpResponse
from ProyectoWeb.decorators import require_authentication
from django.utils.decorators import method_decorator



# Create your views here.
@require_authentication(role='user')
def home(request):
    
    return render(request, "ProyectoWebApp/home.html")

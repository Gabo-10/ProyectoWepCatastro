from django.shortcuts import render, redirect
from rest_framework.views import APIView
from django.contrib.auth import login
from .models import Usuarios
from django.db.models import Q
from django.contrib import messages
import re
from django.http import HttpResponse
from django.shortcuts import get_object_or_404, redirect
from django.http import HttpResponseNotFound
from django.http import HttpResponseBadRequest
from django.http import JsonResponse
from .forms import UsuarioForm
from django.urls import reverse
from django.contrib.auth.hashers import make_password
from django.contrib.auth.hashers import check_password
import json
from django.views.decorators.csrf import csrf_exempt


class Home(APIView):
    template_name="login.html"
    def get(self,request):
        return render(request,self.template_name)
    

def inicio_de_sesion(request):
    if request.method == 'POST':
        username = request.POST.get('usuario')
        password = request.POST.get('contrasena')
        
        # Verificar si se han completado ambos campos
        if not (username and password):
            messages.error(request, '⚠️ Por favor, complete todos los campos.', extra_tags='warning-message')
            return redirect('inicio_de_sesion')

        try:
            # Consulta la base de datos para obtener el usuario
            user = Usuarios.objects.get(usuariou=username)
            
            # Verifica la contraseña (hash)
            if check_password(password, user.contraseñau):
                # Determina el rol del usuario
                if user.is_superUser:
                    # Redirige al usuario administrador a la página de registro
                    return redirect('Registro')
                else:
                    # Redirige al usuario normal a otra página, por ejemplo 'dashboard'
                    return redirect('Home')
            else:
                # Manejar el caso de credenciales incorrectas
                messages.error(request, '❌ Contraseña incorrecta. Por favor, inténtalo de nuevo.', extra_tags='error-message')
                return redirect('inicio_de_sesion')
        except Usuarios.DoesNotExist:
            # Manejar el caso de usuario no encontrado
            messages.error(request, '🚷 Usuario no encontrado. Por favor, acudir con el administrador para que lo registre.', extra_tags='warning-message')
            return redirect('inicio_de_sesion')
    else:
        return render(request, 'login.html')
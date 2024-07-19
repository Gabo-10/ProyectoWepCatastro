from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect
from rest_framework.views import APIView
from .models import Usuarios
from django.db.models import Q
from django.contrib import messages
import re
from django.shortcuts import get_object_or_404, redirect
from django.http import JsonResponse
from django.urls import reverse
from django.contrib.auth.hashers import make_password
from django.contrib.auth.hashers import check_password
import json
from django.views.decorators.csrf import csrf_exempt


class Editor(APIView):    
    template_name="editor.html"
    def get(self, request):
        usuarios = Usuarios.objects.all()
        return render(request, self.template_name, {'usuarios': usuarios})

def registro(request):
    if request.method == 'POST':
        nombre = request.POST.get('name')
        apellido = request.POST.get('ape')
        usuario = request.POST.get('usu')
        contraseña = request.POST.get('contra')
        confirmarcon = request.POST.get('concontra')
        rol = request.POST.get('rol')

        # Verifica si hay campos vacíos en el formulario
        if not all([nombre, apellido, usuario, contraseña, confirmarcon, rol]):
            messages.error(request, '⚠️ Por favor, complete todos los campos del formulario.', extra_tags='warning-message')
        else:
            # Verifica si el usuario ya está registrado
            if Usuarios.objects.filter(nombresu=nombre, apellidosu=apellido).exists():
                messages.error(request, '❌ El usuario ya está registrado.', extra_tags='error-message')
            # Verifica si el nombre de usuario ya está en uso
            elif Usuarios.objects.filter(usuariou=usuario).exists():
                messages.error(request, '⚠️ El nombre de usuario ya está en uso. Por favor, elija otro.', extra_tags='warning-message')
            else:
                # Verifica si la contraseña cumple con los criterios
                if len(contraseña) < 6 or not re.search("[A-Z]", contraseña) or not re.search("[!@#$%^&*()_+{}|:<>?~0-9]", contraseña):
                    messages.error(request, '⚠️ La contraseña debe tener al menos 6 caracteres,una mayúscula, y un símbolo o número.', extra_tags='error-message')
                else:
                    # Verifica si las contraseñas coinciden
                    if contraseña != confirmarcon:
                        messages.error(request, '⚠️ Las contraseñas no coinciden. Por favor, inténtelo de nuevo.', extra_tags='error-message')
                    else:
                        # Determinar si es superusuario basado en el rol
                        is_superUser = rol == 'Administrador'

                        # Hashear la contraseña antes de guardar
                        contraseña_hashed = make_password(contraseña)
                        usuario_nuevo = Usuarios(
                            nombresu=nombre, 
                            apellidosu=apellido, 
                            usuariou=usuario, 
                            contraseñau=contraseña_hashed, 
                            is_superUser=is_superUser
                        )
                        usuario_nuevo.save()
                        messages.success(request, '✅ Usuario registrado exitosamente.', extra_tags='success-message')
                        return redirect('Registro')  # Redirecciona a la misma página después de registrar

    # Mantener los datos del formulario ingresados por el usuario
    datos_formulario = {
        'name': request.POST.get('name', ''),
        'ape': request.POST.get('ape', ''),
        'usu': request.POST.get('usu', ''),
        'contra': request.POST.get('contra', ''),
        'concontra': request.POST.get('concontra', ''),
    }

    return render(request, 'registro.html', {'datos_formulario': datos_formulario})



def eliminarUsuario(request, codigo):
    usuario = get_object_or_404(Usuarios, idUsuarios=codigo)
    if request.method == 'POST':
        usuario.delete()
        # Redirigir de vuelta a la página de edición después de eliminar el usuario
        return redirect('editor')
    # Si la solicitud no es POST, simplemente renderiza la página de confirmación de eliminación
    return render(request, 'editor.html', {'usuario': usuario})

 

def edicionUsuario(request, codigo):
    usuario = Usuarios.objects.get(idUsuarios=codigo)
    return render(request, "edicionUsuario.html", {"usuario": usuario})
def editarUsuario(request, codigo):
    if request.method == 'POST':
        nombre = request.POST.get('txtNombres')
        apellidos = request.POST.get('txtApelli')

        try:
            usuario = Usuarios.objects.get(idUsuarios=codigo)
            usuario.nombresu = nombre
            usuario.apellidosu = apellidos
            usuario.save()
            messages.success(request, '✅ ¡Datos de usuario actualizado!', extra_tags='success-messages')
            return redirect('editor')
        except Usuarios.DoesNotExist:
            messages.error(request, 'El usuario no existe')
            return redirect('editor')  # O redirigir a donde sea apropiado en tu aplicación
    else:
        # Manejar casos donde no es una solicitud POST
        messages.error(request, 'La solicitud no es válida')
        return redirect('editor')  # O redirigir a donde sea apropiado en tu aplicación

    

def edicionContra(request, codigo):
    usuario = Usuarios.objects.get(idUsuarios=codigo)
    return render(request, "edicionContra.html", {"usuario": usuario})

def editarContra(request, codigo):
    if request.method == 'POST':
        password = request.POST.get('txtContra')
        confirmacion = request.POST.get('txtConfir')

        if not password or not confirmacion:
            messages.error(request, '⚠️ ¡Todos los campos son obligatorios!', extra_tags='warning-message')
            usuario = Usuarios.objects.get(idUsuarios=codigo)
            return render(request, "edicionContra.html", {"usuario": usuario})

        if password != confirmacion:
            messages.error(request, '⚠️ ¡Las contraseñas no coinciden, inténtalo de nuevo!', extra_tags='error-message')
            usuario = Usuarios.objects.get(idUsuarios=codigo)
            return render(request, "edicionContra.html", {"usuario": usuario})
        
        if len(password) < 6 or not re.search("[A-Z]", password) or not re.search("[!@#$%^&*()_+{}|:<>?~0-9]", password):
            messages.error(request, '⚠️ La contraseña debe tener al menos 6 caracteres,una mayúscula, y un símbolo o número.', extra_tags='error-message')
            usuario = Usuarios.objects.get(idUsuarios=codigo)
            return render(request, "edicionContra.html", {"usuario": usuario})

        try:
            usuario = Usuarios.objects.get(idUsuarios=codigo)
            # Hashear la contraseña antes de guardarla
            usuario.contraseñau = make_password(password)
            usuario.save()
            messages.success(request, '✅ ¡Se restableció correctamente la contraseña!', extra_tags='success-messages')
            # Abre el modal después de la validación exitosa
            return redirect('editor')
        except Usuarios.DoesNotExist:
            messages.error(request, 'El usuario no existe')
            return redirect('editor')  # O redirigir a donde sea apropiado en tu aplicación

    else:
        # Manejar casos donde no es una solicitud POST
        messages.error(request, 'La solicitud no es válida')
        return redirect('editor')  # O redirigir a donde sea apropiado en tu aplicación
    


@csrf_exempt
def verificar_admin(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        admin_username = data.get('adminUsername')
        admin_password = data.get('adminPassword')
        
        try:
            user = Usuarios.objects.get(usuariou=admin_username)
            if user.is_superUser and check_password(admin_password, user.contraseñau):
                return JsonResponse({'success': True})
            else:
                return JsonResponse({'success': False})
        except Usuarios.DoesNotExist:
            return JsonResponse({'success': False})
    return JsonResponse({'success': False}, status=400)
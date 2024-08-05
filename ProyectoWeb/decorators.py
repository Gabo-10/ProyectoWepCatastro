# ProyectoWeb/decorators.py
from django.shortcuts import redirect
from administracion.models import Usuarios

def require_authentication(role=None):
    def decorator(view_func):
        def _wrapped_view(request, *args, **kwargs):
            print("Verificando autenticación para la vista.")
            user_id = request.session.get('user_id')
            if not user_id:
                print("Usuario no autenticado, redirigiendo a inicio_de_sesion.")
                return redirect('inicio_de_sesion')

            try:
                user = Usuarios.objects.get(idUsuarios=user_id)
            except Usuarios.DoesNotExist:
                print("Usuario no encontrado, redirigiendo a inicio_de_sesion.")
                return redirect('inicio_de_sesion')

            if role == 'superuser' and not user.is_superUser:
                print("Usuario no tiene permiso de superusuario, redirigiendo a Home.")
                return redirect('Home')
            if role == 'user' and user.is_superUser:
                print("Superusuario intentando acceder a vista de usuario, redirigiendo a Registro.")
                return redirect('Registro')

            return view_func(request, *args, **kwargs)
        return _wrapped_view
    return decorator
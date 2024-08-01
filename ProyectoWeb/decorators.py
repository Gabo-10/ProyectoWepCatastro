# ProyectoWeb/decorators.py
from django.shortcuts import redirect

def require_authentication(view_func):
    def _wrapped_view(request, *args, **kwargs):
        print("Verificando autenticación para la vista.")
        if not request.session.get('user_id'):
            print("Usuario no autenticado, redirigiendo a inicio_de_sesion.")
            return redirect('inicio_de_sesion')
        return view_func(request, *args, **kwargs)
    return _wrapped_view


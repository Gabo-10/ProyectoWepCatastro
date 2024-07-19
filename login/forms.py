from django import forms
from administracion.models import Usuarios

class UsuarioForm(forms.ModelForm):
    class Meta:
        model = Usuarios
        fields = ['nombresu', 'apellidosu', 'usuariou', 'contraseñau']
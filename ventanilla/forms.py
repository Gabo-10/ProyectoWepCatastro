from django import forms

class FormularioVentana(forms.Form):
    
   nombre = forms.CharField(label='Nombre', required=True)
   manzana = forms.CharField(label='Manzana', required=True)
   calle = forms.CharField(label='Calle', required=True)
   entidad = forms.CharField(label='Entidad', required=True)
   entidad_fdgs = forms.CharField(label='Entidadessss', required=True)
    
        
        
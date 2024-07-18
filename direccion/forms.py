from django import forms

class FormularioDireccion(forms.Form):
    
    nombre = forms.CharField(
        label='Nombre', 
        required=True, 
        widget=forms.TextInput(attrs={'class': 'custom-input'})
    )
    email = forms.EmailField(
        label='Email', 
        required=True, 
        widget=forms.EmailInput(attrs={'class': 'custom-input'})
    )
    contenido = forms.CharField(
        label='Contenido', 
        widget=forms.Textarea(attrs={'class': 'custom-textarea'})
    )
    
  
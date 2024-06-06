
from django.urls import path
from . import views
#from ventanilla.views import FormularioVentanaViews

urlpatterns = [
  
    path('',views.ventanilla, name="Ventanilla"),
    
    #path('registrarVentana/', FormularioVentanaViews.ventanilla, name='registrarVentana'),
    #path('guardarVentana/', FormularioVentanaViews.procesar_formulario, name='guardarVentana'),
    
]
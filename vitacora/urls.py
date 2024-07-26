from django.urls import path 
from vitacora.views import Editorvita
from vitacora import views



urlpatterns = [

    path('vitacora/', views.vitacora, name='Vitacora'),
    path('editarvit/', Editorvita.as_view(), name='editorvit'),
    path('edicionVita/<codigo>', views.edicionVita),
    path('agregarVita/', views.agregarVita, name='AgregarVita'),
    path('obtener_siguiente_idvit/', views.obtener_siguiente_idvit, name='obtener_siguiente_idvit'),
    path('eliminacionVita/<codigo>', views.eliminarVitac, name='eliminarVitac'),
    path('edicionReportv/<codigo>/', views.edicionReportv),
    # path('eliminacionVita/<codigo>', views.eliminarVita, name='eliminarvit'),
   
    # path('editarVita/<int:codigo>/', views.editarVita),
  
]
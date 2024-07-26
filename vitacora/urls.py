from django.urls import path 
from vitacora.views import Editorvita
from vitacora import views



urlpatterns = [

    path('vitacora/', views.vitacora, name='Vitacora'),
    path('editarvit/', Editorvita.as_view(), name='editorvit'),
    path('edicionVita/<codigo>', views.edicionVita),
    path('obtener_siguiente_idvit/', views.obtener_siguiente_idvit, name='obtener_siguiente_idvit'),
    # path('eliminacionVita/<codigo>', views.eliminarVita, name='eliminarvit'),
    # path('edicionVita/<codigo>', views.edicionVita),
    # path('editarVita/<int:codigo>/', views.editarVita),
  
]
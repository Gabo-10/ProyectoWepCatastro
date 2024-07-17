from django.urls import path
from inspeccion.views import Crearinspec
from inspeccion import views




urlpatterns = [

path('inspeccion/', views.inspeccion, name='Inspeccion'),
path('crearinspec/', Crearinspec.as_view(), name='Crearinspec'),
path('edicionInspec/<codigo>', views.edicionInspec),
path('edicionReport/<codigo>/', views.edicionReport),
path('editarReport/<codigo>/', views.editarReport),
path('agregarInspec/', views.agregarInspec, name='AgregarInspec'),
path('obtener_siguiente_idins/', views.obtener_siguiente_idins, name='obtener_siguiente_idins'),
path('eliminacionInspec/<codigo>', views.eliminarInspec, name='eliminarIns'),
]
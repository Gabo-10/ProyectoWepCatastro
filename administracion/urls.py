from django.urls import path 
from administracion.views import Editor
from administracion import views



urlpatterns = [

    path('registro/', views.registro, name='Registro'),
    path('editar/', Editor.as_view(), name='editor'),
    path('eliminacionUsuario/<codigo>', views.eliminarUsuario, name='eliminar'),
    path('edicionUsuario/<codigo>', views.edicionUsuario),
    path('editarUsuario/<int:codigo>/', views.editarUsuario),
    path('edicionContra/<codigo>/', views.edicionContra),
    path('editarContra/<int:codigo>/',views.editarContra),
    path('verificarAdmin/', views.verificar_admin, name='verificarAdmin'),
    path('bitaco/', views.bitacora, name= 'Bitacora'),
    path('actualizar_estado_vitacora/<str:id>/<str:estado>/', views.actualizar_estado_vitacora, name='actualizar_estado_vitacora'),
    path('inspec/', views.inspeccion, name= 'Inspec'),

]

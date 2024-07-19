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

]

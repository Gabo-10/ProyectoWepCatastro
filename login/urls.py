
from django.urls import path
from login import views



urlpatterns = [

    path('', views.inicio_de_sesion ,name='inicio_de_sesion'),
    path('cerrar-sesion/', views.cerrar_sesion, name='cerrar_sesion'),

]

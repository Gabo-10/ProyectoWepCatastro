from django.urls import path 
from ventanilla import views



urlpatterns = [

    path('', views.ventanilla, name='Ventanilla'),
    path('obtener-siguiente-id/', views.obtener_siguiente_id, name='obtener_siguiente_id'),

]


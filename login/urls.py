
from django.urls import path
from login import views



urlpatterns = [

    path('', views.inicio_de_sesion ,name='inicio_de_sesion'),

]

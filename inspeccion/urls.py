from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
  
    path('',views.inspeccion, name="Inspeccion"),
    path('categoria/<int:categoria_id>/',views.categoria, name="categoria"), #Para que reconosca como parametro "categoria_id" debe de ir entre corchetes
   
]
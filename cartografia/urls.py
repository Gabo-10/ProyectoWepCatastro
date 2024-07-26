from django.urls import path 
from cartografia.views import Editorcar
from cartografia import views



urlpatterns = [

    path('editarcar/', Editorcar.as_view(), name='editorcar'),
    path('edicionCarto/<codigo>', views.edicionCarto),
    path('editarCarto/<int:codigo>/', views.editarCarto),
  
]
from django.urls import path 
from ventanilla import views
from ventanilla.views import Editorven



urlpatterns = [

    path('', views.ventanilla, name='Ventanilla'),
    path('obtener-siguiente-id/', views.obtener_siguiente_id, name='obtener_siguiente_id'),
    path('editarven/', Editorven.as_view(), name='editorven'),
    path('edicionVenta/<codigo>', views.edicionVenta),
    path('editarVenta/<int:codigo>/', views.editarVenta),

]


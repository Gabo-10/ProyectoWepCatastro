"""
URL configuration for ProyectoWeb project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns


urlpatterns = [
    path('admin/', admin.site.urls),

    path('vitacora/', include('vitacora.urls')),
    
    path('cartografia/', include('cartografia.urls')),
    
    path('inspeccion/', include('inspeccion.urls')),
    
    path('direccion/', include('direccion.urls')),
    
    path('ventanilla/', include('ventanilla.urls')),

    path('administracion/', include('administracion.urls')),
    
    path('', include('login.urls')),
    
    #path('ProyectoWebApp/', include('ProyectoWebApp.urls')),
    
    path('inicial/', include('ProyectoWebApp.urls')),# para que directamente se dirija a esta url sin nececidad de cololar ProyectoWebApp/
   
]
# Configuración para servir archivos estáticos en desarrollo
urlpatterns += staticfiles_urlpatterns()

# Configuración para servir archivos multimedia en desarrollo
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

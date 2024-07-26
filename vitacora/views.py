from django.shortcuts import render, redirect
from rest_framework.views import APIView
from .models import Vitacora, Ventanilla
from django.db.models import Q
from django.contrib import messages
import re
from django.shortcuts import get_object_or_404, redirect
from django.http import JsonResponse
from django.urls import reverse
import json
from django.views.decorators.csrf import csrf_exempt


def vitacora(request):
    vitacoras = Vitacora.objects.all()
    return render(request, 'vitacoras.html', {'vitacoras': vitacoras})

class Editorvita(APIView):    
    template_name="Viteditor.html"
    def get(self, request):
        ventanilla = Ventanilla.objects.all()
        return render(request, self.template_name, {'ventanilla': ventanilla})

def edicionVita(request, codigo):
    ventanilla = Ventanilla.objects.get(nprog=codigo)
    return render(request, "edicionVita.html", {"ventanilla": ventanilla})

# def eliminarVita(request, codigo):
#     ventanilla = get_object_or_404(Ventanilla, nprog=codigo)
#     if request.method == 'POST':
#         ventanilla.delete()
#         # Redirigir de vuelta a la página de edición después de eliminar el usuario
#         return redirect('editorvit')
#     # Si la solicitud no es POST, simplemente renderiza la página de confirmación de eliminación
#     return render(request, 'Viteditor.html', {'ventanilla': ventanilla})    

# def edicionVita(request, codigo):
#     ventanilla = Ventanilla.objects.get(nprog=codigo)
#     return render(request, "edicionVita.html", {"ventanilla": ventanilla})

# def editarVita(request, codigo):
#     if request.method == 'POST':
#         claverav = request.POST.get('claveravita')
#         nombrev = request.POST.get('nombrevita')
#         curpv = request.POST.get('curpvita')
#         manzanav = request.POST.get('manzanavita')
#         lotev = request.POST.get('lotevita')
#         callev = request.POST.get('callevita')
#         barriov = request.POST.get('barriovita')
#         entidadv = request.POST.get('entidadvita')
#         municipiov = request.POST.get('municipiovita')
#         tramitev = request.POST.get('tramitevita')
#         fechav = request.POST.get('fechavita')
#         foliov = request.POST.get('foliovita')
#         recibov = request.POST.get('recibovita')
#         importev = request.POST.get('importevita')
#         revisov = request.POST.get('revisovita')
#         motivov = request.POST.get('motivovita')
#         soliserviv = request.POST.get('soliservivita')
#         terrenov = request.POST.get('terrenovita')
#         construcv = request.POST.get('construcvita')
#         elaboracionv= request.POST.get('elaboracionvita')
#         atencionv = request.POST.get('atencionvita')
#         horav = request.POST.get('horavita')
#         pagov = request.POST.get('pagovita')
#         extrasv = request.POST.get('extrasvita')

#         try:
#             vita = Ventanilla.objects.get(nprog=codigo)
#             vita.clave_catastral = claverav
#             vita.nombre = nombrev
#             vita.curp =  curpv
#             vita.manzana = manzanav
#             vita.lote = lotev
#             vita.calle = callev
#             vita.barrio_colonia = barriov
#             vita.entidad = entidadv
#             vita.municipio = municipiov
#             vita.tramite = tramitev
#             vita.fecha = fechav 
#             vita.folio = foliov
#             vita.recibo = recibov 
#             vita.importe = importev 
#             vita.reviso = revisov 
#             vita.motivo = motivov 
#             vita.solicitud_servicio_catastral = soliserviv
#             vita.superficie_terreno = terrenov 
#             vita.superficie_construccion_resultante = construcv 
#             vita.fecha_elaboracion = elaboracionv 
#             vita.observaciones_atencion = atencionv 
#             vita.hora_recepcion = horav 
#             vita.pago = pagov 
#             vita.extras = extrasv 
#             vita.save()
#             messages.success(request, '✅ ¡Datos actualizado!', extra_tags='success-messages')
#             return redirect('editorvit')
#         except Ventanilla.DoesNotExist:
#             messages.error(request, 'El registro no existe')
#             return redirect('editorvit')  # O redirigir a donde sea apropiado en tu aplicación
#     else:
#         # Manejar casos donde no es una solicitud POST
#         messages.error(request, 'La solicitud no es válida')
#         return redirect('editorvit')  # O redirigir a donde sea apropiado en tu aplicación
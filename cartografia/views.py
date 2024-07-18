from django.shortcuts import render, redirect
from rest_framework.views import APIView
from .models import Ventanilla
from django.db.models import Q
from django.contrib import messages
import re
from django.shortcuts import get_object_or_404, redirect
from django.http import JsonResponse
from django.urls import reverse
import json
from django.views.decorators.csrf import csrf_exempt


class Editorcar(APIView):    
    template_name="Careditor.html"
    def get(self, request):
        ventanilla = Ventanilla.objects.all()
        return render(request, self.template_name, {'ventanilla': ventanilla})


def eliminarCarto(request, codigo):
    ventanilla = get_object_or_404(Ventanilla, nprog=codigo)
    if request.method == 'POST':
        ventanilla.delete()
        messages.success(request, '✅ El registro ha sido eliminado correctamente.', extra_tags='success-messages')
        return redirect('editorcar')
    return render(request, 'Careditor.html', {'ventanilla': ventanilla})  

def edicionCarto(request, codigo):
    ventanilla = Ventanilla.objects.get(nprog=codigo)
    return render(request, "edicionCarto.html", {"ventanilla": ventanilla})

def editarCarto(request, codigo):
    if request.method == 'POST':
        claverac = request.POST.get('claveracarto')
        nombrec = request.POST.get('nombrecarto')
        curpc = request.POST.get('curpcarto')
        manzanac = request.POST.get('manzanacarto')
        lotec = request.POST.get('lotecarto')
        callec = request.POST.get('callecarto')
        barrioc = request.POST.get('barriocarto')
        entidadc = request.POST.get('entidadcarto')
        municipioc = request.POST.get('municipiocarto')
        tramitec = request.POST.get('tramitecarto')
        fechac = request.POST.get('fechacarto')
        folioc = request.POST.get('foliocarto')
        reciboc = request.POST.get('recibocarto')
        importec = request.POST.get('importecarto')
        revisoc = request.POST.get('revisocarto')
        motivoc = request.POST.get('motivocarto')
        soliservic = request.POST.get('soliservicarto')
        terrenoc = request.POST.get('terrenocarto')
        construcc = request.POST.get('construccarto')
        elaboracionc= request.POST.get('elaboracioncarto')
        atencionc = request.POST.get('atencioncarto')
        horac = request.POST.get('horacarto')
        pagoc = request.POST.get('pagocarto')
        extrasc = request.POST.get('extrascarto')

        try:
            cartos = Ventanilla.objects.get(nprog=codigo)
            cartos.clave_catastral = claverac
            cartos.nombre = nombrec
            cartos.curp =  curpc
            cartos.manzana = manzanac
            cartos.lote = lotec
            cartos.calle = callec
            cartos.barrio_colonia = barrioc
            cartos.entidad = entidadc
            cartos.municipio = municipioc
            cartos.tramite = tramitec
            cartos.fecha = fechac 
            cartos.folio = folioc
            cartos.recibo = reciboc 
            cartos.importe = importec 
            cartos.reviso = revisoc 
            cartos.motivo = motivoc 
            cartos.solicitud_servicio_catastral = soliservic
            cartos.superficie_terreno = terrenoc 
            cartos.superficie_construccion_resultante = construcc 
            cartos.fecha_elaboracion = elaboracionc 
            cartos.observaciones_atencion = atencionc 
            cartos.hora_recepcion = horac 
            cartos.pago = pagoc 
            cartos.extras = extrasc 
            cartos.save()
            messages.success(request, '✅ ¡Datos de usuario actualizado!', extra_tags='success-messages')
            return redirect('editorcar')
        except Ventanilla.DoesNotExist:
            messages.error(request, 'El usuario no existe')
            return redirect('editorcar')  # O redirigir a donde sea apropiado en tu aplicación
    else:
        # Manejar casos donde no es una solicitud POST
        messages.error(request, 'La solicitud no es válida')
        return redirect('editorcar')  # O redirigir a donde sea apropiado en tu aplicación
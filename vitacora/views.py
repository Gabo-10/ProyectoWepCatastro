from django.shortcuts import render, redirect
from rest_framework.views import APIView
from .models import Vitacora, Ventanilla
from inspeccion.models import Inspeccion
from django.db.models import Q
from django.contrib import messages
import re
from django.shortcuts import get_object_or_404, redirect
from django.http import JsonResponse
from django.urls import reverse
import json
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
import os
from ProyectoWeb.decorators import require_authentication
from django.utils.decorators import method_decorator


@require_authentication(role='user')
def vitacora(request):
    vitacoras = Vitacora.objects.all()
    return render(request, 'vitacoras.html', {'vitacoras': vitacoras})
@method_decorator(require_authentication(role='user'), name='dispatch')
class Editorvita(APIView):    
    template_name="Viteditor.html"
    def get(self, request):
        ventanilla = Ventanilla.objects.all()
        return render(request, self.template_name, {'ventanilla': ventanilla})
@require_authentication(role='user')
def edicionVita(request, codigo):
    ventanilla = Ventanilla.objects.get(nprog=codigo)
    return render(request, "edicionVita.html", {"ventanilla": ventanilla})
@require_authentication(role='user')
def agregarVita(request):
    if request.method == 'POST':
        IDvit = request.POST.get('idvi')
        foliovit = request.POST.get('foliovi')  
        nombrevit = request.POST.get('nombrevi')
        fecharevit = request.POST.get('fechavi')
        carpetavit = request.POST.get('carpetavi')
        areavit = request.POST.get('areavi')
        foliomavit = request.POST.get('foliomavi')
        diavit = request.POST.get('diavi')
        archivo_pdfvit = request.FILES.get('archivovi')
        verificacionvit = request.POST.get('verivi')
        tipovit = request.POST.get('tipovi')
        clavevit = request.POST.get('clavevi')
        costovit = request.POST.get('costovi')
        observit = request.POST.get('obsvi')

        # Verificar si todos los campos están llenos
        if not all([IDvit, foliovit, nombrevit, fecharevit, carpetavit, areavit, foliomavit, diavit, archivo_pdfvit, verificacionvit, tipovit, clavevit, costovit, observit]):
            messages.error(request, '⚠️ Por favor, complete todos los campos del formulario.', extra_tags='warning-message')
        else:
            # Verificar si ya existe un reporte con el mismo nprogi_id
            if Vitacora.objects.filter(folio=foliovit).exists():
                messages.error(request, '❌ Ya se ha realizado un reporte para este número de programa.', extra_tags='error-message')
            else:
                # Obtener la instancia de Ventanilla correspondiente
                foliov = get_object_or_404(Ventanilla, folio=foliovit)

                # Crear un nuevo objeto Inspeccion
                nueva_vitacora = Vitacora(
                    idvit=IDvit,
                    folio=foliov,
                    nombre_propietario=nombrevit,
                    fecha_revision=fecharevit,
                    carpeta=carpetavit,
                    area=areavit,
                    folio_manifestacion=foliomavit,
                    dia_que_sale=diavit,
                    plano_manzanero=archivo_pdfvit,
                    verificacion_linderos=verificacionvit,
                    tipo_captura=tipovit,
                    clave_catastral=clavevit,
                    costo_traslado=costovit,
                    observacion= observit,

                )

                # Guardar la nueva inspección en la base de datos
                try:
                    nueva_vitacora.save()
                    messages.success(request, '✅ Reporte guardado exitosamente.', extra_tags='success-message')
                except Exception as e:
                    messages.error(request, f'❌ Error al guardar los datos: {e}', extra_tags='error-message')

            return redirect('editorvit')  # Redirige a la página deseada después de guardar
        
          # Obtener todos los datos del formulario
    datos_formulario = {
        'idvi': request.POST.get('idvi', ''),
        'foliovi': request.POST.get('foliovi', ''),
        'nombrevi': request.POST.get('nombrevi', ''),
        'fechavi': request.POST.get('fechavi', ''),
        'carpetavi': request.POST.get('carpetavi', ''),
        'areavi': request.POST.get('areavi', ''),
        'foliomavi': request.POST.get('foliomavi', ''),
        'diavi': request.POST.get('diavi', ''),
        'archivovi': request.FILES.get('archivovi', None),
        'verivi': request.POST.get('verivi', ''),
        'tipovi': request.POST.get('tipovi', ''),
        'clavevi': request.POST.get('clavevi', ''),
        'costovi': request.POST.get('costovi', ''),
        'obsvi': request.POST.get('obsvi', ''),
        
    }

    # Obtener la instancia de Ventanilla correspondiente
    ventanilla = Ventanilla.objects.get(folio=request.POST.get('foliovi'))


    # Agregar el valor de folion al contexto
    datos_formulario['foliovi'] = ventanilla.folio

    return render(request, 'edicionVita.html', {'datos_formulario': datos_formulario, 'ventanilla': ventanilla})

@require_authentication(role='user')
def obtener_siguiente_idvit(request):
    # Obtener todos los IDs
    all_ids = Vitacora.objects.values_list('idvit', flat=True)

    # Extraer la parte numérica y ordenarla numéricamente
    numeric_ids = sorted(
        [int(re.search(r'\d+', id_str).group()) for id_str in all_ids if re.search(r'\d+', id_str)],
        reverse=True
    )

    print(f"Numeric IDs: {numeric_ids}")
    
    if not numeric_ids:
        siguiente_idvit = 'BIT-01'
    else:
        siguiente_id_number = numeric_ids[0] + 1
        siguiente_idvit = f'BIT-{str(siguiente_id_number).zfill(2)}'
    
    print(f"Siguiente ID: {siguiente_idvit}")
    return JsonResponse({'siguiente_idvit': siguiente_idvit})
@require_authentication(role='user')
def eliminarVitac(request, codigo):
    vitacora = get_object_or_404(Vitacora, idvit=codigo)
    
    if request.method == 'GET':
        # Verificar si hay registros asociados en Inspeccion
        inspeccion_exists = Inspeccion.objects.filter(idvit=vitacora).exists()
        if inspeccion_exists:
            return JsonResponse({'success': False, 'message': 'No se puede eliminar el registro porque tiene registros asociados en el área de Inspección.'})
        
        # Si no hay registros asociados, indicar que se puede eliminar
        return JsonResponse({'success': True})

    if request.method == 'POST':
        try:
            # Verificar si hay registros asociados en Inspeccion
            inspeccion_exists = Inspeccion.objects.filter(idvit=vitacora).exists()
            if inspeccion_exists:
                return JsonResponse({'success': False, 'message': 'No se puede eliminar el registro porque tiene registros asociados en el área de Inspección.'})

            # Si no hay registros asociados, proceder con la eliminación del archivo PDF
            archivo_pdf_path = os.path.join(settings.MEDIA_ROOT, str(vitacora.plano_manzanero))
            
            if os.path.exists(archivo_pdf_path):
                os.remove(archivo_pdf_path)

            vitacora.delete()
            
            # Retornar una respuesta JSON de éxito
            return JsonResponse({'success': True, 'message': '✅ El registro ha sido eliminado correctamente.'})  
        
        except Exception as e:
            # Manejo de errores si algo sale mal al eliminar
            print(f"Error al eliminar bitacora: {e}")
            return JsonResponse({'success': False, 'message': f'Error al eliminar el registro: {str(e)}'})
        
    # Si la solicitud no es GET ni POST, simplemente renderiza la página de confirmación de eliminación
    return render(request, 'vitacoras.html', {'vitacora': vitacora})
            
@require_authentication(role='user')
def edicionReportv(request, codigo):
    reportev = Vitacora.objects.get(idvit=codigo)
    return render(request, "editarReportv.html", {"vitacora": reportev})
@require_authentication(role='user')
def editarReportv(request, codigo):
    if request.method == 'POST':
        nombrer = request.POST.get('nombrevire')
        fechar = request.POST.get('fechavire')
        carpetar = request.POST.get('carpetavire')
        arear = request.POST.get('areavire')
        foliomar = request.POST.get('foliomavire')
        diar = request.POST.get('diavire')
        plano_manzaneror = request.FILES.get('archivovire')
        verier = request.POST.get('verivire')
        tipor = request.POST.get('tipovire')
        claver = request.POST.get('clavevire')
        costor = request.POST.get('costovire')
        obsr = request.POST.get('obsvire')
        

        try:
            reportev = Vitacora.objects.get(idvit=codigo)
            reportev.nombre_propietario = nombrer
            reportev.fecha_revision = fechar
            reportev.carpeta = carpetar
            reportev.area = arear
            reportev.folio_manifestacion = foliomar
            reportev.dia_que_sale = diar
            reportev.verificacion_linderos = verier
            reportev.tipo_captura = tipor
            reportev.clave_catastral = claver
            reportev.costo_traslado = costor
            reportev.observacion = obsr


            # Manejo del archivo PDF
            if plano_manzaneror:
                # Eliminar el archivo anterior si existe
                if reportev.plano_manzanero and os.path.isfile(reportev.plano_manzanero.path):
                    os.remove(reportev.plano_manzanero.path)
                reportev.plano_manzanero = plano_manzaneror
            
            reportev.save()
            messages.success(request, '✅ ¡Reporte actualizado!', extra_tags='success-message')
            return redirect('Vitacora')
        except Vitacora.DoesNotExist:
            messages.error(request, 'El reporte no existe')
            return redirect('Vitacora')
    else:
        messages.error(request, 'La solicitud no es válida')
        return redirect('Vitacora')
    


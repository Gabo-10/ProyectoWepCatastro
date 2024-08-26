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
from django.conf import settings
import os



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
    ventanilla = Ventanilla.objects.get(request.POST.get('foliovi'))

    # Agregar el valor de folion al contexto
    datos_formulario['foliovi'] = ventanilla.folio

    return render(request, 'edicionVita.html', {'datos_formulario': datos_formulario, 'ventanilla': ventanilla})


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
        siguiente_idvit = 'VIT-01'
    else:
        siguiente_id_number = numeric_ids[0] + 1
        siguiente_idvit = f'VIT-{str(siguiente_id_number).zfill(2)}'
    
    print(f"Siguiente ID: {siguiente_idvit}")
    return JsonResponse({'siguiente_idvit': siguiente_idvit})

def eliminarVitac(request, codigo):
    vitacora = get_object_or_404(Vitacora, idvit=codigo)
    
    if request.method == 'POST':
        try:
            # Obtén la ruta del archivo PDF
            archivo_pdf_path = os.path.join(settings.MEDIA_ROOT, str(vitacora.plano_manzanero))
            
            # Elimina el archivo PDF si existe
            if os.path.exists(archivo_pdf_path):
                os.remove(archivo_pdf_path)
                
            
            vitacora.delete()
            
            # Redirigir de vuelta a la página de inspecciones después de eliminar
            return redirect('vitacoras')  
        
        except Exception as e:
            # Manejo de errores si algo sale mal al eliminar
            print(f"Error al eliminar bitacora: {e}")
            
        
    # Si la solicitud no es POST, simplemente renderiza la página de confirmación de eliminación
    return render(request, 'vitacoras.html', {'vitacora': vitacora})


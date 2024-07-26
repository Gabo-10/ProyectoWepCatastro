from django.shortcuts import render, redirect
from rest_framework.views import APIView
from .models import Inspeccion, Ventanilla
from django.contrib import messages
from django.http import JsonResponse
from django.http import HttpResponse
from django.views.decorators.http import require_GET
from django.shortcuts import render, get_object_or_404, redirect
from django.conf import settings
import os
from django.shortcuts import redirect, reverse
import re


def inspeccion(request):
    inspecciones = Inspeccion.objects.all()
    return render(request, 'inspecciones.html', {'inspecciones': inspecciones})

class Crearinspec(APIView): 
    template_name="Crearinspec.html"
    def get(self, request):
        ventanilla = Ventanilla.objects.all()
        return render(request, self.template_name, {'ventanilla': ventanilla})
    
def edicionInspec(request, codigo):
    ventanilla = Ventanilla.objects.get(nprog=codigo)
    return render(request, "edicionInspec.html", {"ventanilla": ventanilla})
    
def agregarInspec(request):
    if request.method == 'POST':
        IDi = request.POST.get('regisin')
        nprogi_id = request.POST.get('progin')  
        nombrei = request.POST.get('nombrein')
        archivo_pdfi = request.FILES.get('archivo_pdfin')

        # Verificar si todos los campos están llenos
        if not all([IDi, nprogi_id, nombrei, archivo_pdfi]):
            messages.error(request, '⚠️ Por favor, complete todos los campos del formulario.', extra_tags='warning-message')
        else:
            # Verificar si ya existe un reporte con el mismo nprogi_id
            if Inspeccion.objects.filter(nprog_id=nprogi_id).exists():
                messages.error(request, '❌ Ya se ha realizado un reporte para este número de programa.', extra_tags='error-message')
            else:
                # Obtener la instancia de Ventanilla correspondiente
                nprogi = get_object_or_404(Ventanilla, pk=nprogi_id)

                # Crear un nuevo objeto Inspeccion
                nueva_inspeccion = Inspeccion(
                    ID=IDi,
                    nprog=nprogi,
                    nombre=nombrei,
                    archivo_pdf=archivo_pdfi,
                )

                # Guardar la nueva inspección en la base de datos
                try:
                    nueva_inspeccion.save()
                    messages.success(request, '✅ Reporte guardado exitosamente.', extra_tags='success-message')
                except Exception as e:
                    messages.error(request, f'❌ Error al guardar los datos: {e}', extra_tags='error-message')

            return redirect('Crearinspec')  # Redirige a la página deseada después de guardar
    
    # Obtener todos los datos del formulario
    datos_formulario = {
        'regisin': request.POST.get('regisin', ''),
        'nombrein': request.POST.get('nombrein', ''),
        'archivo_pdfin': request.FILES.get('archivo_pdfin', None),
    }

    # Obtener la instancia de Ventanilla correspondiente
    ventanilla = Ventanilla.objects.get(pk=request.POST.get('progin'))

    # Agregar el valor de progin al contexto
    datos_formulario['progin'] = ventanilla.nprog

    return render(request, 'edicionInspec.html', {'datos_formulario': datos_formulario, 'ventanilla': ventanilla})

def obtener_siguiente_idins(request):
    # Obtener todos los IDs
    all_ids = Inspeccion.objects.values_list('ID', flat=True)

    # Extraer la parte numérica y ordenarla numéricamente
    numeric_ids = sorted(
        [int(re.search(r'\d+', id_str).group()) for id_str in all_ids if re.search(r'\d+', id_str)],
        reverse=True
    )

    print(f"Numeric IDs: {numeric_ids}")
    
    if not numeric_ids:
        siguiente_idins = 'REP-01'
    else:
        siguiente_id_number = numeric_ids[0] + 1
        siguiente_idins = f'REP-{str(siguiente_id_number).zfill(2)}'
    
    print(f"Siguiente ID: {siguiente_idins}")
    return JsonResponse({'siguiente_idins': siguiente_idins})
def eliminarInspec(request, codigo):
    inspeccion = get_object_or_404(Inspeccion, ID=codigo)
    
    if request.method == 'POST':
        try:
            # Obtén la ruta del archivo PDF
            archivo_pdf_path = os.path.join(settings.MEDIA_ROOT, str(inspeccion.archivo_pdf))
            
            # Elimina el archivo PDF si existe
            if os.path.exists(archivo_pdf_path):
                os.remove(archivo_pdf_path)
                
            
            inspeccion.delete()
            
            # Redirigir de vuelta a la página de inspecciones después de eliminar
            return redirect('inspecciones')  
        
        except Exception as e:
            # Manejo de errores si algo sale mal al eliminar
            print(f"Error al eliminar inspección: {e}")
            
        
    # Si la solicitud no es POST, simplemente renderiza la página de confirmación de eliminación
    return render(request, 'inspecciones.html', {'inspeccion': inspeccion})

def edicionReport(request, codigo):
    reporte = Inspeccion.objects.get(ID=codigo)
    return render(request, "editarReport.html", {"inspeccion": reporte})
def editarReport(request, codigo):
    if request.method == 'POST':
        nombrer = request.POST.get('nombrere')
        archivo_pdfr = request.FILES.get('archivo_pdfre')

        try:
            reporte = Inspeccion.objects.get(ID=codigo)
            reporte.nombre = nombrer

            # Manejo del archivo PDF
            if archivo_pdfr:
                # Eliminar el archivo anterior si existe
                if reporte.archivo_pdf and os.path.isfile(reporte.archivo_pdf.path):
                    os.remove(reporte.archivo_pdf.path)
                reporte.archivo_pdf = archivo_pdfr
            
            reporte.save()
            messages.success(request, '✅ ¡Reporte actualizado!', extra_tags='success-message')
            return redirect('Inspeccion')
        except Inspeccion.DoesNotExist:
            messages.error(request, 'El reporte no existe')
            return redirect('Inspeccion')
    else:
        messages.error(request, 'La solicitud no es válida')
        return redirect('Inspeccion')
    
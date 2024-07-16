from django.shortcuts import render, redirect
from inspeccion.models import Inspeccion
from django.contrib import messages
from django.shortcuts import render, redirect
from django.shortcuts import get_object_or_404, redirect
from django.http import JsonResponse
from django.views.decorators.http import require_GET



def inspeccion(request):
    if request.method == 'POST':
        nprogv = request.POST.get('prog')  
        clave_catastralv = request.POST.get('clavera')
        nombrev = request.POST.get('nombre')
        manzanav = request.POST.get('manzana')
        lotev = request.POST.get('lote')
        callev = request.POST.get('calle')
        barrio_coloniav = request.POST.get('barrio')
        municipiov = request.POST.get('municipio')
        fechav = request.POST.get('fecha')
        motivov = request.POST.get('motivo')
        
        # Crear un nuevo objeto Inspeccion y guardar en la base de datos
        inspeccion_nueva = Inspeccion(
            nprog=nprogv,
            clave_catastral=clave_catastralv,
            nombre=nombrev,
            manzana=manzanav,
            lote=lotev,
            calle=callev,
            barrio_colonia=barrio_coloniav,
            municipio=municipiov,
            fecha=fechav,
            motivo=motivov,
        )
        inspeccion_nueva.save()
        messages.success(request, '✅ Datos guardados exitosamente.', extra_tags='success-message')
        return redirect('Inspeccion')
     # Mantener los datos del formulario ingresados por el usuario
    datos_formulario = {
        'prog': request.POST.get('prog', ''),
        'clavera': request.POST.get('clavera', ''),
        'nombre': request.POST.get('nombre', ''),
        'manzana': request.POST.get('manzana', ''),
        'lote': request.POST.get('lote', ''),
        'calle': request.POST.get('calle', ''),
        'barrio': request.POST.get('barrio', ''),
        'municipio': request.POST.get('municipio', ''),
        'fecha': request.POST.get('fecha', ''),
        'motivo': request.POST.get('motivo', ''),
    }
    
    return render(request, 'inspeccion.html', {'datos_formulario': datos_formulario})
@require_GET
def obtener_siguiente_id(request):
    try:
        ultimo_registro = Inspeccion.objects.latest('nprog')
        siguiente_id = int(ultimo_registro.nprog) + 1  # Suponiendo que `nprog` es numérico
    except Inspeccion.DoesNotExist:
        siguiente_id = 1  # Si no hay registros, el siguiente ID es 1
    return JsonResponse({'siguiente_id': siguiente_id})







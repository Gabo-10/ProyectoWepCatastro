from django.shortcuts import render, redirect
from ventanilla.models import Ventanilla
from django.contrib import messages
from django.shortcuts import render, redirect
from django.shortcuts import get_object_or_404, redirect
from django.http import JsonResponse
from django.views.decorators.http import require_GET



def ventanilla(request):
    if request.method == 'POST':
        # Obtener los datos del formulario
        nprogv = request.POST.get('prog')
        clave_catastralv = request.POST.get('clavera')
        nombrev = request.POST.get('nombre')
        curpv = request.POST.get('curp')
        manzanav = request.POST.get('manzana')
        lotev = request.POST.get('lote')
        callev = request.POST.get('calle')
        barrio_coloniav = request.POST.get('barrio')
        entidadv = request.POST.get('tentidad')
        municipiov = request.POST.get('municipio')
        tramitev = request.POST.get('tramite')
        fechav = request.POST.get('fecha')
        foliov = request.POST.get('folio')
        recibov = request.POST.get('recibo')
        importev = request.POST.get('importe')
        revisov = request.POST.get('treviso')
        motivov = request.POST.get('motivo')
        solicitud_servicio_catastralv = request.POST.get('soliservi')
        superficie_terrenov = request.POST.get('terreno')
        superficie_construccion_resultantev = request.POST.get('construc')
        fecha_elaboracionv = request.POST.get('elaboracion')
        observaciones_atencionv = request.POST.get('atencion')
        hora_recepcionv = request.POST.get('hora')
        pagov = request.POST.get('pago')
        extrasv = request.POST.get('extras')

                # Verificar que el campo nprog no esté vacío
        if not nprogv:
            messages.error(request, '❌ Por favor, rellene el campo N°PROG.', extra_tags='error-message')
            return redirect('Ventanilla')

        # Crear un nuevo objeto Ventanilla y guardar en la base de datos
        ventanilla_nueva = Ventanilla(
            nprog=nprogv,
            clave_catastral=clave_catastralv,
            nombre=nombrev,
            curp=curpv,
            manzana=manzanav,
            lote=lotev,
            calle=callev,
            barrio_colonia=barrio_coloniav,
            entidad=entidadv,
            municipio=municipiov,
            tramite=tramitev,
            fecha=fechav,
            folio=foliov,
            recibo=recibov,
            importe=importev,
            reviso=revisov,
            motivo=motivov,
            solicitud_servicio_catastral=solicitud_servicio_catastralv,
            superficie_terreno=superficie_terrenov,
            superficie_construccion_resultante=superficie_construccion_resultantev,
            fecha_elaboracion=fecha_elaboracionv,
            observaciones_atencion=observaciones_atencionv,
            hora_recepcion=hora_recepcionv,
            pago=pagov,
            extras=extrasv,
        )
        ventanilla_nueva.save()
        messages.success(request, '✅ Datos guardados exitosamente.', extra_tags='success-message')
        return redirect('Ventanilla')  # Redirecciona a la misma página o a donde sea necesario

    # Mantener los datos del formulario ingresados por el usuario
    datos_formulario = {
        'prog': request.POST.get('prog', ''),
        'clavera': request.POST.get('clavera', ''),
        'nombre': request.POST.get('nombre', ''),
        'curp': request.POST.get('curp', ''),
        'manzana': request.POST.get('manzana', ''),
        'lote': request.POST.get('lote', ''),
        'calle': request.POST.get('calle', ''),
        'barrio': request.POST.get('barrio', ''),
        'tentidad': request.POST.get('tentidad', ''),
        'municipio': request.POST.get('municipio', ''),
        'tramite': request.POST.get('tramite', ''),
        'fecha': request.POST.get('fecha', ''),
        'folio': request.POST.get('folio', ''),
        'recibo': request.POST.get('recibo', ''),
        'importe': request.POST.get('importe', ''),
        'treviso': request.POST.get('treviso', ''),
        'motivo': request.POST.get('motivo', ''),
        'soliservi': request.POST.get('soliservi', ''),
        'terreno': request.POST.get('terreno', ''),
        'construc': request.POST.get('construc', ''),
        'elaboracion': request.POST.get('elaboracion', ''),
        'atencion': request.POST.get('atencion', ''),
        'hora': request.POST.get('hora', ''),
        'pago': request.POST.get('pago', ''),
        'extras': request.POST.get('extras', ''),
    }

    return render(request, 'Registrar_Ven.html', {'datos_formulario': datos_formulario})

@require_GET
def obtener_siguiente_id(request):
    try:
        ultimo_registro = Ventanilla.objects.latest('nprog')
        siguiente_id = int(ultimo_registro.nprog) + 1  # Suponiendo que `nprog` es numérico
    except Ventanilla.DoesNotExist:
        siguiente_id = 1  # Si no hay registros, el siguiente ID es 1
    return JsonResponse({'siguiente_id': siguiente_id})
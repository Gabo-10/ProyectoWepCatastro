from django.shortcuts import render, redirect
from ventanilla.models import Ventanilla
from django.contrib import messages
from django.shortcuts import render, redirect
from django.shortcuts import get_object_or_404, redirect
from django.http import JsonResponse
from django.views.decorators.http import require_GET
from rest_framework.views import APIView
import re
from django.urls import reverse
import json
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Q
from vitacora.models import Vitacora
from ProyectoWeb.decorators import require_authentication
from django.utils.decorators import method_decorator

@require_authentication(role='user')
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
        observaciones_atencionv = request.POST.get('atencion')
        hora_recepcionv = request.POST.get('hora')
        pagov = request.POST.get('pago')
        extrasv = request.POST.get('extras')

        # Verificar que el campo nprog no esté vacío
        if not nprogv:
            messages.error(request, '❌ Por favor, rellene los campos restantes con el boton "Preparar".', extra_tags='error-message')
            # Mantener los datos del formulario en caso de error
            datos_formulario = {
                'prog': nprogv,
                'clavera': clave_catastralv,
                'nombre': nombrev,
                'curp': curpv,
                'manzana': manzanav,
                'lote': lotev,
                'calle': callev,
                'barrio': barrio_coloniav,
                'tentidad': entidadv,
                'municipio': municipiov,
                'fecha': fechav,
                'folio': foliov,
                'recibo': recibov,
                'importe': importev,
                'atencion': observaciones_atencionv,
                'hora': hora_recepcionv,
                'pago': pagov,
                'extras': extrasv,
            }
            return render(request, 'Registrar_Ven.html', {'datos_formulario': datos_formulario})

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
            observaciones_atencion=observaciones_atencionv,
            hora_recepcion=hora_recepcionv,
            pago=pagov,
            extras=extrasv,
        )
        ventanilla_nueva.save()
        messages.success(request, '✅ Datos guardados exitosamente.', extra_tags='success-message')
        return redirect('Ventanilla')  # Redirecciona a la misma página o a donde sea necesario

    # Manejar el caso GET y renderizar el formulario vacío
    datos_formulario = {
        'prog': '',
        'clavera': '',
        'nombre': '',
        'curp': '',
        'manzana': '',
        'lote': '',
        'calle': '',
        'barrio': '',
        'entidad': '',
        'municipio': '',
        'fecha': '',
        'folio': '',
        'recibo': '',
        'importe': '',
        'treviso': '',
        'motivo': '',
        'soliservi': '',
        'terreno': '',
        'construc': '',
        'elaboracion': '',
        'atencion': '',
        'hora': '',
        'pago': '',
        'extras': '',
    }

    return render(request, 'Registrar_Ven.html', {'datos_formulario': datos_formulario})
@require_authentication(role='user')
@require_GET
def obtener_siguiente_id(request):
    try:
        ultimo_registro = Ventanilla.objects.latest('nprog')
        siguiente_id = int(ultimo_registro.nprog) + 1  # Suponiendo que `nprog` es numérico
    except Ventanilla.DoesNotExist:
        siguiente_id = 1  # Si no hay registros, el siguiente ID es 1
    return JsonResponse({'siguiente_id': siguiente_id})
@method_decorator(require_authentication(role='user'), name='dispatch')
class Editorven(APIView):    
    template_name="Veneditor.html"
    def get(self, request):
        ventanilla = Ventanilla.objects.all()
        return render(request, self.template_name, {'ventanilla': ventanilla})
@require_authentication(role='user')
def edicionVenta(request, codigo):
    ventanilla = Ventanilla.objects.get(nprog=codigo)
    return render(request, "Editar_Ven.html", {"ventanilla": ventanilla})
@require_authentication(role='user')
def editarVenta(request, codigo):
    if request.method == 'POST':
        claveraev = request.POST.get('claveraa')
        nombreev = request.POST.get('nombree')
        curpev = request.POST.get('curpp')
        manzanaev = request.POST.get('manzanaa')
        loteev = request.POST.get('lotee')
        calleev = request.POST.get('callee')
        barrioev = request.POST.get('barrioo')
        entidadev = request.POST.get('tentidadd')
        municipioev = request.POST.get('municipioo')
        tramiteev = request.POST.get('tramitee')
        fechaev = request.POST.get('fechaa')
        folioev = request.POST.get('folioo')
        reciboev = request.POST.get('reciboo')
        importeev = request.POST.get('importee')
        revisoev = request.POST.get('trevisoo')
        motivoev = request.POST.get('motivoo')
        soliserviev = request.POST.get('soliservii')
        terrenoev = request.POST.get('terrenoo')
        construcev = request.POST.get('construcc')
        elaboracionev= request.POST.get('elaboracionn')
        atencionev = request.POST.get('atencionn')
        horaev = request.POST.get('horaa')
        pagoev = request.POST.get('pagoo')
        extrasev = request.POST.get('extrass')

        try:
            ediven = Ventanilla.objects.get(nprog=codigo)
            ediven.clave_catastral = claveraev
            ediven.nombre = nombreev
            ediven.curp =  curpev
            ediven.manzana = manzanaev
            ediven.lote = loteev
            ediven.calle = calleev
            ediven.barrio_colonia = barrioev
            ediven.entidad = entidadev
            ediven.municipio = municipioev
            ediven.tramite = tramiteev
            ediven.fecha = fechaev 
            ediven.folio = folioev
            ediven.recibo = reciboev 
            ediven.importe = importeev 
            ediven.reviso = revisoev 
            ediven.motivo = motivoev 
            ediven.solicitud_servicio_catastral = soliserviev
            ediven.superficie_terreno = terrenoev 
            ediven.superficie_construccion_resultante = construcev 
            ediven.fecha_elaboracion = elaboracionev 
            ediven.observaciones_atencion = atencionev 
            ediven.hora_recepcion = horaev 
            ediven.pago = pagoev 
            ediven.extras = extrasev 
            ediven.save()
            messages.success(request, '✅ ¡Datos del registro actualizado!', extra_tags='success-messages')
            return redirect('editorven')
        except Ventanilla.DoesNotExist:
            messages.error(request, 'El Registro no existe')
            return redirect('editorven')  # O redirigir a donde sea apropiado en tu aplicación
    else:
        # Manejar casos donde no es una solicitud POST
        messages.error(request, 'La solicitud no es válida')
        return redirect('editorven')  # O redirigir a donde sea apropiado en tu aplicación
@require_authentication(role='user')
def eliminarVenta(request, codigo):
    ventanilla = get_object_or_404(Ventanilla, nprog=codigo)

    if request.method == 'GET':
        # Verificar si hay registros asociados
        vitacora_exists = Vitacora.objects.filter(folio=ventanilla).exists()
        if vitacora_exists:
            return JsonResponse({'success': False, 'message': 'No se puede eliminar el registro porque tiene registros asociados en el área de Bitácora.'})
        
        # Si no hay registros asociados, indicar que se puede eliminar
        return JsonResponse({'success': True})

    if request.method == 'POST':
        # Verificar si hay registros asociados antes de eliminar
        vitacora_exists_exists = Vitacora.objects.filter(folio=ventanilla).exists()
        if vitacora_exists_exists:
            return JsonResponse({'success': False, 'message': 'No se puede eliminar el registro porque tiene registros asociados en las demas áreas.'})

        # Eliminar el registro
        ventanilla.delete()
        return JsonResponse({'success': True, 'message': '✅ El registro ha sido eliminado correctamente.'})
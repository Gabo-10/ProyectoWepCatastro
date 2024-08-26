from django.shortcuts import render, redirect
from .forms import FormularioDireccion
from django.core.mail import EmailMessage
from ProyectoWeb.decorators import require_authentication
from django.utils.decorators import method_decorator



# Create your views here.
@require_authentication(role='user')
def direccion(request):
    formulario_direccion=FormularioDireccion()
    
    if request.method=="POST":
        formulario_direccion=FormularioDireccion(data=request.POST)
        if formulario_direccion.is_valid():
            nombre=request.POST.get("nombre")
            email=request.POST.get("email")
            contenido=request.POST.get("contenido")
            
            email=EmailMessage("Mensaje desde Django", "El usuario con nombre {} con la dirección {} esbribe lo siguiente:\n\n {}".format(nombre, email, contenido),
                               "",["mlg.t.8020@gmail.com"],reply_to=[email])
            
            try:
                email.send()
            
                return redirect("/direccion/?valido")
            except:
                return redirect("/direccion/?novalido")
    
    return render(request, "direccion/direccion.html", {'miFormulario':formulario_direccion})
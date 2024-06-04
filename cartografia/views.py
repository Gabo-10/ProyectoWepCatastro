from django.shortcuts import render, redirect
from .forms import FormularioCartografia
from django.core.mail import EmailMessage


# Create your views here.

def cartografia(request):
    formulario_cartografia=FormularioCartografia()
    
    if request.method=="POST":
        formulario_cartografia=FormularioCartografia(data=request.POST)
        if formulario_cartografia.is_valid():
            nombre=request.POST.get("nombre")
            email=request.POST.get("email")
            contenido=request.POST.get("contenido")
            
            email=EmailMessage("Mensaje desde Django", "El usuario con nombre {} con la dirección {} esbribe lo siguiente:\n\n {}".format(nombre, email, contenido),
                               "",["mlg.t.8020@gmail.com"],reply_to=[email])
            
            try:
                email.send()
            
                return redirect("/cartografia/?valido")
            except:
                return redirect("/cartografia/?novalido")
    
    return render(request, "cartografia/cartografia.html", {'miFormulario':formulario_cartografia})
from django.shortcuts import render, redirect
from .forms import FormularioVentana
from django.core.mail import EmailMessage


# Create your views here.

def ventanilla(request):
    formulario_ventanilla=FormularioVentana()
    
    if request.method=="POST":
        formulario_ventanilla=FormularioVentana(data=request.POST)
        if formulario_ventanilla.is_valid():
            nombre=request.POST.get("nombre")
            email=request.POST.get("email")
            contenido=request.POST.get("contenido")
            
            email=EmailMessage("Mensaje desde Django", "El usuario con nombre {} con la dirección {} esbribe lo siguiente:\n\n {}".format(nombre, email, contenido),
                               "",["mlg.t.8020@gmail.com"],reply_to=[email])
            
            try:
                email.send()
            
                return redirect("/ventanilla/?valido")
            except:
                return redirect("/ventanilla/?novalido")
    
    return render(request, "ventanilla/ventanilla.html", {'miFormulario':formulario_ventanilla})  
        
from django.contrib import admin
from .models import Direccion

# Register your models here.

class DireccionAdmin(admin.ModelAdmin):
    
    readonly_fields=('created','updated')

admin.site.register(Direccion, DireccionAdmin)
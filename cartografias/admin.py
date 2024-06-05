from django.contrib import admin
from .models import Cartografia

# Register your models here.

class CartografiaAdmin(admin.ModelAdmin):
    
    readonly_fields=('created','updated')

admin.site.register(Cartografia, CartografiaAdmin)
from django.db import models
from django.contrib.auth.models import User

class Inspeccion(models.Model):
    nprog = models.AutoField(primary_key=True)  # Cambiar a AutoField para que sea autoincremental
    clave_catastral = models.CharField(max_length=150)  
    nombre = models.CharField(max_length=150)  
    manzana = models.CharField(max_length=150)  
    lote = models.CharField(max_length=150)  
    calle = models.CharField(max_length=150)  
    barrio_colonia = models.CharField(max_length=150)  
    municipio = models.CharField(max_length=25)
    fecha = models.CharField(max_length=25)
    motivo = models.CharField(max_length=150)
    
    class Meta:
        db_table = 'instpeccion'
    


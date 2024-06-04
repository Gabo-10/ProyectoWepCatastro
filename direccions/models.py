from django.db import models


# Create your models here.

class Direccion(models.Model):
    titulo=models.CharField(max_length=50)
    contenido=models.CharField(max_length=50)
    imagen=models.ImageField(upload_to='direccions')
    created=models.DateTimeField(auto_now_add=True)
    updated=models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name='direccion'
        verbose_name_plural='direccions'
        
    def __str__(self):
        return self.titulo
    

from django.db import models


# Create your models here.

class Cartografia(models.Model):
    titulo=models.CharField(max_length=50)
    contenido=models.CharField(max_length=50)
    imagen=models.ImageField(upload_to='cartografias')
    created=models.DateTimeField(auto_now_add=True)
    updated=models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name='cartografia'
        verbose_name_plural='cartografias'
        
    def __str__(self):
        return self.titulo
    

from django.db import models
from django.contrib.auth.models import AbstractUser
from django import forms



class Usuarios(models.Model):
    idUsuarios = models.AutoField(primary_key=True, db_column='id')
    nombresu = models.CharField(max_length=100, default='', db_column='nombres')
    apellidosu = models.CharField(max_length=100, default='', db_column='apellidos' )
    usuariou = models.CharField(max_length=100, unique=True, default='', db_column='usuario')
    contraseñau = models.CharField(max_length=100, default='',db_column='contrasena')
    is_superUser = models.BooleanField(default=False, db_column='is_superUser')

    class Meta:
        db_table='usuarios'
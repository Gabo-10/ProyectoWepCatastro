from django.db import models
from ventanilla.models import Ventanilla  # Asegúrate de importar el modelo adecuado

class Vitacora(models.Model):
    ID_PREFIX = 'VIT-'  # Prefijo deseado para el ID
    idvit = models.CharField(max_length=20, unique=True)
    folio = models.ForeignKey(Ventanilla, on_delete=models.CASCADE, to_field='folio')
    nombre_propietario = models.CharField(max_length=150)
    fecha_revision = models.CharField(max_length=25)
    carpeta = models.CharField(max_length=50)
    area = models.CharField(max_length=25)
    folio_manifestacion = models.CharField(max_length=50)
    dia_que_sale = models.CharField(max_length=25)
    plano_manzanero = models.FileField(upload_to='vitacora/')
    verificacion_linderos = models.CharField(max_length=150)
    tipo_captura = models.CharField(max_length=50)
    clave_catastral = models.CharField(max_length=25)
    costo_traslado = models.CharField(max_length=25)
    observacion = models.CharField(max_length=150)

    class Meta:
        db_table = 'vitacora'


    def save(self, *args, **kwargs):
        if not self.ID_vitacora or not self.ID_vitacora.startswith(self.ID_PREFIX):
            last_id = Vitacora.objects.order_by('-idvit').first()
            if not last_id or not last_id.ID_vitacora:
                new_id_number = 1
            else:
                last_id_number = int(last_id.ID_vitacora.split(self.ID_PREFIX)[-1])
                new_id_number = last_id_number + 1
            self.ID_vitacora = f'{self.ID_PREFIX}{new_id_number}'

        super(Vitacora, self).save(*args, **kwargs)


from django.db import models
from ventanilla.models import Ventanilla  # Asegúrate de importar el modelo adecuado

class Vitacora(models.Model):
    ID_PREFIX = 'BIT-'  # Prefijo deseado para el ID
    idvit = models.CharField(max_length=20, primary_key=True)
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
    estado = models.CharField(
        max_length=20, 
        choices=[
            ('pendiente', 'Pendiente'),
            ('aprobado', 'Aprobado'),
            ('desaprobado', 'Desaprobado')
        ], 
        default='Pendiente'
    )

    class Meta:
        db_table = 'vitacora'

    def save(self, *args, **kwargs):
        if not self.idvit or not self.idvit.startswith(self.ID_PREFIX):
            last_id = Vitacora.objects.order_by('-idvit').first()
            if last_id is None or last_id.idvit is None:
                new_id_number = 1
            else:
                last_id_number = int(last_id.idvit.split(self.ID_PREFIX)[-1])
                new_id_number = last_id_number + 1
            self.idvit = f'{self.ID_PREFIX}{new_id_number}'

        super().save(*args, **kwargs)
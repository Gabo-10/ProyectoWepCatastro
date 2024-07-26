from ventanilla.models import Ventanilla
from django.db import models

class Inspeccion(models.Model):
    id_prefix = 'REP-'  # Prefijo deseado para el ID
    ID = models.CharField(max_length=11, primary_key=True , unique=True)
    nprog = models.ForeignKey(Ventanilla, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=255)
    archivo_pdf = models.FileField(upload_to='media/')


    class Meta:
        db_table = 'inspeccion'

    def save(self, *args, **kwargs):
        if self.ID is None or not self.ID.startswith(self.id_prefix):
            last_id = Inspeccion.objects.order_by('-ID').first()
            if last_id is None or last_id.ID is None:
                new_id_number = 1
            else:
                last_id_number = int(last_id.ID.split(self.id_prefix)[-1])
                new_id_number = last_id_number + 1
            self.ID = f'{self.id_prefix}{new_id_number}'

        super().save(*args, **kwargs)
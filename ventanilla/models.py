from django.db import models

class Ventanilla(models.Model):
    nprog = models.AutoField(primary_key=True)  # Cambiar a AutoField para que sea autoincremental
    clave_catastral = models.CharField(max_length=150)  
    nombre = models.CharField(max_length=150)  
    curp = models.CharField(max_length=25)  
    manzana = models.CharField(max_length=150)  
    lote = models.CharField(max_length=150)  
    calle = models.CharField(max_length=150)  
    barrio_colonia = models.CharField(max_length=150)  
    entidad = models.CharField(max_length=150)  
    municipio = models.CharField(max_length=25)  
    cert_clave = models.CharField(max_length=150)  
    cert_plano_mz = models.CharField(max_length=150)  
    levantamiento_topo = models.CharField(max_length=150)  
    verificacion_linderos = models.CharField(max_length=150)  
    const_ident_catastral = models.CharField(max_length=150)  
    ccvc = models.CharField(max_length=150) 
    fecha = models.CharField(max_length=25)  
    folio = models.CharField(max_length=150)  
    recibo = models.CharField(max_length=150)  
    importe = models.CharField(max_length=25)  
    reviso = models.CharField(max_length=150)  
    motivo = models.CharField(max_length=150)  
    solicitud_servicio_catastral = models.CharField(max_length=150) 
    superficie_terreno = models.CharField(max_length=150)  
    superficie_construccion_resultante = models.CharField(max_length=150)  
    fecha_elaboracion = models.CharField(max_length=25)  
    observaciones_atencion = models.CharField(max_length=25)  
    hora_recepcion = models.CharField(max_length=25)  
    pago = models.CharField(max_length=25)  
    extras = models.CharField(max_length=150)  

    class Meta:
        db_table = 'ventanilla'

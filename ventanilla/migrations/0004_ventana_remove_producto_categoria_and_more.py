# Generated by Django 4.2.10 on 2024-06-06 01:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ventanilla', '0003_rename_pruducto_producto'),
    ]

    operations = [
        migrations.CreateModel(
            name='ventana',
            fields=[
                ('n_prog', models.IntegerField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=20)),
                ('manzana', models.IntegerField()),
                ('calle', models.CharField(max_length=20)),
                ('entidad', models.CharField(max_length=20)),
                ('cert_clave', models.CharField(max_length=20)),
                ('levantameiento_topo', models.CharField(max_length=20)),
                ('const_de_ident_catastral', models.CharField(max_length=20)),
                ('fecha', models.DateField()),
                ('n_recibo', models.IntegerField()),
                ('reviso', models.CharField(max_length=20)),
                ('solicitud_de_servicio_catastral', models.CharField(max_length=20)),
                ('superficie_construccion_resultante', models.CharField(max_length=20)),
                ('observaciones', models.CharField(max_length=20)),
                ('pago', models.CharField(max_length=20)),
                ('clave_catastral', models.IntegerField()),
                ('curp', models.IntegerField()),
                ('lote', models.IntegerField()),
                ('barrio_o_colonia', models.CharField(max_length=20)),
                ('municipio', models.CharField(max_length=20)),
                ('cert_de_plano_mz', models.CharField(max_length=20)),
                ('verificacion_de_linderos', models.CharField(max_length=20)),
                ('c_c_v_c', models.CharField(max_length=20)),
                ('folio', models.IntegerField()),
                ('importe', models.CharField(max_length=20)),
                ('motivo', models.CharField(max_length=20)),
                ('superficie_de_terreno', models.IntegerField()),
                ('fecha_elaboracion', models.DateField()),
                ('hora_de_recepcion', models.DateField()),
                ('extras', models.CharField(max_length=20)),
            ],
        ),
        migrations.RemoveField(
            model_name='producto',
            name='categoria',
        ),
        migrations.DeleteModel(
            name='CategoriaProd',
        ),
        migrations.DeleteModel(
            name='Producto',
        ),
    ]

# Generated by Django 3.2.4 on 2024-07-26 04:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vitacora', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vitacora',
            name='area',
            field=models.CharField(max_length=25),
        ),
        migrations.AlterField(
            model_name='vitacora',
            name='carpeta',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='vitacora',
            name='clave_catastral',
            field=models.CharField(max_length=25),
        ),
        migrations.AlterField(
            model_name='vitacora',
            name='costo_traslado',
            field=models.CharField(max_length=25),
        ),
        migrations.AlterField(
            model_name='vitacora',
            name='dia_que_sale',
            field=models.CharField(max_length=25),
        ),
        migrations.AlterField(
            model_name='vitacora',
            name='fecha_revision',
            field=models.CharField(max_length=25),
        ),
        migrations.AlterField(
            model_name='vitacora',
            name='folio_manifestacion',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='vitacora',
            name='idvit',
            field=models.CharField(max_length=20, unique=True),
        ),
        migrations.AlterField(
            model_name='vitacora',
            name='nombre_propietario',
            field=models.CharField(max_length=150),
        ),
        migrations.AlterField(
            model_name='vitacora',
            name='observacion',
            field=models.CharField(max_length=150),
        ),
        migrations.AlterField(
            model_name='vitacora',
            name='tipo_captura',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='vitacora',
            name='verificacion_linderos',
            field=models.CharField(max_length=150),
        ),
    ]

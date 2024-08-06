# Generated by Django 3.2.4 on 2024-07-31 19:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vitacora', '0004_vitacora_estado'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vitacora',
            name='estado',
            field=models.CharField(choices=[('pendiente', 'Pendiente'), ('aprobado', 'Aprobado'), ('desaprobado', 'Desaprobado')], default='Pendiente', max_length=20),
        ),
    ]
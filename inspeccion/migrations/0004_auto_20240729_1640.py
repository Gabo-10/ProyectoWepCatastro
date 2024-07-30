# Generated by Django 3.2.4 on 2024-07-29 22:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('vitacora', '0003_auto_20240726_1355'),
        ('inspeccion', '0003_alter_inspeccion_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='inspeccion',
            name='nprog',
        ),
        migrations.AddField(
            model_name='inspeccion',
            name='idvit',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='vitacora.vitacora'),
            preserve_default=False,
        ),
    ]
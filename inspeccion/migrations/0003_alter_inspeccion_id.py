# Generated by Django 3.2.4 on 2024-07-26 04:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inspeccion', '0002_alter_inspeccion_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='inspeccion',
            name='ID',
            field=models.CharField(max_length=11, primary_key=True, serialize=False, unique=True),
        ),
    ]
# Generated by Django 4.2.10 on 2024-06-04 02:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inspeccion', '0002_alter_post_categorias'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='imagen',
            field=models.ImageField(blank=True, null=True, upload_to='inspeccion'),
        ),
    ]

# Generated by Django 5.1.2 on 2024-11-04 16:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog_profil', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='publication',
            name='image',
            field=models.ImageField(upload_to='img/blog_images/'),
        ),
    ]

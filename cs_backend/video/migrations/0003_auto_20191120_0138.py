# Generated by Django 2.2.7 on 2019-11-20 01:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('video', '0002_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='title',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Video Title'),
        ),
    ]
# Generated by Django 2.2.7 on 2019-11-20 16:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('video', '0005_auto_20191120_1650'),
    ]

    operations = [
        migrations.AlterField(
            model_name='option',
            name='jump_to_video',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='Video Id'),
        ),
    ]
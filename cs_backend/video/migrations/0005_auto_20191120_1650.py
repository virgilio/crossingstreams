# Generated by Django 2.2.7 on 2019-11-20 16:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('video', '0004_option_jump_to_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='option',
            name='jump_to_video',
            field=models.CharField(max_length=50, null=True, verbose_name='Video Id'),
        ),
    ]

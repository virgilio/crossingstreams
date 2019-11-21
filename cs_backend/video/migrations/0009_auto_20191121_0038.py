# Generated by Django 2.2.7 on 2019-11-21 00:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('video', '0008_auto_20191120_1739'),
    ]

    operations = [
        migrations.DeleteModel(
            name='User',
        ),
        migrations.AddField(
            model_name='option',
            name='cyoa_video',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='reached_by', to='video.Video'),
        ),
        migrations.AddField(
            model_name='option',
            name='is_correct',
            field=models.BooleanField(default=False, verbose_name='Is correct'),
        ),
        migrations.AlterField(
            model_name='answer',
            name='answer',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='viewers', to='video.Option'),
        ),
        migrations.AlterField(
            model_name='option',
            name='action',
            field=models.CharField(choices=[('continue', 'Continue Video'), ('change_video', 'Change Video'), ('jump_to', 'Jump to Time'), ('change_cyoa_video', 'Change to CYOA Video')], max_length=20, verbose_name='Action'),
        ),
    ]

# Generated by Django 2.2.7 on 2019-11-17 19:18

import django.contrib.postgres.fields.jsonb
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='QuestionType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type_name', models.CharField(max_length=20, verbose_name='Type name')),
                ('type_extra_data', django.contrib.postgres.fields.jsonb.JSONField(blank=True, null=True, verbose_name='Extra Data')),
            ],
        ),
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('yt_video_id', models.CharField(max_length=50, verbose_name='Video Id')),
                ('video_options', django.contrib.postgres.fields.jsonb.JSONField(blank=True, null=True, verbose_name='Video Options')),
                ('custom_css', models.TextField(blank=True, null=True, verbose_name='Custom CSS')),
            ],
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question_text', models.TextField(blank=True, max_length=255, verbose_name='Question')),
                ('prompt_time', models.IntegerField(default=0, verbose_name='Stop')),
                ('question_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='question_types', to='video.QuestionType')),
                ('video', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='questions', to='video.Video')),
            ],
        ),
        migrations.CreateModel(
            name='Option',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('option_text', models.CharField(blank=True, max_length=255, verbose_name='Option')),
                ('option_extra_data', django.contrib.postgres.fields.jsonb.JSONField(blank=True, null=True, verbose_name='Extra Data')),
                ('action', models.CharField(max_length=20, verbose_name='Action')),
                ('question', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='options', to='video.Question')),
            ],
        ),
        migrations.CreateModel(
            name='Answer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('viewer_email', models.EmailField(max_length=254, verbose_name='Viewer E-mail')),
                ('viewer_tweet', models.CharField(max_length=140, verbose_name='Viewer Tweet')),
                ('answer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='viewers', to='video.Option')),
                ('question', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='answers', to='video.Question')),
            ],
        ),
    ]

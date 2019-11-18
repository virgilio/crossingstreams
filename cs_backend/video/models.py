from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.postgres import fields

from django.conf import settings

# Create your models here.
class Video(models.Model):
    yt_video_id = models.CharField(_('Video Id'), max_length=50)
    video_options = fields.JSONField(_('Video Options'), blank=True, null=True)
    custom_css = models.TextField(_('Custom CSS'), blank=True, null=True)
    video_extra_data = fields.JSONField(_('Extra Data'), blank=True, null=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='videos',
                             on_delete=models.CASCADE)
    duration = models.IntegerField(_('Video Duration'), default=0)
    title = models.CharField(_('Video Title'), blank=True, null=True, max_length=255)

    def __str__(self):
        return '{}: {}'.format(self.yt_video_id, self.title)

class QuestionType(models.Model):
    type_name = models.CharField(_('Type name'), max_length=20)
    type_extra_data = fields.JSONField(_('Extra Data'), blank=True, null=True)

    def __str__(self):
        return self.type_name

class Question(models.Model):
    question_text = models.TextField(_('Question'), blank=True, max_length=255)
    question_type = models.ForeignKey(QuestionType,
                                      related_name='question_types',
                                      on_delete=models.CASCADE)
    prompt_time = models.IntegerField(_('Stop'), default=0)
    video = models.ForeignKey(Video, related_name='questions',
                              on_delete=models.CASCADE)

    def __str__(self):
        return '{}: {}'.format(self.video.title, self.question_text[:50])

class Option(models.Model):
    option_text = models.CharField(_('Option'), max_length=255, blank=True)
    option_extra_data = fields.JSONField(_('Extra Data'), blank=True, null=True)
    question = models.ForeignKey(Question, related_name='options',
                                 on_delete=models.CASCADE)
    action = models.CharField(_('Action'), max_length=20)

    def __str__(self):
        return self.option_text

class Answer(models.Model):
    question = models.ForeignKey(Question, related_name='answers',
                                 on_delete=models.CASCADE)
    viewer_email = models.EmailField(_('Viewer E-mail'))
    viewer_tweet = models.CharField(_('Viewer Tweet'), max_length=140)
    answer = models.ForeignKey(Option, related_name='viewers',
                               on_delete=models.CASCADE)

    def __str__(self):
        return self.viewer_email

from django.db import models

# Create your models here.
from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.postgres import fields

from django.conf import settings

# Create your models here.
ACTIVITY_TYPES = (
    ('question', _('Question')),
    ('email', _('Get email')),
    ('twitter', _('Twitter share')),
)

class Video(models.Model):
    title = models.CharField(_('Video Title'), null=True, blank=True, max_length=255)
    yt_video_id = models.CharField(_('Video Id'), max_length=50)
    email = models.EmailField(_('User'))
    duration = models.IntegerField(_('Video Duration'), default=0)

    def __str__(self):
        return '{}: {}'.format(self.yt_video_id, self.title)

class Activity(models.Model):
    activity_text = models.TextField(_('Activity'), blank=True, max_length=140)
    activity_type = models.CharField(_('Type name'), max_length=20, choices=ACTIVITY_TYPES, default=ACTIVITY_TYPES[0][0])
    prompt_time = models.IntegerField(_('Stop'), default=0)
    video = models.ForeignKey(Video, related_name='activities', on_delete=models.CASCADE)

    def __str__(self):
        return '{}: {} at {}s'.format(self.activity_text[:50], self.video.title, self.prompt_time)

    class Meta:
        ordering = ['prompt_time']

OPTION_ACTIONS = (
    ('continue', _('Continue Video')),
    ('change_video', _('Change Video')),
    ('jump_to', _('Jump to Time')),
    ('change_cyoa_video', _('Change to CYOA Video')),
)
class Option(models.Model):
    option_text = models.CharField(_('Option'), max_length=140, blank=True)
    activity = models.ForeignKey(Activity, related_name='options', on_delete=models.CASCADE)
    action = models.CharField(_('Action'), max_length=20, choices=OPTION_ACTIONS)
    jump_to_video = models.CharField(_('Video Id'), max_length=50, null=True, blank=True)
    jump_to_time = models.IntegerField(_('Video time'), default=0)
    cyoa_video = models.ForeignKey(Video, related_name='reached_by', blank=False, on_delete=models.CASCADE, null=True)
    is_correct = models.BooleanField(_('Is correct'), default=False)

    def __str__(self):
        return '{}: {} - {}'.format(
            self.activity.video.title,
            self.activity.activity_text,
            self.option_text
        )


class Answer(models.Model):
    activity = models.ForeignKey(Activity, related_name='answers', on_delete=models.CASCADE)
    viewer_email = models.EmailField(_('Viewer E-mail'), null=True)
    viewer_tweet = models.CharField(_('Viewer Tweet'), max_length=140, null=True)
    answer = models.ForeignKey(Option, related_name='viewers', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.viewer_email

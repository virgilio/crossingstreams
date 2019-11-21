import os
from django.contrib.auth import get_user_model
from rest_framework import generics, viewsets

from .models import Video, Answer, Activity, ACTIVITY_TYPES, OPTION_ACTIONS, Option
from .serializers import VideoSerializer, ActivitySerializer, OptionSerializer, AnswerSerializer
from django.core.mail import EmailMessage
from django.template.loader import render_to_string


class VideoViewSet(viewsets.ModelViewSet):
    serializer_class = VideoSerializer
    queryset = Video.objects.all()

    def update(self, request, *args, **kwargs):
        video = self.get_object()
        request.data['email'] = video.email
        request.data['yt_video_id'] = video.yt_video_id
        return super().update(request, *args, **kwargs)

    def perform_create(self, serializer):
        serializer.save()
        body = render_to_string('new_video_email.html', {
            'id': serializer.data['id'],
            'uri': self.request.build_absolute_uri('/')
        })
        EmailMessage(
            'New Video at Crossing Streams ready to edit!',
            body,
            os.getenv('REPLY_TO', 'virgilio@crossingstreams.com'),
            [serializer.data['email'],],
            [],
            reply_to=[os.getenv('REPLY_TO', 'virgilio@crossingstreams.com')],
        ).send()

class ActivityViewSet(viewsets.ModelViewSet):
    serializer_class = ActivitySerializer
    queryset = Activity.objects.all()

    def perform_create(self, serializer):
        serializer.save()
        if serializer.data['activity_type'] == ACTIVITY_TYPES[0][0]:
            activity_option = Option.objects.create(
                option_text='',
                activity=Activity.objects.get(pk=serializer.data['id']),
                action=OPTION_ACTIONS[0][0]
            )
            activity_option.save()
            activity_option.id = None
            activity_option.save()


class OptionViewSet(viewsets.ModelViewSet):
    serializer_class = OptionSerializer
    queryset = Option.objects.all()

    def perform_create(self, serializer):
        serializer.save()
        print(serializer.data)
        # if serializer.data['activity_type'] == ACTIVITY_TYPES[0][3]:
            # activity = Activity.objects.get(serializer.data[''])


class AnswerViewSet(viewsets.ModelViewSet):
    serializer_class = AnswerSerializer
    queryset = Answer.objects.all()

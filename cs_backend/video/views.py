from django.contrib.auth import get_user_model
from rest_framework import generics, viewsets

from .models import Video, Answer, Question
from .serializers import VideoSerializer

User = get_user_model()

class VideoViewSet(viewsets.ModelViewSet):
    serializer_class = VideoSerializer
    queryset = Video.objects.all()
    filter_fields = ('yt_video_id', 'user__email', )

from rest_framework import serializers

from .models import Video, Activity, Answer, Option

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = '__all__'
class OptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Option
        fields = '__all__'

class ActivitySerializer(serializers.ModelSerializer):
    options = OptionSerializer(read_only=True, many=True)

    class Meta:
        model = Activity
        fields = '__all__'

class VideoSerializer(serializers.ModelSerializer):
    activities = ActivitySerializer(read_only=True, many=True)

    class Meta:
        model = Video
        fields = '__all__'

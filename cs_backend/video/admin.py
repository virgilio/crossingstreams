from django.contrib import admin

from .models import Video, Question, Answer, Option, QuestionType

admin.site.register(Video)
admin.site.register(Question)
admin.site.register(QuestionType)
admin.site.register(Answer)
admin.site.register(Option)
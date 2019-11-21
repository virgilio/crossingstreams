from rest_framework.routers import SimpleRouter
from django.conf.urls import url, include
from . import views

router = SimpleRouter()
router.register(r'video', views.VideoViewSet, base_name='videos')
router.register(r'activity', views.ActivityViewSet, base_name='activities')
router.register(r'option', views.OptionViewSet, base_name='options')
router.register(r'answer', views.OptionViewSet, base_name='answers')

app_name = 'video'
urlpatterns = [
    url(r'', include(router.urls)),
]

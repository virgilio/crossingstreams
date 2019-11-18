from rest_framework.routers import SimpleRouter
from django.conf.urls import url
from . import views

router = SimpleRouter()
router.register(r'', views.VideoViewSet, base_name='Videos')

app_name = 'video'
urlpatterns = []

urlpatterns.extend(router.urls)
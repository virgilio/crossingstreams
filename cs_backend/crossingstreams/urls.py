from django.conf.urls import include, url

from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^api/video/', include('video.urls', namespace='video')),
    url(r'^api/auth/', include('rest_auth.urls')),
]

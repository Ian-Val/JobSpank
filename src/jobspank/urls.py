from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('', include('landingpage.urls')),
    path('admin/', admin.site.urls),
    path('apptracker/', include('apptracker.urls')),
    path('resumegen/', include('resumegen.urls')),
    path('resources/', include('resources.urls')),
]

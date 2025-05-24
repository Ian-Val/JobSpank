from django.urls import path
from .views import resumegen

urlpatterns = [
    path('', resumegen, name='resumegen'),
]
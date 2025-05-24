from django.urls import path
from .views import app_tracker

urlpatterns = [
    path('', app_tracker, name='app_tracker'),
]
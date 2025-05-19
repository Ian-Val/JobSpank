from django.urls import path
from .views import new_lead, thank_you

urlpatterns = [
    path('', new_lead, name='new_lead'),
    path('thankyou', thank_you, name='thank_you'),
]
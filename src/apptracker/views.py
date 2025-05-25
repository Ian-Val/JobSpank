from django.shortcuts import render, HttpResponse, redirect
# from .forms import ApplicationForm
# from .models import Application

def app_tracker(request):
    return render(request, 'apptracker/apptracker.html')
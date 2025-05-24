from django.shortcuts import render, HttpResponse

def app_tracker(request):
    return render(request, "apptracker/apptracker.html")
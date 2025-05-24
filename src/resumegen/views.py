from django.shortcuts import render

# Create your views here.
def resumegen(request):
    return render(request, "resumegen/resume_gen.html")
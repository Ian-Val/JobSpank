from django.shortcuts import render, redirect
from django import forms
from .models import Lead

class LeadForm(forms.ModelForm):
    class Meta:
        model = Lead
        fields = ['email']

def new_lead(request):
    if request.method == 'POST':
        form = LeadForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('thank_you')  # Redirect to a thank you page
    else:
        form = LeadForm()
    return render(request, 'landingpage/landing.html', {'form': form})

def thank_you(request):
    return render(request, "global/thankyou.html")
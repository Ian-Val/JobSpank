from django import forms
from django.core.validators import validate_email
from .models import Lead

class LeadForm(forms.ModelForm):
    class Meta:
        model = Lead
        fields = ['email']

    def clean_email(self):
        email = self.cleaned_data.get('email')
        validate_email(email)  # Django's built-in email validation
        return email

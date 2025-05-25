from django.db import models
from django.conf import settings

# class Application(models.Model):
    
#     INACTIVE    = "INA"
#     APPLIED     = "APL"
#     INTERVIEWED = "INT"
#     OFFERED     = "OFR"
#     REJECTED    = "RJT"
#     STATUS_CHOICES = [
#         (INACTIVE,    "Inactive"),
#         (APPLIED,     "Applied"),
#         (INTERVIEWED, "Interviewed"),
#         (OFFERED,     "Offered"),
#         (REJECTED,    "Rejected")
#     ]
#     user = models.ForeignKey(
#         settings.AUTH_USER_MODEL,
#         on_delete=models.CASCADE,
#         related_name='applications'
#     )
#     company  = models.CharField(blank=True, null=False, max_length=200)
#     position = models.CharField(blank=True, null=False, max_length=200)
#     location = models.CharField(blank=True, null=False, max_length=200)
#     pay      = models.CharField(blank=True, null=False, max_length=200)
#     status   = models.CharField(blank=True, null=False, choices=STATUS_CHOICES, default=INACTIVE, max_length=3)
#     url      = models.URLField (blank=True, null=False, max_length=200)
#     notes    = models.TextField(blank=True, null=False)

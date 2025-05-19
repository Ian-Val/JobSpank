from django.db import models

class Lead(models.Model):
    email = models.CharField(max_length=256)
    def __str__(self):
        return self.email
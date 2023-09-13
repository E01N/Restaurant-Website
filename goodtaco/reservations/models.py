from django.db import models
from django.core.validators import MaxValueValidator

# Create your models here.
class Reservation(models.Model):
    name = models.CharField(max_length=60)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    date = models.DateField()
    time = models.TimeField()
    guests = models.CharField(max_length=20)

    def __str__(self):
        return f'{self.name} - {self.date} {self.time}'

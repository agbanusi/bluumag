from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class MyUser(AbstractUser):
    is_writer = models.BooleanField(default=False)
    phone = models.IntegerField(blank=True, default=0)
    gender = models.CharField(blank=True, max_length=15, default='')
    address = models.CharField(blank=True, max_length=1000, default='')
    birthday = models.DateField(blank=True, null=True)

from django.db import models
from django.contrib.auth.models import User,AbstractUser
from .managers import UserManager
from django.contrib.auth.signals import user_logged_in,user_logged_out
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.

class User(AbstractUser):
    username = None
    email = models.EmailField(unique=True)
    is_verified = models.BooleanField(default=False)
    otp = models.CharField(max_length=4,blank=True,null=True)
    # forgot_password_token = models.CharField(max_length=100,blank=True,null=True)
    # last_login = models.DateTimeField(blank=True,null=True)
    # last_logout = models.DateTimeField(blank=True,null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email

    def name(self):
        return self.first_name + " " + self.last_name

    objects = UserManager()

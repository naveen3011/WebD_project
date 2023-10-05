from django.core.mail import send_mail
from django.conf import settings
from .models import User
import random

def send_otp(email):
    otp = random.randint(1000,9999)
    subject = 'OTP for registration'
    message = f'Your OTP is {otp}'
    email_from = settings.EMAIL_HOST
    recipient_list = [email,]
    send_mail(subject,message,email_from,recipient_list)
    user_obj = User.objects.get(email=email)
    user_obj.otp = otp
    user_obj.save()


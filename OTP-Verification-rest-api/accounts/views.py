from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer,VerifySerializer
from .emails import send_otp
from .models import User
# Create your views here.

class RegisterApi(APIView):

    def post(self,request):
        try:
            data=request.data
            serializer=UserSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                send_otp(serializer.data['email'])
                return Response({
                    'status':200,
                    'message':'User Registered Successfully,check email',
                    'data':serializer.data
                })
            return Response({
            'status':400,
            'message':'User Registration Failed',
            'data':serializer.errors
        })
        except Exception as e:
            return Response({
                'status':400,
                'message':'User Registration Failed',
                'data':str(e)
            })


class VerifyApi(APIView):

    def post(self,request):
        try:
            data=request.data
            serializer = VerifySerializer(data=request.data)

            if serializer.is_valid():
                email = serializer.data['email']
                otp = serializer.data['otp']
                user = User.objects.filter(email=email)
                if not user.exists():
                    return Response({
                        'status':400,
                        'message':'User Verification unsuccessfully',
                        'data':'invalid email'
                    })
                if not user[0].otp == otp:
                    user.update(is_verified=True)
                    return Response({
                        'status':400,
                        'message':'User Verification unsuccessfully',
                        'data':'invalid otp'
                    })
                user = user.first()
                user.is_verified = True
                user.save()
                return Response({
                        'status':200,
                        'message':'User Verification successfully account created',
                        'data':{}
                    })

        except Exception as e:
            return Response({
                'status':400,
                'message':'User Verification Failed',
                'data':str(e)
            })
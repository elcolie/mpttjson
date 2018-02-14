
from django.conf.urls import url
from django.contrib import admin


   
from .views import (
    RiskListAPIView,
#    RiskDetailAPIView
    )
    

app_name="risk"
    
   
    
urlpatterns = [
    url(r'^$', RiskListAPIView.as_view(), name='list'),
#    url(r'^(?<id>\d+)/$', RiskDetailAPIView.as_view(), name='thread'),      #change the name thread
    ]





from django.conf.urls import url
from django.contrib import admin


   
from .views import (
    TreeListAPIView,
    RiskDetailAPIView,
    RiskListAPIView,
    )
    

app_name="risk"
    
   
    
urlpatterns = [
    url(r'^$', RiskListAPIView.as_view(), name='list'),
    url(r'^(?P<pk>\d+)/$', RiskDetailAPIView.as_view(), name='thread'),      #change the name thread
    url(r'^tree/$', TreeListAPIView.as_view(), name='tree'),

    ]




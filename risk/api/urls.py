
from django.conf.urls import url
from django.contrib import admin


   
from .views import (
    TreeListAPIView,
    RiskDetailAPIView,
    RiskListAPIView,
    )
    

app_name="risk"
    
   
    
urlpatterns = [
    url(r'^(?P<pk>\d+)/$', RiskDetailAPIView.as_view(), name='detail'),  
    url(r'^list/$', RiskListAPIView.as_view(), name='list'),
    url(r'^tree/$', TreeListAPIView.as_view(), name='tree'),

    ]




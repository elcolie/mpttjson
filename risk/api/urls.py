
from django.conf.urls import url
from django.contrib import admin


   
from .views import (
    RiskTreeListAPIView,
    )
    

app_name="risk"
    
   
urlpatterns = [

    #Simple list
#    url(r'^list/$', RiskListAPIView.as_view(), name='list'),

    url(r'^risktree/$', RiskTreeListAPIView.as_view(), name='risktree'),

    ]




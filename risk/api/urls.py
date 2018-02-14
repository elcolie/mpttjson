from django.conf.urls import url
from django.contrib import admin

from .views import (
    RiskListAPIView,
    )
    


    
app_name="risk"
    
    
urlpatterns = [
    url(r'^$', RiskListAPIView.as_view(), name='risk'),
    

]


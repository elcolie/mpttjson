
from django.conf.urls import url
from django.contrib import admin


   
from .views import (
    NestedSerializer,    
    NestedRecursiveAPIView,
    GenreListAPIView,
    )
    

app_name="risk"
    
   
urlpatterns = [

    #Simple list
    url(r'^list/$', GenreListAPIView.as_view(), name='list'),

    #Nested example
    url(r'^nested/$', NestedSerializer.as_view(), name='nested'),

    #Recursive package example
    url(r'^tree/$', NestedRecursiveAPIView.as_view(), name='tree'),


    ]




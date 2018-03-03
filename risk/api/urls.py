
from django.conf.urls import url
from django.contrib import admin


   
from .views import (
    NestedSerializer,
    TreeListAPIView,
    GenreListAPIView,
    Nested2Serializer,
    )
    

app_name="risk"
    
   
urlpatterns = [

    #Nested example
    url(r'^nested/$', NestedSerializer.as_view(), name='nested'),

    #Nested example2
    url(r'^nested2/$', Nested2Serializer.as_view(), name='nested2'),

    #Recursive package example
    url(r'^tree/$', TreeListAPIView.as_view(), name='tree'),

    #Simple list
    url(r'^list/$', GenreListAPIView.as_view(), name='list'),


    ]




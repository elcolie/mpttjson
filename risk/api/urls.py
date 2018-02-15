
from django.conf.urls import url
from django.contrib import admin


   
from .views import (
    TreeListAPIView,
#    RiskDetailAPIView,
#    RiskListAPIView,
    CategoryUniqueViewSet,
    Stack0,
    Stack1,
    Stack2,
    )
    

app_name="risk"
    
   
urlpatterns = [

    #Brasil example
    url(r'^brasil/$', CategoryUniqueViewSet.as_view(), name='brasil'),

    #Stack Overflow example 0
    url(r'^stack0/$', Stack0.as_view(), name='stack0'),

    #Stack Overflow example 1
    url(r'^stack1/$', Stack1.as_view(), name='stack1'),

    #Stack Overflow example 2
    url(r'^stack2/$', Stack2.as_view(), name='stack2'),

    #Recursive package example
    url(r'^tree2/$', TreeListAPIView.as_view(), name='tree2'),

    #Coding for entrepreneurs example
#    url(r'^tree1/$', RiskListAPIView.as_view(), name='tree1'),



    #Risk detail
#    url(r'^(?P<pk>\d+)/$', RiskDetailAPIView.as_view(), name='detail'),  

    ]




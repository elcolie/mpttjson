
from django.contrib import admin
from django.conf.urls import url, include

from django.urls import path, include

from risk import views


from django.views.generic import TemplateView
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets

import mptt_urls  #for breadcrumbs


#-----------LISTS & DATATABLES----

from risk import views    
from risk.views import *





# Serializers define the API representation.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'is_staff')


# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)


urlpatterns = [

    path('risk/', include('risk.urls', namespace='risk')),
    path('responses/', views.ResponsesListView.as_view(), name='responses'),
    url(r'^$', TemplateView.as_view(template_name='home.html')),
    url(r'^api/', include(router.urls)),
    url(r'^admin/', admin.site.urls),
    url(r'^api/risk/', include("risk.api.urls", namespace='risk-api')),

    #The following code injects the slug (path) into the url for the breadcrumbs
    url(r'^risk/(?P<path>.*)', mptt_urls.view(model='risk.models.Risk', view='risk.views.risk', slug_field='slug'), {'extra': ''}, name='risk'),

    url(r'^datatables_4$', ResponsesList.as_view(), name="datatables_4"),
    url(r'^responses_data/$', ResponsesListJson.as_view(), name="responses_list_json"),

    url(r'^responses/(?P<pk>\d+)/$', responses_detail, name='responses_detail'),
    url(r'^responses/new/$', responses_new, name='responses_new'),
    url(r'^responses/(?P<pk>\d+)/edit/$', responses_edit, name='responses_edit'),


    ]


from django.conf.urls import url, include
from django.contrib import admin
from risk import views


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')), 
    url(r'^api/', include("risk.api.urls", namespace='risk-api')) 
    ]

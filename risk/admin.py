from django.contrib import admin
from risk.models import Risk
from django_mptt_admin.admin import DjangoMpttAdmin




class RiskAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'parent')

admin.site.register(Risk, RiskAdmin)

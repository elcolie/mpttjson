from django.contrib import admin

from django_mptt_admin.admin import DjangoMpttAdmin

from risk.models import Risk, Responses



class RiskAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'parent')

admin.site.register(Risk, RiskAdmin)


class ResponsesAdmin(admin.ModelAdmin):
    list_display = ('id', 'risk', 'responsesCategory')

admin.site.register(Responses, ResponsesAdmin)




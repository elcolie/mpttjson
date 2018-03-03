from django.contrib import admin

from django_mptt_admin.admin import DjangoMpttAdmin

#from risk.models import Risk
from risk.models import Genre


class GenreAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'parent')

admin.site.register(Genre, GenreAdmin)


"""
class RiskAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'parent')

admin.site.register(Risk, RiskAdmin)
"""

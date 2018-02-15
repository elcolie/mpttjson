from django.contrib import admin

from django_mptt_admin.admin import DjangoMpttAdmin

from risk.models import Risk

from risk.models import Category

from risk.models import Category2


class RiskAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'parent')

admin.site.register(Risk, RiskAdmin)


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'parent')

admin.site.register(Category, CategoryAdmin)


class Category2Admin(admin.ModelAdmin):
    list_display = ('id', 'name', 'parent')

admin.site.register(Category2, Category2Admin)

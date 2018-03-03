from rest_framework import serializers
from rest_framework.serializers import ModelSerializer,  SerializerMethodField
from rest_framework_recursive.fields import RecursiveField                 #To find list of children
from mptt.models import MPTTModel, TreeForeignKey

from risk.models import Risk
from risk.models import Category
from risk.models import Genre


# A   Nested serializer example----------------------------------------

class RootSerializer(serializers.ModelSerializer):
    children = serializers.SerializerMethodField()
    
    def get_children(self, parent):
        queryset = parent.get_children()
        serialized_data = RootSerializer(queryset, many=True, read_only=True, context=self.context)
        return serialized_data.data
    
    class Meta:
        model = Category
        fields = ( 'name', 'children')


# B   Nested serializer ----------------------------------------

class TextField(serializers.Field):

    def to_representation(self, obj):
        ret = {
            "name": obj.name,
            "slug": obj.slug,
        }
        return ret

    def to_internal_value(self, data):
        ret = {
            "name": data["name"],
            "slug": data["slug"],
        }
        return ret

class Root2Serializer(serializers.ModelSerializer):
#    id = serializers.CharField()
    text = TextField(source='*')
    HTMLclass = serializers.CharField()
    collapsed = serializers.BooleanField()
    children = serializers.SerializerMethodField()
    
    def get_children(self, parent):
        queryset = parent.get_children()
        serialized_data = Root2Serializer(queryset, many=True, read_only=True, context=self.context)
        return serialized_data.data
    
    class Meta:
        model = Risk
        fields = ( 'text', 'HTMLclass', 'collapsed', 'children')



# C   Recursive example -------------------------------------------------------------------
# https://github.com/heywbj/django-rest-framework-recursive

class TextField(serializers.Field):

    def to_representation(self, obj):
        ret = {
            "name": obj.name,
            "slug": obj.slug,
        }
        return ret

    def to_internal_value(self, data):
        ret = {
            "name": data["name"],
            "slug": data["slug"],
        }
        return ret


class TreeSerializer(serializers.Serializer):
    text = TextField(source='*')
    HTMLclass = serializers.CharField()
    collapsed = serializers.BooleanField()
    children = serializers.ListField(child=RecursiveField())

    class Meta:
        model = Risk
        fields = ['text', 'HTMLclass', 'collapsed', 'children']



#  Simple list -----------------------------------------

class GenreSerializer(ModelSerializer):
    class Meta:
        model = Genre
        fields = ['id', 'name']


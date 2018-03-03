from rest_framework import serializers
from rest_framework.serializers import ModelSerializer,  SerializerMethodField
from rest_framework_recursive.fields import RecursiveField  #To find list of children

from risk.models import Risk

from mptt.models import MPTTModel, TreeForeignKey



#  Simple list -----------------------------------------

class RiskSerializer(ModelSerializer):
    class Meta:
        model = Risk
        fields = ['id', 'title']




# Nested serializer example----------------------------------------

class RootSerializer(serializers.ModelSerializer):
    children = serializers.SerializerMethodField()
    
    def get_children(self, parent):
        queryset = parent.get_children()
        serialized_data = RootSerializer(queryset, many=True, read_only=True, context=self.context)
        return serialized_data.data
    
    class Meta:
        model = Risk
        fields = ( 'title', 'children')



# Recursive example -------------------------------------------------------------------
# https://github.com/heywbj/django-rest-framework-recursive


# Class to produce link field in the format required by treant:

class Field_A(serializers.Field):

    def to_representation(self, obj):
        ret = {
            "name": obj.title,
#            "description": obj.description
        }
        return ret

    def to_internal_value(self, data):
        ret = {
            "title": data["name"],
#            "description": data["description"],
        }
        return ret

""" 
class Field_B(serializers.CharField):

    def to_representation(self, obj):
        ret = {
            "href": obj.get_path()                           
        }
        return ret

    def to_internal_value(self, data):
        ret = {
             "url": data["href"]   
        }
        return ret
"""

class RiskTreeSerializer(serializers.Serializer):
    text = Field_A(source='*')
#    link =Field_B(source='*')
#    url = serializers.CharField()
    HTMLclass = serializers.CharField()
    collapsed = serializers.BooleanField()                  #This field is required only for level 0 (false) and level 1 (true))
    children = serializers.ListField(child=RecursiveField())

    class Meta:
        model = Risk
        fields = [
        'text', 
        'link',
 #       'url', 
        'HTMLclass', 
  #      'collapsed', 
        'children']


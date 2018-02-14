from rest_framework import serializers
from rest_framework.serializers import ModelSerializer,  SerializerMethodField
from rest_framework_recursive.fields import RecursiveField                 #To find list of children


from risk.models import Risk
from mptt.models import MPTTModel, TreeForeignKey



# List of all risks (does not list children of children)
# https://www.youtube.com/watch?v=6cakSZCDmIc&list=PLEsfXFp6DpzTOcOVdZF-th7BS_GYGguAS&index=16


class RiskSerializer(ModelSerializer):
    class Meta:
        model = Risk
        fields = ['id', 'name', 'collapsed']




# CFE METHOD   --------------------------------------------------------------

# Nested serializer which lists children of children (or descendants)
# https://www.youtube.com/watch?v=1Ii5yZLS1Jc&list=PLEsfXFp6DpzTOcOVdZF-th7BS_GYGguAS&index=17

class RiskChildSerializer(ModelSerializer):
    class Meta:
        model = Risk
        fields = ['id', 'name']


class RiskDetailSerializer(ModelSerializer):
    subrisks = SerializerMethodField()
    class Meta:
        model = Risk
        fields = [
            'id',
            'name',
            'subrisks',
            ]

    def get_subrisks(self, obj):
        if obj.is_parent:
            return RiskChildSerializer(obj.children(), many=True).data                      
        return None







# METHOD B (using django-rest-framework-recursive) -------------------------------------------------------------------
# https://github.com/heywbj/django-rest-framework-recursive
#Source : http://www.django-rest-framework.org/api-guide/fields/#jsonfield

# This method works but repeats the nodes at the root 

#Includes a a nested representation of the name & slug (Custom field required by Treant)


class TextField(serializers.Field):

    def to_representation(self, obj):
        ret = {
            "name": obj.name,
            "slug": obj.slug
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
        fields = [
        'text', 
        'slug', 
        ]




from rest_framework import serializers
from rest_framework.serializers import ModelSerializer,  SerializerMethodField
from rest_framework_recursive.fields import RecursiveField                 #To find list of children


from risk.models import Risk






# METHOD A   --------------------------------------------------------------


# Nested serializer which lists children (or descendants)
# (https://www.youtube.com/watch?v=1Ii5yZLS1Jc&list=PLEsfXFp6DpzTOcOVdZF-th7BS_GYGguAS&index=17)

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
#            return RiskChildSerializer(obj.get_descendants(), many=True).data
            return RiskChildSerializer(obj.children(), many=True).data                      
        return None




"""

# METHOD B -------------------------------------------------------------------
# https://github.com/heywbj/django-rest-framework-recursive


class RiskSerializer(ModelSerializer):
    class Meta:
        model = Risk
        fields = ['id', 'parent', 'title', 'description', 'example', 'HTMLview']


#Nested representation of the name & description (Custom field built for Treant)
#Source : http://www.django-rest-framework.org/api-guide/fields/#jsonfield
class TextField(serializers.Field):

    def to_representation(self, obj):
        ret = {
            "name": obj.title,
            "description": obj.description
        }
        return ret

    def to_internal_value(self, data):
        ret = {
            "title": data["name"],
            "description": data["description"],
        }
        return ret


#How does the RecursiveField serializer know which model to use ?
class TreeSerializer(serializers.Serializer):
    text = TextField(source='*')
#    url = serializers.CharField()
    HTMLclass = serializers.CharField()
    collapsed = serializers.BooleanField()
    children = serializers.ListField(child=RecursiveField())

    class Meta:
        model = Risk
        fields = [
        'title', 
        'description', 
        ]


"""

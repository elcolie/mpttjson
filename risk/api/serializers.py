from rest_framework import serializers
from rest_framework.serializers import ModelSerializer,  SerializerMethodField
from rest_framework_recursive.fields import RecursiveField                 #To find list of children
from mptt.models import MPTTModel, TreeForeignKey

from risk.models import Risk

from risk.models import Category

from risk.models import Category2



#Brasil example
class RootSerializer(serializers.ModelSerializer):
    children = serializers.SerializerMethodField()
    
    def get_children(self, parent):
        queryset = parent.get_children()
        serialized_data = RootSerializer(queryset, many=True, read_only=True, context=self.context)
        return serialized_data.data
    
    class Meta:
        model = Category
        fields = ('id', 'name', 'children')


#Stack example 0
class RecursiveField(serializers.Serializer):
    def to_representation(self, value):
        serializer = self.parent.parent.__class__(value, context=self.context)
        return serializer.data

class SubcategoriesSerializer(serializers.Serializer):
    subcategories = RecursiveField(many = True)

    class Meta:
        model = Category2
        fields = ('id', 'name', 'parent', 'subcategories')



#Stack example 1
class CategorySerializer(serializers.ModelSerializer):

    subcategories = serializers.SerializerMethodField(
        read_only=True, method_name="get_child_categories")
    
    class Meta:
        model = Category2
        fields = ('id', 'name', 'subcategories')
    
    def get_child_categories(self, obj):
        serializer = CategorySerializer(
            instance=obj.subcategories_set.all(),     # Gives error here
            many=True
        )
        return serializer.data


# Stack example 2
class SubcategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category2
        fields = ('id', 'name', 'parent')
    
class Category2Serializer(serializers.ModelSerializer):
    subcategories = SubcategorySerializer(many = True, read_only=True)

    class Meta:
        model = Category
        fields = ('id', 'name', 'parent', 'subcategories')



# List of all risks (does not list children of children)
# https://www.youtube.com/watch?v=6cakSZCDmIc&list=PLEsfXFp6DpzTOcOVdZF-th7BS_GYGguAS&index=16


class RiskSerializer(ModelSerializer):
    class Meta:
        model = Risk
        fields = ['id', 'name', 'collapsed']






# django-rest-framework-recursive example -------------------------------------------------------------------
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
    id = serializers.CharField()
    text = TextField(source='*')
    HTMLclass = serializers.CharField()
    collapsed = serializers.BooleanField()
    children = serializers.ListField(child=RecursiveField())

    class Meta:
        model = Risk
        fields = [
        'id'
        'text', 
        'slug', 
        'children'
        ]



# Coding for Entrepreneurs example--------------------------------------------------------------
# https://www.youtube.com/watch?v=1Ii5yZLS1Jc&list=PLEsfXFp6DpzTOcOVdZF-th7BS_GYGguAS&index=17

# class RiskChildSerializer(ModelSerializer):
#     class Meta:
#         model = Risk
#         fields = ['id', 'name']


# class RiskDetailSerializer(ModelSerializer):
#     subrisks = SerializerMethodField()
#     class Meta:
#         model = Risk
#         fields = [
#             'id',
#             'name',
#             'subrisks',
#             ]

#     def get_subrisks(self, obj):
#         if obj.is_parent:
#             return RiskChildSerializer(obj.children(), many=True).data                      
#         return None


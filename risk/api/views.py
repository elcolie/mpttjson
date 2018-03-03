from rest_framework.generics import ListAPIView, RetrieveAPIView
from .serializers import RootSerializer,  GenreSerializer, TreeSerializer, Root2Serializer 
#from .serializers import RiskSerializer

from risk.models import Risk
from risk.models import Category    
from risk.models import Genre

#The following caches the root node to limit the queryset to the root node only
#Otherwise the nodes are repeated several times
from mptt.utils import get_cached_trees    


# Nested serializer example
class NestedSerializer(ListAPIView):    
    serializer_class = RootSerializer
    #queryset = Category.objects.filter(level=0)            #this works
    queryset = get_cached_trees(Category.objects.all())     #this also works


# Nested serializer example 2
class Nested2Serializer(ListAPIView):    
    serializer_class = Root2Serializer
    #queryset = Risk.objects.filter(level=0)            #this works
    queryset = get_cached_trees(Risk.objects.all())     #this also works


# Risk tree (using the recursive package)
class TreeListAPIView(ListAPIView):
    serializer_class = TreeSerializer 
    queryset = Risk.objects.filter(level=0)              #this works
    #queryset = get_cached_trees(Risk.objects.all())     #this also works

 
# Genre list (using nested serializer)
class GenreListAPIView(ListAPIView):
    serializer_class = GenreSerializer 
    queryset = Genre.objects.all()
 

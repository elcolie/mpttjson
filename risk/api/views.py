from rest_framework.generics import ListAPIView, RetrieveAPIView
from .serializers import  GenreSerializer, RootSerializer, TreeSerializer

from risk.models import Genre

#The following caches the root node to limit the queryset to the root node only
#Otherwise the nodes are repeated several times
from mptt.utils import get_cached_trees    

 
# Genre list (using nested serializer)
class GenreListAPIView(ListAPIView):
    serializer_class = GenreSerializer 
    queryset = Genre.objects.all()
 

# Nested serializer example
class NestedSerializer(ListAPIView):    
    serializer_class = RootSerializer
    #queryset = Genre.objects.filter(level=0)            #this works
    queryset = get_cached_trees(Genre.objects.all())     #this also works


# Genre tree (using the recursive package)
class NestedRecursiveAPIView(ListAPIView):
    serializer_class = TreeSerializer 
    #queryset = Genre.objects.filter(level=0)              #this works
    queryset = get_cached_trees(Genre.objects.all())     #this also works


from rest_framework.generics import ListAPIView, RetrieveAPIView
from risk.models import Risk

from .serializers import  (
	                       RiskTreeSerializer,  
                          )


from mptt.utils import get_cached_trees    
#This caches the root node to limit the queryset to the root node only
#Otherwise the nodes are repeated several times


# Credit to lucasveigaf@gmail.com for making this work

class RiskTreeListAPIView(ListAPIView):
    queryset = Risk.objects.filter(level=0)            #alternative 1
#    queryset = get_cached_trees(Risk.objects.all())     #alternative 2 (doesn't work on pythonanywhere)
    serializer_class = RiskTreeSerializer

from rest_framework.generics import (
	ListAPIView, 
	RetrieveAPIView,
	)


from risk.models import Risk
from .serializers import (
    RiskDetailSerializer,
    RiskSerializer,
    TreeSerializer,
	)


# CFE METHOD   --------------------------------------------------------------

# List of all risks (does not list children of children)
# https://www.youtube.com/watch?v=6cakSZCDmIc&list=PLEsfXFp6DpzTOcOVdZF-th7BS_GYGguAS&index=16


# Risk list (it uses the RiskSerializer)
class RiskListAPIView(ListAPIView):
    queryset = Risk.objects.all()
    serializer_class = RiskSerializer   
# To do - Add search on queryset (see video)
# To do - Add API permissions 



# Nested serializer which lists children of children (or descendants)
# https://www.youtube.com/watch?v=1Ii5yZLS1Jc&list=PLEsfXFp6DpzTOcOVdZF-th7BS_GYGguAS&index=17


class RiskDetailAPIView(RetrieveAPIView):
    queryset = Risk.objects.all()
    serializer_class = RiskDetailSerializer    

# Risk - update
#class RiskUpdateAPIView(RetrieveUpdateAPIVIew):
#  etc...   



# Adding recursive package
class TreeListAPIView(ListAPIView):
    queryset = Risk.objects.all()
    serializer_class = TreeSerializer   



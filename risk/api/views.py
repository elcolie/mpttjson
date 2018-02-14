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


# Risk detail

class RiskDetailAPIView(RetrieveAPIView):
    queryset = Risk.objects.all()
    serializer_class = RiskDetailSerializer    


# Risk list (using nested serializer)
# Source: https://www.youtube.com/watch?v=1Ii5yZLS1Jc&list=PLEsfXFp6DpzTOcOVdZF-th7BS_GYGguAS&index=17

class RiskListAPIView(ListAPIView):
    queryset = Risk.objects.all()
    serializer_class = RiskSerializer   


# Risk list (using the recursive package)
# Source ()

class TreeListAPIView(ListAPIView):
    queryset = Risk.objects.all()
    serializer_class = TreeSerializer   



from rest_framework.generics import ListAPIView, RetrieveAPIView


from risk.models import Risk
from .serializers import (
    RiskDetailSerializer,
	)



class RiskListAPIView(ListAPIView):
    queryset = Risk.objects.all()
    serializer_class = RiskDetailSerializer



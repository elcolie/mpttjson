from rest_framework.generics import (
	ListAPIView, 
	RetrieveAPIView,
	)


from .serializers import (
#    RiskDetailSerializer,
    RiskSerializer,
    TreeSerializer,
    RootSerializer,
    CategorySerializer,
    Category2Serializer,  
    SubcategoriesSerializer,  
	)

from risk.models import Risk

from risk.models import Category  

from risk.models import Category2    







# Brasil example
class CategoryUniqueViewSet(ListAPIView):    
    serializer_class = RootSerializer
    queryset = Category.objects.all() 


# Stack Overflow example 0
class Stack0(ListAPIView):
    serializer_class = SubcategoriesSerializer
    queryset = Category2.objects.all()   


# Stack Overflow example 1
class Stack1(ListAPIView):
    serializer_class = CategorySerializer
    queryset = Category2.objects.all()   
#    queryset = cache_tree_children()   


# Stack Overflow example 2
class Stack2(ListAPIView):
    serializer_class = Category2Serializer
    queryset = Category2.objects.all()    


# Risk list (using nested serializer)
class RiskListAPIView(ListAPIView):
    queryset = Risk.objects.all()
    serializer_class = RiskSerializer   


# Risk list (using the recursive package)
class TreeListAPIView(ListAPIView):
    queryset = Risk.objects.all()
    serializer_class = TreeSerializer   


#--------------------

# Risk detail
# class RiskDetailAPIView(RetrieveAPIView):
#     queryset = Risk.objects.all()
#     serializer_class = RiskDetailSerializer    


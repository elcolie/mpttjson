from django.urls import path

from risk.views import RiskListView, RiskCreateView, RiskDeleteView, RiskDetailView, RiskMoveView, move_category

app_name = 'risk'

urlpatterns = [

    path('', RiskListView.as_view(), name='list'),
    path('create/', RiskCreateView.as_view(), name='create'),
    path('<int:pk>/', RiskDetailView.as_view(), name='detail'),
    path('<int:pk>/delete/', RiskDeleteView.as_view(), name='delete'),
    path('<int:pk>/move/', move_category, name='move'),

]

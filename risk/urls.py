from django.urls import path

from risk.views import GenreListView, GenreCreateView, GenreDeleteView, GenreDetailView, GenreMoveView, move_category

app_name = 'risk'

urlpatterns = [

    path('', GenreListView.as_view(), name='list'),
    path('create/', GenreCreateView.as_view(), name='create'),
    path('<int:pk>/', GenreDetailView.as_view(), name='detail'),
    path('<int:pk>/delete/', GenreDeleteView.as_view(), name='delete'),
    path('<int:pk>/move/', move_category, name='move'),

]

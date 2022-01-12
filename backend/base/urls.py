from django.urls import path
from django.urls.resolvers import URLPattern
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('tecnicas/', views.getTecnicas, name="tecnicas"),
]
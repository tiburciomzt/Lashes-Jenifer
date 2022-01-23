from http.client import NO_CONTENT, responses
from django.shortcuts import render
from django.http import JsonResponse
from .tecnicas import tecnicas

from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/tecnicas',
        '/api/tecnicas/create',

        '/api/tecnicas/upload',

        '/api/tecnicas/<id>/reviews',

        '/api/tecnicas/top',
        '/api/tecnicas/<id>',
        
        '/api/tecnicas/delete/<id>'
        '/api/tecnicas/<update>/<id>'
    ]
    return Response(routes)

@api_view(['GET'])
def getTecnicas(request):
    return Response(tecnicas)

@api_view(['GET'])
def getTecnica(request, pk):
    tecnica = None
    for i in tecnicas:
        if i['_id'] == pk:
            tecnica = i
            break
    return Response(tecnica)
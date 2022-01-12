from django.shortcuts import render
from django.http import JsonResponse
from .tecnicas import tecnicas

# Create your views here.
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
    return JsonResponse(routes, safe=False)

def getTecnicas(request):
    return JsonResponse(tecnicas, safe=False)
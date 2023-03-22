from rest_framework import serializers
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt

from .serializers import FolletoSerializer, QuimicaNombreSerializer, UnitsSerializer, MethodesSerializer, TraceabilitySerializer, InfoFolletoElicalSerializer, InfoFolletoElitrollSerializer
from .models import Folleto, Nombre_quimica, Units, Methodes, Traceability, InfoFolletoElical, InfoFolletoElitrol

#
#
# * crud folletos
#
#


@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getFolletos(request):
    folleto = Folleto.objects.filter().order_by('fecha')
    serializer = FolletoSerializer(folleto, many=True)
    return Response(serializer.data)


@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getSoloFolleto(request, pk):
    folleto = Folleto.objects.get(id=pk)
    serializer = FolletoSerializer(folleto, many=False)
    return Response(serializer.data)


@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def postFolletos(request):
    data = request.data
    folleto = Folleto.objects.create(
        nombre=data["nombre"],
        lote=data["lote"],
        fecha=data["fecha"],
    )
    serializer = FolletoSerializer(folleto, many=False)
    return Response(serializer.data)


# @permission_classes([IsAuthenticated])
@api_view(['PUT'])
# @permission_classes([IsAuthenticated])
def putFolletos(request, pk):
    data = request.data
    folleto = Folleto.objects.get(id=pk)
    serializer = FolletoSerializer(instance=folleto, data=data)
    if serializer.is_valid():
        serializer.save()
    else:
        return Response({'Error': 'Informacion no valida'}, status=status.HTTP_401_UNAUTHORIZED)
    return Response(serializer.data)


@api_view(['DELETE'])
# @permission_classes([IsAuthenticated])
def deleteFolletos(request, pk):
    folleto = Folleto.objects.get(id=pk)
    folleto.delete()
    return Response('Folleto Eliminado')


#
#
# * crud nombre quimica
#
#

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getNameQuimica(request):
    name_quimica = Nombre_quimica.objects.filter().order_by('nombre_quimica')
    serializer = QuimicaNombreSerializer(name_quimica, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getSoloQuimica(request, pk):
    quimica_solo = Nombre_quimica.objects.get(id=pk)
    serializer = QuimicaNombreSerializer(quimica_solo, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def postQuimica(request):
    data = request.data
    quimica = Nombre_quimica.objects.create(
        nombre_quimica=data["nombre_quimica"],

    )
    serializer = QuimicaNombreSerializer(quimica, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def putQuimica(request, pk):
    data = request.data
    up_quimica = Nombre_quimica.objects.get(id=pk)
    serializer = QuimicaNombreSerializer(instance=up_quimica, data=data)
    if serializer.is_valid():
        serializer.save()
    else:
        return Response({'Error': 'Informacion no valida'}, status=status.HTTP_401_UNAUTHORIZED)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteQuimica(request, pk):
    quimica = Nombre_quimica.objects.get(id=pk)
    quimica.delete()
    return Response('Quimica Eliminada')


#
#
# * crud Unit
#
#

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUnits(request):
    nombre = Units.objects.filter().order_by('nombre')
    serializer = UnitsSerializer(nombre, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getSoloUnit(request, pk):
    nombre = Units.objects.get(id=pk)
    serializer = UnitsSerializer(nombre, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def postUnit(request):
    data = request.data
    nombre = Units.objects.create(
        nombre=data["nombre"],
    )
    serializer = UnitsSerializer(nombre, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def putUnit(request, pk):
    data = request.data
    nombre = Units.objects.get(id=pk)
    serializer = UnitsSerializer(instance=nombre, data=data)
    if serializer.is_valid():
        serializer.save()
    else:
        return Response({'Error': 'Informacion no valida'}, status=status.HTTP_401_UNAUTHORIZED)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteUnit(request, pk):
    nombre = Units.objects.get(id=pk)
    nombre.delete()
    return Response('Unidad Eliminada')
#
#
# * crud Methodes
#MethodesSerializer
# Methodes
#

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMethodes(request):
    metodo = Methodes.objects.filter().order_by('metodo')
    serializer = MethodesSerializer(metodo, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getSoloMethod(request, pk):
    metodo = Methodes.objects.get(id=pk)
    serializer = MethodesSerializer(metodo, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def postMethod(request):
    data = request.data
    metodo = Methodes.objects.create(
        metodo=data["metodo"],
    )
    serializer = MethodesSerializer(metodo, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def putMethod(request, pk):
    data = request.data
    metodo = Methodes.objects.get(id=pk)
    serializer = MethodesSerializer(instance=metodo, data=data)
    if serializer.is_valid():
        serializer.save()
    else:
        return Response({'Error': 'Informacion no valida'}, status=status.HTTP_401_UNAUTHORIZED)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteMethod(request, pk):
    metodo = Methodes.objects.get(id=pk)
    metodo.delete()
    return Response('Metodo Eliminada')


#
#
# * crud Traceability
#
#
#

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getTraceabilitys(request):
    traceability = Traceability.objects.filter().order_by('traceability')
    serializer = TraceabilitySerializer(traceability, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getSoloTraceability(request, pk):
    traceability = Traceability.objects.get(id=pk)
    serializer = TraceabilitySerializer(traceability, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def postTraceability(request):
    data = request.data
    traceability = Traceability.objects.create(
        traceability=data["traceability"],
    )
    serializer = TraceabilitySerializer(traceability, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def putTraceability(request, pk):
    data = request.data
    traceability = Traceability.objects.get(id=pk)
    serializer = TraceabilitySerializer(instance=traceability, data=data)
    if serializer.is_valid():
        serializer.save()
    else:
        return Response({'Error': 'Informacion no valida'}, status=status.HTTP_401_UNAUTHORIZED)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteTraceability(request, pk):
    traceability = Traceability.objects.get(id=pk)
    traceability.delete()
    return Response('traceability Eliminada')


#
#
# * FULL INFORMACION FOLLETO ELITROL
#
#
#
@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getFullelitrol(request):
    felitrol = InfoFolletoElitrol.objects.filter().order_by('component')
    serializer = InfoFolletoElitrollSerializer(felitrol, many=True)
    return Response(serializer.data)

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getSolofolelitrol(request, pk):
    follelitrol = InfoFolletoElitrol.objects.get(id=pk)
    serializer = InfoFolletoElitrollSerializer(follelitrol, many=False)
    return Response(serializer.data)


@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def postElitrol(request):
    data = request.data
    FolletoElitrol = InfoFolletoElitrol.objects.create(
        component = Nombre_quimica.objects.get(id=data["component"]),
        method= Methodes.objects.get(id=data["method"]),
        propidedades=Units.objects.get(id=data["propidedades"]),
        rankmiddle=data["rankmiddle"],
        ranklow=data["ranklow"],
        rankhigh=data["rankhigh"],
    )
    serializer = InfoFolletoElitrollSerializer(FolletoElitrol, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
# @permission_classes([IsAuthenticated])
def putfollElitrol(request, pk):
    data = request.data
    updateelitral = InfoFolletoElitrol.objects.get(id=pk)
    serializer = InfoFolletoElitrollSerializer(
        instance=updateelitral, data=data)
    if serializer.is_valid():
        serializer.save()
    else:
        return Response({'Error': 'Informacion no valida'}, status=status.HTTP_401_UNAUTHORIZED)
    return Response(serializer.data)


@api_view(['DELETE'])
# @permission_classes([IsAuthenticated])
def deleteTfolleElitrol(request, pk):
    deleteEltrol = InfoFolletoElitrol.objects.get(id=pk)
    deleteEltrol.delete()
    return Response("Quimica de elitrol eliminada")


#
#
# * FULL INFORMACION FOLLETO ELITROL
#
#
#
@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getFullElical(request):
    folelical = InfoFolletoElical.objects.filter().order_by('quimica')
    serializer = InfoFolletoElicalSerializer(folelical, many=True)
    return Response(serializer.data)

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getSolofolElical(request, pk):
    soloElital = InfoFolletoElical.objects.get(id=pk)
    serializer = InfoFolletoElicalSerializer(soloElital, many=False)
    return Response(serializer.data)


@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def postElical(request):
    data = request.data
    FolletoElitrol = InfoFolletoElical.objects.create(
        referencia  = data["referencia"],
        quimica = Nombre_quimica.objects.get(id=data["quimica"]),
        value =data["value"],
        pvalor =Units.objects.get(id=data["pvalor"]),
        valor =data["valor"],
        propiedadSg =Units.objects.get(id=data["propiedadSg"]),
        method=Methodes.objects.get(id=data["method"]),
        traceability=Traceability.objects.get(id=data["traceability"]),
    )
    serializer = InfoFolletoElicalSerializer(FolletoElitrol, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
# @permission_classes([IsAuthenticated])
def putfollElical(request, pk):
    data = request.data
    updateelitral = InfoFolletoElical.objects.get(id=pk)
    serializer = InfoFolletoElicalSerializer(
        instance=updateelitral, data=data)
    if serializer.is_valid():
        serializer.save()
    else:
        return Response({'Error': 'Informacion no valida'}, status=status.HTTP_401_UNAUTHORIZED)
    return Response(serializer.data)


@api_view(['DELETE'])
# @permission_classes([IsAuthenticated])
def deleteTfolleElical(request, pk):
    deleteEltrol = InfoFolletoElical.objects.get(id=pk)
    deleteEltrol.delete()
    return Response("Quimica de Elical eliminada")

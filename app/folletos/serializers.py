from rest_framework import serializers
from .models import Folleto, Nombre_quimica, Units, Methodes, Traceability, InfoFolletoElical, InfoFolletoElitrol
from rest_framework import serializers


class FolletoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Folleto
        fields = "__all__"


class QuimicaNombreSerializer(serializers.ModelSerializer):
    # nombre_quimica = serializers.CharField(max_length=30)

    class Meta:
        model = Nombre_quimica
        fields = "__all__"


class UnitsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Units
        fields = "__all__"


class MethodesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Methodes
        fields = "__all__"


class TraceabilitySerializer(serializers.ModelSerializer):

    class Meta:
        model = Traceability
        fields = "__all__"


class InfoFolletoElicalSerializer(serializers.ModelSerializer):

    class Meta:
        model = InfoFolletoElical
        fields = [
            'id',
            'referencia',
            'quimica',
            'value',
            'pvalor',
            'valor',
            'propiedadSg',
            'method',
            'traceability',
        ]


class InfoFolletoElitrollSerializer(serializers.ModelSerializer):


    class Meta:
        model = InfoFolletoElitrol
        fields = [
            'id',
            'component',
            'method',
            'propidedades',
            'rankmiddle',
            'ranklow',
            'rankhigh',
        ]

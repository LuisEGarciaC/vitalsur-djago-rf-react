from django.db import models

# Create your models here.
'''
  Tabla de las nombres de los folletos Elcal, Eltrol
'''
class Folleto(models.Model):
    nombre = models.CharField(max_length=100, verbose_name='Nombre')
    lote = models.CharField(max_length=10, null=True, verbose_name='Lote')
    fecha = models.DateField(null=True)

    # String a mostrar en admin
    def __str__(self):
        str = "Tipo de folleto es: " + self.nombre
        return str

'''
  se guarda el nombre de la quimica
'''
class Nombre_quimica(models.Model):
    nombre_quimica = models.CharField(max_length=30, unique=True)

    def __str__(self):
        return str(self.nombre_quimica)

'''
  Tabla de las unidades de los folletos
'''
class Units(models.Model):
    nombre = models.CharField(max_length=15, unique=True)

    # String a mostrar en admin
    def __str__(self):
        str = "Tipo de unidad es: " + self.nombre
        return str

'''
  Tabla de Metodos en los folletos
'''
class Methodes(models.Model):
    metodo = models.CharField(max_length=50, unique=True)

    # String a mostrar en admin
    def __str__(self):
        str = "Tipo de metodo es: " + self.metodo
        return str
      

'''
  Tabla de Traceability
'''
class Traceability(models.Model):
    traceability = models.CharField(max_length=150, unique=True)

    # String a mostrar en admin
    def __str__(self):
        str = "Tipo de Traceability es: " + self.traceability
        return str
      
'''
  Tabla de mostar toda la informacion Elical 2
'''
class InfoFolletoElical(models.Model):
    referencia = models.CharField(max_length=25)
    quimica = models.ForeignKey(Nombre_quimica, on_delete=models.CASCADE)
    value = models.FloatField()
    pvalor = models.ForeignKey(
        Units, on_delete=models.CASCADE, related_name='pvalors')
    valor = models.FloatField()
    propiedadSg = models.ForeignKey(
        Units, on_delete=models.CASCADE, related_name='propiedadsg')
    method = models.ForeignKey(Methodes, on_delete=models.CASCADE)
    traceability = models.ForeignKey(Traceability, on_delete=models.CASCADE)
    
    # String a mostrar en admin
    def __str__(self):
        strelical = "Elical 2: " + str(self.quimica)
        return strelical


'''
  Tabla de mostar toda la informacion Elitrol 1
'''
class InfoFolletoElitrol(models.Model):
    component = models.ForeignKey(Nombre_quimica, on_delete=models.CASCADE)
    method = models.ForeignKey(Methodes, on_delete=models.CASCADE)
    propidedades = models.ForeignKey(
        Units, on_delete=models.CASCADE, related_name='propidedades')
    rankmiddle = models.FloatField()
    ranklow = models.FloatField()
    rankhigh = models.FloatField()
  

    # String a mostrar en admin
    def __str__(self):
        strelitrol = "Elitrol I: " + str(self.component)
        return strelitrol

import os
from PIL import Image

# Fonction pour convertir un fichier PNG en JPG
def convertir_png_en_jpg(fichier_png, fichier_jpg):
  """
  Converti un fichier PNG en JPG.

  Args:
    fichier_png: Le chemin d'accès au fichier PNG.
    fichier_jpg: Le chemin d'accès au fichier JPG à créer.
  """
  # Ouvrir l'image PNG
  image = Image.open(fichier_png)

  # Convertir l'image en mode RGB (requis pour JPG)
  image = image.convert("RGB")

  # Enregistrer l'image au format JPG
  image.save(fichier_jpg)

# Obtenir le chemin du dossier actuel
dossier_courant = os.getcwd()

# Parcourir tous les fichiers du dossier
for fichier in os.listdir(dossier_courant):
  # Vérifier si le fichier est un PNG
  if fichier.endswith(".png"):
    # Déterminer le nom du fichier JPG
    fichier_jpg = fichier.replace(".JPG", ".jpg")

    # Convertir le fichier PNG en JPG
    convertir_png_en_jpg(fichier, fichier_jpg)

    # Afficher un message de confirmation
    print(f"Le fichier {fichier} a été converti en {fichier_jpg}")


convertir_png_en_jpg("public/2.JPG", "public/test")
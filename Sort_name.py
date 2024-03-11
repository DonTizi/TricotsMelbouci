import os

def rename_files_in_folder(folder_path):
    # Liste tous les fichiers dans le dossier
    files = os.listdir(folder_path)

    # Trie les fichiers pour garantir l'ordre de traitement
    files.sort()

    # Boucle sur chaque fichier et le renomme
    for i, filename in enumerate(files, start=30):
        # Crée le nouveau nom du fichier
        new_filename = f"{i}{os.path.splitext(filename)[1]}"

        # Crée les chemins complets des anciens et nouveaux noms de fichier
        old_file = os.path.join(folder_path, filename)
        new_file = os.path.join(folder_path, new_filename)

        # Renomme le fichier
        os.rename(old_file, new_file)
        print(f"Renamed '{filename}' to '{new_filename}'")

# Chemin du dossier contenant les fichiers à renommer
folder_path = '/Users/dontizi/Downloads/tailwindui-studio/studio-js/Textile'
rename_files_in_folder(folder_path)

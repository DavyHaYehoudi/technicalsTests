# Somme des nombres d'un tableau
def additional(a):
    return sum(a)


# Mettre en majuscule la 1ère lettre de chaque mot d'une phrase
def majuscule(sentence):
    return " ".join((word.capitalize() for word in sentence.split(" ")))
# A noter que la méthode title() fait le même job mais dans un mot contracté comme aren't elle rend Aren'T au lieu de Aren't

# Comparer une note à la moyenne générale d'un ensemble de notes
def better_than_average(class_points, your_points):
    return  your_points> (sum(class_points)/len(class_points))
# Somme des nombres d'un tableau
def additional(a):
    return sum(a)


# Mettre en majuscule la 1ère lettre de chaque mot d'une phrase
def majuscule(sentence):
    return " ".join((word.capitalize() for word in sentence.split(" ")))
# A noter que la méthode title() fait le même job mais dans un mot contracté comme aren't elle rend Aren'T au lieu de Aren't

# Comparer une note à la moyenne générale d'un ensemble de notes


def better_than_average(class_points, your_points):
    return your_points > (sum(class_points)/len(class_points))

#  Vérifier la fin d'un mot avec 2 arguments : mot + fin


def solution(string, ending):
    return string.endswith(ending)

# Dans un tableau de nombres, additionner les deux plus petits


def sum_two_smallest_numbers(numbers):
    return sum(sorted(numbers)[:2])

# Somme de tous les entiers compris entre deux nombres


def get_sum(a, b):
    return (a+b)*(abs(b-a)+1)/2

# // retourne une phrase renversée avec chaque mot lui-même renversé


def reverse_words(text):
    return " ".join([word[::-1] for word in text.split(" ")])

# // Retourne le nombre de 1 dans la conversion d'un entier positif en binaire


def count_bits(n):
    return format(n, "b").count('1')

#  Vérifier si une phrase contient toutes les lettres de l'alphabet


def is_pangram(s):
    for letter in "abcdefghijklmnopqrstuvwxyz":
        if letter not in s.lower():
            return False
    return True

# // Deux tableaux. Retrouver le carré des éléments de l'un dans le second, quel que soit l'ordre. Même longueur. Vérifier aussi la multiplicité : autant de nombre que de racine.


def comp(a, b):
    if (a and b):
        return sorted([x*x for x in a]) == sorted(b)
    else:
        return False

# Vérifier qu'une chaîne de caractère contient autant de o que de x


def xo(s):
    return s.lower().count("o") == s.lower().count("x")

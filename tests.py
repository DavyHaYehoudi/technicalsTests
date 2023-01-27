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

# Convertir les 1 et 0 d'un tableau en nombre


def binary_array_to_number(arr):
    return int(("".join([str(e) for e in arr])), 2)

# Retourne en chiffres romains un nombre compris entre 1 et 3999


def solution(n):
    tableau = {"M": 1000, "CM": 900, "D": 500, "CD": 400, "C": 100,
               "XC": 90, "L": 50, "XL": 40, "X": 10, "IX": 9, "V": 5, "IV": 4, "I": 1}

    result = ""

    for key in tableau:
        while (n >= tableau[key]):
            result += key
            n -= tableau[key]
    return result

# Convertir des secondes <360 000  au format HH:MM:SS


def make_readable(seconds):
    hours = 0
    minutes = 0
    while (seconds >= 60):
        seconds -= 60
        minutes += 1
    while (minutes >= 60):
        minutes -= 60
        hours += 1
    hours = hours if hours > 9 else "0"+str(hours)
    minutes = minutes if minutes > 9 else "0"+str(minutes)
    seconds = seconds if seconds > 9 else "0"+str(seconds)

    return f'{hours}:{minutes}:{seconds}'

# // Pour chaque lettre d'un mot, si elle est unique dans le mot renvoyer ')' sinon '()'.Renvoyer le nouveau mot


def duplicate_encode(word):
    newWord = ""
    for letter in word:
        if word.lower().count(letter.lower()) > 1:
            newWord += ")"
        else:
            newWord += "("
    return newWord


# Trouver le plus petit nombre dans un tableau
def find_smallest_int(arr):
    return min(arr)

# Somme de tous les nombres partant de 1 jusqu'à n, entier naturel positif


def summation(num):
    return (1+num)*(abs(num-1)+1)/2


#  Ecrire la string la plus longue en utilisant les lettres contenues dans 2 tableaux différents qui ne contiennent que des lettres. Chaque lettre de la string doit être unique et la string est ordonné
a1 = "xyaabbbccccdefww"
a2 = "xxxxyyyyabklmopq"


def longest(a1, a2):
    return "".join(sorted((set(a1+a2))))

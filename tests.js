// Somme des nombres d'un tableau
function addition(a) {
  let somme = a.reduce((a, b) => a + b, 0);
  return somme;
}
// Mettre en majuscule la 1ère lettre de chaque mot d'une phrase
String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};
// Comparer une note à la moyenne générale d'un ensemble de notes
function betterThanAverage(classPoints, yourPoints) {
  return (
    yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length
  );
}
// Vérifier la fin d'un mot avec 2 arguments : mot + fin
function solution(str, ending) {
  return str.endsWith(ending);
}
// Dans un tableau de nombres, additionner les deux plus petits
function sumTwoSmallestNumbers(numbers) {
  let [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}
// Somme de tous les entiers compris entre deux nombres (a,b) positifs ou négatifs
function getSum(a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  let nombres = Array.from({ length: max - min + 1 }, (_, i) => min + i);
  return nombres.reduce((a, b) => a + b, 0);
}
// ou encore
// S = (a + b) * (abs(b - a) + 1) / 2  pour (a,b) dans N
const GetSum2 = (a, b) => {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
};
// retourne une phrase renversée avec chaque mot lui-même renversé
function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}
// Retourne le nombre de 1 dans la conversion d'un entier positif en binaire
var countBits = function (n) {
  return n.toString(2).split("1").length - 1;
};

// Vérifier si une phrase contient toutes les lettres de l'alphabet
function isPangram(string) {
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((x) => string.toLowerCase().includes(x));
}

// Deux tableaux. Retrouver le carré des éléments de l'un dans le second, quel que soit l'ordre. Même longueur. Vérifier aussi la multiplicité : autant de nombre que de racine.

function comp(a, b) {
  return (
    !!a &&
    !!b &&
    a
      .map((x) => x * x)
      .sort()
      .join() == b.sort().join()
  );
}

// Vérifier qu'une chaîne de caractère contient autant de o que de x
function XO(str) {
  return (
    str.toLowerCase().split("x").length === str.toLowerCase().split("o").length
  );
}
// Convertir les 1 et 0 d'un tableau en nombre
const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(""), 2);
};

// Retourne en chiffres romains un nombre compris entre 1 et 3999
function solution(number) {
  var lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    roman = "",
    i;
  for (i in lookup) {
    while (number >= lookup[i]) {
      roman += i;
      number -= lookup[i];
    }
  }
  return roman;
}

// Convertir des secondes <360 000  au format HH:MM:SS
function humanReadable(seconds) {
  let hours = 0,
    minutes = 0;
  while (seconds >= 60) {
    minutes += 1;
    seconds -= 60;
  }
  while (minutes >= 60) {
    minutes -= 60;
    hours += 1;
  }
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return `${hours}:${minutes}:${seconds}`;
}

// Pour chaque lettre d'un mot, si elle est unique dans le mot renvoyer ')' sinon '()'.Renvoyer le nouveau mot
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}

// Trouver le plus petit nombre dans un tableau
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}
// let finder = new SmallestIntegerFinder()
// let nombMin = finder.findSmallestInt([0,1,2,4,,8])

// Somme de tous les nombres partant de 1 jusqu'à n, entier naturel positif
let summation = function (num) {
  // return Array.from({length:num},(_,i)=>i+1).reduce((a,b)=>a+b,0)
  return ((1 + num) * (Math.abs(num - 1) + 1)) / 2;
};

// Ecrire la string la plus longue en utilisant les lettres contenues dans 2 tableaux différents qui ne contiennent que des lettres. Chaque lettre de la string doit être unique et la string est ordonnée.
let s1 = "xyaabbbccccdefww";
let s2 = "xxxxyyyyabklmopq";
function longest(s1, s2) {
  return (s = Array.from(new Set(s1 + s2))
    .sort()
    .join(""));
}

//  Nombre premier ou pas. Rappel : divisible uniquement par deux diviseurs et pas un de plus : 1 et lui-même. Aide: inutile de tester un diviseur au-delà de sa racine carrée
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2 || num === 3) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }
  return true;
}
// Transformer un string contenant un "nom prénom" en initiales
function abbrevName(name) {
  return name
    .split(" ")[0][0]
    .toUpperCase()
    .concat("." + name.split(" ")[1][0].toUpperCase());
}

// Renvoyer l'iterable en supprimant les doublons consécutifs tout en préservant l'ordre initial des caractères. iterable= string ou [ ]
let uniqueInOrder = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};
// Fibonacci : accéder à une valeur quelconque
const fibonacci = (x) => {
  let n1 = 0;
  let n2 = 1;
  let somme = 0;
  for (let i = 2; i <= x; i++) {
    somme = n1 + n2;
    n1 = n2;
    n2 = somme;
  }
  return x ? n2 : n1;
};
// Fibonacci : récursivité
const fibonacciR = (x) => {
  if (x < 2) return x;
  return fibonacciR(x - 1) + fibonacci(x - 2);
};

// Fibonacci mémoïsation
let dictionnaire = new Map();
const fibonacciM = (x) => {
  if (dictionnaire.has(x)) {
    return dictionnaire.get(x);
  }
  if (x < 2) {
    return 1;
  }
  let result = fibonacciM(x - 1) + fibonacciM(x - 2);

  dictionnaire.set(x, result);
  return result;
};

// Mettre au carré chaque chiffre d'un nombre et concaténer le tout
//ex:765=>493625 et 9119=>811181
function squareDigits(num) {
  return Number(
    String(num)
      .split("")
      .map((x) => Math.pow(Number(x), 2))
      .join("")
  );
}

// # Retourner au format string la valeur d'un boolean
function booleanToString(b) {
  return String(b);
}

function sumStrings(a,b) { 
  return String(Number(a)+Number(b))
  
}
// console.log(typeof sumStrings("123","456"));
console.log(Number(cinq));
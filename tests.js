// Somme des nombres d'un tableau
function sumNumbersOfArray(a) {
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
function evaluateEndWord(str, ending) {
  return str.endsWith(ending);
}
// Dans un tableau de nombres, additionner les deux plus petits
function sumTwoSmallestNumbersofArray(numbers) {
  let [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}
// Somme de tous les entiers compris entre deux nombres (a,b) positifs ou négatifs
function sumIntegers_1(a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  let nombres = Array.from({ length: max - min + 1 }, (_, i) => min + i);
  return nombres.reduce((a, b) => a + b, 0);
}
// ou encore
// S = (a + b) * (abs(b - a) + 1) / 2  pour (a,b) dans N
const sumIntegers_2 = (a, b) => {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
};

// retourne une phrase renversée avec chaque mot lui-même renversé
function reverseWordsInReverseSentence(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}
// Retourne le nombre de 1 dans la conversion d'un entier positif en binaire
var countBits_0f_1_inIntegerConvertedToBinary = function (n) {
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
function countXOinString(str) {
  return (
    str.toLowerCase().split("x").length === str.toLowerCase().split("o").length
  );
}
// Convertir les 1 et 0 d'un tableau en nombre
const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(""), 2);
};

// Retourne en chiffres romains un nombre compris entre 1 et 3999
function numberToRoman(number) {
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
function timeHumanReadable(seconds) {
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
const fibonacciAccessToOneValue = (x) => {
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
const fibonacciRecurs = (x) => {
  if (x < 2) return x;
  return fibonacciRecurs(x - 1) + fibonacciAccessToOneValue(x - 2);
};

// Fibonacci mémoïsation
let dictionnaire = new Map();
const fibonacciMemoisation = (x) => {
  if (dictionnaire.has(x)) {
    return dictionnaire.get(x);
  }
  if (x < 2) {
    return 1;
  }
  let result = fibonacciMemoisation(x - 1) + fibonacciMemoisation(x - 2);

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
// Retourner l'opposé d'un nombre, qu'il soit positif, négatif ou nul
function oppositeNumber(num) {
  return -num;
}

// 3 façons de retourner la valeur minimale d'un tableau
function smallestNumberInArray(arr) {
  // 1
  return Math.min(...arr);
  // 2
  return arr.reduce((a, b) => (a < b ? a : b));
  // 3
  return arr.sort((a, b) => a - b)[0];
}
// Supprimer les espaces dans une phrase
function noSpace(x) {
  // 1
  return x.replaceAll(" ", "");
  // 2
  return x.replace(/ /g, "");
}

// retourner les 2 plus grands chiffres d'une liste
function twoHighest(arr) {
  const duplicate = [...new Set(arr)];
  const sorted = duplicate.sort((a, b) => b - a);
  return sorted.slice(0, 2);
}

// Renverser les chiffres d'un nombre
function digitize(n) {
  // 1
  return Array.from(Array.from(String(n)).reverse(), (x) => Number(x));
  // 2
  function digitize(n) {
    return String(n).split("").reverse().map(Number);
  }
}

// Enumérer dans un tableau tous les entiers partant de 1 jusqu'à un chiffre n
function monkeyCount(n) {
  // 1
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
  // 2
  return Array.from({ length: n }, (_, i) => i + 1);
}

// Supprimer les doublons d'un tableau
const arr = [1, 2, 2, 3, 4, 4, 5];

function duplicateArr(arr) {
  // 1
  arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  // 2
  return [...set(arr)];
}
// On donne un tableau d'entiers.
// Renvoyer un autre tableau qui contient 2 valeurs.
//  La 1ere est le nombre d'entiers positifs et la seconde est la somme des entiers négatifs
// tip: avec reduce() on peut utiliser un tableau comme accumulateur
function countPositivesSumNegatives(input) {
  if (input.length === 0 || input === null) {
    return [];
  }
  return input.reduce(
    (a, b) => {
      if (b > 0) {
        a[0]++;
      } else if (b < 0) {
        a[1] = a + b;
      }
    },
    [0, 0]
  );
}
// Trouver le prochain doubleton. Rappel : un nombre qui contient exactement 2 chiffres différents, ni plus ni moins.
// On nous donne un entier. Même si ce dernier est déjà un doubleton il faut trouver le suivant.
// warning 1: number n'est pas itérable =>String
// warning 2: éviter de déclarer des variables en dehors de la boucle while, il vaut mieux s'arranger pour l'insérer directement dans la condition de bouclage, autrement il faut penser dans le corps du while à les actualiser.
function doubleton(num) {
  let n0 = num + 1;
  while (new Set(String(n0)).size !== 2) {
    n0++;
  }
  return n0;
}
// Pour trouver l'intersection de 2 sets
// info: on peut appliquer le spread operator sur un Set
function union(s1, s2) {
  return new Set([...s1, ...s2]);
}

// Retourner false pour une phrase contenant des espaces en début ou en fin de ligne d'une part, ou bien aussi si elle contient au milieu au moins 2 espaces vides, sinon retourner true.
function validSpacing(s) {
  return s.trim() === s && !s.includes("  ");
}
// Retourner le ratio sous forme de string, et non de résultat de fraction, le ration du nombre de lettres erronnées sur le nombre total de lettres de la phrase. Une lettre erronnée est celle qui se situe après le 'm'
function printerError(s) {
  let countError = s.split("").reduce((a, b) => (b <= "m" ? a : (a += 1)), 0);
  return `${countError}/${s.length}`;
}
// Avec une Regex, c'est du one-liner
function printerError2(s) {
  return `${s.match(/[n-z]/g).length}/${s.length}`;
}
// On donne une string de parenthèses, retourner si l'ordre est valide
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
function validParentheses1(parens) {
  if (parens === "(" || parens === ")" || parens.length % 2 !== 0) {
    return false;
  }
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(" && parens.at(-i - 1) !== ")") {
      return false;
    }
  }
  return true;
}
function validParentheses2(parens) {
  let n = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") {
      n++;
    }
    if (parens[i] === ")") {
      n--;
    }
    if (n < 0) {
      return false;
    }
  }
  return n === 0;
}

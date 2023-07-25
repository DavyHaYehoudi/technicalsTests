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
let countBits_0f_1_inIntegerConvertedToBinary = function (n) {
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
// retourner une string de chiffres de faux binaire dans le sens où tout chiffre inférieur à 5 se trnasforme en 0 et s'il est supérieur ou égal à 5 il devient 1
// warning: quand on a split, pas besoin de convertir en Number, c'est implicite
function fakeBin1(x) {
  let bin = "";
  for (l of x) {
    l < 5 ? (bin += "0") : (bin += "1");
  }
  return bin;
}
function fakeBin2(x) {
  return x.split("").reduce((a, b) => (b < 5 ? (a += "0") : (a += "1")), "");
}
function fakeBin3(x) {
  return x
    .split("")
    .map((a) => (a < 5 ? 0 : 1))
    .join("");
}

// Masquer une chaine de caractère avec des # et ne laisser apparent que les 4 derniers caractères
function maskify1(cc) {
  if (cc.length > 4) {
    let ccArr = cc.split("");
    for (let i = 0; i < ccArr.length; i++) {
      while (i < ccArr.length - 4) {
        ccArr[i] = "#";
        i++;
      }
      return ccArr.join("");
    }
  }
  return cc;
}
function maskify2(cc) {
  return cc.length < 4 ? cc : "#".repeat(cc.length - 4) + cc.slice(-4);
}
function maskify3(cc) {
  return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
}
function validBraces(braces) {
  const curleyBrackets = [
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ];
  const myMap = new Map(curleyBrackets);

  const stack = [];

  for (let i = 0; i < braces.length; i++) {
    const currentChar = braces[i];
    if (myMap.has(currentChar)) {
      // Si le caractère est une ouverture d'accolade, de parenthèse ou de crochet,
      // on l'ajoute à la pile.
      stack.push(currentChar);
    } else {
      // Si le caractère est une fermeture d'accolade, de parenthèse ou de crochet,
      // on vérifie s'il correspond à la dernière ouverture ajoutée à la pile.
      const lastOpening = stack.pop();
      if (!lastOpening || myMap.get(lastOpening) !== currentChar) {
        // Si le dernier caractère ouvrant ne correspond pas à la fermeture actuelle,
        // ou s'il n'y a pas de caractère ouvrant précédent, la chaîne est mal équilibrée.
        return false;
      }
    }
  }

  // À la fin, si la pile est vide, cela signifie que toutes les paires d'accolades, de parenthèses
  // et de crochets étaient correctement équilibrées.
  return stack.length === 0;
}

// Retourner sous forme d'objet, le nombre de fois qu'apparaît chaque lettre dans un mot kyu 6
function count1(string) {
  const myMap = new Map();
  if (string.length > 0) {
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      // Si le caractère existe déjà dans la Map, on incrémente son compteur
      if (myMap.has(char)) {
        myMap.set(char, myMap.get(char) + 1);
      } else {
        // Sinon, on ajoute le caractère à la Map avec un compteur initial de 1
        myMap.set(char, 1);
      }
    }
  } else {
    return {};
  }

  return Object.fromEntries(myMap); // Convertit la Map en objet avant de le renvoyer
}

function count2(string) {
  let stack = {};
  if (string.length > 0) {
    for (let i = 0; i < string.length; i++) {
      if (stack[string[i]]) {
        stack[string[i]] += 1;
      } else {
        stack[string[i]] = 1;
      }
    }
  } else {
    return stack;
  }
  return stack;
}
function count3(string) {
  let dict = {};
  for (let lettre of string) {
    dict[lettre] = dict[lettre] !== undefined ? dict[lettre] + 1 : 1;
  }
  return dict;
}

// Retourner un objet qui contient le nombre de fois qu'apparaît chaque élément d'un tableau
function count(array) {
  let dict = {};
  for (item of array) {
    dict[item] = dict[item] !== undefined ? (dict[item] += 1) : 1;
  }
  return dict;
}
// Retourner un objet qui contient le nombre de fois qu'apparaît un nucléotide, donc A,C,G ou T
function getCountedNucleotides(genCode) {
  let dict = { A: 0, C: 0, G: 0, T: 0 };
  let genCodeUppCase = genCode.toUpperCase();
  for (n of genCodeUppCase) {
    dict[n] += 1;
  }
  return dict;
}
// Retourner sous forme de tableau d'association occurence/fréquence, [ [a,1],[b,2],[c,3] ]
const orderedCount = function (text) {
  let myMap = new Map();
  for (l of text) {
    if (myMap.has(l)) {
      //myMap.set(l, (myMap.get(l) || 0), +1)
      myMap.set(l, myMap.get(l) + 1); //
    } else {
      //
      myMap.set(l, 1); //
    }
  }
  return Array.from(myMap.entries());
};
// function countCharsBarGraph(text, maxw) {
//   text = text.toUpperCase();
//   let dict = {};
//   for (occ of text) {
//     dict[occ] = dict[occ] !== undefined ? dict[occ] + 1 : 1;
//   }
//   console.log(dict);
//   let dictSorted = Object.keys(dict).sort((a, b) => {
//     return dict[b] !== dict[a] ? dict[b] - dict[a] : a.localeCompare(b);
//   });

//   const ratio = Math.floor(maxw / text.length);

//   dictSorted.forEach((item,i) => {
//     item = "#".repeat(ratio) + "\n";
//   });
//   return dictSorted;
// }

// Vérifier que chaque occurence apparaît le même nombre de fois que les autres occurences de la même string
function validateWord(s) {
  s = s.toLowerCase();
  let dict = {};
  for (c of s) {
    dict[c] = dict[c] !== undefined ? dict[c] + 1 : 1;
  }
  const res = new Set(Object.values(dict));
  return res.size === 1;
}
// Nombre de fois qu'un caractère est répéter au moins une fois
function duplicateCount(text) {
  text = text.toLowerCase();
  let dict = {};
  for (l of text) {
    dict[l] = dict[l] !== undefined ? dict[l] + 1 : 1;
  }
  let values = Object.values(dict);
  return values.reduce((a, b) => (b > 1 ? a + 1 : a), 0);
}
// Dans une entrée items, donner le nombre maximal de fois que le caractère key, se répète de manière consécutive
function getConsectiveItems1(items, key) {
  let stack = "";
  items = String(items);
  key = String(key);
  for (l of items) {
    l === key ? (stack += l) : (stack += "s__");
  }
  let arr = stack.split("s__");
  return arr.reduce((a, b) => (b.length > a.length ? b : a)).length;
}
function getConsectiveItems2(items, key) {
  items = String(items);
  key = String(key);
  let compteur = 0;
  let max = 0;
  for (let symbole of items) {
    if (symbole === key) {
      compteur++;
      if (compteur > max) {
        max = compteur;
      }
    } else {
      compteur = 0;
    }
  }
  return max;
}
// Retourner la liste des ingrédients, hormis "chopsticks", en comptant le nombre de fois qu'ils apparaissent dans toute la liste donnée (string). La rendre du plus grande nombre au plus petit et si égalité de nombre, ordonner par ordre alphabétique inverse[Z => A]
function countVegetables(string) {
  let list = {};
  string = string.split(" ");
  for (let v of string) {
    if (v !== "chopsticks") {
      list[v] = list[v] !== undefined ? list[v] + 1 : 1; // list[v] = (list[v] || 0) + 1
    }
  }
  const listing = Object.keys(list).sort((a, b) => {
    if (list[b] === list[a]) {
      return b.localeCompare(a); //par ordre alphabétique inverse [Z => A]
    }
    return list[b] - list[a];
  });
  return listing.map((v) => [list[v], v]);
  // return Array.from(listing, (v) => [list[v], v]); identique
}

// Retourner une string qui contient le nombre de fois qu'une lettre apparaît dans cette string au total,suivi de la lettre en question. Attention, n'afficher le chiffre que s'il apparaît plus d'une fois.
// 'elevation', 'e2lvation'
// 'transplantology', 't2ra2n2spl2o2gy'
// 'economics', 'ec2o2nmis'
const transform = (s) => {
  const myMap = new Map();
  for (let l of s) {
    myMap.set(l, (myMap.get(l) || 0) + 1);
  }
  let result = "";
  for (let [key, value] of myMap) {
    result += value === 1 ? key : key + value;
  }
  return result;
};
//Retourner simplement le nombre de fois du nombre le plus fréquent d'un tableau d'entiers
function mostFrequentItemCount(collection) {
  let dict = {};
  for (n of collection) {
    // dict[n] = dict[n]!==undefined ? dict[n]+1 : 1
    dict[n] = (dict[n] || 0) + 1;
  }
  const values = Object.values(dict);
  return Math.max(...values);
}
// Retourner le nombre de fois qu'un pays a remporté la coupe du monde en cherchant dans un tableau d'objets
function countWins(winnerList, country) {
  let count = 0;
  for (let season of winnerList) {
    season.country === country ? (count += 1) : count;
  }
  return count;
}
function countWins2(winnerList, country) {
  winnerList.filter((element) => element.country === country).length;
}
// Convertir r,g,b en hexadecimal. Borner à 0 et 255 car r,g,b peuvent avoir n'importe qu'elle valeur entière
function rgb(r, g, b) {
  r > 255 ? (r = 255) : r;
  g > 255 ? (g = 255) : g;
  b > 255 ? (b = 255) : b;

  if (!(r > 255 || r < 0 || r === 0)) {
    r = r.toString(16).toUpperCase();
  }
  if (r < 0 || r === 0) {
    r = "00";
  }

  if (!(g > 255 || g < 0 || g === 0)) {
    g = g.toString(16).toUpperCase();
  }
  if (g < 0 || g === 0) {
    g = "00";
  }

  if (!(b > 255 || b < 0 || b === 0)) {
    b = b.toString(16).toUpperCase();
  }
  if (b < 0 || b === 0) {
    b = "00";
  }

  return r + g + b;
}
//ou encore en double fonctions
function rgb2(r, g, b) {
  let res = "";
  for (let argument of [r, g, b]) {
    res += convertirEnHexa(argument);
  }
  return res;
}

function convertirEnHexa(valeur) {
  if (valeur < 0) {
    valeur = 0;
  }
  if (valeur > 255) {
    valeur = 255;
  }
  return valeur.toString(16).toUpperCase().padStart(2, "0");
}
// Convertir au format HH:MM:SS un nombre de secondes
function timeHumanReadable(seconds) {
  let countHours = 0;
  let countMinutes = 0;
  let countSeconds = seconds;

  while (countSeconds > 59) {
    countMinutes += 1;
    countSeconds -= 60;
  }
  while (countMinutes > 59) {
    countHours += 1;
    countMinutes -= 60;
  }
  countHours = String(countHours).padStart(2, "0");
  countMinutes = String(countMinutes).padStart(2, "0");
  countSeconds = String(countSeconds).padStart(2, "0");

  return countHours + ":" + countMinutes + ":" + countSeconds;
}
function timeHumanReadable(seconds) {
  const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const remainingSeconds = String(seconds % 60).padStart(2, "0");

  return `${hours}:${minutes}:${remainingSeconds}`;
}
// La vague mexicaine
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
function wave(str) {
  str = str.split("");
  let wave = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      let ola = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
      ola = [
        ...str.slice(0, i),
        str[i].toUpperCase(),
        ...str.slice(i + 1),
      ].join("");
      wave.push(ola);
    }
  }
  return wave;
}
function wave2(str) {
  let res = [];
  for (let position = 0; position < str.length; position++) {
    let lettre = str[position];
    if (lettre === " ") continue;
    let nouveauMot =
      str.slice(0, position) + lettre.toUpperCase() + str.slice(position + 1);
    res.push(nouveauMot);
  }
  return res;
}
// Retourner "(" si le caractère dans la string est unique et ")" au contraire
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
function duplicateEncode(word) {
  word = word.toLowerCase();
  let dict = {};
  let result = "";
  for (w of word) {
    dict[w] = (dict[w] || 0) + 1;
  }
  for (w of word) {
    dict[w] > 1 ? (result += ")") : (result += "(");
  }

  return result;
}
function duplicateEncode2(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}

// Polynomes
function digPow(n, p) {
  n = String(n);
  let polynome = 0;
  for (let i = 0; i < n.length; i++) {
    polynome += Math.pow(Number(n[i]), p + i);
  }
  return polynome % Number(n) === 0 ? polynome / Number(n) : -1;
}
function digPow2(n, p) {
  let result = String(n)
    .split("")
    .reduce((s, d, i) => s + Math.pow(d, p + i), 0);
  return result % n ? -1 : result / n;
}
// Retourner un tableau de paires et compléter avec un _ si besoin
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']
function solution(str) {
  let stack = [];
  for (let i = 0; i < str.length; i += 2) {
    stack.push(str.slice(i, i + 2).padEnd(2, "_"));
  }
  return stack;
}
// Renvoyer le nombre qui apparaît un nombre impair de fois dans un tableau donné
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
function findOdd(A) {
  let dict = {};
  for (n of A) {
    dict[n] = (dict[n] || 0) + 1;
  }
  for ([key, value] of Object.entries(dict)) {
    if (value % 2 !== 0) {
      return Number(key);
    }
  }
}
function findOdd2(A) {
  let dict = {};
  for (n of A) {
    dict[n] = (dict[n] || 0) + 1;
  }
  const oddStr = Number(Object.entries(dict).filter((a) => a[b] % 2 !== 0));
  const oddNum = Number(oddStr);
  return oddNum;
}
// Comparer deux strings entre elles. Renvoyer true si l'une est l'inverse de l'autre pour la casse de chaque caractère
// "ab","AB"     -> true
// "aB","Ab"     -> true
// "aBcd","AbCD" -> true
// "AB","Ab"     -> false
// "",""         -> false
function isOpposite(s1, s2) {
  if ((s1 === "") & (s2 === "")) {
    return false;
  }
  let s1Inverted = "";
  for (l of s1) {
    s1Inverted += l.toUpperCase() === l ? l.toLowerCase() : l.toUpperCase();
  }
  return s1Inverted === s2;
}
function temperature(t) {
  let arr = [];
  arr.push(t);
  if (arr.length > 0) {
    return arr.reduce((a, b) => {
      return Math.abs(b) < Math.abs(a) || (Math.abs(a) === Math.abs(b) && b > a)
        ? b
        : a;
    });
  } else {
    return 0;
  }
}
// Convertir une lettre en binaire et coder ce binaire qu'avec des 0
// https://www.codingame.com/ide/puzzle/unary
let strBinary = "";
let messageEncode = "";
let previousBit = "";
for (let letter of MESSAGE) {
  strBinary += letter.codePointAt().toString(2).padStart(7, "0");
}

for (let currentBit of strBinary) {
  // currentBit = "10000111000011"
  if (previousBit === currentBit) {
    messageEncode += "0";
  } else {
    if (messageEncode !== "") {
      messageEncode += " ";
    }
    if (currentBit === "1") {
      //messageEncode = "0 0 00 0000 0 000 00 0000 0 00"
      messageEncode += "0 0";
    } else {
      messageEncode += "00 0";
    }
  }
  previousBit = currentBit;
}

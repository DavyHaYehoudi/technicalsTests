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


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
// S = n(n+1)/2   pour (a,b) dans N+
// S = (a + b) * (abs(b - a) + 1) / 2  pour (a,b) dans N
function getSum(a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  let nombres = Array.from({length: max - min + 1}, (_, i) => min + i);
  return nombres.reduce((a, b) => a + b, 0);
}
console.log(getSum(11,-6));

const GetSum2 = (a, b) => {
 return (a+b)*(Math.abs(b-a)+1)/2
}
console.log(GetSum2(11,11));
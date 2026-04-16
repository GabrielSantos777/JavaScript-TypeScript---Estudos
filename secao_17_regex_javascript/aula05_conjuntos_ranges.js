const { alfabeto } = require('./base')
console.log(alfabeto)


// [abc] - conjunto, casa qualquer caractere dentro do conjunto
// [^abc] - negação do conjunto, casa qualquer caractere que não esteja dentro do conjunto
console.log(alfabeto.match(/[abc]/g)) // casa a, b ou c
console.log(alfabeto.match(/[^abc]/g)) // casa tudo que não for a, b ou c


// [a-z] - range, casa qualquer caractere entre a e z
// [A-Z] - casa qualquer caractere entre A e Z
console.log(alfabeto.match(/[a-z]/g)) // casa qualquer caractere entre a e z
console.log(alfabeto.match(/[A-Z]/g)) // casa qualquer caractere entre A e Z
// TUPLAS
// As tuplas são um tipo de dado que permite armazenar uma coleção de valores de tipos diferentes.

const tuplaA: [string, number, boolean] = ['Texto', 42, true];
// Acessando os elementos da tupla
const elemento1 = tuplaA[0]; // 'Texto'
const elemento2 = tuplaA[1]; // 42
const elemento3 = tuplaA[2]; // true
tuplaA.push('outro valor');
console.log(tuplaA);

tuplaA[0] = 'Gabriel';

// Tupla imutavel
const tuplaB: readonly [string, number, boolean] = ['Texto', 42, true];
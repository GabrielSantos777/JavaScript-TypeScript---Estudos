const texto = require('./base').texto;
const regex1 = /João/gi;

console.log(texto);
// match() - retorna um array com as ocorrências encontradas
console.log(texto.match(regex1));
// replace() - retorna uma nova string com as ocorrências substituídas
console.log(texto.replace(/João/gi, 'Maria'));
// g - global(encontrar todas as ocorrências)
// i - ignore case(ignorar maiúsculas e minúsculas)
// () - grupo de captura
// | - ou

const texto = require('./base').texto;

const regex1 = /João/gi;

console.log(texto.match(regex1));
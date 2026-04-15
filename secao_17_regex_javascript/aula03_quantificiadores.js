const { texto, arquivos } = require('./base');
console.log(texto);

// Quantificadores
// * - zero ou mais (opcional)
// + - uma ou mais vezes (obrigatório)
// ? - zero ou uma vez (opcional)
// {n} - exatamente n vezes 
// {n,} - pelo menos n vezes
// {n,m} - entre n e m vezes
// \ -> escape (escapa um caractere especial, transformando-o em um literal)

// Se colocarmos o quantificador depois de um caractere, ele irá indicar quantas vezes aquele caractere pode aparecer. 
// Por exemplo, se colocarmos o quantificador + depois da letra 'o', isso significa que a letra 'o' pode aparecer uma ou mais vezes.

const regex1 = /João+/gi; // o 'o' pode aparecer uma ou mais vezes
console.log(texto.match(regex1));


const regex2 = /\.jpe?g/;

for (const arquivo of arquivos) {
    console.log(arquivo, arquivo.match(regex2));
}

// TIPOS LITERAIS
// São tipos que possuem um valor específico, ou seja, são literais, como por exemplo:

let x = 10;
// O tipo de x é number, mas se quisermos que o tipo de x seja exatamente 10, podemos usar um tipo literal:
let y: 10 = 10;
// Agora y só pode ser 10, se tentarmos atribuir outro valor, teremos um erro:
// y = 20; // Error: Type '20' is not assignable to type '10'.

let a = 100 as const;
// O tipo de a é 100, e não number, pois foi usado o as const, que transforma o tipo em literal.

// Podemos usar tipos literais em funções, para limitar os valores que podem ser passados como argumentos:
function compare(a: number, b: number) {
    if (a === b) return 0;
    else if (a > b) return 1;
    else return -1;
}
compare(10, 20);
// Podemos usar tipos literais para limitar os valores que podem ser retornados por uma função:
function compareWithLiteral(a: number, b: number): -1 | 0 | 1 {
    if (a === b) return 0;
    else if (a > b) return 1;
    else return -1;
}
compareWithLiteral(10, 20); 
// Agora a função compareWithLiteral só pode retornar -1, 0 ou 1, e não outros valores.
type Direction = 'left' | 'right' | 'up' | 'down';
function move(direction: Direction) {
    console.log(`Moving ${direction}`);
}
move('left'); // OK
// move('forward'); // Error: Argument of type '"forward"' is not assignable to parameter of type 'Direction'.
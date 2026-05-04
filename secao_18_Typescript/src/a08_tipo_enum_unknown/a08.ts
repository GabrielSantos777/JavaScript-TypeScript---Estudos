// TIPO ENUM

enum Cores {
    Vermelho,
    Verde,
    Azul,
    Amarelo = 100,
}

enum Cores {
    Marrom = 50,
    Violeta,
    Preto,
}

console.log(Cores)
console.log(Cores.Vermelho); // 0
console.log(Cores[100]);
console.log(Cores[0]);


// UNKNOWN
// O tipo unknown é o tipo superior de todos os tipos em TypeScript. 
// Isso significa que qualquer valor pode ser atribuído a um tipo desconhecido.

let valor: unknown;
valor = 42; // OK
valor = "Olá"; // OK
valor = true; // OK
valor = 30;

const y = 900;
console.log(valor + y)
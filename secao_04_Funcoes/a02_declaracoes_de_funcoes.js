// Declaração de função (function hoisting)

saudacao(); // A função pode ser chamada antes de sua declaração

function saudacao() {
    console.log("Olá, seja bem-vindo!");
}

saudacao(); // A função pode ser chamada novamente após sua declaração

// No javascript as funções são First-class objects, ou seja, podem ser tratadas como qualquer outra variável. Elas podem ser atribuídas a variáveis, passadas como argumentos para outras funções e retornadas por outras funções.

const saudacao2 = function() {
    console.log("Olá, seja bem-vindo! Esta é uma função anônima atribuída a uma variável.");
};

saudacao2(); // A função pode ser chamada normalmente

function executaFuncao(funcao) {
    console.log("Executando a função passada como argumento:");
    funcao(); // Executa a função passada como argumento
}
executaFuncao(saudacao); // Passa a função saudacao como argumento

// Arrow function (função de seta)

const saudacao3 = () => {
    console.log("Olá, seja bem-vindo! Esta é uma arrow function.");
};

saudacao3(); // A função pode ser chamada normalmente
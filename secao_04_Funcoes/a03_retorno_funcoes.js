// Return
function soma(a, b) {
    return a + b; // o return é usado para retornar um valor da função, ou seja, ele encerra a execução da função e retorna o valor especificado.
}
// console.log é usado para imprimir algo no console, mas ele não retorna um valor, ou seja, ele retorna undefined.
// -------------------------------------------
function pessoa(nome, sobrenome){
    return {
        nome: nome,
        sobrenome: sobrenome
    }
}
const p1 = pessoa('João', 'Silva');
console.log(p1); // { nome: 'João', sobrenome: 'Silva' }
// -------------------------------------------
function falarFrase(comeco){
    function falarResto(resto){
        return comeco + ' ' + resto;
    } 
    return falarResto;
}
const falar = falarFrase('Olá');
console.log(falar('Mundo')); // Olá Mundo
// -------------------------------------------
function criarMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    }
}
const multiplicarPor2 = criarMultiplicador(2);
const multiplicarPor3 = criarMultiplicador(3);
console.log(multiplicarPor2(5)); // 10
console.log(multiplicarPor3(5)); // 15
// Função closure é uma função que tem acesso às variáveis do seu escopo léxico, mesmo depois de a função externa ter sido executada. No exemplo acima, a função retornada por criarMultiplicador tem acesso à variável multiplicador, mesmo depois de criarMultiplicador ter sido executada.
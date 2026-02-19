// IIFE -> Immediately Invoked Function Expression
// Função Imediatamente Invocada

(function() {
    console.log('Será executado na hora!');
    console.log('Fugindo do escopo mais abrangente!');
})(); // Os parênteses no final são para invocar a função imediatamente

// Outra forma de escrever uma IIFE é usando o operador de negação (!), que também força a função a ser tratada como uma expressão:

!function() {
    console.log('Outra forma de escrever uma IIFE!');
}();
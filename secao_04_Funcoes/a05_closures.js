// Closures

function retornaFuncao() {
    const nome = 'Luiz';
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao();
console.log(funcao()); // Luiz
// A função retornada por retornaFuncao tem acesso à variável nome, mesmo depois de retornaFuncao ter sido executada. Isso é um exemplo de closure, onde a função retornada tem acesso às variáveis do seu escopo léxico, mesmo depois de a função externa ter sido executada.
// Closure é uma função que tem acesso às variáveis do seu escopo léxico, mesmo depois de a função externa ter sido executada. Isso é possível porque a função retornada mantém uma referência ao escopo léxico da função externa, permitindo que ela acesse as variáveis e funções definidas nesse escopo.
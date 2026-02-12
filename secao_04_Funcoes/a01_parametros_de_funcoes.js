// Parametros de funções

function funcao (){
    // console.log('Oie')
    console.log(arguments[0]); // arguments é um array-like, ou seja, tem a propriedade length e pode ser acessado por índices, mas não tem os métodos de array como forEach, map, etc.
}

funcao('Valor', 'Outro valor', 'Mais um valor'); // Oie
// Oie
// Valor
// Outro valor
// Mais um valor

// arguments é um objeto local disponível dentro de todas as funções, que contém os argumentos passados para a função. Ele é um array-like, ou seja, tem a propriedade length e pode ser acessado por índices, mas não tem os métodos de array como forEach, map, etc.
function funcaoSomar(){
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }
    console.log(total);
}
funcaoSomar(1, 2, 3); // 6
// ------------------------------------------
function funcao2(a, b){
    b = b || 0; // se b for undefined, ele vai receber o valor 0
    console.log(a + b);
}
funcao2(2); // 2
// ------------------------------------------
function funcao3(a, b = 2, c = 4){ // se b for undefined, ele vai receber o valor 0
    console.log(a + b + c);
}
funcao3(2, 10, 4); // 16
// ------------------------------------------
function pessoa(nome, sobrenome, idade){
    console.log(nome, sobrenome, idade);
}
pessoa('João', 'Silva', 30); // João Silva 30
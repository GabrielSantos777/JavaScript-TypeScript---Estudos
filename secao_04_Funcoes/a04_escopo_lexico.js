// Escopo lexico
// O escopo léxico é o escopo definido pela posição do código onde as variáveis e funções são declaradas. Isso significa que uma função tem acesso às variáveis e funções que estão no mesmo escopo ou em escopos superiores, mas não tem acesso às variáveis e funções que estão em escopos inferiores.
const nome = 'João'; // variável global
function falarNome() {

    console.log(nome); // a função falarNome tem acesso à variável nome, pois ela está no mesmo escopo ou em um escopo superior.
}
// --------------------------------------------
function usaFalaNome() {
    // Agora se eu adicionar uma variável local com o mesmo nome da variável global, a função falarNome vai acessar a variável local, pois ela tem prioridade sobre a variável global.
    const nome = 'Maria'; // variável local
    falarNome(); // a função usaFalaNome tem acesso à função falarNome, pois ela está no mesmo escopo ou em um escopo superior.
}

usaFalaNome(); // João
// Como eu adicionei uma variável local com o mesmo nome da variável global, a função falarNome acessa a variável global, pois ela tem prioridade sobre a variável local. Isso é um exemplo de escopo léxico, onde a função falaNome tem acesso às variáveis do seu escopo léxico, mesmo depois de a função usaFalaNome ter sido executada.
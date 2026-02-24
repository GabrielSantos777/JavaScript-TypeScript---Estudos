// Funções Contrutoras
// São funções que são usadas para criar objetos, usando a palavra-chave new

// A diferença entre uma função construtora e uma função fábrica é que a função construtora é usada para criar objetos usando a palavra-chave new, enquanto a função fábrica é usada para criar objetos sem usar a palavra-chave new, ou seja, retornando um objeto literal.
// Construtora -> new Pessoa('Luiz', 'Otávio', 1.8, 80);
// Fábrica -> criaPessoa('Luiz', 'Otávio', 1.8, 80);

function Pessoa(nome, sobrenome) {
    const id = 3902390; // variável privada, não pode ser acessada fora da função construtora, pois não é uma propriedade do objeto criado, e sim uma variável do escopo da função construtora, ou seja, uma variável local da função construtora, que só pode ser acessada dentro da função construtora, e não fora dela.

    this.nome = nome;
    this.sobrenome = sobrenome;
}

// É necessario usar a palavra-chave new para criar um objeto usando a função construtora, caso contrário, o this dentro da função irá referenciar o objeto global (window no navegador), e não o objeto que está sendo criado, o que pode causar problemas de segurança e bugs no código. Além disso, sem o new, a função construtora não irá retornar um objeto, e sim undefined, o que pode causar erros ao tentar acessar as propriedades do objeto criado.
const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Gabriel', 'Santos');
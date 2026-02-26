// Objetos
// São estruturas de dados que permitem armazenar múltiplos valores em uma única variável.
// Eles são compostos por pares de chave-valor, onde a chave é uma string e o valor pode ser de qualquer tipo de dado.

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Santos',
};

console.log(pessoa.nome); // Acessando o valor da chave 'nome'
console.log(pessoa['sobrenome']); // Acessando o valor da chave 'sobrenome' usando a notação de colchetes
console.log(pessoa.sobrenome); // Acessando o valor da chave 'sobrenome'

// -----------------

const carro = new Object(); // Criando um objeto usando a função construtora Object
carro.marca = 'Fiat'; // Adicionando a chave 'marca' ao objeto carro
carro.modelo = 'Uno'; // Adicionando a chave 'modelo' ao objeto carro
carro.ano = 2020; // Adicionando a chave 'ano' ao objeto carro

// metodos são funções que estão associadas a um objeto e podem ser usadas para realizar ações ou manipular os dados do objeto.

carro.ligar = function() { // Adicionando um método 'ligar' ao objeto carro
    console.log(`O carro ${this.marca} ${this.modelo} está ligado!`); // Usando 'this' para acessar as propriedades do objeto dentro do método
};

carro.tempoUso = function() {
    const dataAtual = new Date(); // Criando um objeto Date para obter a data atual
    const anoAtual = dataAtual.getFullYear(); // Obtendo o ano atual
    const tempoUso = anoAtual - this.ano; // Calculando o tempo de uso do carro
    console.log(`O carro ${this.marca} ${this.modelo} tem ${tempoUso} anos de uso.`); // Exibindo o tempo de uso do carro
}


// Molde para criar objetos com as mesmas propriedades e métodos]
// factory function e constructor function

function criarPessoa(nome, sobrenome) { // Factory function para criar objetos do tipo pessoa
    return {
        nome,
        sobrenome,
        nomeCompleto() { // Método para retornar o nome completo da pessoa
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const pessoa1 = criarPessoa('Maria', 'Silva');

function Pessoa(nome, sobrenome) { // Constructor function para criar objetos do tipo Pessoa
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // Congelando o objeto para impedir alterações nas propriedades
    this.nomeCompleto = function() { // Método para retornar o nome completo da pessoa
        return `${this.nome} ${this.sobrenome}`;
    };
}

const pessoa2 = new Pessoa('João', 'Souza'); // Criando um objeto do tipo Pessoa usando a constructor function
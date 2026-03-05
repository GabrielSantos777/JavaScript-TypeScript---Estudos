// Prototypes
// Javascript é uma linguagem baseada em protótipos, o que significa que os objetos podem herdar propriedades e métodos de outros objetos. O protótipo é um objeto do qual outros objetos herdam propriedades e métodos.

// Definindo um objeto protótipo. Protótipos são objetos que servem como modelos para outros objetos. Eles permitem que os objetos herdem propriedades e métodos, promovendo a reutilização de código.
// Todos os objetos em JavaScript têm um protótipo, que é outro objeto do qual eles herdam propriedades e métodos. O protótipo é acessível através da propriedade __proto__ ou do método Object.getPrototypeOf().

// Criando um protótipo

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = function() {
        return this.nome + ' ' + this.sobrenome;
    }
}

const p1 = new Pessoa('João', 'Silva');
console.log(p1.nomeCompleto()); // Output: João Silva

Pessoa.prototype.idade = 30; // Adicionando uma propriedade ao protótipo
Pessoa.prototype.saudacao = function(){
    return 'Olá, meu nome é ' + this.nomeCompleto();
}
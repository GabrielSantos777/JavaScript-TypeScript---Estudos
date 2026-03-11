// HERANÇAS

// Herança é um conceito fundamental na programação orientada a objetos, onde uma classe (chamada de classe filha ou subclasse) pode herdar propriedades e métodos de outra classe (chamada de classe pai ou superclasse). Isso permite que a classe filha reutilize o código da classe pai, promovendo a reutilização e a organização do código.

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}
Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco) // Chama o construtor da função Produto para inicializar as propriedades nome e preco
    this.cor = cor
}
Camiseta.prototype = Object.create(Produto.prototype) // Define o protótipo de Camiseta como um novo objeto criado a partir do protótipo de Produto
Camiseta.prototype.constructor = Camiseta // Corrige a referência ao construtor de Camiseta

const camiseta = new Camiseta('Camiseta', 50, 'Preta')
console.log(camiseta) // Exibe o objeto camiseta com as propriedades nome, preco e cor

// ----------------------------------

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco) // Chama o construtor da função Produto para inicializar as propriedades nome e preco
    this.material = material

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // A propriedade 'estoque' será enumerável
        configurable: false, // A propriedade 'estoque' não pode ser configurada (não pode ser deletada ou modificada)
        get: function() {
            return estoque // Retorna o valor do estoque
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('O estoque deve ser um número') // Lança um erro se o valor do estoque não for um número
            }
            estoque = valor // Define o valor do estoque
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype) // Define o protótipo de Caneca como um novo objeto criado a partir do protótipo de Produto
Caneca.prototype.constructor = Caneca // Corrige a referência ao construtor de Caneca

console.log(Caneca.prototype) // Exibe o protótipo de Caneca, que herda os métodos de Produto

const caneca = new Caneca('Caneca', 20, 'Porcelana', 10)
console.log(caneca) // Exibe o objeto caneca com as propriedades nome, preco, material e estoque
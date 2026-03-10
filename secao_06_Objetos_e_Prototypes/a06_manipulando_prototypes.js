// Manipulando prototypes

const objA = {
    nome: 'ObjetoA',
    // __proto__: Object.prototype
}

const objB = {
    nome: 'ObjetoB',
    // __proto__: objA
}

Object.setPrototypeOf(objB, objA) // Define o protótipo de objB como objA

console.log(objB.nome) // Acessa a propriedade 'nome' de objB, que é 'ObjetoB'
console.log(objB.__proto__.nome) // Acessa a propriedade 'nome' do protótipo de objB, que é 'ObjetoA'

// ----------------------------------

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

const p1 = new Produto('Caneta', 50);

const p2 = {
    nome: 'Notebook',
    preco: 2000
}

Object.setPrototypeOf(p2, Produto.prototype) // Define o protótipo de p2 como Produto.prototype

p2.desconto(10) // Aplica um desconto de 10% em p2
p1.aumento(5) // Aplica um aumento de 5% em p1
console.log(p1) // Exibe o objeto p1 com o preço atualizado
console.log(p2) // Exibe o objeto p2 com o preço atualizado

const p3 = Object.create(Produto.prototype) // Cria um novo objeto p3 com Produto.prototype como protótipo
p3.nome = 'Caderno'
p3.preco = 100
p3.desconto(20) // Aplica um desconto de 20% em p3
console.log(p3) // Exibe o objeto p3 com o preço atualizado
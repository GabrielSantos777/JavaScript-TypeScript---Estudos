// DefineProperty e DefineProperties
// Object.defineProperty() é um método que permite definir uma nova propriedade em um objeto ou modificar uma propriedade existente, especificando suas características, como valor, enumerabilidade, configurabilidade e gravabilidade.

function Produto(nome, preco) {
    this.preco = preco;

    Object.defineProperty(this, 'nome', {
        enumerable: true, // A propriedade 'nome' será enumerável, ou seja, aparecerá em loops e métodos que listam as propriedades do objeto
        value: nome, // O valor da propriedade 'nome' será o valor passado como argumento para a função Produto
        writable: false, // A propriedade 'nome' não poderá ser modificada após ser definida
        configurable: false // A propriedade 'nome' não poderá ser reconfigurada ou deletada
    });
}

const p1 = new Produto('Camiseta', 29.90);
console.log(p1);

// Object.defineProperties() é um método que permite definir ou modificar várias propriedades em um objeto de uma só vez, especificando suas características para cada propriedade.

function Carro(marca, modelo, ano) {
    Object.defineProperties(this, {
        marca: {
            enumerable: true,
            value: marca,
            writable: false,
            configurable: false
        },
        modelo: {
            enumerable: true,
            value: modelo,
            writable: false,
            configurable: false
        },
        ano: {
            enumerable: true,
            value: ano,
            writable: false,
            configurable: false
        }
    });
}
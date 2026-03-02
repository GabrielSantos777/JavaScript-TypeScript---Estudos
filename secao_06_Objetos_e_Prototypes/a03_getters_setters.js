// Getters e Setters
// Getters e Setters são métodos especiais em objetos JavaScript que permitem acessar e modificar propriedades de forma controlada. Eles são definidos usando as palavras-chave 'get' e 'set' respectivamente.


function Produto(nome, preco) {
    this.preco = preco;

    Object.defineProperty(this, 'nome', {
        enumerable: true, // A propriedade 'nome' será enumerável, ou seja, aparecerá em loops e métodos que listam as propriedades do objeto
        configurable: false, // A propriedade 'nome' não poderá ser reconfigurada ou deletada
        // getters são usados para acessar o valor de uma propriedade de forma controlada, permitindo que você execute código adicional ou retorne um valor calculado quando a propriedade for acessada
        // Definindo um getter para a propriedade 'nome'
        get: function() {
            return nome; // O getter retorna o valor da variável 'nome' que foi passada como argumento para a função Produto
        },
        set: function(valor) {
            nome = valor; // O setter permite modificar o valor da variável 'nome' quando a propriedade 'nome' for atribuída a um novo valor
        }
    });
}

const p1 = new Produto('Camiseta', 29.90);
console.log(p1);
console.log(p1.nome); // Acessando a propriedade 'nome' usando o getter, que retorna o valor 'Camiseta'
p1.nome = 'Calça'; // Modificando a propriedade 'nome' usando o setter, que atualiza o valor para 'Calça'
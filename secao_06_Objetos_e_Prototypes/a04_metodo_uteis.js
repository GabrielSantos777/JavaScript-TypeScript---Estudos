// Metodos Uteis
// Object.keys() - Retorna um array com as chaves do objeto
// Object.values() - Retorna um array com os valores do objeto
// Object.entries() - Retorna um array com os pares chave-valor do objeto
const produto = {
    nome: 'Caneca',
    preco: 15.90,
    material: 'Cerâmica'
};

const outroProduto = { ...produto, material: 'Madeira' }; // Criando um novo objeto 'outroProduto' que é uma cópia do objeto 'produto', mas com a propriedade 'material' alterada para 'Madeira'
const caneca = Object.assign({}, produto, { material: 'Plástico' }); // Criando um novo objeto 'caneca' usando Object.assign() para copiar as propriedades do objeto 'produto' e sobrescrever a propriedade 'material' para 'Plástico'

console.log(produto); // Retorna um array com as chaves do objeto 'produto': ['nome', 'preco', 'material']
console.log(outroProduto); // Exibe o objeto 'outroProduto', que é uma cópia de 'produto' com a propriedade 'material' alterada para 'Madeira'
console.log(caneca); // Exibe o objeto 'caneca', que é uma cópia de 'produto' com a propriedade 'material' alterada para 'Plástico'
// ---------------------------
console.log(Object.keys(produto)); // Retorna um array com as chaves do objeto 'produto': ['nome', 'preco', 'material']
console.log(Object.values(produto));
// -----------------------
// Object.freeze() - Congela um objeto, impedindo que suas propriedades sejam modificadas, adicionadas ou removidas
Object.freeze(produto); // Congela o objeto 'produto', impedindo que suas propriedades sejam modificadas, adicionadas ou removidas
produto.preco = 10.90; // Tenta modificar a propriedade 'preco' do objeto 'produto', mas como o objeto está congelado, essa modificação não terá efeito
console.log(produto); // Exibe o objeto 'produto', que permanece inalterado devido ao congelamento
// -----------------------
// Object.assign() - Copia as propriedades de um ou mais objetos para um objeto de destino e retorna o objeto de destino
Object.assign(outroProduto, { preco: 19.90 }); // Modifica a propriedade 'preco' do objeto 'outroProduto' para 19.90 usando Object.assign()
console.log(outroProduto); // Exibe o objeto 'outroProduto' com a propriedade 'preco' atualizada para 19.90
// -----------------------
// Object.getOwnPropertyDescriptor() - Retorna um objeto que descreve as características de uma propriedade específica de um objeto
const descricao = Object.getOwnPropertyDescriptor(produto, 'nome'); // Obtém a descrição da propriedade 'nome' do objeto 'produto' usando Object.getOwnPropertyDescriptor()
console.log(descricao); // Exibe a descrição da propriedade 'nome', que inclui informações como 'value', 'writable', 'enumerable' e 'configurable'
// -----------------------
// Object.value() - Retorna um array com os valores das propriedades de um objeto
console.log(Object.values(produto)); // Retorna um array com os valores das propriedades do objeto 'produto': ['Caneca', 15.90, 'Cerâmica']
// -----------------------
// Object.entries() - Retorna um array com os pares chave-valor de um objeto
console.log(Object.entries(produto)); // Retorna um array com os pares chave-valor do objeto 'produto': [['nome', 'Caneca'], ['preco', 15.90], ['material', 'Cerâmica']]